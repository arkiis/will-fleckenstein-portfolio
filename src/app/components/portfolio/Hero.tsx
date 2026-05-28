import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const { colors, displayFont } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ease = [0.2, 0.8, 0.2, 1] as const;
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.1, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: colors.bgGradient }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 3px, rgba(255,255,255,0.4) 3px 4px)",
        }}
      />

      <motion.div className="relative mx-auto w-full max-w-[1300px] px-6 md:px-10">
        <h1
          style={{
            fontFamily: displayFont,
            fontSize: "var(--portfolio-hero-heading-size)",
            fontWeight: 300,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            color: colors.text,
          }}
        >
          <motion.span {...fade(0.4)} className="mt-3 block">
            Shaping digital
          </motion.span>

          <motion.span {...fade(0.55)} className="block">
            experiences with{" "}
            <span className="italic" style={{ color: colors.accent }}>
              story,
            </span>
          </motion.span>

          <motion.span {...fade(0.7)} className="mt-2 block">
            <span className="italic" style={{ color: colors.accent }}>
              motion
            </span>
            <span>, and </span>
            <span className="italic" style={{ color: colors.accent }}>
              care.
            </span>
          </motion.span>
        </h1>

      </motion.div>

      <a
        href="#work"
        data-cursor="hover"
        data-cursor-label="Explore"
        aria-label="Scroll to work section"
        className={`group fixed bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.32em] transition-opacity duration-700 ${
          scrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{ color: `${colors.text}99` }}
      >
        <span className="transition-opacity duration-300 group-hover:opacity-100">
          scroll
        </span>
        <span
          className="flex h-8 w-5 items-start justify-center rounded-full border p-[3px] transition-all duration-300 group-hover:scale-110"
          style={{ borderColor: `${colors.text}40` }}
        >
          <span
            className="block h-2 w-[3px] animate-[scrollDot_2.4s_ease-in-out_infinite] rounded-full"
            style={{
              backgroundColor: colors.text,
            }}
          />
        </span>
        <style>{`
          @keyframes scrollDot {
            0%   { transform: translateY(0);   opacity: 0; }
            25%  { transform: translateY(2px); opacity: 1; }
            75%  { transform: translateY(10px); opacity: 1; }
            100% { transform: translateY(12px); opacity: 0; }
          }
        `}</style>
      </a>
    </section>
  );
}
