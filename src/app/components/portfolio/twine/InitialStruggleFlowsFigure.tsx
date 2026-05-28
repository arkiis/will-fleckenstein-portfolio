import { ImageWithFallback } from "../../figma/ImageWithFallback";
import twineInitialStruggleFlows from "../../../../imports/twine-initial-struggle-flows.png";
import { TwineCaseStudyMediaFrame } from "./TwineCaseStudyMediaFrame";

type InitialStruggleFlowsFigureProps = {
  className?: string;
};

export function InitialStruggleFlowsFigure({ className }: InitialStruggleFlowsFigureProps) {
  return (
    <figure className={className}>
      <TwineCaseStudyMediaFrame>
        <ImageWithFallback
          src={twineInitialStruggleFlows}
          alt="Twine producer and consumer login flows side by side"
          className="relative z-[1] mx-auto block h-auto w-full max-w-full mix-blend-screen"
          draggable={false}
        />
      </TwineCaseStudyMediaFrame>
    </figure>
  );
}
