import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className='
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-zinc-600
        hover:shadow-xl
        hover:shadow-black/30
      '
    >
      <div className='relative h-64 overflow-hidden'>
        <Image
          src={blog.cover}
          alt={blog.title}
          fill
          className='
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          '
        />

        <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col p-7'>
        {/* Category */}
        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-pink-500'>
          {blog.tags[0]}
        </p>

        {/* Title */}
        <h2
          className='
            mt-3
            text-xl
            sm:text-2xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-pink-500
          '
        >
          {blog.title}
        </h2>

        {/* Description */}
        <p className='text-sm sm:text-base mt-3 flex-1 leading-5 text-zinc-400'>
          {blog.description}
        </p>

        {/* Footer */}
        <div className='mt-8 border-t border-zinc-800 pt-5'>
          <div className='flex items-center justify-between text-sm text-zinc-500'>
            <span>{blog.date}</span>

            <span>{blog.readingTime}</span>
          </div>

          <div className='mt-5 flex items-center gap-2 font-medium text-pink-500'>
            Read article
            <span
              className='
                transition-transform
                duration-300
                group-hover:translate-x-1
              '
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
