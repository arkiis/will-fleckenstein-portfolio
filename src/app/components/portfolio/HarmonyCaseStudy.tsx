import { motion, AnimatePresence } from "motion/react";
import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";
import {
  MessageSquareOff,
  Scale,
  Repeat,
  Flame,
  PenLine,
  Smile,
  Home,
  CalendarDays,
  ListChecks,
  ArrowRight,
} from "lucide-react";
import { ImageLoader } from "./ImageLoader";
import { findProject, projects } from "./projects";
import { useTheme } from "../../contexts/ThemeContext";
import { Nav } from "./Nav";
import harmoniaLogo from "../../../imports/harmonia_logo.png";
import harmoniaMockup from "../../../imports/harmonia-phone-mockup.png";
import groupPhoto from "../../../imports/harmonia_group_photo.jpg";
import harmoniaWhiteboard from "../../../imports/harmonia-whiteboard.png";
import harmoniaTasksScreen from "../../../imports/harmonia-tasks-screen.png";
import harmoniaCalendarScreen from "../../../imports/harmonia-calendar-screen.png";
import harmoniaCreateTaskScreen from "../../../imports/harmonia-create-task-screen.png";
import harmoniaHouseholdRules from "../../../imports/harmonia-household-rules.png";
import harmoniaManageHousehold from "../../../imports/harmonia-manage-household.png";

/* ────────────────────────────────────────────────────────── */
/*  Brand palette — aesthetic purple, scoped to this page     */
/* ────────────────────────────────────────────────────────── */

const HARMONIA_FRAME_BG =
  "radial-gradient(ellipse 80% 70% at 28% 72%, rgba(90,24,154,0.22), transparent 68%), radial-gradient(ellipse 80% 70% at 72% 72%, rgba(128,119,184,0.18), transparent 68%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(249,222,44,0.05), transparent 55%), var(--portfolio-card)";

export function HarmonyCaseStudy({
  onNavigate,
}: {
  onNavigate: (slug: string | null) => void;
}) {
  const project = findProject("harmony") ?? projects[1];
  const { theme, colors } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const isDark = theme === "dark";
  const purple = {
    accent: isDark ? "#b794f6" : "#7c3aed",
    secondary: isDark ? "#8077b8" : "#6d5bb5",
  };

  const purpleVars = {
    "--portfolio-accent": purple.accent,
    "--portfolio-secondary": purple.secondary,
  } as CSSProperties;

  return (
    <article className="relative" style={purpleVars}>
      <Nav />
      <Hero project={project} colors={colors} accent={purple.accent} />
      <InitialStruggleSection />
      <WhatIDidSection />
      <RedesignSolutionsSection />
      <PainPointsSection />
      <Brand />
      <Closing project={project} onNavigate={onNavigate} />
    </article>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  Shared bits                                              */
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

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm bg-[var(--portfolio-accent)]/15 px-1.5 py-0.5 font-medium text-[var(--portfolio-accent)]">
      {children}
    </span>
  );
}

/** Soft floating orbs to give placeholders a "cool" stage feel. */
function StageOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-6 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "rgba(90,24,154,0.35)" }}
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-8 bottom-4 h-44 w-44 rounded-full blur-3xl"
        style={{ background: "rgba(128,119,184,0.3)" }}
      />
    </div>
  );
}

/** Framed media shell — Harmonia purple variant of Twine's media frame. */
function MediaFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 px-4 py-6 sm:px-6 sm:py-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ background: HARMONIA_FRAME_BG }}
    >
      <StageOrbs />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/** Cool placeholder shaped like a phone screen, for screens not yet added. */
