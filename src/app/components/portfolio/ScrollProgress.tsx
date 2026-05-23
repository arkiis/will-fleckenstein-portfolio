import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { colors } = useTheme();
  const spring = useSpring(0, { stiffness: 120, damping: 28, mass: 0.4 });
  const width = useTransform(spring, (v) => `${v * 100}%`);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px]"
      style={{
        width,
        background: `linear-gradient(90deg, ${colors.accent}99, ${colors.accent})`,
        boxShadow: `0 0 12px ${colors.accent}66`,
      }}
    />
  );
}
