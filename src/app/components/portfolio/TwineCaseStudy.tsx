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
  Users,
  PenLine,
  MonitorSmartphone,
  Palette,
  ExternalLink,
  Heart,
  Search as SearchIcon,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ImageLoader } from "./ImageLoader";
import { findProject, projects } from "./projects";
import gatorLogo from "../../../imports/gator_UI_logo.png";
import classPhoto from "../../../imports/special_thanks.jpg";
import twinePhoneMockup from "../../../imports/twine-phone-mockup.png";
import twineLogo from "../../../imports/twine-logo.png";
import consumerGator from "../../../imports/consumer-gator.png";
import businessGator from "../../../imports/business-gator.png";
import browsingImg from "../../../imports/Browsing.png";
import analyticsImg from "../../../imports/Analytics.png";
import SearchScreen from "../../../imports/Search/Search";
import MessagingScreen from "../../../imports/Messaging6/Messaging6";
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
      <InitialStruggle />
      <WhatIDid />
      <Research />
      <PainPoints />
      <Findings />
      <Personas />
      <Brand />
      <Principles />
      <Screens project={project} />
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
          background:
            "linear-gradient(145deg, #2a3140 0%, #1a2030 55%, #141a24 100%)",
        }}
      >
        <motion.img
          src={twinePhoneMockup}
          alt="Twine iPhone mockup"
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 h-auto max-h-[min(78vh,720px)] w-full max-w-[min(92%,420px)] object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.45)]"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.08), transparent 62%)",
          }}
        />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  INITIAL STRUGGLE                                         */
/* ────────────────────────────────────────────────────────── */

function AudienceHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm bg-[var(--portfolio-accent)]/15 px-1.5 py-0.5 font-medium text-[var(--portfolio-accent)]">
      {children}
    </span>
  );
}

function GatorCharacter({
  image,
  label,
  alt,
}: {
  image: string;
  label: string;
  alt: string;
}) {
  return (
    <button
      type="button"
      className="group relative flex flex-col items-center border-0 bg-transparent p-2 outline-none"
      data-cursor="hover"
      aria-label={label}
    >
      <span
        className="pointer-events-none absolute -top-12 z-10 whitespace-nowrap rounded-full border border-[var(--portfolio-border)]/60 bg-[var(--portfolio-card)]/95 px-4 py-2 text-[13px] text-[var(--portfolio-text)] opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100 md:-top-14 md:text-[14px]"
        style={{ fontFamily: "var(--portfolio-display-font)" }}
        role="tooltip"
      >
        {label}
      </span>
      <img
        src={image}
        alt={alt}
        className="h-auto max-h-[min(200px,38vw)] w-auto max-w-[min(200px,42vw)] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-y-1 group-focus-visible:scale-[1.06] md:max-h-[min(300px,32vh)] md:max-w-[min(280px,28vw)]"
      />
    </button>
  );
}

