export function SystemInfo() {
  return (
    <div className='mt-20 border-t border-white/10 pt-6'>
      <p className='font-mono text-[10px] tracking-[0.3em] text-white/30'>
        SYSTEM_INFO
      </p>

      <dl className='mt-5 space-y-3 font-mono text-[10px]'>
        <div className='flex justify-between gap-4'>
          <dt className='text-white/25'>timezone</dt>

          <dd className='text-white/45'>UTC+3</dd>
        </div>

        <div className='flex justify-between gap-4'>
          <dt className='text-white/25'>status</dt>

          <dd className='text-fuchsia-300/70'>available</dd>
        </div>

        <div className='flex justify-between gap-4'>
          <dt className='text-white/25'>response_time</dt>

          <dd className='text-white/45'>&lt; 24h</dd>
        </div>
      </dl>
    </div>
  );
}
