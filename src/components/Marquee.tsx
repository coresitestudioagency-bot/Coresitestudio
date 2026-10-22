export default function Marquee({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-block">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