function InitialStruggle() {
  return (
    <section
      id="initial-struggle"
      className="relative scroll-mt-24 py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="01" label="Initial Struggle" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="max-w-[760px] space-y-6"
        >
          <p className="text-[15px] leading-[1.8] text-[var(--portfolio-text-muted)] md:text-[16px]">
            Compared to the other ideas in the class, ours was more complex because we had two
            distinct user groups with different problems:{" "}
            <AudienceHighlight>student consumers</AudienceHighlight> and{" "}
            <AudienceHighlight>student producers</AudienceHighlight>.
          </p>
          <p className="text-[15px] leading-[1.8] text-[var(--portfolio-text-muted)] md:text-[16px]">
            In response, we conducted two separate sets of user interviews, tailoring each
            questionnaire to its respective group.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mt-14 overflow-hidden rounded-sm md:mt-20"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(95,140,200,0.12) 0%, rgba(30,45,70,0.08) 45%, rgba(45,72,52,0.18) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#3d5c42]/22 via-[#3d5c42]/08 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-[18%] h-32 w-[70%] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative flex min-h-[280px] items-end justify-between gap-4 px-2 pb-6 pt-16 sm:min-h-[320px] sm:px-8 sm:pb-10 md:min-h-[380px] md:gap-12 md:px-16 md:pb-14 md:pt-20">
            <GatorCharacter
              image={consumerGator}
              label="Student consumer"
              alt="Gator mascot with shopping bags"
            />
            <GatorCharacter
              image={businessGator}
              label="Student producer"
              alt="Gator business person"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  WHAT I DID                                               */
/* ────────────────────────────────────────────────────────── */

function WhatIDid() {
  const items = [
    {
      icon: Users,
      title: "User interviews",
      body: "Led semi-structured interviews with seven UF students across both sides of the marketplace.",
    },
    {
      icon: PenLine,
      title: "Affinity mapping & synthesis",
      body: "Clustered raw quotes into themes, then translated themes into design opportunities.",
    },
    {
      icon: MonitorSmartphone,
      title: "Low & hi-fidelity screens",
      body: "Designed analytics and DM flows from rough wires through polished mobile interfaces.",
    },
    {
      icon: Palette,
      title: "Logo & brand iteration",
      body: "Explored multiple logo directions before landing on a knot mark with an embedded gator.",
    },
  ];
  return (
    <section
      id="what-i-did"
      className="relative scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="02" label="What I Did" />
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
          My role across the{" "}
          <span className="italic">research</span>, <span className="italic">design</span>, and{" "}
          <span className="italic">brand</span> work.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="group relative rounded-sm border border-[var(--portfolio-border)] bg-[var(--portfolio-card)]/60 p-6 transition-colors duration-300 hover:border-[var(--portfolio-text)]/55"
            >
              <c.icon
                size={22}
                strokeWidth={1.25}
                className="text-[var(--portfolio-text-muted)] transition-colors duration-300 group-hover:text-[var(--portfolio-text)]"
              />
              <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/55">
                0{i + 1}
              </div>
              <div className="mt-2 text-[15px] text-[var(--portfolio-text)]">{c.title}</div>
              <div className="mt-3 text-[13px] leading-[1.6] text-[#cfc6b6]/65">
                {c.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <SectionLabel n="03" label="Research approach" />

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
        <SectionLabel n="05" label="What both sides said" />

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
        <SectionLabel n="06" label="User personas" />

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
        <SectionLabel n="07" label="Brand identity" />

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
        <SectionLabel n="08" label="Design principles" />
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
        <SectionLabel n="09" label="Final solution" />

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

        {/* Annotated screen mockups */}
        <div className="mt-28 grid gap-12 md:grid-cols-2">
          <ScreenMockup
            icon={Heart}
            label="Browsing"
            title="Familiar visual rhythm, pulled from what students already know."
            body={
              <>
                The browsing flow leans into{" "}
                <span className="italic text-[var(--portfolio-accent)]">Instagram-style</span>{" "}
                visual scrolling — a pattern students already trust — and uses
                universal icons like the{" "}
                <span className="italic text-[var(--portfolio-accent)]">heart</span> for
                favoriting so the affordance is immediate.
              </>
            }
          >
            <img
              src={browsingImg}
              alt="Twine browsing screen"
              className="h-full w-full object-cover object-top"
            />
          </ScreenMockup>

          <ScreenMockup
            icon={BarChart3}
            label="Analytics"
            title="Praise as motivation — the gator cheering progress on."
            body={
              <>
                The analytics screen uses our anthropomorphic gator to apply
                the{" "}
                <span className="italic text-[var(--portfolio-accent)]">CASA principle</span>:
                persuading through{" "}
                <span className="italic text-[var(--portfolio-accent)]">praise</span>, motivating
                entrepreneurs to keep earning rather than scolding them for
                slow weeks.
              </>
            }
          >
            <img
              src={analyticsImg}
              alt="Twine analytics screen"
              className="h-full w-full object-cover object-top"
            />
          </ScreenMockup>

          <ScreenMockup
            icon={SearchIcon}
            label="Search"
            title="Solving the discoverability problem outside the physical event."
            body={
              <>
                The search flow tackles{" "}
                <span className="italic text-[var(--portfolio-accent)]">discoverability</span>{" "}
                head-on. Students who missed the Gator Market in person can
                still find vendors through{" "}
                <span className="italic text-[var(--portfolio-accent)]">categories</span> and
                curated listings on Twine.
              </>
            }
          >
            <div className="absolute inset-0 origin-top-left bg-white" style={{ width: 402, height: 873, transform: "scale(0.572)" }}>
              <SearchScreen />
            </div>
          </ScreenMockup>

          <ScreenMockup
            icon={MessageCircle}
            label="Messaging"
            title="One place to start — and finish — the conversation."
            body={
              <>
                Messaging fixes the{" "}
                <span className="italic text-[var(--portfolio-accent)]">fragmented
                communication</span>{" "}
                pain point so the entire service flow can be completed in one
                place. The{" "}
                <span className="italic text-[var(--portfolio-accent)]">mascot</span> reduces
                friction by helping users initiate that first conversation.
              </>
            }
          >
            <div className="absolute inset-0 origin-top-left bg-white" style={{ width: 402, height: 873, transform: "scale(0.572)" }}>
              <MessagingScreen />
            </div>
          </ScreenMockup>
        </div>
      </div>
    </section>
  );
}

/* iPhone mockup with edge lighting, used for the Final Prototype screens */
function ScreenMockup({
  icon: Icon,
  label,
  title,
  body,
  children,
}: {
  icon: any;
  label: string;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 items-center gap-8 rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-8 md:grid-cols-[230px_1fr] md:gap-10 md:p-10"
    >
      {/* iPhone frame */}
      <div
        className="relative mx-auto"
        style={{
          width: 230,
          height: 500,
          filter:
            "drop-shadow(0 0 30px rgba(95,167,255,0.18)) drop-shadow(0 0 60px rgba(95,167,255,0.08)) drop-shadow(0 25px 50px rgba(0,0,0,0.55))",
        }}
      >
        <svg
          viewBox="0 0 230 500"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          <rect
            x="2"
            y="2"
            width="226"
            height="496"
            rx="40"
            fill="var(--portfolio-bg)"
          />
          <rect
            x="2"
            y="2"
            width="226"
            height="496"
            rx="40"
            stroke="url(#phoneEdgeGradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="phoneEdgeGradient"
              x1="115"
              y1="0"
              x2="115"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="rgba(95,167,255,0.55)" />
              <stop offset="0.5" stopColor="rgba(95,167,255,0.2)" />
              <stop offset="1" stopColor="rgba(95,167,255,0.45)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute left-[10px] top-[10px] h-[480px] w-[210px] overflow-hidden rounded-[34px] bg-white">
          {children}
        </div>
        <div className="absolute left-1/2 top-[6px] h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[var(--portfolio-bg)]" />
      </div>

      {/* Caption */}
      <div>
        <div className="mb-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
          <Icon size={14} strokeWidth={1.5} />
          {label}
        </div>
        <h3
          className="mb-4 leading-[1.15] tracking-[-0.01em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(22px, 2.4vw, 30px)",
            fontWeight: 300,
          }}
        >
          {title}
        </h3>
        <p className="text-[14px] leading-[1.7] text-[#cfc6b6]/75">{body}</p>
      </div>
    </motion.div>
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
        <SectionLabel n="10" label="Special thanks" />

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
