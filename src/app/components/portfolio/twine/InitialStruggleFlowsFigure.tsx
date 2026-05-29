import { ImageWithFallback } from "../../figma/ImageWithFallback";
import initialStruggleFlows from "../../../../imports/twine-initial-struggle-flows.png";
import { MEDIA_STAGE_BACKGROUND } from "./MediaStageBackground";
import { TwineCaseStudyMediaFrame } from "./TwineCaseStudyMediaFrame";

type InitialStruggleFlowsFigureProps = {
  className?: string;
};

export function InitialStruggleFlowsFigure({ className }: InitialStruggleFlowsFigureProps) {
  return (
    <figure className={className}>
      <TwineCaseStudyMediaFrame background={MEDIA_STAGE_BACKGROUND}>
        <ImageWithFallback
          src={initialStruggleFlows}
          alt="Twine producer and consumer login flows side by side"
          className="relative z-[1] mx-auto block h-auto w-full max-w-full mix-blend-screen"
          draggable={false}
          loading="eager"
          decoding="async"
        />
      </TwineCaseStudyMediaFrame>
    </figure>
  );
}
