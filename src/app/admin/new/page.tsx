import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";
import { isDatabaseConfigured } from "@/lib/blog/db";
import { listOriginalArticles } from "@/lib/blog/posts";
import { isAdmin } from "@/lib/blog/session";
import { blogSetup } from "@/lib/blog/setup";

export const metadata: Metadata = { title: { absolute: "New Article" } };

/** /admin/new/ — write a new article. */
export default async function NewPostPage() {
  if (!(await isAdmin())) redirect("/admin/login/");
  return (
    <div className="adm-editor-page">
      <PostEditor
        initialPost={null}
        setup={blogSetup()}
        originals={isDatabaseConfigured() ? await listOriginalArticles() : []}
      />
    </div>
  );
}
