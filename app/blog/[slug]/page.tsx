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
    <article
      className='
    prose
    prose-invert
    lg:prose-xl

    prose-headings:text-white

    prose-p:text-zinc-300

    prose-links:text-pink-500

    prose-links:no-underline
    hover:prose-links:text-pink-400

    prose-strong:text-pink-500

    prose-code:text-pink-400

    prose-blockquote:border-pink-600
    prose-blockquote:text-zinc-300

    prose-hr:border-zinc-700

    mx-auto
    max-w-4xl
    px-6
    py-20
  '
    >
      <h1>{blog.title}</h1>

      <p>{blog.description}</p>

      <hr className='my-8' />

      {blog.content}
    </article>
  );
}
