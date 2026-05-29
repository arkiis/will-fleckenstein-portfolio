import { motion } from "motion/react";
import { useState, useEffect, type ReactNode } from "react";
import {
  EyeOff,
  ShieldQuestion,
  Compass,
  BarChart3,
  Camera,
  GraduationCap,
  Quote as QuoteIcon,
  Layers,
  Sparkles,
  Smile,
  Trophy,
  CheckCheck,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ImageLoader } from "./ImageLoader";
import { findProject, projects } from "./projects";
import gatorLogo from "../../../imports/gator_UI_logo.png";
import classPhoto from "../../../imports/special_thanks.jpg";
import twineHeroDemoVideo from "../../../imports/twine-hero-demo.mp4";
import twineLogo from "../../../imports/twine-logo.png";
import { InitialStruggleSection } from "./twine/InitialStruggleSection";
import { WhatIDidSection } from "./twine/WhatIDidSection";
import { RedesignSolutionsSection } from "./twine/RedesignSolutionsSection";
import { useTheme } from "../../contexts/ThemeContext";
import { Nav } from "./Nav";

export function TwineCaseStudy({
  onNavigate,
}: {
  onNavigate: (slug: string | null) => void;
}) {
  const project = findProject("twine") ?? projects[0];
  const { colors } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <article className="relative">
      <Nav />
      <Hero project={project} colors={colors} />
      <InitialStruggleSection />
      <WhatIDidSection />
      <RedesignSolutionsSection />
      <PainPoints />
      <Brand />
      <Principles />
      <Closing project={project} onNavigate={onNavigate} />
    </article>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  HERO                                                     */
/* ────────────────────────────────────────────────────────── */

function HeroField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[var(--portfolio-text-muted)]">
        {label}
      </div>
      <div className="text-[14px] leading-snug text-[var(--portfolio-text)]">{value}</div>
    </div>
  );
}

function Hero({
  project,
  colors,
}: {
  project: NonNullable<ReturnType<typeof findProject>>;
  colors: ReturnType<typeof useTheme>["colors"];
}) {
  return (
    <section className="relative grid min-h-[100svh] lg:grid-cols-2">
      <div
        className="flex flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14"
        style={{ backgroundColor: colors.bg }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-4 md:gap-6"
        >
          <img
            src={twineLogo}
            alt="Twine logo"
            className="h-[clamp(56px,10vw,88px)] w-[clamp(56px,10vw,88px)] shrink-0 rounded-[18px] object-contain shadow-sm"
          />
          <h1
            className="leading-[0.95] tracking-[-0.02em] text-[var(--portfolio-text)]"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 400,
            }}
          >
            {project.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18 }}
          className="mt-12 max-w-xl"
        >
          <div className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[var(--portfolio-text-muted)]">
            Overview
          </div>
          <p className="text-[14px] leading-[1.75] text-[var(--portfolio-text-muted)] md:text-[15px]">
            In my{" "}
            <a
              href="https://www.jou.ufl.edu/assets/syllabi/202601/mpmt/RTV-3443-Xu-syllabus-media-user-experience-2026-spring%5B1432%5D.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 transition-colors hover:underline"
              style={{ color: colors.accent }}
              data-cursor="hover"
            >
              User Experience
            </a>{" "}
            class during Spring 2026, we were asked to gravitate toward an app idea from a list of
            options. Given my prior struggle with building an online business, I immediately
            gravitated toward the idea of an app that helps bridge the connection between UF student
            businesses and student consumers. Alongside two other peers, this became my semester long
            project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.26 }}
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t pt-10 md:max-w-lg"
          style={{ borderColor: `${colors.border}` }}
        >
          <HeroField label="My role" value="Product Designer" />
          <HeroField label="Team" value="3 UX/UI Designers" />
          <HeroField label="Platform" value="iOS · Mobile" />
          <HeroField label="Timeline" value="January 2026 — April 2026" />
        </motion.div>
      </div>

      <div
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 py-16 lg:min-h-0 lg:px-10"
        style={{
          background: "#000000",
        }}
      >
        <motion.video
          src={twineHeroDemoVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Twine demo video"
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  INITIAL STRUGGLE                                         */
/* ────────────────────────────────────────────────────────── */

/* ────────────────────────────────────────────────────────── */
/*  RESEARCH — clean horizontal split                        */
/* ────────────────────────────────────────────────────────── */

function Research() {
  return (
    <section
      id="research"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(214,139,74,0.06), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="04" label="Research approach" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2
              className="leading-[1.1] tracking-[-0.01em] text-[var(--portfolio-text)]"
              style={{
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(28px, 3.6vw, 48px)",
                fontWeight: 300,
              }}
            >
              Semi-structured interviews with both sides of the marketplace.
            </h2>
            <p className="mt-6 max-w-[440px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
              Each participant answered ten core questions, followed by
              questions tailored to their role. This helped maintain consistency
              across interviews while allowing for deeper exploration of
              individual experiences.
            </p>
          </div>

          {/* Clean diagram: two stat cards + center badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="md:col-span-7"
          >
            <div className="relative grid grid-cols-2 items-stretch overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10">
              {/* Left card — Entrepreneurs */}
              <div
                className="relative flex flex-col items-center justify-center px-6 py-14"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(0,33,165,0.18), transparent 65%), var(--portfolio-card)",
                }}
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#8090d2]">
                  Entrepreneurs
                </div>
                <div
                  className="text-[var(--portfolio-text)]"
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "clamp(72px, 9vw, 128px)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  4
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
                  participants
                </div>
              </div>

              {/* Right card — Consumers */}
              <div
                className="relative flex flex-col items-center justify-center border-l border-[var(--portfolio-border)]/10 px-6 py-14"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(95,167,255,0.16), transparent 65%), var(--portfolio-card)",
                }}
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                  Consumers
                </div>
                <div
                  className="text-[var(--portfolio-text)]"
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "clamp(72px, 9vw, 128px)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  3
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
                  participants
                </div>
              </div>

              {/* Center badge */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-[var(--portfolio-accent)]/40 bg-[var(--portfolio-bg)]/85 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-accent)] backdrop-blur-sm">
                  10 questions × 2 roles
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PAIN POINTS — split by role                              */
/* ────────────────────────────────────────────────────────── */

