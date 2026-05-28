import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  MessageSquareOff,
  Scale,
  Repeat,
  Flame,
  Users,
  PenLine,
  MonitorSmartphone,
  Palette,
  Layers,
  Sparkles,
  CheckCheck,
  Smile,
  Trophy,
  ExternalLink,
  Search,
} from "lucide-react";
import { ImageLoader } from "./ImageLoader";
import { findProject, projects } from "./projects";
import { Nav } from "./Nav";
import harmoniaLogo from "../../../imports/harmonia_logo.png";
import groupPhoto from "../../../imports/harmonia_group_photo.jpg";
import comp1 from "../../../imports/image_2.png";
import comp2 from "../../../imports/image_8.png";
import comp3 from "../../../imports/image_12.png";

export function HarmonyCaseStudy({
  onNavigate,
}: {
  onNavigate: (slug: string | null) => void;
}) {
  const project = findProject("harmony") ?? projects[1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <article className="relative">
      <Nav />
      <Hero project={project} />
      <Meta />
      <Premise />
      <WhatIDid />
      <Research />
      <Competitive />
      <PainPoints />
      <Problem />
      <Brand />
      <Principles />
      <Screens />
      <Closing project={project} onNavigate={onNavigate} />
    </article>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  HERO                                                     */
/* ────────────────────────────────────────────────────────── */

function Hero({ project }: { project: ReturnType<typeof findProject> & {} }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const offsetX = (mousePos.x - 0.5) * 20;
  const offsetY = (mousePos.y - 0.5) * 20;
  const rotateY = (mousePos.x - 0.5) * 8;
  const rotateX = -(mousePos.y - 0.5) * 8;

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      <div className="absolute inset-0 -z-10">
        <ImageLoader
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{
            filter:
              "brightness(0.55) contrast(1.1) saturate(0.55) sepia(0.15) hue-rotate(-8deg)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(135deg, rgba(95,167,255,0.22) 0%, rgba(20,10,30,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,8,7,0.55) 0%, rgba(10,8,7,0.4) 40%, rgba(10,8,7,0.95) 100%)",
          }}
        />
      </div>

      {/* Floating iPhone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{
          opacity: 0.85,
          y: offsetY,
          x: offsetX,
          scale: 1,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          opacity: { duration: 1.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] },
          y: { duration: 0.5, ease: "easeOut" },
          x: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 1.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] },
          rotateX: { duration: 0.5, ease: "easeOut" },
          rotateY: { duration: 0.5, ease: "easeOut" },
        }}
        className="pointer-events-none absolute right-[18%] top-1/2 hidden -translate-y-1/2 lg:block"
        style={{
          filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="relative h-[520px] w-[250px]">
            <svg
              viewBox="0 0 250 520"
              fill="none"
              className="absolute inset-0 h-full w-full"
            >
              <rect
                x="2"
                y="2"
                width="246"
                height="516"
                rx="42"
                fill="var(--portfolio-bg)"
                fillOpacity="0.3"
              />
              <rect
                x="2"
                y="2"
                width="246"
                height="516"
                rx="42"
                stroke="url(#harmonyPhoneGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="harmonyPhoneGradient"
                  x1="125"
                  y1="0"
                  x2="125"
                  y2="520"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="rgba(95,167,255,0.3)" />
                  <stop offset="0.5" stopColor="rgba(95,167,255,0.15)" />
                  <stop offset="1" stopColor="rgba(95,167,255,0.25)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute left-[10px] top-[10px] flex h-[500px] w-[230px] items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br from-[#5A189A] to-[#8077B8]">
              <img
                src={harmoniaLogo}
                alt="Harmonia logo"
                className="h-[55%] w-[55%] object-contain"
              />
            </div>

            <div className="absolute left-1/2 top-[6px] h-[24px] w-[100px] -translate-x-1/2 rounded-full bg-[var(--portfolio-bg)]" />
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="leading-[0.92] tracking-[-0.02em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(64px, 13vw, 200px)",
            fontWeight: 300,
          }}
        >
          Harmonia
        </motion.h1>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  META                                                     */
/* ────────────────────────────────────────────────────────── */

function Meta() {
  const items = [
    { label: "Role", value: "Product Designer" },
    { label: "Team", value: "6 UX/UI Designers" },
    { label: "Platform", value: "iOS · Mobile" },
    { label: "Timeline", value: "January 2026 — March 2026" },
  ];
  return (
    <section className="relative border-y border-[var(--portfolio-border)]/10 py-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
        {items.map((m) => (
          <div key={m.label}>
            <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
              {m.label}
            </div>
            <div className="text-[14px] text-[#e9e2d6]">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PREMISE                                                  */
/* ────────────────────────────────────────────────────────── */

function Premise() {
  return (
    <section id="premise" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="01" label="Premise" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="max-w-[1100px] leading-[1.15] tracking-[-0.015em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(28px, 4.4vw, 64px)",
            fontWeight: 300,
          }}
        >
          How might we help college roommates{" "}
          <span className="italic text-[var(--portfolio-accent)]">communicate</span>,{" "}
          <span className="italic text-[var(--portfolio-accent)]">share</span>, and{" "}
          <span className="italic text-[var(--portfolio-accent)]">coexist</span> without the
          friction of unspoken expectations?
        </motion.p>
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
      body: "Led semi-structured interviews with college roommates to surface real conflict patterns and emotional triggers.",
    },
    {
      icon: PenLine,
      title: "Affinity mapping & synthesis",
      body: "Clustered raw quotes into themes around fairness, communication, and shared expectations.",
    },
    {
      icon: MonitorSmartphone,
      title: "Low & hi-fidelity screens",
      body: "Designed chore tracking, reminders, and household rules from rough wires to polished iOS interfaces.",
    },
    {
      icon: Palette,
      title: "Logo & brand iteration",
      body: "Explored multiple directions before landing on a flower-and-spiral mark that feels warm and welcoming.",
    },
  ];
  return (
    <section id="what-i-did" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="02" label="What I did" />
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
          <span className="italic text-[var(--portfolio-accent)]">research</span>,{" "}
          <span className="italic text-[var(--portfolio-accent)]">design</span>, and{" "}
          <span className="italic text-[var(--portfolio-accent)]">brand</span> work.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="group relative rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)]/60 p-6 transition-colors hover:border-[var(--portfolio-accent)]/35"
            >
              <c.icon size={22} strokeWidth={1.25} className="text-[var(--portfolio-accent)]" />
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
/*  RESEARCH                                                 */
/* ────────────────────────────────────────────────────────── */

function Research() {
  return (
    <section id="research" className="relative scroll-mt-24 py-32 md:py-44">
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
              Semi-structured interviews with college roommates.
            </h2>
            <p className="mt-6 max-w-[440px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
              Each participant walked us through a recent roommate conflict.
              Hearing concrete moments instead of hypotheticals revealed the
              real patterns behind tension: ignored tasks, unspoken
              expectations, and avoided conversations.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="md:col-span-7"
          >
            <div className="relative grid grid-cols-2 items-stretch overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10">
              <div
                className="relative flex flex-col items-center justify-center px-6 py-14"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(90,24,154,0.22), transparent 65%), var(--portfolio-card)",
                }}
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#b39ad8]">
                  Participants
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
                  8
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/45">
                  college roommates
                </div>
              </div>

              <div
                className="relative flex flex-col items-center justify-center border-l border-[var(--portfolio-border)]/10 px-6 py-14"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(95,167,255,0.16), transparent 65%), var(--portfolio-card)",
                }}
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                  Themes
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
                  recurring patterns
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-[var(--portfolio-accent)]/40 bg-[var(--portfolio-bg)]/85 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-accent)] backdrop-blur-sm">
                  Conflict scenarios
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
/*  COMPETITIVE ANALYSIS                                     */
/* ────────────────────────────────────────────────────────── */

function Competitive() {
  const competitors = [
    { name: "Bunky", img: comp1 },
    { name: "Chorsee", img: comp2 },
    { name: "Nipto", img: comp3 },
  ];
  return (
    <section id="competitive" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="04" label="Competitive analysis" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-14 max-w-[1000px] leading-[1.15] tracking-[-0.01em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(26px, 3.4vw, 44px)",
            fontWeight: 300,
          }}
        >
          We compared Harmonia against{" "}
          <span className="italic text-[var(--portfolio-accent)]">Bunky</span>,{" "}
          <span className="italic text-[var(--portfolio-accent)]">Chorsee</span>, and{" "}
          <span className="italic text-[var(--portfolio-accent)]">Nipto</span> to understand
          how roommate and chore apps handle communication, task tracking,
          onboarding, and visual design.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {competitors.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] transition-colors hover:border-[var(--portfolio-accent)]/35"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageLoader
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    filter:
                      "brightness(0.78) contrast(1.05) saturate(0.6) sepia(0.16) hue-rotate(-8deg)",
                  }}
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                  <Search size={12} strokeWidth={1.5} />
                  Competitor 0{i + 1}
                </div>
              </div>
              <div className="border-t border-[var(--portfolio-border)]/10 p-5">
                <div className="text-[15px] text-[var(--portfolio-text)]">{c.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-10 flex items-start gap-4 border-l-2 border-[var(--portfolio-accent)]/60 pl-6"
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-accent)]">
            Design opportunity
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
            Harmonia could stand out by combining{" "}
            <span className="italic text-[var(--portfolio-accent)]">chore tracking</span>,{" "}
            <span className="italic text-[var(--portfolio-accent)]">shared rules</span>,{" "}
            <span className="italic text-[var(--portfolio-accent)]">neutral reminders</span>,
            and a calmer visual identity made specifically for college
            roommates.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PAIN POINTS                                              */
