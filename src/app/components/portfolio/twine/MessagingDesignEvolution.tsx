import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TwineCaseStudyMediaFrame } from "./TwineCaseStudyMediaFrame";

/** Served from /public — copied verbatim at deploy, no Vite asset pipeline or re-encoding. */
const MESSAGING_BEFORE_AFTER_SRC = "/images/twine-messaging-before-after.png";

export function MessagingDesignEvolution() {
  return (
    <figure className="min-w-0">
      <TwineCaseStudyMediaFrame>
        <ImageWithFallback
          src={MESSAGING_BEFORE_AFTER_SRC}
          alt="Twine messaging before and after: inbox list and conversation starter screens compared side by side"
          className="relative z-[1] mx-auto block h-auto w-auto max-w-full mix-blend-screen"
          draggable={false}
          loading="eager"
          decoding="sync"
        />
      </TwineCaseStudyMediaFrame>
      <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/45">
        Messaging · before & after — inbox and conversation starter
      </figcaption>
    </figure>
  );
}
