import { motion } from "motion/react";
import { useEffect } from "react";
import { ImageLoader } from "./ImageLoader";
import { findProject, projects, type CaseStudy } from "./projects";
import { TwineCaseStudy } from "./TwineCaseStudy";
import { HarmonyCaseStudy } from "./HarmonyCaseStudy";
import { useTheme } from "../../contexts/ThemeContext";
import { Nav } from "./Nav";

export function CaseStudyPage({
  slug,
  onNavigate,
}: {
  slug: string;
  onNavigate: (slug: string | null) => void;
}) {
  if (slug === "harmony") return <HarmonyCaseStudy onNavigate={onNavigate} />;
  if (slug === "twine") return <TwineCaseStudy onNavigate={onNavigate} />;
  const project = findProject(slug) ?? projects[0];
  const { theme, colors } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  return (
    <article className="relative">
      <Nav />

      <CaseHero project={project} colors={colors} />
      <CaseMeta project={project} colors={colors} />
      <CasePremise project={project} colors={colors} />
      <CaseChapters project={project} colors={colors} />
      <CaseGallery project={project} colors={colors} />
      <CaseOutcome project={project} colors={colors} />
      <CaseNext project={project} onNavigate={onNavigate} colors={colors} />
    </article>
  );
}

function CaseHero({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 -z-10">
        <ImageLoader
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${project.hue} mix-blend-multiply opacity-90`} />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${colors.bg}8c 0%, ${colors.bg}66 40%, ${colors.bg}f2 100%)`,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="leading-[0.92] tracking-[-0.02em]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(64px, 13vw, 200px)",
            fontWeight: 300,
            color: colors.text,
          }}
        >
          {project.title}
        </motion.h1>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em]"
        style={{ color: `${colors.textDim}66` }}
      >
        ◉ rec · scene 01
      </div>
    </section>
  );
}

function CaseMeta({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section
      className="relative border-y py-10"
      style={{ borderColor: `${colors.border}1a` }}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
        {project.meta.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
          >
            <div
              className="mb-2 text-[11px] uppercase tracking-[0.22em]"
              style={{ color: `${colors.textDim}73` }}
            >
              {m.label}
            </div>
            <div className="text-[14px]" style={{ color: colors.textMuted }}>
              {m.value}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CasePremise({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section id="premise" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className="mb-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `${colors.textDim}8c` }}
        >
          <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
          <span>The premise</span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4 }}
          className="max-w-[1100px] leading-[1.15] tracking-[-0.015em]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(28px, 4.4vw, 64px)",
            fontWeight: 300,
            color: colors.text,
          }}
        >
          {project.premise}
        </motion.p>
      </div>
    </section>
  );
}

