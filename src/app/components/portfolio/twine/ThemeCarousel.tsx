import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ThemeCarouselSlide = {
  id: string;
  title: string;
  content: ReactNode;
};

type ThemeCarouselProps = {
  slides: ThemeCarouselSlide[];
  hint?: string;
  /** `board` = white FigJam canvas; `card` = portfolio evidence panel */
  surface?: "board" | "card";
};

export function ThemeCarousel({
  slides,
  hint = "use arrows to view each theme",
  surface = "board",
}: ThemeCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const current = slides[index] ?? slides[0];

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + count) % count);
    },
    [count],
  );

  if (!current) return null;

  return (
    <div className="min-w-0">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <ThemeHeading title={current.title} surface={surface} />
        <p className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/50">
          {index + 1} of {count} · {hint}
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {current.content}
          </motion.div>
        </AnimatePresence>

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous theme"
              className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-[var(--portfolio-border)]/30 bg-[var(--portfolio-card)]/95 text-[var(--portfolio-text-muted)] transition-colors hover:border-[var(--portfolio-accent)]/40 hover:text-[var(--portfolio-text)] sm:-left-3"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next theme"
              className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm border border-[var(--portfolio-border)]/30 bg-[var(--portfolio-card)]/95 text-[var(--portfolio-text-muted)] transition-colors hover:border-[var(--portfolio-accent)]/40 hover:text-[var(--portfolio-text)] sm:-right-3"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Themes"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${slide.title}`}
              onClick={() => setIndex(i)}
              className={`rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] transition-all ${
                i === index
                  ? "bg-[var(--portfolio-accent)] text-[var(--portfolio-bg)]"
                  : "bg-[var(--portfolio-border)]/20 text-[var(--portfolio-text-muted)]/55 hover:text-[var(--portfolio-text)]"
              }`}
            >
              {slide.title.length > 28 ? `${slide.title.slice(0, 26)}…` : slide.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ThemeHeading({
  title,
  surface = "board",
}: {
  title: string;
  surface?: "board" | "card";
}) {
  const isBoard = surface === "board";

  return (
    <div
      className={`min-w-0 border-b-2 pb-3 ${
        isBoard ? "border-[#0021A5]/25" : "border-[var(--portfolio-accent)]/35"
      }`}
    >
      <p
        className={`mb-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
          isBoard ? "text-[#0021A5]" : "text-[var(--portfolio-accent)]"
        }`}
      >
        Theme
      </p>
      <h3
        className={`text-[16px] font-bold leading-snug sm:text-[18px] ${
          isBoard ? "text-[#0a0a0a]" : "text-[var(--portfolio-text)]"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}
