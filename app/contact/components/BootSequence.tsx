type BootSequenceProps = {
  lines: string[];
  visibleLines: number;
};

export function BootSequence({ lines, visibleLines }: BootSequenceProps) {
  return (
    <div className='font-mono text-sm leading-7 text-white/60'>
      <div className='text-white/90'>
        sholeh@portfolio ~ $ ./establish-connection
      </div>

      {lines.slice(0, visibleLines).map((line) => (
        <div key={line}>
          <span className='text-fuchsia-400'>&gt;</span> {line}
        </div>
      ))}

      {visibleLines < lines.length && (
        <span className='inline-block animate-pulse'>▋</span>
      )}
    </div>
  );
}
