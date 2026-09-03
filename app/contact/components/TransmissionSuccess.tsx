type TransmissionSuccessProps = {
  transmissionId: string;
};

export function TransmissionSuccess({
  transmissionId,
}: TransmissionSuccessProps) {
  return (
    <div className='mt-8 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/[0.04] p-6'>
      <div className='font-mono text-sm leading-7'>
        <div className='text-fuchsia-300'>GOT IT!</div>

        <div className='mt-4 text-white/50'>Transmission ID:</div>

        <div className='text-white'>{transmissionId}</div>

        <div className='mt-4 text-white/70'>
          Thanks for reaching out.
          <br />
          I&apos;ll get back to you soon.
        </div>
      </div>
    </div>
  );
}
