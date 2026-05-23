import { motion } from "motion/react";

export function LoadingSkeleton() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0c0f14]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pt-32 md:px-10">
        {/* Nav skeleton */}
        <div className="fixed left-0 right-0 top-0 z-50 bg-[#0c0f14] py-6">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--portfolio-accent)]/30" />
              <div className="h-3 w-40 animate-pulse rounded bg-[var(--portfolio-text-muted)]/10" />
            </div>
            <div className="flex items-center gap-10">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-3 w-16 animate-pulse rounded bg-[var(--portfolio-text-muted)]/10"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero skeleton */}
        <div className="mt-20 flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title lines */}
            <div className="space-y-4">
              <div
                className="h-20 w-full max-w-[800px] animate-pulse rounded-lg bg-gradient-to-r from-[var(--portfolio-text-muted)]/10 via-[var(--portfolio-accent)]/15 to-[var(--portfolio-text-muted)]/10 md:h-32"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                }}
              />
              <div
                className="h-20 w-full max-w-[900px] animate-pulse rounded-lg bg-gradient-to-r from-[var(--portfolio-text-muted)]/10 via-[var(--portfolio-accent)]/15 to-[var(--portfolio-text-muted)]/10 md:h-32"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                  animationDelay: "0.2s",
                }}
              />
              <div
                className="h-16 w-full max-w-[600px] animate-pulse rounded-lg bg-gradient-to-r from-[var(--portfolio-text-muted)]/10 via-[var(--portfolio-accent)]/15 to-[var(--portfolio-text-muted)]/10 md:h-24"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                  animationDelay: "0.4s",
                }}
              />
            </div>
          </motion.div>

          {/* Ambient glow effect */}
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background:
                "radial-gradient(600px circle at 50% 40%, rgba(142,180,224,0.08), transparent 60%)",
            }}
          />

          {/* Scroll indicator skeleton */}
          <div className="fixed bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
            <div className="h-3 w-12 animate-pulse rounded bg-[var(--portfolio-text-muted)]/10" />
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[var(--portfolio-accent)]/30 p-[3px]">
              <motion.div
                className="block h-2 w-[3px] rounded-full bg-[var(--portfolio-accent)]/50"
                animate={{
                  y: [0, 12],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>

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
