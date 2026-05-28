import { ImageWithFallback } from "../../figma/ImageWithFallback";

export const CASE_STUDY_EVIDENCE_FRAME =
  "relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10";

export const CASE_STUDY_EVIDENCE_BACKGROUND =
  "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(214,139,74,0.05), transparent 55%), var(--portfolio-card)";

const BOTTOM_FADE_MASK =
  "linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%)";

type WhatIDidEvidenceFigureProps = {
  src: string;
  alt: string;
  /** Softens a hard crop at the bottom edge of tall screenshots. */
  fadeBottom?: boolean;
  imageClassName?: string;
  className?: string;
};

export function WhatIDidEvidenceFigure({
  src,
  alt,
  fadeBottom = false,
  imageClassName = "block h-auto w-full",
  className,
}: WhatIDidEvidenceFigureProps) {
  return (
    <figure className={className}>
      <div
        className={`${CASE_STUDY_EVIDENCE_FRAME} px-4 py-5 sm:px-6 sm:py-6`}
        style={{ background: CASE_STUDY_EVIDENCE_BACKGROUND }}
      >
        <div
          className="relative"
          style={
            fadeBottom
              ? {
                  WebkitMaskImage: BOTTOM_FADE_MASK,
                  maskImage: BOTTOM_FADE_MASK,
                }
              : undefined
          }
        >
          <ImageWithFallback
            src={src}
            alt={alt}
            className={imageClassName}
            draggable={false}
          />
        </div>
        {fadeBottom ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--portfolio-card)] via-[var(--portfolio-card)]/80 to-transparent sm:h-36"
            aria-hidden
          />
        ) : null}
      </div>
    </figure>
  );
}
