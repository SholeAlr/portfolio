type OtherChannelsProps = {
  email: string;
  github: string;
  linkedin: string;
};

export function OtherChannels({ email, github, linkedin }: OtherChannelsProps) {
  return (
    <div>
      <p className='mb-8 font-mono text-[10px] tracking-[0.3em] text-white/30'>
        OTHER_CHANNELS
      </p>

      <div className='space-y-8'>
        <a href={`mailto:${email}`} className='group block'>
          <p className='font-mono text-xs text-fuchsia-300/70'>EMAIL</p>

          <p className='mt-2 break-all text-sm text-white/50 transition group-hover:text-white'>
            {email}
          </p>
        </a>

        <a
          href={`https://github.com/${github}`}
          target='_blank'
          rel='noreferrer'
          className='group block'
        >
          <p className='font-mono text-xs text-fuchsia-300/70'>GITHUB</p>

          <p className='mt-2 text-sm text-white/50 transition group-hover:text-white'>
            @{github}
          </p>
        </a>

        <a
          href={`https://linkedin.com/in/${linkedin}`}
          target='_blank'
          rel='noreferrer'
          className='group block'
        >
          <p className='font-mono text-xs text-fuchsia-300/70'>LINKEDIN</p>

          <p className='mt-2 text-sm text-white/50 transition group-hover:text-white'>
            /in/{linkedin}
          </p>
        </a>
      </div>
    </div>
  );
}
