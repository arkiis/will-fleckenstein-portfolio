import { useId } from "react";

/**
 * Fluid liquid yin-yang —
 * white = research, spectrum half = pretty screens.
 */
export function LiquidYinYang({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const filterId = `liquid-${uid}`;
  const research = "#f5f7fa";

  return (
    <div className={`relative aspect-square ${className}`} aria-hidden>
      <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
        <defs>
          <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018"
              numOctaves="3"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.012;0.024;0.015;0.012"
                dur="9s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                values="4;12;7;4"
                dur="7s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>

        <g filter={`url(#${filterId})`} className="liquid-yy-spin">
          {/* Research half — white */}
          <circle cx="100" cy="100" r="90" fill={research} />

          {/* Pretty screens half — looping hue spectrum */}
          <path
            className="liquid-yy-spectrum"
            d="M100 10 A90 90 0 0 1 100 190 A45 45 0 0 1 100 100 A45 45 0 0 0 100 10 Z"
            fill="hsl(210, 85%, 58%)"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M100 10 A90 90 0 0 1 100 190 A45 45 0 0 1 100 100 A45 45 0 0 0 100 10 Z;
                M100 10 A90 90 0 0 1 100 190 A52 40 0 0 1 100 100 A40 52 0 0 0 100 10 Z;
                M100 10 A90 90 0 0 1 100 190 A40 52 0 0 1 100 100 A52 40 0 0 0 100 10 Z;
                M100 10 A90 90 0 0 1 100 190 A45 45 0 0 1 100 100 A45 45 0 0 0 100 10 Z
              "
            />
          </path>

          {/* White eye in spectrum half */}
          <circle cx="100" cy="55" r="15" fill={research}>
            <animate
              attributeName="r"
              values="15;18;13;15"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="55;50;60;55"
              dur="7.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            className="liquid-yy-spectrum"
            cx="100"
            cy="55"
            r="6"
            fill="hsl(210, 85%, 45%)"
          >
            <animate
              attributeName="cy"
              values="55;50;60;55"
              dur="7.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Spectrum eye in research half */}
          <circle
            className="liquid-yy-spectrum"
            cx="100"
            cy="145"
            r="15"
            fill="hsl(210, 85%, 58%)"
          >
            <animate
              attributeName="r"
              values="15;13;18;15"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="145;150;140;145"
              dur="7.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="100" cy="145" r="6" fill={research}>
            <animate
              attributeName="cy"
              values="145;150;140;145"
              dur="7.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      <style>{`
        .liquid-yy-spin {
          transform-origin: 100px 100px;
          animation: liquidYySpin 32s linear infinite;
        }
        .liquid-yy-spectrum {
          animation: liquidYyHue 10s linear infinite;
        }
        @keyframes liquidYySpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes liquidYyHue {
          0%   { fill: hsl(0, 82%, 58%); }
          16%  { fill: hsl(40, 88%, 55%); }
          33%  { fill: hsl(95, 70%, 48%); }
          50%  { fill: hsl(175, 75%, 45%); }
          66%  { fill: hsl(220, 85%, 58%); }
          83%  { fill: hsl(290, 75%, 58%); }
          100% { fill: hsl(360, 82%, 58%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .liquid-yy-spin { animation: none; }
          .liquid-yy-spectrum { animation: none; fill: hsl(210, 85%, 58%); }
        }
      `}</style>
    </div>
  );
}
