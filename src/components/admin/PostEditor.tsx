"use client";

/* eslint-disable @next/next/no-img-element -- previews of uploaded files */
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { makeSlug } from "@/lib/blog/slug";
import type { BlogSetup } from "@/lib/blog/setup";
import type { Post, PostStatus } from "@/lib/blog/types";
import AdminNotice from "./AdminNotice";
import { uploadImage } from "./upload";

// Tiptap needs the DOM, so the editor loads in the browser only.
const RichTextEditor = dynamic(() => import("./RichTextEditor"), {
  ssr: false,
  loading: () => <div className="rte rte-loading">Loading editor…</div>,
});

type Fields = {
  title: string;
  heading: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string;
  author: string;
  coverImage: string;
  seoTitle: string;
  seoDescription: string;
  status: PostStatus;
  showDate: boolean;
};

const fieldsOf = (post: Post | null): Fields => ({
  title: post?.title || "",
  heading: post?.heading || "",
  slug: post?.slug || "",
  excerpt: post?.excerpt || "",
  category: post?.category || "",
  tags: (post?.tags || []).join(", "),
  author: post?.author || "Admin",
  coverImage: post?.cover_image || "",
  seoTitle: post?.seo_title || "",
  seoDescription: post?.seo_description || "",
  status: post?.status || "draft",
  showDate: post?.show_date !== false,
});

/** A local draft as written by the autosave, read back defensively. */
const fieldsOfDraft = (saved: Record<string, unknown>): Fields => {
  const s = (key: string, fallback = "") => (typeof saved[key] === "string" ? (saved[key] as string) : fallback);
  return {
    title: s("title"),
    heading: s("heading"),
    slug: s("slug"),
    excerpt: s("excerpt"),
    category: s("category"),
    tags: s("tags"),
    author: s("author", "Admin"),
    coverImage: s("coverImage"),
    seoTitle: s("seoTitle"),
    seoDescription: s("seoDescription"),
    status: saved.status === "published" ? "published" : "draft",
    showDate: saved.showDate !== false,
  };
};

/**
 * Create or edit an article (live components/admin/PostEditor.js): title,
 * slug, rich-text body, excerpt, status, cover, category, tags, author, SEO.
 * Changes are autosaved in this browser and offered back after a crash or a
 * closed tab; leaving with unsaved changes asks first.
 */
