import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

export function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const { colors } = useTheme();

  const springX = useSpring(-100, { stiffness: 280, damping: 28 });
  const springY = useSpring(-100, { stiffness: 280, damping: 28 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [data-cursor='hover']",
      ) as HTMLElement | null;
      setHovering(!!interactive);
      ringScale.set(interactive ? 1.65 : 1);
      const cursorLabel = interactive?.getAttribute("data-cursor-label");
      setLabel(cursorLabel);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [springX, springY, ringScale]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-2 w-2 rounded-full md:block"
        style={{
          x: springX,
          y: springY,
          translateX: -4,
          translateY: -4,
          backgroundColor: colors.accent,
          scale: hovering ? 0 : 1,
          opacity: hovering ? 0 : 1,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-10 w-10 rounded-full border md:block"
        style={{
          x: springX,
          y: springY,
          translateX: -20,
          translateY: -20,
          scale: ringScale,
          borderColor: `${colors.accent}66`,
          mixBlendMode: "difference",
        }}
      />
      {label && hovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none fixed left-0 top-0 z-[71] hidden text-[10px] uppercase tracking-[0.28em] md:block"
          style={{
            x: springX,
            y: springY,
            translateX: 14,
            translateY: -28,
            color: colors.accent,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {label}
        </motion.div>
      )}
    </>
  );
}