function PainPoints() {
  const entrepreneur = [
    {
      icon: EyeOff,
      title: "No visibility",
      body: "Most students never discover the services they offer.",
    },
    {
      icon: BarChart3,
      title: "No tools to grow",
      body: "Communication and tracking are scattered across DMs, forms, and notes.",
    },
  ];
  const consumer = [
    {
      icon: Compass,
      title: "Broken discovery",
      body: "There's no central place to browse, compare, or find what's nearby.",
    },
    {
      icon: ShieldQuestion,
      title: "Trust gaps",
      body: "Quality is hard to verify before booking, since reviews live everywhere and nowhere.",
    },
  ];

  return (
    <section
      id="pain-points"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="04" label="User pain points" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-14 max-w-[900px] leading-[1.1] tracking-[-0.01em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(28px, 3.6vw, 48px)",
            fontWeight: 300,
          }}
        >
          Two roles, two{" "}
          <span className="italic text-[var(--portfolio-accent)]">biggest</span> frictions each.
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <PainColumn tone="cool" label="Entrepreneurs" items={entrepreneur} />
          <PainColumn tone="warm" label="Consumers" items={consumer} />
        </div>
      </div>
    </section>
  );
}

function PainColumn({
  tone,
  label,
  items,
}: {
  tone: "warm" | "cool";
  label: string;
  items: { icon: typeof EyeOff; title: string; body: string }[];
}) {
  const accent = tone === "warm" ? "var(--portfolio-accent)" : "var(--portfolio-secondary)";
  return (
    <div>
      <div
        className="mb-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em]"
        style={{ color: accent }}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: accent }}
        />
        {label}
      </div>
      <div className="flex flex-col gap-4">
        {items.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.08 }}
            className="rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-6 transition-colors hover:border-[var(--portfolio-accent)]/30"
          >
            <div className="flex items-start gap-4">
              <c.icon
                size={22}
                strokeWidth={1.25}
                style={{ color: accent }}
                className="mt-1 shrink-0"
              />
              <div>
                <div className="text-[15px] text-[var(--portfolio-text)]">{c.title}</div>
                <div className="mt-2 text-[13.5px] leading-[1.65] text-[#cfc6b6]/70">
                  {c.body}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  FINDINGS — split comparison                              */
/* ────────────────────────────────────────────────────────── */

