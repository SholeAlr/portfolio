import { getAllBlogs } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <main className='mx-auto max-w-6xl px-6 py-20'>
      <h1 className='mb-4 text-5xl font-bold'>Blog</h1>

      <p className='mb-12 max-w-2xl text-zinc-400'>
        Notes from my journey as a developer. Sometimes they&apos;re
        educational. Sometimes they&apos;re funny. Hopefully they&apos;re both.
      </p>

      <div className='grid gap-8 md:grid-cols-2'>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