/* ────────────────────────────────────────────────────────── */

function PainPoints() {
  const items = [
    {
      icon: Repeat,
      title: "Irresponsibility",
      body: "Roommates not following through on agreed tasks or shared responsibilities.",
    },
    {
      icon: Scale,
      title: "Unfairness",
      body: "Perception that some roommates contribute more than others to household work.",
    },
    {
      icon: MessageSquareOff,
      title: "Miscommunication",
      body: "Unclear expectations and avoided conversations leading to built-up frustration.",
    },
    {
      icon: Flame,
      title: "Tension",
      body: "Growing resentment from repeated issues that go unaddressed or unresolved.",
    },
  ];
  return (
    <section id="pain-points" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="05" label="User pain points" />
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
          Four frictions that{" "}
          <span className="italic text-[var(--portfolio-accent)]">break</span> household
          harmony.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-6 transition-colors hover:border-[var(--portfolio-accent)]/30"
            >
              <c.icon size={22} strokeWidth={1.25} className="text-[var(--portfolio-accent)]" />
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
/*  PROBLEM                                                  */
/* ────────────────────────────────────────────────────────── */

function Problem() {
  return (
    <section id="problem" className="relative scroll-mt-24 py-32 md:py-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(95,167,255,0.08), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="06" label="Define the problem" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="max-w-[1100px] leading-[1.15] tracking-[-0.015em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(28px, 4.4vw, 64px)",
            fontWeight: 300,
          }}
        >
          Roommate{" "}
          <span className="italic text-[var(--portfolio-accent)]">tension</span> begins when{" "}
          <span className="italic text-[var(--portfolio-accent)]">expectations</span> go unsaid
          and shared{" "}
          <span className="italic text-[var(--portfolio-accent)]">responsibilities</span> are
          quietly avoided.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  BRAND                                                    */
/* ────────────────────────────────────────────────────────── */

function Brand() {
  return (
    <section id="brand" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="07" label="Brand identity" />

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
            A flower for{" "}
            <span className="italic text-[var(--portfolio-accent)]">unity</span>. A spiral for{" "}
            <span className="italic text-[var(--portfolio-accent)]">balance</span>. A tone for{" "}
            <span className="italic text-[var(--portfolio-accent)]">calm</span>.
          </h2>
          <p className="mt-6 max-w-[640px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
            Harmonia's identity blends warmth and clarity. The flower-and-spiral
            mark symbolizes individuality coming together as one household,
            organic rather than technical.
          </p>
        </motion.div>

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
                "radial-gradient(ellipse at 50% 50%, rgba(90,24,154,0.28), transparent 65%), var(--portfolio-card)",
            }}
          >
            <img
              src={harmoniaLogo}
              alt="Harmonia logo, final design"
              className="max-h-[55%] max-w-[55%] object-contain drop-shadow-[0_8px_30px_rgba(179,154,216,0.3)]"
            />
            <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.32em] text-[#b39ad8]">
              Logo · Final mark
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
              Flower + Spiral
            </div>
          </div>

          {/* Attribute cards */}
          <div className="grid gap-4 md:col-span-5 md:grid-cols-2">
            {[
              { t: "Flower", c: "Symbol of unity blooming from individuals" },
              { t: "Spiral", c: "Movement, balance, ongoing harmony" },
              { t: "Purple", c: "Calm, warmth, emotional intelligence" },
              { t: "Yellow", c: "Optimism, positive accent and energy" },
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

        {/* Palette + Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-4 grid gap-4 md:grid-cols-12"
        >
          <div className="overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-7">
            <div className="flex items-center justify-between border-b border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                Color palette
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
                4 tokens
              </div>
            </div>
            <div className="grid grid-cols-4">
              <Swatch hex="#5A189A" label="Primary" />
              <Swatch hex="#8077B8" label="Light" />
              <Swatch hex="#F9DE2C" label="Accent" dark />
              <Swatch hex="#FFFFFF" label="Surface" dark />
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-5">
            <div className="flex items-center justify-between border-b border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                Typography
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
                Melodrama · SF Pro
              </div>
            </div>
            <div className="bg-[var(--portfolio-card)] p-6">
              <div
                className="text-[42px] leading-none text-[var(--portfolio-text)]"
                style={{
                  fontFamily: "var(--portfolio-display-font)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  fontStyle: "italic",
                }}
              >
                Melodrama
              </div>
              <div
                className="mt-3 text-[16px] leading-snug text-[#cfc6b6]"
                style={{ fontFamily: "'SF Pro', system-ui, sans-serif", fontWeight: 400 }}
              >
                SF Pro · Body & UI, for clarity and an iOS-native feel.
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
      t: "iOS-inspired design system",
      b: "SF Pro typography, iPhone frames, 4-column grid, 24px margins, 16px gutters.",
      link: "https://developer.apple.com/design/human-interface-guidelines",
      src: "Apple HIG",
    },
    {
      icon: Sparkles,
      t: "Consistent component rules",
      b: "Inputs at 5px radius, buttons at 8px radius, button heights of 24, 32, 36, and 40px.",
      link: "https://developer.apple.com/design/human-interface-guidelines/buttons",
      src: "Apple HIG",
    },
    {
      icon: CheckCheck,
      t: "Predictable spacing",
      b: "24px from screen edges, 36px between related element groups for clear rhythm.",
      link: "https://developer.apple.com/design/human-interface-guidelines/layout",
      src: "Apple HIG",
    },
    {
      icon: Smile,
      t: "Calm, neutral tone",
      b: "Reminders that read as supportive rather than confrontational or accusatory.",
      link: "https://developer.apple.com/design/human-interface-guidelines/writing",
      src: "Apple HIG",
    },
    {
      icon: Trophy,
      t: "Reusable Figma styles",
      b: "Shared typography, background colors, and UI element styles to keep screens aligned.",
      link: "https://developer.apple.com/design/human-interface-guidelines/foundations",
      src: "Apple HIG",
    },
  ];
  return (
    <section id="principles" className="relative scroll-mt-24 py-32 md:py-44">
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
          We followed{" "}
          <span className="italic text-[var(--portfolio-accent)]">iOS conventions</span> and
          the{" "}
          <span className="italic text-[var(--portfolio-accent)]">Apple Human Interface
          Guidelines</span>, building a custom system on top to keep Harmonia
          aligned and consistent.
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
/*  SCREENS                                                  */
/* ────────────────────────────────────────────────────────── */

function Screens() {
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
              A{" "}
              <span className="italic text-[var(--portfolio-accent)]">calm, accountable</span>{" "}
              roommate experience.
            </h2>
            <p className="mt-6 max-w-[440px] text-[14px] leading-[1.7] text-[#cfc6b6]/70">
              The final flows bring together chore tracking, shared rules,
              neutral reminders, and household onboarding into a single
              rhythm. Every screen is shaped by the research: low pressure,
              clear hierarchy, and a tone that feels warm rather than punitive.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/55">
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Chores
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Rules
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Reminders
              </span>
              <span className="rounded-full border border-[var(--portfolio-border)]/12 px-3 py-1">
                Onboarding
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
            <div
              className="relative overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10"
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.loom.com/embed/dc275d8ed47844f88021dce02ed7e10c"
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
              <span>Harmonia · Mobile · 2026</span>
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
    <section
      id="closing"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-32 md:pt-44"
    >
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
              Thank you to the Harmonia team for the late nights, the careful
              critiques, and the willingness to{" "}
              <span className="italic text-[var(--portfolio-accent)]">listen</span> as much as
              we designed. This project is as much about the people behind it
              as the product itself.
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
                src={groupPhoto}
                alt="Harmonia team photo"
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
                The Harmonia team
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
          <button
            onClick={() => onNavigate(null)}
            className="hover:text-[var(--portfolio-accent)]"
          >
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
