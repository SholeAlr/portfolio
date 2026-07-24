"use client";

import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Props = {
  item: {
    id: number;
    title: string;
    description: string;
    demoUrl: string | null;
    githubUrl: string | null;
    blogUrl: string | null;
    voteCount: number;
  };
  liked: boolean;
  onToggleLike: () => void;
};

export function BoardCard({ item, liked, onToggleLike }: Props) {
  return (
    <div className='group rounded-xl p-[1.5px] bg-gradient-to-br from-pink-500/70 to-purple-600/70 transition-shadow hover:shadow-[0_0_16px_rgba(217,70,239,0.4)]'>
      <div className='h-full rounded-xl bg-zinc-900 p-3'>
        <h4 className='text-sm font-medium text-zinc-100'>{item.title}</h4>
        <p className='mt-1 text-xs text-zinc-400 line-clamp-3'>
          {item.description}
        </p>

        <div className='mt-2 flex items-center gap-3 text-xs'>
          {item.demoUrl && (
            <Link
              href={item.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-400 underline hover:text-pink-300'
            >
              Demo
            </Link>
          )}
          {item.githubUrl && (
            <Link
              href={item.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-400 underline hover:text-pink-300'
            >
              GitHub
            </Link>
          )}
          {item.blogUrl && (
            <Link
              href={item.blogUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-400 underline hover:text-pink-300'
            >
              Blog
            </Link>
          )}

          <button
            onClick={onToggleLike}
            className='mt-3 flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-pink-400'
          >
            {liked ? (
              <FaHeart
                size={14}
                className='text-pink-500 drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]'
              />
            ) : (
              <FaRegHeart size={14} />
            )}
            {item.voteCount}
          </button>
        </div>
      </div>
    </div>
  );
}
