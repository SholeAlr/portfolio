import { getBlogBySlug } from "@/lib/blog";

export default async function BlogPage() {
  const blog = await getBlogBySlug("closures");

  return <pre>{JSON.stringify(blog, null, 2)}</pre>;
}
