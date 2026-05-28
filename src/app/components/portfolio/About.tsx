import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageLoader } from "./ImageLoader";
import willPfp from "../../../imports/will-headshot.png";
import bookCover from "../../../imports/design-of-everyday-things.png";
import { useTheme } from "../../contexts/ThemeContext";

const blocks = [
  {
    label: "Tools",
    value: "Figma · FigJam · After Effects · Premiere Pro · React · Storybook · GraphQL",
  },
  {
    label: "Studying",
    value: "Digital Arts & Sciences at UF. Product design, interaction, motion, storytelling.",
  },
  {
    label: "Previously",
    value: "Frontend intern at Cheapreats · UX research on tutoring access · motion + video work",
  },
  {
    label: "Focus",
    value: "Product design · UI systems · motion · research · storytelling",
  },
  {
    label: "Awards",
    value: "SkillsUSA National Web Design winner · Kirkpatrick & Kinslow Film Fund recipient",
  },
];

export function About() {
  const { colors, displayFont } = useTheme();
  const [expanded, setExpanded] = useState<number | null>(0);
  const photoRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 100, damping: 22 });
  const springY = useSpring(tiltY, { stiffness: 100, damping: 22 });

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tiltX.set(((e.clientX - r.left) / r.width - 0.5) * 10);
      tiltY.set(((e.clientY - r.top) / r.height - 0.5) * -8);
    };
    const onLeave = () => {
      tiltX.set(0);
      tiltY.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [tiltX, tiltY]);

  return (
    <section id="about" className="relative py-32 md:py-44">
      <motion.div
        className="mx-auto max-w-[1400px] px-6 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="mb-12 md:mb-16"
          style={{
            fontFamily: displayFont,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            color: `${colors.text}99`,
            letterSpacing: "-0.02em",
          }}
        >
          About
        </h2>

        <motion.div
          className="mb-16 grid max-w-4xl grid-cols-[72px_1fr] items-start gap-x-7 gap-y-5 md:grid-cols-[88px_1fr] md:gap-x-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={bookCover}
            alt="The Design of Everyday Things book cover"
            className="h-[112px] w-[72px] rounded-sm object-cover shadow-md ring-1 md:h-[132px] md:w-[88px]"
            style={{
              borderColor: `${colors.border}`,
              boxShadow: `0 8px 24px ${colors.bg}99`,
            }}
          />
          <blockquote className="min-w-0 pt-1">
            <p
              className="text-[18px] leading-[1.55] md:text-[22px] md:leading-[1.5]"
              style={{ color: colors.text }}
            >
              &ldquo;A brilliant solution to the wrong problem can be worse than no solution at
              all: solve the correct problem.&rdquo;
            </p>
            <footer
              className="mt-5 text-[13px] leading-relaxed md:text-[14px]"
              style={{ color: colors.textMuted }}
            >
              —{" "}
              <strong style={{ color: colors.text, fontWeight: 600 }}>
                Donald A. Norman
              </strong>
              ,{" "}
              <a
                href="https://www.goodreads.com/work/quotes/18518"
                target="_blank"
                rel="noopener noreferrer"
                className="italic underline-offset-2 transition-colors hover:underline"
                style={{ color: colors.accent }}
                data-cursor="hover"
              >
                The Design of Everyday Things
              </a>
            </footer>
          </blockquote>
        </motion.div>

        <motion.div
          className="grid items-start gap-10 md:grid-cols-12 md:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="md:col-span-5"
          >
            <motion.div
              ref={photoRef}
              className="relative mx-auto w-full max-w-[360px] md:mx-0 md:max-w-none"
              style={{ perspective: 900 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
              data-cursor="hover"
            >
              <motion.div
                className="aspect-square w-full overflow-hidden rounded-sm"
                style={{ rotateX: springY, rotateY: springX }}
              >
                <ImageLoader
                  src={willPfp}
                  alt="William Fleckenstein"
                  className="h-full w-full object-cover object-center"
                  style={{
                    filter:
                      "brightness(0.92) contrast(1.04) saturate(0.92)",
                  }}
                />
              </motion.div>
              <div
                className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset"
                style={{ borderColor: `${colors.text}12` }}
              />
              <motion.div
                className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.32em]"
                style={{ color: `${colors.text}b3` }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                W.F. · 2026
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-10 md:col-span-7"
          >
            <p
              className="max-w-[640px] text-[15px] leading-[1.75] md:text-[16px]"
              style={{ color: colors.text }}
            >
              Hi, I&apos;m Will. The quote above sums up my passion for product design: iterating
              until you&apos;re solving the right problem for people. I&apos;m grateful my
              professor, Prof. Xu, recommended this book. It&apos;s helped shape a lot of how I
              think about UI/UX.
            </p>

            <motion.div
              className="grid gap-x-10 gap-y-4 md:grid-cols-2"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {blocks.map((b, i) => {
                const isOpen = expanded === i;
                return (
                  <motion.button
                    key={b.label}
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : i)}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="group w-full border-t pt-5 text-left transition-colors focus-visible:outline-none"
                    style={{
                      borderColor: isOpen ? `${colors.accent}44` : `${colors.border}`,
                    }}
                    data-cursor="hover"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="mb-2 flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.22em]"
                      style={{ color: isOpen ? colors.text : `${colors.text}99` }}
                    >
                      <span>{b.label}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: isOpen ? colors.accent : colors.text }}
                      >
                        +
                      </motion.span>
                    </motion.div>
                    <motion.div
                      initial={false}
                      animate={{
                        maxHeight: isOpen ? 120 : 0,
                        opacity: isOpen ? 1 : 0.55,
                      }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-2 text-[13.5px] leading-[1.6]"
                        style={{ color: colors.textMuted }}
                      >
                        {b.value}
                      </p>
                    </motion.div>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