export default function PostEditor({ initialPost, setup }: { initialPost: Post | null; setup: BlogSetup }) {
  const router = useRouter();
  const isEdit = Boolean(initialPost?.id);

  const [fields, setFields] = useState<Fields>(() => fieldsOf(initialPost));
  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => setFields((f) => ({ ...f, [key]: value }));

  // The body lives in a ref so typing in the editor does not re-render the form.
  const contentRef = useRef(initialPost?.content_html || "");
  // Restoring a draft remounts the editor (key bump) so it reads the new body.
  const [editorKey, setEditorKey] = useState(0);
  const [editorInitial, setEditorInitial] = useState(initialPost?.content_html || "");

  // Until the slug is edited by hand, it follows the title.
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [autoSavedAt, setAutoSavedAt] = useState<Date | null>(null);

  /* ---- Unsaved-changes guard and local autosave ---- */
  const storageKey = `blogdraft:${initialPost?.id || "new"}`;
  const dirtyRef = useRef(false);
  const savedFieldsRef = useRef(JSON.stringify(fieldsOf(initialPost)));
  const draftCheckedRef = useRef(false);
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // The autosave timer and the editor callback read the latest fields from here.
  const fieldsRef = useRef(fields);
  // A local draft from an earlier visit, waiting for Restore or Discard.
  const [pendingDraft, setPendingDraft] = useState<{ fields: Fields; content: string; when: string } | null>(null);

  const scheduleAutosave = () => {
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({ ...fieldsRef.current, content_html: contentRef.current, _ts: Date.now() })
        );
        setAutoSavedAt(new Date());
      } catch {
        // Storage full or blocked: the guard still protects the page.
      }
    }, 800);
  };

  // A field that differs from the saved article marks the form dirty and
  // schedules an autosave. (Compared, not counted: React runs effects twice
  // in development.)
  useEffect(() => {
    fieldsRef.current = fields;
    if (JSON.stringify(fields) === savedFieldsRef.current) return;
    dirtyRef.current = true;
    scheduleAutosave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  // On open: look for a local draft that differs from the saved article. Once only.
  useEffect(() => {
    if (draftCheckedRef.current) return;
    draftCheckedRef.current = true;
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const saved = JSON.parse(raw) as Record<string, unknown>;
      const savedFields = fieldsOfDraft(saved);
      const savedContent = typeof saved.content_html === "string" ? saved.content_html : "";
      const same =
        JSON.stringify(savedFields) === savedFieldsRef.current && savedContent === (initialPost?.content_html || "");
      if (same) {
        localStorage.removeItem(storageKey);
        return;
      }
      const when = typeof saved._ts === "number" ? new Date(saved._ts).toLocaleString("en-GB") : "";
      // Browser storage can only be read after hydration, so this runs in an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPendingDraft({ fields: savedFields, content: savedContent, when });
    } catch {
      // A corrupt draft is ignored.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restoreDraft = () => {
    if (!pendingDraft) return;
    setFields(pendingDraft.fields);
    setSlugTouched(true);
    contentRef.current = pendingDraft.content;
    setEditorInitial(pendingDraft.content);
    setEditorKey((k) => k + 1);
    dirtyRef.current = true;
    setPendingDraft(null);
  };

  const discardDraft = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setPendingDraft(null);
  };

  // Ask before a reload or a closed tab throws away unsaved changes.
  useEffect(() => {
    const beforeUnload = (e: BeforeUnloadEvent) => {
      if (!dirtyRef.current) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
  }, []);

  const cancel = () => {
    if (dirtyRef.current && !window.confirm("You have unsaved changes. Leave this page?")) return;
    dirtyRef.current = false;
    router.push("/admin/");
  };

  const onTitleChange = (value: string) =>
    setFields((f) => ({ ...f, title: value, slug: slugTouched ? f.slug : makeSlug(value) }));

  const uploadCover = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploadingCover(true);
    setError("");
    try {
      set("coverImage", await uploadImage(file));
    } catch (err) {
      setError("Failed to upload cover: " + (err instanceof Error ? err.message : err));
    } finally {
      setUploadingCover(false);
    }
  };

  const save = async (status: PostStatus) => {
    if (!fields.title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    setError("");
    const payload = {
      title: fields.title.trim(),
      heading: fields.heading.trim(),
      slug: fields.slug.trim(),
      excerpt: fields.excerpt,
      category: fields.category,
      author: fields.author,
      cover_image: fields.coverImage,
      content_html: contentRef.current,
      tags: fields.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      seo_title: fields.seoTitle,
      seo_description: fields.seoDescription,
      show_date: fields.showDate,
      status,
    };
    try {
      const res = await fetch(isEdit ? `/api/admin/posts/${initialPost!.id}/` : "/api/admin/posts/", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to save");
      // Saved on the server: drop the local draft and the leave guard.
      dirtyRef.current = false;
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
      try {
        localStorage.removeItem(storageKey);
      } catch {}
      router.push("/admin/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
      setSaving(false);
    }
  };

  const blocked = saving || !setup.database;

  return (
    <div className="pe">
      <div className="pe-head">
        <h1>{isEdit ? "Edit Article" : "New Article"}</h1>
        <div className="pe-actions">
          {autoSavedAt && (
            <span className="pe-autosave" title="Auto-saved in this browser">
              ✓ Auto-saved {autoSavedAt.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
          <button type="button" className="pe-btn pe-btn-ghost" onClick={cancel} disabled={saving}>
            Cancel
          </button>
          <button type="button" className="pe-btn" onClick={() => save("draft")} disabled={blocked}>
            {saving ? "Saving…" : "Save Draft"}
          </button>
          <button type="button" className="pe-btn pe-btn-primary" onClick={() => save("published")} disabled={blocked}>
            {saving ? "Saving…" : "Publish"}
          </button>
        </div>
      </div>

      <AdminNotice setup={setup} />
      {pendingDraft && (
        <div className="pe-draft" role="status">
          <span>
            Unsaved changes{pendingDraft.when ? ` from ${pendingDraft.when}` : ""} were found in this browser.
          </span>
          <button type="button" className="pe-btn pe-btn-primary pe-btn-sm" onClick={restoreDraft}>
            Restore
          </button>
          <button type="button" className="pe-btn pe-btn-ghost pe-btn-sm" onClick={discardDraft}>
            Discard
          </button>
        </div>
      )}
      {error && (
        <div className="pe-error" role="alert">
          {error}
        </div>
      )}

      <div className="pe-grid">
        <div className="pe-main">
          <label className="pe-label" htmlFor="pe-title">
            Title
          </label>
          <input
            id="pe-title"
            className="pe-input pe-title"
            value={fields.title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Article title"
          />
          <p className="pe-hint">The banner at the top, the blog list, the menu and the sidebar.</p>

          <label className="pe-label" htmlFor="pe-heading">
            Article Heading
          </label>
          <input
            id="pe-heading"
            className="pe-input"
            value={fields.heading}
            onChange={(e) => set("heading", e.target.value)}
            placeholder={fields.title || "Default: article title"}
          />
          <p className="pe-hint">The heading under the date, above the content. Leave empty to repeat the title.</p>

          <label className="pe-label" htmlFor="pe-slug">
            Slug (URL)
          </label>
          <div className="pe-slug-row">
            <span className="pe-slug-prefix">/guide/</span>
            <input
              id="pe-slug"
              className="pe-input"
              value={fields.slug}
              onChange={(e) => {
                setSlugTouched(true);
                set("slug", e.target.value);
              }}
              placeholder="auto-slug-from-title"
            />
          </div>

          <span className="pe-label">Content</span>
          <RichTextEditor
            key={editorKey}
            initialContent={editorInitial}
            canUpload={setup.storage}
            onChange={(html) => {
              contentRef.current = html;
              dirtyRef.current = true;
              scheduleAutosave();
            }}
          />

          <label className="pe-label" htmlFor="pe-excerpt">
            Excerpt
          </label>
          <textarea
            id="pe-excerpt"
            className="pe-input"
            rows={3}
            value={fields.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
            placeholder="Short summary for the article list & preview."
          />
        </div>

        <div className="pe-side">
          <div className="pe-card">
            <label className="pe-label" htmlFor="pe-status">
              Status
            </label>
            <select
              id="pe-status"
              className="pe-input"
              value={fields.status}
              onChange={(e) => set("status", e.target.value === "published" ? "published" : "draft")}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>

            <label className="pe-check" htmlFor="pe-show-date">
              <input
                id="pe-show-date"
                type="checkbox"
                checked={fields.showDate}
                onChange={(e) => set("showDate", e.target.checked)}
              />
              Show date on the article
            </label>
            <p className="pe-hint">Off hides the date beside the category, and on this article&rsquo;s cards further down.</p>
          </div>

          <div className="pe-card">
            <span className="pe-label">Cover Image</span>
            {fields.coverImage ? (
              <div className="pe-cover">
                <img loading="lazy" decoding="async" src={fields.coverImage} alt="Cover" />
                <button type="button" className="pe-btn pe-btn-ghost pe-btn-sm" onClick={() => set("coverImage", "")}>
                  Remove
                </button>
              </div>
            ) : (
              <p className="pe-muted">No image yet.</p>
            )}
            <label className="pe-btn pe-btn-sm pe-upload">
              {uploadingCover ? "Uploading…" : "Upload Cover"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                onChange={uploadCover}
                disabled={uploadingCover || !setup.storage}
              />
            </label>
            <p className="pe-hint">Also the banner photo at the top of the article. JPG, PNG or WebP, up to 5MB.</p>
          </div>

          <div className="pe-card">
            <label className="pe-label" htmlFor="pe-category">
              Category
            </label>
            <input
              id="pe-category"
              className="pe-input"
              value={fields.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="e.g. Blog"
            />

            <label className="pe-label" htmlFor="pe-tags">
              Tags (comma separated)
            </label>
            <input
              id="pe-tags"
              className="pe-input"
              value={fields.tags}
              onChange={(e) => set("tags", e.target.value)}
              placeholder="spa, relax, bali"
            />

            <label className="pe-label" htmlFor="pe-author">
              Author
            </label>
            <input id="pe-author" className="pe-input" value={fields.author} onChange={(e) => set("author", e.target.value)} />
          </div>

          <div className="pe-card">
            <label className="pe-label" htmlFor="pe-seo-title">
              SEO Title
            </label>
            <input
              id="pe-seo-title"
              className="pe-input"
              value={fields.seoTitle}
              onChange={(e) => set("seoTitle", e.target.value)}
              placeholder="Default: article title"
            />

            <label className="pe-label" htmlFor="pe-seo-description">
              SEO Description
            </label>
            <textarea
              id="pe-seo-description"
              className="pe-input"
              rows={3}
              value={fields.seoDescription}
              onChange={(e) => set("seoDescription", e.target.value)}
              placeholder="Summary for Google (~150 characters)."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