function PhonePlaceholder({
  icon: Icon,
  label,
  tag = "Screen placeholder",
}: {
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  tag?: string;
}) {
  return (
    <div className="relative mx-auto w-[180px] max-w-full sm:w-[200px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[30px] border border-[var(--portfolio-accent)]/30 bg-gradient-to-br from-[rgba(90,24,154,0.5)] to-[rgba(128,119,184,0.18)] shadow-[0_20px_60px_rgba(90,24,154,0.35)]">
        {/* notch */}
        <div className="absolute left-1/2 top-2 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-[var(--portfolio-bg)]/70" />
        {/* animated sheen */}
        <motion.div
          aria-hidden
          initial={{ x: "-120%" }}
          animate={{ x: "140%" }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
          className="absolute inset-y-0 w-1/2 skew-x-[-12deg] bg-white/10 blur-md"
        />
        <div className="flex h-full flex-col items-center justify-center gap-4 px-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
            <Icon size={24} strokeWidth={1.5} className="text-white/90" />
          </div>
          <div className="text-[13px] font-medium leading-snug text-white/90">{label}</div>
          {/* faux content lines */}
          <div className="mt-2 w-full space-y-2">
            <div className="h-2 w-full rounded-full bg-white/12" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/8" />
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[8px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
          {tag}
        </div>
      </div>
    </div>
  );
}

/** Real screenshot inside the same phone shell — top-aligned, bottom cropped. */
function PhoneScreenshot({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="relative mx-auto w-[180px] max-w-full sm:w-[200px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[30px] border border-[var(--portfolio-accent)]/30 bg-white shadow-[0_20px_60px_rgba(90,24,154,0.35)]">
        <img
          src={src}
          alt={alt}
          className="absolute left-0 top-0 block w-full"
          draggable={false}
          loading="lazy"
        />
        {/* fade the cropped bottom edge so it reads as intentional */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent" />
      </div>
      {label ? (
        <div className="mt-3 text-center text-[10px] uppercase tracking-[0.24em] text-[var(--portfolio-text-muted)]/60">
          {label}
        </div>
      ) : null}
    </div>
  );
}

/** Tall screenshot that auto-scrolls top → bottom → top inside the phone lens. */
function PhoneAutoScroll({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [overflow, setOverflow] = useState(0);

  const measure = () => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    const o = img.clientHeight - frame.clientHeight;
    setOverflow(o > 0 ? o : 0);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const duration = Math.max(7, overflow / 32);

  return (
    <div className="relative mx-auto w-[180px] max-w-full sm:w-[200px]">
      <div
        ref={frameRef}
        className="relative aspect-[9/19] overflow-hidden rounded-[30px] border border-[var(--portfolio-accent)]/30 bg-white shadow-[0_20px_60px_rgba(90,24,154,0.35)]"
      >
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={measure}
          className="absolute left-0 top-0 block w-full"
          draggable={false}
          animate={overflow > 0 ? { y: [0, -overflow, -overflow, 0, 0] } : { y: 0 }}
          transition={
            overflow > 0
              ? {
                  duration,
                  times: [0, 0.45, 0.55, 0.95, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
        {/* edge fades imply more content above and below */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/15 to-transparent" />
      </div>
      {label ? (
        <div className="mt-3 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.24em] text-[var(--portfolio-text-muted)]/60">
          <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-[var(--portfolio-accent)]" />
          {label}
        </div>
      ) : null}
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  HERO — split layout (logo + overview left, media right)  */
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
  accent,
}: {
  project: NonNullable<ReturnType<typeof findProject>>;
  colors: ReturnType<typeof useTheme>["colors"];
  accent: string;
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
            src={harmoniaLogo}
            alt="Harmonia logo"
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
            For our{" "}
            <span style={{ color: accent }}>First Year Design Team</span> project in
            Spring 2026, a team of six set out to design{" "}
            <span style={{ color: accent }}>Harmonia</span> — a roommate
            communication app that helps college roommates communicate, share, and
            coexist without the friction of unspoken expectations. I worked across
            research, interaction design, and the brand identity.
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
          <HeroField label="Team" value="6 UX/UI Designers" />
          <HeroField label="Platform" value="iOS · Mobile" />
          <HeroField label="Timeline" value="January 2026 — March 2026" />
        </motion.div>
      </div>

      <div
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 py-16 lg:min-h-0 lg:px-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #5A189A 0%, #2a1147 55%, #0b0710 100%)",
        }}
      >
        <StageOrbs />
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 flex h-full w-full items-center justify-center"
        >
          <motion.img
            src={harmoniaMockup}
            alt="Harmonia app mockup"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="max-h-[78%] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  01 — INITIAL STRUGGLE                                     */
/* ────────────────────────────────────────────────────────── */

function InitialStruggleSection() {
  return (
    <section id="initial-struggle" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="01" label="Initial Struggle" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2 }}
            className="max-w-[760px] space-y-6 lg:pt-2"
          >
            <p className="text-[15px] leading-[1.8] text-[var(--portfolio-text-muted)] md:text-[16px]">
              Through user interviews we found the real problem wasn't chores
              themselves, but <Highlight>agreements ignored</Highlight> and{" "}
              <Highlight>expectations going unsaid</Highlight>. We needed a system
              that surfaced accountability without roommate tension.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative"
          >
            <MediaFrame>
              <img
                src={harmoniaWhiteboard}
                alt="Harmonia team whiteboarding the app's screens as a solution"
                className="relative z-[1] mx-auto block h-auto w-full max-w-full rounded-sm"
                draggable={false}
                loading="lazy"
              />
            </MediaFrame>
            <p
              className="mt-5 text-center text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/50"
              style={{ fontFamily: "var(--portfolio-display-font)" }}
            >
              Whiteboarding our screens · Team session
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  02 — WHAT I DID (interactive tabs)                        */
/* ────────────────────────────────────────────────────────── */

type ScreenIcon = ElementType<{ size?: number; strokeWidth?: number; className?: string }>;

type WhatIDidScreen =
  | { kind: "image"; src: string; alt: string; label: string }
  | { kind: "scroll"; src: string; alt: string; label: string }
  | { kind: "placeholder"; icon: ScreenIcon; label: string };

type WhatIDidItem = {
  id: string;
  icon: ScreenIcon;
  title: string;
  body: string;
  screens: WhatIDidScreen[];
};

const WHAT_I_DID: WhatIDidItem[] = [
  {
    id: "tasks",
    icon: CalendarDays,
    title: "Tasks & calendar",
    body: "A shared task list and calendar with upcoming chores, events, and to-dos so the whole household sees what needs doing and when.",
    screens: [
      {
        kind: "scroll",
        src: harmoniaTasksScreen,
        alt: "Harmonia tasks screen with laundry and kitchen chores grouped by category",
        label: "Tasks",
      },
      {
        kind: "scroll",
        src: harmoniaCalendarScreen,
        alt: "Harmonia calendar screen showing February with the day's cleaning tasks",
        label: "Tasks Calendar View",
      },
      {
        kind: "scroll",
        src: harmoniaCreateTaskScreen,
        alt: "Harmonia create task screen with name, description, category, assignees, date, time, and repeat fields",
        label: "Create Tasks",
      },
    ],
  },
  {
    id: "rules",
    icon: ListChecks,
    title: "Household rules",
    body: "House rules, shared items, and a chore rotation engine that distributes responsibilities fairly. Roommates set quiet hours, cleaning, guests, and rotation order together.",
    screens: [
      {
        kind: "scroll",
        src: harmoniaHouseholdRules,
        alt: "Harmonia household rules screen: roommates, quiet hours, cleaning, guests, shared items, and chore rotation order",
        label: "Household Rules",
      },
      {
        kind: "scroll",
        src: harmoniaManageHousehold,
        alt: "Harmonia manage household edit screen with rule inputs, add roommate, add item, and rotation ordering",
        label: "Manage Household",
      },
    ],
  },
];

function WhatIDidSection() {
  const [activeId, setActiveId] = useState(WHAT_I_DID[0].id);
  const activeItem = WHAT_I_DID.find((i) => i.id === activeId) ?? WHAT_I_DID[0];

  return (
    <section id="what-i-did" className="relative scroll-mt-24 py-20 md:py-28">
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
          The screens I designed across{" "}
          <span className="italic">tasks</span>,{" "}
          <span className="italic">calendar</span>, and{" "}
          <span className="italic">household rules</span>.
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {WHAT_I_DID.map((item, i) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                onClick={() => setActiveId(item.id)}
                aria-pressed={isActive}
                className={`group relative w-full rounded-sm border p-6 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-[var(--portfolio-accent)]/45 bg-[var(--portfolio-card)]"
                    : "border-[var(--portfolio-border)] bg-[var(--portfolio-card)]/60 hover:border-[var(--portfolio-text)]/55"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={22}
                    strokeWidth={1.25}
                    className={`shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--portfolio-accent)]"
                        : "text-[var(--portfolio-text-muted)] group-hover:text-[var(--portfolio-text)]"
                    }`}
                  />
                  <div className="text-[15px] text-[var(--portfolio-text)]">{item.title}</div>
                </div>
                <div className="mt-3 text-[13px] leading-[1.6] text-[var(--portfolio-text-muted)]/65">
                  {item.body}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <MediaFrame>
                <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-10">
                  {activeItem.screens.map((s) => {
                    if (s.kind === "image") {
                      return (
                        <PhoneScreenshot
                          key={s.label}
                          src={s.src}
                          alt={s.alt}
                          label={s.label}
                        />
                      );
                    }
                    if (s.kind === "scroll") {
                      return (
                        <PhoneAutoScroll
                          key={s.label}
                          src={s.src}
                          alt={s.alt}
                          label={s.label}
                        />
                      );
                    }
                    return (
                      <PhonePlaceholder key={s.label} icon={s.icon} label={s.label} />
                    );
                  })}
                </div>
              </MediaFrame>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/45">
                {activeItem.title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  03 — REDESIGN SOLUTIONS (lo-fi → hi-fi)                   */
/* ────────────────────────────────────────────────────────── */

type RedesignItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  reason: string;
  beforeLabel: string;
  afterLabel: string;
};

const REDESIGNS: RedesignItem[] = [
  {
    id: "home",
    icon: Home,
    title: "Home & tasks",
    reason:
      "The low-fidelity home packed everything into one dense list. We split upcoming, to-do, and events into clear sections and brought in calm purple surfaces so the screen feels supportive rather than overwhelming.",
    beforeLabel: "Lo-fi home",
    afterLabel: "Hi-fi home",
  },
  {
    id: "rules",
    icon: Scale,
    title: "Household rules",
    reason:
      "Early rules screens were plain text blocks. We grouped quiet hours, cleaning, guests, and shared items into scannable cards so expectations are easy to set and revisit together.",
    beforeLabel: "Lo-fi rules",
    afterLabel: "Hi-fi rules",
  },
  {
    id: "onboarding",
    icon: PenLine,
    title: "Onboarding",
    reason:
      "We turned a long form into a friendly questionnaire — one question per step about sleep, temperature, and cleanliness — so new roommates set preferences without feeling interrogated.",
    beforeLabel: "Lo-fi onboarding",
    afterLabel: "Hi-fi onboarding",
  },
];

function BeforeAfter({ item }: { item: RedesignItem }) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        <div className="space-y-4 lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-accent)]/80">
            Why we changed it
          </div>
          <p className="text-[14px] leading-[1.75] text-[var(--portfolio-text-muted)] md:text-[15px]">
            {item.reason}
          </p>
        </div>
      </div>

      <MediaFrame>
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          <div className="flex flex-col items-center gap-3">
            <PhonePlaceholder icon={item.icon} label={item.beforeLabel} tag="Before · lo-fi" />
          </div>
          <ArrowRight
            size={28}
            strokeWidth={1.4}
            className="hidden text-[var(--portfolio-accent)] sm:block"
          />
          <div className="flex flex-col items-center gap-3">
            <PhonePlaceholder icon={item.icon} label={item.afterLabel} tag="After · hi-fi" />
          </div>
        </div>
      </MediaFrame>
    </div>
  );
}

function RedesignSolutionsSection() {
  const [activeId, setActiveId] = useState(REDESIGNS[0].id);
  const activeItem = REDESIGNS.find((i) => i.id === activeId) ?? REDESIGNS[0];

  return (
    <section
      id="redesign-solutions"
      className="relative scroll-mt-24 border-t border-[var(--portfolio-border)]/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="03" label="Redesign solutions" />
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
          How screens evolved from <span className="italic">low-fidelity</span> to{" "}
          <span className="italic">high-fidelity</span>.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {REDESIGNS.map((item, i) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                onClick={() => setActiveId(item.id)}
                aria-pressed={isActive}
                className={`group relative w-full rounded-sm border p-6 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-[var(--portfolio-accent)]/45 bg-[var(--portfolio-card)]"
                    : "border-[var(--portfolio-border)] bg-[var(--portfolio-card)]/60 hover:border-[var(--portfolio-text)]/55"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={22}
                    strokeWidth={1.25}
                    className={`shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--portfolio-accent)]"
                        : "text-[var(--portfolio-text-muted)] group-hover:text-[var(--portfolio-text)]"
                    }`}
                  />
                  <div className="text-[15px] text-[var(--portfolio-text)]">{item.title}</div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <BeforeAfter item={activeItem} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  04 — USER PAIN POINTS (vertical tabs)                     */
/* ────────────────────────────────────────────────────────── */

type PainPointItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  painTitle: string;
  painBody: string;
  solutionTitle: string;
  solutionBody: string;
  screen: { icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>; label: string };
};

const PAIN_POINTS: PainPointItem[] = [
  {
    id: "irresponsibility",
    icon: Repeat,
    painTitle: "Irresponsibility",
    painBody: "Roommates not following through on agreed tasks or shared responsibilities.",
    solutionTitle: "Neutral reminders and shared task visibility",
    solutionBody:
      "Tasks live in one shared list with gentle, automatic reminders, so accountability comes from the system rather than from a roommate having to nag.",
    screen: { icon: ListChecks, label: "Shared task list" },
  },
  {
    id: "unfairness",
    icon: Scale,
    painTitle: "Unfairness",
    painBody: "A sense that some roommates contribute more than others to household work.",
    solutionTitle: "A fair, transparent chore rotation",
    solutionBody:
      "A rotation engine distributes chores evenly and shows everyone's history, so the split feels balanced and visible instead of assumed.",
    screen: { icon: Repeat, label: "Chore rotation" },
  },
  {
    id: "miscommunication",
    icon: MessageSquareOff,
    painTitle: "Miscommunication",
    painBody: "Unclear expectations and avoided conversations that build up frustration.",
    solutionTitle: "Household rules everyone agrees on",
    solutionBody:
      "Quiet hours, cleaning, guests, and shared items are written down together during setup, giving roommates a shared reference instead of unspoken assumptions.",
    screen: { icon: Scale, label: "House rules" },
  },
  {
    id: "tension",
    icon: Flame,
    painTitle: "Tension",
    painBody: "Growing resentment from repeated issues that go unaddressed or unresolved.",
    solutionTitle: "A calm, supportive tone",
    solutionBody:
      "Copy and visuals read as supportive rather than confrontational, so the app lowers the temperature of difficult conversations instead of raising it.",
    screen: { icon: Smile, label: "Home dashboard" },
  },
];

function SolutionInFrame({ item }: { item: PainPointItem }) {
  return (
    <div className="mb-6 border-b border-[var(--portfolio-border)]/10 pb-6">
      <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-accent)]/80">
        Our solution
      </div>
      <h3 className="mt-3 text-[18px] text-[var(--portfolio-text)] md:text-[20px]">
        {item.solutionTitle}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.75] text-[var(--portfolio-text-muted)] md:text-[15px]">
        {item.solutionBody}
      </p>
    </div>
  );
}

function PainPointsSection() {
  const [activeId, setActiveId] = useState(PAIN_POINTS[0].id);
  const activeItem = PAIN_POINTS.find((i) => i.id === activeId) ?? PAIN_POINTS[0];

  return (
    <section
      id="pain-points"
      className="relative scroll-mt-24 border-t border-[var(--portfolio-border)]/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="04" label="User pain points" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-2" role="tablist" aria-label="User pain points">
              {PAIN_POINTS.map((item, i) => {
                const isActive = activeId === item.id;
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`${item.painTitle}. ${item.painBody}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.05 }}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full rounded-sm border px-4 py-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-[var(--portfolio-accent)]/45 bg-[var(--portfolio-card)]"
                        : "border-[var(--portfolio-border)] bg-[var(--portfolio-card)]/60 hover:border-[var(--portfolio-text)]/55"
                    }`}
                  >
                    <div className="mb-2 text-[9px] uppercase tracking-[0.24em] text-[var(--portfolio-accent)]">
                      Pain point 0{i + 1}
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        strokeWidth={1.25}
                        className={`shrink-0 ${
                          isActive
                            ? "text-[var(--portfolio-accent)]"
                            : "text-[var(--portfolio-text-muted)]"
                        }`}
                      />
                      <span className="text-[14px] text-[var(--portfolio-text)]">
                        {item.painTitle}
                      </span>
                    </div>
                    <div className="mt-2 pl-[30px] text-[12.5px] leading-[1.6] text-[var(--portfolio-text-muted)]/60">
                      {item.painBody}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <MediaFrame>
                  <SolutionInFrame item={activeItem} />
                  <div className="flex items-center justify-center pt-2">
                    <PhonePlaceholder
                      icon={activeItem.screen.icon}
                      label={activeItem.screen.label}
                    />
                  </div>
                </MediaFrame>
              </motion.div>
            </AnimatePresence>
          </div>
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
    <section id="brand" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="05" label="Brand identity" />

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
            <span className="italic text-[var(--portfolio-accent)]">balance</span>. A purple for{" "}
            <span className="italic text-[var(--portfolio-accent)]">calm</span>.
          </h2>
          <p className="mt-6 max-w-[640px] text-[14px] leading-[1.7] text-[var(--portfolio-text-muted)]/70">
            Harmonia's identity blends warmth and clarity. The flower-and-spiral
            mark symbolizes individuality coming together as one household —
            organic rather than technical — carried by a calm, aesthetic purple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="grid gap-4 md:grid-cols-12"
        >
          <div
            className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-sm border border-[var(--portfolio-border)]/10 md:col-span-7 md:h-auto"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(90,24,154,0.32), transparent 65%), var(--portfolio-card)",
            }}
          >
            <img
              src={harmoniaLogo}
              alt="Harmonia logo, final design"
              className="max-h-[55%] max-w-[55%] object-contain drop-shadow-[0_8px_30px_rgba(128,119,184,0.35)]"
            />
            <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
              Logo · Final mark
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/40">
              Flower + Spiral
            </div>
          </div>

          <div className="grid gap-4 md:col-span-5 md:grid-cols-2">
            {[
              { t: "Flower", c: "Symbol of unity blooming from individuals" },
              { t: "Spiral", c: "Movement, balance, ongoing harmony" },
              { t: "Purple", c: "Calm, warmth, emotional intelligence" },
              { t: "Yellow", c: "Optimism, a positive accent and energy" },
            ].map((b, i) => (
              <div
                key={b.t}
                className="rounded-sm border border-[var(--portfolio-border)]/10 bg-[var(--portfolio-card)] p-5"
              >
                <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-accent)]">
                  0{i + 1}
                </div>
                <div className="text-[15px] text-[var(--portfolio-text)]">{b.t}</div>
                <div className="mt-1 text-[12.5px] leading-[1.55] text-[var(--portfolio-text-muted)]/65">
                  {b.c}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
                className="mt-3 text-[16px] leading-snug text-[var(--portfolio-text-muted)]"
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

function Swatch({ hex, label, dark }: { hex: string; label: string; dark?: boolean }) {
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
            "radial-gradient(ellipse at 50% 100%, rgba(90,24,154,0.2), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="06" label="Special thanks" />

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
              we designed. This project is as much about the people behind it as
              the product itself.
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
            className="mt-4 italic text-[var(--portfolio-text-muted)]/70"
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
