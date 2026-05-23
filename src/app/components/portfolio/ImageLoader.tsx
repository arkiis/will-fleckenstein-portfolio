import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ImageLoader({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Shimmer placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 ${className}`}
          style={{
            background:
              "linear-gradient(90deg, rgba(107,122,146,0.05) 0%, rgba(142,180,224,0.12) 50%, rgba(107,122,146,0.05) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
            ...style,
          }}
        />
      )}

      {/* Actual image */}
      <ImageWithFallback
        src={src}
        alt={alt}
        className={className}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
        onLoad={() => setIsLoaded(true)}
      />

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
