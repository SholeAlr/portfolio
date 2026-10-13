type BoardCardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    voteCount: number;
    demoUrl: string | null;
    githubUrl: string | null;
    blogUrl: string | null;
  };
  liked: boolean;
  onToggleLike: () => void;
};

export function BoardCard({ item, liked, onToggleLike }: BoardCardProps) {
  return (
    <article
      className='
        group relative overflow-hidden
        rounded-xl
        border border-pink-500/35
        bg-zinc-950/70
        p-4
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-pink-400/70
        hover:bg-zinc-900/80
        hover:shadow-[0_0_25px_rgba(236,72,153,0.10)]
      '
    >
      {/* subtle hover glow */}
      <div
        className='
          pointer-events-none absolute
          -right-10 -top-10 h-24 w-24
          rounded-full bg-pink-500/5
          blur-2xl opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        '
      />

      <div className='relative'>
        <h3 className='text-sm font-semibold leading-5 text-zinc-100'>
          {item.title}
        </h3>

        <p className='mt-1.5 text-xs leading-5 text-zinc-500'>
          {item.description}
        </p>

        <div className='mt-4 flex items-center justify-between'>
          <button
            type='button'
            onClick={onToggleLike}
            aria-label={liked ? "Remove vote" : "Vote for this idea"}
            className={`
              group/vote inline-flex items-center gap-1.5
              text-xs transition
              ${liked ? "text-pink-400" : "text-zinc-500 hover:text-pink-400"}
            `}
          >
            <svg
              viewBox='0 0 24 24'
              fill={liked ? "currentColor" : "none"}
              className='h-4 w-4'
            >
              <path
                d='M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z'
                stroke='currentColor'
                strokeWidth='1.7'
                strokeLinejoin='round'
              />
            </svg>

            <span>{item.voteCount}</span>
          </button>

          {(item.demoUrl || item.githubUrl || item.blogUrl) && (
            <a
              href={item.demoUrl ?? item.githubUrl ?? item.blogUrl ?? "#"}
              target='_blank'
              rel='noopener noreferrer'
              className='
                text-[11px] text-zinc-600
                transition hover:text-pink-400
              '
            >
              View →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
