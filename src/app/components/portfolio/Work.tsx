import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { projects, type CaseStudy } from "./projects";
import { useTheme } from "../../contexts/ThemeContext";

export function Work({ onOpen }: { onOpen: (slug: string) => void }) {
  const { colors, displayFont } = useTheme();

  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
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
          Selected Work
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <ProjectCard
                project={p}
                onOpen={onOpen}
                colors={colors}
                displayFont={displayFont}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
  colors,
  displayFont,
}: {
  project: CaseStudy;
  onOpen: (slug: string) => void;
  colors: ReturnType<typeof useTheme>["colors"];
  displayFont: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(project.slug)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor="hover"
      className="group flex w-full flex-col text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--focus-bg)]"
      style={{
        cursor: "pointer",
        ["--focus-ring" as string]: `${colors.accent}66`,
        ["--focus-bg" as string]: colors.bg,
      }}
    >
      <motion.div
        className="relative aspect-square w-full overflow-hidden"
        style={{ backgroundColor: project.tileColor }}
        animate={{ scale: hover ? 1.02 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-6 md:p-8"
          animate={{ y: hover ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <ImageWithFallback
            src={project.mockup}
            alt={project.title}
            className={
              project.device === "phone"
                ? "h-[88%] w-auto max-w-[78%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                : "h-[72%] w-auto max-w-[88%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            }
          />
        </motion.div>

        <span
          className="absolute right-4 top-4 text-xl transition-opacity duration-300"
          style={{ color: colors.text, opacity: hover ? 1 : 0 }}
        >
          ↗
        </span>
      </motion.div>

      <div className="mt-5 flex flex-col gap-2 md:mt-6">
        <h3
          className="leading-tight tracking-[-0.02em]"
          style={{
            fontFamily: displayFont,
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 400,
            color: colors.text,
          }}
        >
          {project.title}
        </h3>
        <p
          className="max-w-md text-[14px] leading-relaxed md:text-[15px]"
          style={{ color: colors.textMuted }}
        >
          {project.tag}
        </p>
        <p
          className="text-[11px] uppercase tracking-[0.22em]"
          style={{ color: `${colors.text}55` }}
        >
          {project.year}
        </p>
      </div>
    </button>
  );
}
