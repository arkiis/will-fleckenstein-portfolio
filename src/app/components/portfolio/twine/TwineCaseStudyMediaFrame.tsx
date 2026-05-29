import type { ReactNode } from "react";

/** Shared framed media shell — matches Initial Struggle section. */
export const MEDIA_FRAME_CLASS =
  "relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 px-4 py-6 sm:px-6 sm:py-8";

export const MEDIA_FRAME_BACKGROUND =
  "radial-gradient(ellipse 80% 70% at 28% 72%, rgba(0,33,165,0.16), transparent 68%), radial-gradient(ellipse 80% 70% at 72% 72%, rgba(95,167,255,0.14), transparent 68%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(214,139,74,0.05), transparent 55%), var(--portfolio-card)";

export const MEDIA_FRAME_BACKGROUND_SOFT =
  "radial-gradient(ellipse 80% 70% at 28% 72%, rgba(0,33,165,0.06), transparent 68%), radial-gradient(ellipse 80% 70% at 72% 72%, rgba(95,167,255,0.05), transparent 68%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(214,139,74,0.02), transparent 55%), var(--portfolio-card)";

type TwineCaseStudyMediaFrameProps = {
  children: ReactNode;
  className?: string;
  background?: string;
};

export function TwineCaseStudyMediaFrame({
  children,
  className,
  background = MEDIA_FRAME_BACKGROUND,
}: TwineCaseStudyMediaFrameProps) {
  return (
    <div
      className={[MEDIA_FRAME_CLASS, className].filter(Boolean).join(" ")}
      style={{ background }}
    >
      {children}
    </div>
  );
}