function Findings() {
  const consumers = [
    "Trust before everything",
    "Cost · Quality · Turnaround",
    "Reviews & portfolios",
    "Fast responses, easy booking",
  ];
  const entrepreneurs = [
    "Visibility is the bottleneck",
    "Scattered communication",
    "Want structure & analytics",
    "Tired of switching tools",
  ];
  return (
    <section
      id="findings"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="06" label="What both sides said" />

        <div className="grid gap-4 md:grid-cols-2">
          <ComparisonColumn
            tone="cool"
            label="Consumers"
            portrait="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
            quote="I just want one place where I can find everything I need on campus."
            items={consumers}
          />
          <ComparisonColumn
            tone="warm"
            label="Entrepreneurs"
            portrait="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80"
            quote="I'm excited to build my brand and turn what I love into something bigger."
            items={entrepreneurs}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 flex items-start gap-4 border-l-2 border-[var(--portfolio-accent)]/60 pl-6"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-accent)]">
            Shared truth
          </div>
          <div
            className="text-[var(--portfolio-text)]"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 300,
              lineHeight: 1.35,
            }}
          >
            One hub to{" "}
            <span className="italic text-[var(--portfolio-accent)]">discover</span>,{" "}
            <span className="italic text-[var(--portfolio-accent)]">verify</span>, and{" "}
            <span className="italic text-[var(--portfolio-accent)]">manage</span> student-run
            services.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonColumn({
  tone,
  label,
  portrait,
  quote,
  items,
}: {
  tone: "warm" | "cool";
  label: string;
  portrait: string;
  quote: string;
  items: string[];
}) {
  const accent = tone === "warm" ? "var(--portfolio-accent)" : "var(--portfolio-secondary)";
  return (
    <div
      className="relative rounded-sm border border-[var(--portfolio-border)]/10 p-8 md:p-12"
      style={{
        background:
          tone === "warm"
            ? "radial-gradient(ellipse at 20% 0%, rgba(95,167,255,0.12), transparent 55%), var(--portfolio-card)"
            : "radial-gradient(ellipse at 80% 0%, rgba(128,144,210,0.12), transparent 55%), var(--portfolio-card)",
      }}
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em]"
          style={{ color: accent }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
          />
          {label}
        </div>
        <div
          className="h-14 w-14 overflow-hidden rounded-full border"
          style={{ borderColor: `${accent}55` }}
        >
          <ImageLoader
            src={portrait}
            alt={label}
            className="h-full w-full object-cover"
            style={{
              filter:
                "brightness(0.7) contrast(1.05) saturate(0.55) sepia(0.18) hue-rotate(-8deg)",
            }}
          />
        </div>
      </div>

      <div className="mb-8 flex items-start gap-3">
        <QuoteIcon
          size={18}
          strokeWidth={1.25}
          className="mt-1 shrink-0"
          style={{ color: accent }}
        />
        <p
          className="italic text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "22px",
            fontWeight: 300,
            lineHeight: 1.35,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <ul className="space-y-3">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 border-t border-[var(--portfolio-border)]/8 pt-3 text-[13.5px] text-[#cfc6b6]/80"
          >
            <span
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: accent }}
            >
              0{i + 1}
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PERSONAS                                                 */
/* ────────────────────────────────────────────────────────── */

function Personas() {
  const personas = [
    {
      icon: Camera,
      role: "Student entrepreneur",
      name: "Christopher Smith",
      age: 21,
      traits: "Creative · Passionate · Outgoing",
      portrait:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
      quote:
        "I'm excited to build my brand and turn what I love into something bigger.",
      needs: [
        "Showcase portfolio",
        "Market services",
        "Manage clients",
        "Build credibility",
      ],
      pain: ["Hard to gain trust", "Schedule conflicts", "Tools everywhere", "Limited reach"],
      tone: "warm" as const,
    },
    {
      icon: GraduationCap,
      role: "Student consumer",
      name: "Kamille Parker",
      age: 18,
      traits: "Curious · Intelligent · Social",
      portrait:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
      quote:
        "I just want one place where I can find everything I need on campus.",
      needs: [
        "Find local services",
        "Browse one place",
        "Follow favorites",
        "No-car convenience",
      ],
      pain: ["Few connections", "Wants timely service", "No transport"],
      tone: "cool" as const,
    },
  ];
  return (
    <section
      id="personas"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="07" label="User personas" />

        <div className="grid gap-6 md:grid-cols-2">
          {personas.map((p, i) => {
            const accent = p.tone === "warm" ? "var(--portfolio-accent)" : "var(--portfolio-secondary)";
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 p-8 md:p-10"
                style={{
                  background:
                    p.tone === "warm"
                      ? "radial-gradient(ellipse at 0% 0%, rgba(95,167,255,0.1), transparent 55%), var(--portfolio-card)"
                      : "radial-gradient(ellipse at 100% 0%, rgba(128,144,210,0.1), transparent 55%), var(--portfolio-card)",
                }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div
                    className="h-20 w-20 overflow-hidden rounded-full border"
                    style={{ borderColor: `${accent}66` }}
                  >
                    <ImageLoader
                      src={p.portrait}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      style={{
                        filter:
                          "brightness(0.72) contrast(1.05) saturate(0.55) sepia(0.18) hue-rotate(-8deg)",
                      }}
                    />
                  </div>
                  <div
                    className="text-right text-[10px] uppercase tracking-[0.32em]"
                    style={{ color: accent }}
                  >
                    <div className="flex items-center justify-end gap-2">
                      <p.icon size={14} strokeWidth={1.5} />
                      {p.role}
                    </div>
                  </div>
                </div>

                <div
                  className="mt-8 text-[var(--portfolio-text)]"
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 300,
                    lineHeight: 1.05,
                  }}
                >
                  {p.name}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/55">
                  <span>Age {p.age}</span>
                  <span>UF</span>
                  <span>{p.traits}</span>
                </div>

                <p
                  className="mt-8 max-w-[480px] italic text-[var(--portfolio-text)]/85"
                  style={{
                    fontFamily: "var(--portfolio-display-font)",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: 1.35,
                  }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div>
                    <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
                      Needs
                    </div>
                    <ul className="space-y-1.5 text-[13px] text-[#cfc6b6]/80">
                      {p.needs.map((n) => (
                        <li key={n} className="flex items-start gap-2">
                          <span
                            className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full"
                            style={{ background: accent }}
                          />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
                      Frustrations
                    </div>
                    <ul className="space-y-1.5 text-[13px] text-[#cfc6b6]/55">
                      {p.pain.map((n) => (
                        <li key={n} className="flex items-start gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--portfolio-text-muted)]/40" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  BRAND                                                    */
/* ────────────────────────────────────────────────────────── */

function Brand() {
  return (
    <section
      id="brand"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="05" label="Brand identity" />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-14 max-w-[900px]"
        >
          <h2
            className="leading-[1.1] tracking-[-0.01em] text-[var(--portfolio-text)]"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "clamp(28px, 3.4vw, 44px)",
              fontWeight: 300,
            }}
          >
            A knot for{" "}
            <span className="italic text-[var(--portfolio-accent)]">connection</span>. A blue
            for <span className="italic text-[var(--portfolio-accent)]">trust</span>. A gator
            for <span className="italic text-[var(--portfolio-accent)]">belonging</span>.
          </h2>
          <p className="mt-6 max-w-[640px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
            Twine's identity blends familiarity and friendliness, rooted in the
            campus it serves and lifted by a small mascot subtly tucked inside
            the knot.
          </p>
        </motion.div>

        {/* Logo + brand attributes side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="grid gap-4 md:grid-cols-12"
        >
          {/* Logo showcase */}
          <div
            className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-7 md:h-auto"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(0,33,165,0.22), transparent 65%), var(--portfolio-card)",
            }}
          >
            <img
              src={gatorLogo}
              alt="Twine gator logo, final design"
              className="max-h-[42%] max-w-[42%] object-contain drop-shadow-[0_8px_30px_rgba(128,144,210,0.25)]"
            />
            <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.32em] text-[#8090d2]">
              Logo · Final mark
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
              Knot + Gator
            </div>
          </div>

          {/* Attribute cards stacked */}
          <div className="grid gap-4 md:col-span-5 md:grid-cols-2">
            {[
              { t: "Knot", c: "Symbol of connection between two sides" },
              { t: "Blue", c: "UF heritage, professional trust" },
              { t: "Lighter blue", c: "Warmth, contrast, approachability" },
              { t: "Gator", c: "Local identity, subtly embedded" },
            ].map((b, i) => (
              <div
                key={b.t}
                className="rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-5"
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                  0{i + 1}
                </div>
                <div className="text-[15px] text-[var(--portfolio-text)]">{b.t}</div>
                <div className="mt-1 text-[12.5px] leading-[1.55] text-[#cfc6b6]/65">
                  {b.c}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Palette + Typography, balanced row that aligns with logo above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-4 grid gap-4 md:grid-cols-12"
        >
          {/* Palette */}
          <div className="overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-7">
            <div className="flex items-center justify-between border-b border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                Color palette
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
                3 tokens
              </div>
            </div>
            <div className="grid grid-cols-3">
              <Swatch hex="#0021A5" label="Trust" />
              <Swatch hex="#8090D2" label="Warmth" />
              <Swatch hex="#EFEFEF" label="Surface" dark />
            </div>
          </div>

          {/* Typography */}
          <div className="overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-5">
            <div className="flex items-center justify-between border-b border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                Typography
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
                Inter
              </div>
            </div>
            <div className="bg-[var(--portfolio-card)] p-6">
              <div
                className="text-[42px] leading-none text-[var(--portfolio-text)]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Inter Bold
              </div>
              <div
                className="mt-3 text-[16px] leading-snug text-[#cfc6b6]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Inter Regular, for legibility and a campus friendly tone.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Swatch({
  hex,
  label,
  dark,
}: {
  hex: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="relative h-32" style={{ background: hex }}>
      <div
        className={`absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.28em] ${
          dark ? "text-black/60" : "text-white/85"
        }`}
      >
        {hex}
      </div>
      <div
        className={`absolute right-3 top-3 text-[10px] uppercase tracking-[0.28em] ${
          dark ? "text-black/60" : "text-white/70"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PRINCIPLES                                               */
/* ────────────────────────────────────────────────────────── */

function Principles() {
  const items = [
    {
      icon: Layers,
      t: "Visual hierarchy",
      b: "Scannable structure, progressive disclosure.",
      link: "https://developer.apple.com/design/human-interface-guidelines/layout#Visual-hierarchy",
      src: "iOS HIG",
    },
    {
      icon: Sparkles,
      t: "Recognizable, highly simplified design",
      b: "Universal icon language, low cognitive load.",
      link: "https://developer.apple.com/design/human-interface-guidelines/icons#Best-practices",
      src: "iOS HIG",
    },
    {
      icon: CheckCheck,
      t: "Consistent feedback",
      b: "Every state reads clearly across the system.",
      link: "https://developer.apple.com/design/human-interface-guidelines/feedback#Best-practices",
      src: "iOS HIG",
    },
    {
      icon: Smile,
      t: "Anthropomorphism",
      b: "The gator makes the system feel social.",
      link: "https://www.researchgate.net/publication/221517042_Computer_are_social_actors",
      src: "CASA · Nass & Reeves",
    },
    {
      icon: Trophy,
      t: "Praise as motivation",
      b: "Positive feedback that earns engagement.",
      link: "https://www.sciencedirect.com/science/article/pii/S0747563211000355",
      src: "Behavior research",
    },
  ];
  return (
    <section
      id="principles"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(214,139,74,0.06), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="06" label="Design principles" />
        <h2
          className="mb-14 max-w-[1000px] leading-[1.2] tracking-[-0.01em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 300,
          }}
        >
          From research and brand identity, we established design principles to
          guide the product experience, drawing from{" "}
          <span className="italic text-[var(--portfolio-accent)]">CASA</span> concepts and{" "}
          <span className="italic text-[var(--portfolio-accent)]">iOS</span> design guidelines.
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              key={p.t}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative block rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-8 transition-colors hover:border-[var(--portfolio-accent)]/40 hover:bg-[var(--portfolio-card)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <p.icon size={22} strokeWidth={1.25} className="text-[var(--portfolio-accent)]" />
                <ExternalLink
                  size={14}
                  strokeWidth={1.5}
                  className="text-[var(--portfolio-text-muted)]/35 transition-colors group-hover:text-[var(--portfolio-accent)]"
                />
              </div>
              <div className="text-[15px] text-[var(--portfolio-text)]">{p.t}</div>
              <div className="mt-2 text-[13px] leading-[1.6] text-[#cfc6b6]/70">
                {p.b}
              </div>
              <div className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
                {p.src}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  SCREENS — annotated UI                                   */
/* ────────────────────────────────────────────────────────── */

function Screens({ project: _project }: { project: ReturnType<typeof findProject> & {} }) {
  return (
    <section id="screens" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="10" label="Final solution" />

        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5"
          >
            <h2
              className="leading-[1.1] tracking-[-0.01em] text-[var(--portfolio-text)]"
              style={{
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(28px, 3.6vw, 48px)",
                fontWeight: 300,
              }}
            >
              <span className="italic text-[var(--portfolio-accent)]">Final Prototype</span>
            </h2>
            <p className="mt-6 max-w-[440px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
              The final flows bring together discovery, profiles, messaging, and
              analytics into a single rhythm. Every screen is shaped by the
              research: quiet trust signals, clear hierarchy, and a tone that
              feels familiar to a campus audience.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/55">
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Discovery
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Profile
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Messaging
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Analytics
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="md:col-span-7"
          >
            {/* Loom video embed */}
            <div
              className="relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10"
              style={{
                position: "relative",
                paddingBottom: "53.75%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.loom.com/embed/b4d012b3458246cc923b539da399cc53"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
              <span>Twine · Mobile · 2026</span>
              <span>Final solution walkthrough</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  CLOSING                                                  */
/* ────────────────────────────────────────────────────────── */

function Closing({
  project,
  onNavigate,
}: {
  project: ReturnType<typeof findProject> & {};
  onNavigate: (slug: string | null) => void;
}) {
  const next = findProject(project.next) ?? projects[0];
  return (
    <section id="closing" className="relative scroll-mt-24 overflow-hidden pb-20 pt-32 md:pt-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(214,139,74,0.18), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="07" label="Special thanks" />

        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5"
          >
            <p
              className="text-[var(--portfolio-text)]"
              style={{
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(22px, 2.6vw, 32px)",
                fontWeight: 300,
                lineHeight: 1.3,
              }}
            >
              Collaborating with my class peers, and presenting our findings
              together, was a real growth moment. It reminded me how much the{" "}
              <span className="italic text-[var(--portfolio-accent)]">intention</span> behind a
              design decision matters as much as the decision itself.
            </p>
            <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
              Gratitude · Spring 2026 cohort
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10">
              <ImageLoader
                src={classPhoto}
                alt="Class presentation"
                className="h-full w-full object-cover"
                style={{
                  filter:
                    "brightness(0.78) contrast(1.05) saturate(0.6) sepia(0.16) hue-rotate(-8deg)",
                }}
              />
              <div
                className="absolute inset-0 mix-blend-overlay"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(95,167,255,0.18) 0%, rgba(20,10,30,0.32) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                The team & class
              </div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => onNavigate(next.slug)}
          data-cursor="hover"
          className="group mt-24 block w-full text-left"
        >
          <div className="mb-6 text-[11px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/55">
            Next case
          </div>
          <div className="flex items-end justify-between gap-6">
            <h3
              className="leading-[0.95] tracking-[-0.02em] text-[var(--portfolio-text)] transition-colors group-hover:text-[var(--portfolio-accent)]"
              style={{
                fontFamily: "var(--portfolio-display-font)",
                fontSize: "clamp(48px, 9vw, 140px)",
                fontWeight: 300,
              }}
            >
              {next.title}
            </h3>
            <div className="shrink-0 pb-4 text-[var(--portfolio-accent)] transition-transform duration-500 group-hover:translate-x-2">
              <span style={{ fontSize: "32px" }}>↗</span>
            </div>
          </div>
          <div
            className="mt-4 italic text-[#cfc6b6]/70"
            style={{
              fontFamily: "var(--portfolio-display-font)",
              fontSize: "22px",
              fontWeight: 300,
            }}
          >
            {next.tag}
          </div>
        </button>

        <div className="mt-24 flex flex-wrap items-end justify-between gap-4 border-t border-[var(--portfolio-border)]/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/40">
          <button onClick={() => onNavigate(null)} className="hover:text-[var(--portfolio-accent)]">
            ← Back to index
          </button>
          <span>© 2026 William Fleckenstein</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--portfolio-accent)]" />
            End of scene
          </span>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Shared                                                   */
/* ────────────────────────────────────────────────────────── */

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/55">
      <span className="h-px w-10 bg-[var(--portfolio-text-muted)]/30" />
      <span>{n}</span>
      <span className="text-[var(--portfolio-text)]/85">{label}</span>
    </div>
  );
}
