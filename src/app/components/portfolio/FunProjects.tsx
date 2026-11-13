import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTheme } from "../../contexts/ThemeContext";
import { analytics } from "../../lib/analytics";
import ghostCatchersMockup from "../../../imports/fun-ghost-catchers-mockup.png";
import holidayHubMockup from "../../../imports/fun-holiday-hub-mockup.png";
import wneaMockup from "../../../imports/fun-wnea-mockup.png";

type FunProject = {
  slug: string;
  title: string;
  tag: string;
  tool: string;
  year: string;
  url: string;
  mockup: string;
  tileColor: string;
};

/** Side projects and class experiments that live on their own sites. */
const funProjects: FunProject[] = [
  {
    slug: "ghost-catchers",
    title: "Ghost Catchers",
    tag: "Ghost removal, as a service",
    tool: "Framer",
    year: "2026",
    url: "https://experienced-increase-484886-07328ab8b.framer.app/",
    mockup: ghostCatchersMockup,
    tileColor: "#5a1f33",
  },
  {
    slug: "holiday-hub",
    title: "Holiday Hub",
    tag: "A festive holiday hub for Gainesville",
    tool: "Figma Sites",
    year: "2025",
    url: "https://border-noodle-56938459.figma.site/",
    mockup: holidayHubMockup,
    tileColor: "#1e5b3c",
  },
  {
    slug: "wnea",
    title: "WNEA",
    tag: "A spooky portal for staying \u201cnormal\u201d",
    tool: "Figma Sites",
    year: "2026",
    url: "https://copy-arc-70695952.figma.site/",
    mockup: wneaMockup,
    tileColor: "#6e5d22",
  },
];

export function FunProjects() {
  const { colors, displayFont } = useTheme();

  return (
    <section id="fun" className="relative pb-32 md:pb-44">
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
          Fun Projects
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {funProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <FunProjectCard project={p} colors={colors} displayFont={displayFont} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FunProjectCard({
  project,
  colors,
  displayFont,
}: {
  project: FunProject;
  colors: ReturnType<typeof useTheme>["colors"];
  displayFont: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => analytics.funProjectClick(project.slug)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor="hover"
      aria-label={`${project.title} (opens live site in a new tab)`}
      className="group flex w-full flex-col text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--focus-bg)]"
      style={{
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
            alt={`${project.title} website`}
            className="h-auto w-[88%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        <span
          className="absolute right-4 top-4 text-xl transition-opacity duration-300"
          style={{ color: "#ffffff", opacity: hover ? 1 : 0 }}
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
          {project.year} · {project.tool}
        </p>
      </div>
    </a>
  );
}
