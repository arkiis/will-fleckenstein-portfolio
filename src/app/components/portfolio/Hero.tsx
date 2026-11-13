import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BODY_FONT } from "../../constants/typography";
import { useTheme } from "../../contexts/ThemeContext";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const { colors, displayFont } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ background: colors.bgGradient }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[43%] -z-10 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 65%)`,
        }}
      />

      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl"
        >
          <h1
            className="text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-light leading-[0.98] tracking-[-0.045em]"
            style={{ fontFamily: displayFont, color: colors.text }}
          >
            Hi, I&apos;m Will
          </h1>
          <p
            className="mx-auto mt-8 max-w-3xl text-balance text-[clamp(1.1rem,2vw,1.4rem)] font-light leading-relaxed tracking-[-0.01em]"
            style={{ fontFamily: BODY_FONT, color: colors.textMuted }}
          >
            <span style={{ color: colors.text, fontWeight: 400 }}>
              A product and motion designer
            </span>{" "}
            making crypto and AI feel simple for everyday people.
          </p>
        </motion.div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work section"
        className={`group fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.32em] transition-opacity duration-700 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-70"
        }`}
        style={{ color: colors.text, fontFamily: BODY_FONT }}
      >
        <span>work</span>
        <span
          className="h-8 w-px origin-top animate-[heroLine_2s_ease-in-out_infinite]"
          style={{ background: `${colors.text}70` }}
        />
        <style>{`@keyframes heroLine { 0%,100% { transform:scaleY(.3); opacity:.25 } 50% { transform:scaleY(1); opacity:1 } }`}</style>
      </a>
    </section>
  );
}
