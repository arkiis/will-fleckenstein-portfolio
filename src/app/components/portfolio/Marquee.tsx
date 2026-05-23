export function Marquee() {
  const words = [
    "story",
    "craft",
    "warmth",
    "tension",
    "release",
    "honesty",
    "rhythm",
    "memory",
    "weight",
    "softness",
    "silence",
    "delight",
  ];
  const row = (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-12">
          <span
            className="whitespace-nowrap italic text-[var(--portfolio-accent)]/70"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(40px, 7vw, 96px)",
              fontWeight: 300,
            }}
          >
            {w}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--portfolio-accent)]/40" />
        </span>
      ))}
    </div>
  );
  return (
    <section className="relative border-y border-[var(--portfolio-border)]/8 py-8 overflow-hidden">
      <div className="flex animate-[marquee_60s_linear_infinite]">
        {row}
        {row}
      </div>
      <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
