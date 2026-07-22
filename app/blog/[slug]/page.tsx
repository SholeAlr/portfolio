import { getBlogBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className='prose prose-invert mx-auto py-20'>
      <h1>{blog.title}</h1>

      <p>{blog.description}</p>

      <hr className='my-8' />

      {blog.content}
    </article>
  );
}
