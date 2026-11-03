import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";
import { isDatabaseConfigured } from "@/lib/blog/db";
import { getPostById, listOriginalArticles } from "@/lib/blog/posts";
import { isAdmin } from "@/lib/blog/session";
import { blogSetup } from "@/lib/blog/setup";

type Props = { params: Promise<{ id: string }> };

const loadPost = async (id: string) => (isDatabaseConfigured() ? getPostById(id) : null);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!(await isAdmin())) return {};
  const post = await loadPost((await params).id);
  return { title: { absolute: post ? `Edit: ${post.title}` : "Edit Article" } };
}

/** /admin/edit/<id>/ — edit an existing article. */
export default async function EditPostPage({ params }: Props) {
  if (!(await isAdmin())) redirect("/admin/login/");
  if (!isDatabaseConfigured()) redirect("/admin/");
  const post = await loadPost((await params).id);
  if (!post) notFound();
  return (
    <div className="adm-editor-page">
      <PostEditor initialPost={post} setup={blogSetup()} originals={await listOriginalArticles()} />
    </div>
  );
}
