import { motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const steps = [
  {
    k: "Listen",
    body: "I start with interviews that feel more like late-night phone calls. I'm listening for the sentence the person didn't mean to say.",
  },
  {
    k: "Frame",
    body: "I rewrite the brief as a one-line emotional premise. If I can't say it like a film logline, I don't understand it yet.",
  },
  {
    k: "Sketch",
    body: "Pen, paper, and an unreasonable number of bad ideas. Speed before precision. Volume before taste.",
  },
  {
    k: "Prototype",
    body: "Figma + small bits of code. I care about the third tap, the empty state, and what happens when the wifi dies.",
  },
  {
    k: "Test",
    body: "I watch real people use it and try not to flinch. I take notes on what they almost did, not just what they did.",
  },
  {
    k: "Ship",
    body: "The work isn't done until the seams are invisible — and until I've written the changelog like it matters.",
  },
];

export function Process() {
  const { colors } = useTheme();
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative py-32 md:py-44">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${colors.accent}12, transparent 60%)`,
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          className="mb-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `${colors.text}8c` }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
          <span>How I Work</span>
          <span
            className="ml-auto hidden text-[10px] tracking-[0.22em] md:inline"
            style={{ color: `${colors.textDim}59` }}
          >
            click a step
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            className="flex flex-wrap gap-2 lg:col-span-5 lg:flex-col lg:gap-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={s.k}
                  type="button"
                  onClick={() => setActive(i)}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="group flex items-center gap-4 rounded-sm px-3 py-2 text-left transition-colors focus-visible:outline-none"
                  style={{
                    backgroundColor: isActive ? `${colors.accent}18` : "transparent",
                    borderLeft: isActive
                      ? `2px solid ${colors.accent}`
                      : "2px solid transparent",
                  }}
                  data-cursor="hover"
                  whileHover={{ x: 6 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--portfolio-display-font)",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: isActive ? colors.text : `${colors.text}66`,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="italic"
                    style={{
                      fontFamily: "var(--portfolio-display-font)",
                      fontSize: "20px",
                      fontWeight: 300,
                      color: isActive ? colors.text : `${colors.textDim}99`,
                    }}
                  >
                    {s.k}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            key={active}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div
              className="mb-4 text-[11px] uppercase tracking-[0.28em]"
              style={{ color: colors.accent }}
            >
              Step 0{active + 1}
            </div>
            <h3
              className="mb-6 italic"
              style={{
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 300,
                color: colors.text,
                lineHeight: 1.05,
              }}
            >
              {steps[active].k}.
            </h3>
            <p
              className="max-w-xl text-[15px] leading-[1.75]"
              style={{ color: `${colors.textDim}bf` }}
            >
              {steps[active].body}
            </p>

            <motion.div
              className="mt-10 flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {steps.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className="h-1 rounded-full transition-all"
                  style={{
                    width: active === i ? 32 : 8,
                    backgroundColor:
                      active === i ? colors.accent : `${colors.textDim}40`,
                  }}
                  aria-label={`Go to step ${i + 1}`}
                  data-cursor="hover"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
