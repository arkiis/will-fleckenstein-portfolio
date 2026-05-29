import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { MediaStageBackground } from "./MediaStageBackground";

export type BeforeAfterCarouselSlide = {
  id: string;
  src: string;
  alt: string;
};

const SLIDE_DURATION_MS = 5500;

type BeforeAfterProgressCarouselProps = {
  slides: BeforeAfterCarouselSlide[];
};

export function BeforeAfterProgressCarousel({ slides }: BeforeAfterProgressCarouselProps) {
  const count = slides.length;
  const canAutoAdvance = count > 1;
  const slidesKey = slides.map((slide) => slide.id).join("|");

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(canAutoAdvance ? 0 : 1);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
      setProgress(0);
    },
    [count],
  );

  useEffect(() => {
    setIndex(0);
    setProgress(canAutoAdvance ? 0 : 1);
  }, [slidesKey, canAutoAdvance]);

  useEffect(() => {
    if (!canAutoAdvance) return;

    setProgress(0);
    let raf = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(elapsed / SLIDE_DURATION_MS, 1);
      setProgress(nextProgress);

      if (nextProgress >= 1) {
        setIndex((current) => (current + 1) % count);
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, count, canAutoAdvance, slidesKey]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  const progressBars = (
    <div className="flex gap-2" role="tablist" aria-label="Redesign comparison screens">
      {slides.map((slide, i) => {
        const fill =
          !canAutoAdvance ? 100 : i < index ? 100 : i === index ? progress * 100 : 0;

        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={slide.alt}
            disabled={!canAutoAdvance}
            onClick={() => canAutoAdvance && goTo(i)}
            className="min-w-0 flex-1 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 disabled:cursor-default"
          >
            <div className="h-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white" style={{ width: `${fill}%` }} />
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <figure className="min-w-0 w-full">
      <div className="w-full overflow-hidden rounded-sm border border-[var(--portfolio-border)]/15 bg-[var(--portfolio-card)]">
        <div
          className="border-b border-white/10 px-4 py-4 sm:px-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 100%)",
          }}
        >
          {progressBars}
        </div>

        <div className="relative overflow-hidden px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
          <MediaStageBackground />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-[1] w-full"
            >
              <ImageWithFallback
                src={current.src}
                alt={current.alt}
                className="relative z-[1] mx-auto block h-auto w-full max-w-full mix-blend-screen"
                draggable={false}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </figure>
  );
}
