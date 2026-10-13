import { COLUMN_LABELS } from "@/lib/board-status";
import { FC } from "react";
import { FaCubes } from "react-icons/fa";
import { BoardColumnProps } from "./types";

export const BoardColumn: FC<BoardColumnProps> = ({
  status,
  meta,
  count,
  children,
}) => {
  return (
    <div className='rounded-2xl h-full flex flex-col border border-pink-500/70 bg-zinc-950/60 p-3 shadow-[0_0_35px_rgba(236,72,153,0.18)]'>
      <div className='mb-7 flex justify-start'>
        <div
          className='relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 
                   border-pink-500 text-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.55),0_0_60px_rgba(139,92,246,0.18)]'
        >
          <div className='absolute rounded-full border border-pink-500/10' />

          <meta.icon className='size-7' />
        </div>
      </div>
      <div>
        <div className='mb-5 px-1'>
          <h2 className='text-2xl font-semibold tracking-tight text-zinc-100'>
            {COLUMN_LABELS[status]}
          </h2>

          <p className='mt-2 min-h-[72px] text-sm leading-5 text-zinc-400'>
            {meta.description}
          </p>

          {/* Count */}
          <div
            className='
                      mt-3 inline-flex items-center gap-2
                      rounded-full
                      border border-pink-500/25
                      bg-pink-500/[0.04]
                      px-3 py-1.5
                      text-xs text-zinc-300
                    '
          >
            <FaCubes />
            <span>{count}</span>
          </div>
        </div>

        {/* Cards */}
        <div className='space-y-3'>{children}</div>
      </div>
    </div>
  );
};
