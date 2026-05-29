import { motion } from "motion/react";

/** Full immersive stage for section 03 carousel panels. */
export const MEDIA_STAGE_BACKGROUND =
  "radial-gradient(ellipse 95% 75% at 12% 88%, rgba(0,33,165,0.55), transparent 58%), radial-gradient(ellipse 95% 75% at 88% 88%, rgba(95,167,255,0.4), transparent 58%), radial-gradient(ellipse 110% 85% at 50% -5%, rgba(214,139,74,0.22), transparent 52%), radial-gradient(ellipse 60% 45% at 50% 45%, rgba(0,33,165,0.12), transparent 70%), linear-gradient(168deg, #04060f 0%, #0a1228 42%, #060a14 100%)";

/** Orbs + texture only — pair with MEDIA_FRAME_BACKGROUND on the same element for mix-blend-screen PNGs. */
export function MediaStageOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        className="absolute -left-[10%] top-[20%] h-[45%] w-[38%] rounded-full bg-[#0021A5]/25 blur-3xl"
        animate={{ x: [0, 32, 0], y: [0, -18, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[8%] bottom-[10%] h-[40%] w-[34%] rounded-full bg-[#5FA7FF]/20 blur-3xl"
        animate={{ x: [0, -28, 0], y: [0, 14, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute left-[35%] top-[-8%] h-[35%] w-[30%] rounded-full bg-[#D68B4A]/15 blur-3xl"
        animate={{ x: [0, 20, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export function MediaStageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: MEDIA_STAGE_BACKGROUND }} />
      <MediaStageOrbs />
    </div>
  );
}
