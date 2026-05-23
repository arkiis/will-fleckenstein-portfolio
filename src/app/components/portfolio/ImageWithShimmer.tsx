import { useState } from "react";
import { motion } from "motion/react";

export function ImageWithShimmer({
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Shimmer placeholder */}
      <motion.div
        className={`absolute inset-0 ${className}`}
        style={{
          background:
            "linear-gradient(90deg, rgba(107,122,146,0.05) 0%, rgba(95,167,255,0.12) 50%, rgba(107,122,146,0.05) 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
          ...style,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        style={style}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
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