function CaseChapters({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section id="chapters" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-20 md:gap-32">
          {project.chapters.map((c, i) => (
            <motion.div
              key={c.n}
              id={`chapter-${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid scroll-mt-32 gap-8 border-t pt-10 md:grid-cols-12"
              style={{ borderColor: `${colors.border}1a` }}
            >
              <div className="md:col-span-3">
                <div
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "64px",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: `${colors.accent}cc`,
                  }}
                >
                  {c.n}
                </div>
                <div
                  className="mt-3 text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: `${colors.textDim}73` }}
                >
                  Chapter {i + 1}
                </div>
              </div>
              <div className="md:col-span-9">
                <h3
                  className="mb-6 italic"
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: colors.text,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="max-w-[760px] text-[15px] leading-[1.75]"
                  style={{ color: `${colors.textDim}cc` }}
                >
                  {c.body}
                </p>

                {c.bullets && (
                  <ul className="mt-8 grid max-w-[820px] gap-x-10 gap-y-4 md:grid-cols-2">
                    {c.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-4 border-t pt-3"
                        style={{ borderColor: `${colors.border}1a` }}
                      >
                        <span
                          className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: `${colors.accent}b3` }}
                        />
                        <div>
                          <div
                            className="text-[11px] uppercase tracking-[0.22em]"
                            style={{ color: `${colors.textDim}8c` }}
                          >
                            {b.label}
                          </div>
                          <div
                            className="mt-1 text-[13.5px] leading-[1.6]"
                            style={{ color: `${colors.textDim}bf` }}
                          >
                            {b.value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {c.quote && (
                  <div
                    className="mt-10 border-l-2 pl-6 italic"
                    style={{
                      fontFamily: "var(--portfolio-display-font)",
                      borderColor: `${colors.accent}99`,
                      color: `${colors.accent}e6`,
                      fontSize: "clamp(20px, 2.2vw, 28px)",
                      fontWeight: 300,
                      lineHeight: 1.35,
                    }}
                  >
                    &ldquo;{c.quote}&rdquo;
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseGallery({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section id="stills" className="relative scroll-mt-32 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className="mb-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `${colors.textDim}8c` }}
        >
          <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
          <span>Stills</span>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {project.gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.1 }}
              className={`relative overflow-hidden ${
                i === 0
                  ? "md:col-span-4 md:row-span-2"
                  : "md:col-span-2"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <ImageLoader
                  src={g.src}
                  alt={g.caption}
                  className="h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.04]"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.hue} mix-blend-multiply opacity-50`} />
                <div
                  className="absolute inset-0 ring-1 ring-inset"
                  style={{ borderColor: `${colors.accent}26` }}
                />
              </div>
              <figcaption
                className="mt-3 text-[11px] uppercase tracking-[0.22em]"
                style={{ color: `${colors.textDim}73` }}
              >
                Still {String(i + 1).padStart(2, "0")} · {g.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseOutcome({ project, colors }: { project: CaseStudy; colors: any }) {
  return (
    <section id="closing" className="relative scroll-mt-32 py-32 md:py-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${colors.accent}14, transparent 60%)`,
        }}
      />
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
            style={{ color: `${colors.textDim}8c` }}
          >
            <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
            <span>Outcome</span>
          </div>
          <p
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(22px, 2.6vw, 32px)",
              fontWeight: 300,
              lineHeight: 1.3,
              color: colors.text,
            }}
          >
            {project.outcome}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
        >
          <div
            className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
            style={{ color: `${colors.textDim}8c` }}
          >
            <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
            <span>Reflection</span>
          </div>
          <p
            className="italic"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(22px, 2.6vw, 32px)",
              fontWeight: 300,
              lineHeight: 1.3,
              color: `${colors.accent}e6`,
            }}
          >
            {project.reflection}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CaseNext({
  project,
  onNavigate,
  colors,
}: {
  project: CaseStudy;
  onNavigate: (slug: string | null) => void;
  colors: any;
}) {
  const next = findProject(project.next) ?? projects[0];
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pt-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${colors.accent}2e, transparent 60%)`,
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div
          className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `${colors.textDim}8c` }}
        >
          <span className="h-px w-10" style={{ backgroundColor: `${colors.textDim}4d` }} />
          <span>Next case</span>
        </div>
        <button
          onClick={() => onNavigate(next.slug)}
          data-cursor="hover"
          className="group block w-full text-left"
        >
          <div className="flex items-end justify-between gap-6">
            <h3
              className="leading-[0.95] tracking-[-0.02em] transition-colors"
              style={{
                color: colors.text,
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(48px, 9vw, 140px)",
                fontWeight: 300,
              }}
            >
              {next.title}
            </h3>
            <div
              className="shrink-0 pb-4 transition-transform duration-500 group-hover:translate-x-2"
              style={{ color: colors.accent }}
            >
              <span style={{ fontSize: "32px" }}>↗</span>
            </div>
          </div>
          <div
            className="mt-4 italic"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "22px",
              fontWeight: 300,
              color: `${colors.textDim}b3`,
            }}
          >
            {next.tag}
          </div>
        </button>

        <div
          className="mt-24 flex flex-wrap items-end justify-between gap-4 border-t pt-6 text-[11px] uppercase tracking-[0.22em]"
          style={{
            borderColor: `${colors.border}1a`,
            color: `${colors.textDim}66`,
          }}
        >
          <button
            onClick={() => onNavigate(null)}
            className="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${colors.textDim}66`)}
          >
            ← Back to index
          </button>
          <span>© 2026 William Fleckenstein</span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: colors.accent }}
            />
            End of scene
          </span>
        </div>
      </div>
    </section>
  );
}
