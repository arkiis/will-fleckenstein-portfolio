import { motion, AnimatePresence } from "motion/react";
import { useState, type ElementType } from "react";
import { ArrowRight, BarChart3, LayoutGrid, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TwineCaseStudyMediaFrame } from "./TwineCaseStudyMediaFrame";

const MESSAGING_FLOW_BEFORE_AFTER_SRC = "/images/twine-messaging-flow-before-after.png";

type RedesignItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  body: string;
  reason: string;
  outcome: string;
  comparisonSrc?: string;
  comparisonAlt?: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

const REDESIGNS: RedesignItem[] = [
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Messaging Flow",
    body: "Shifted from a dark generic chat pattern to guided quick questions and contextual attachment menus.",
    reason:
      "We changed it based on a majority vote for light mode and updated the design to better match what our participants are most familiar with when finding services, which is Instagram, by more closely mimicking its style.",
    outcome:
      "We moved to Twine's light UI with gator-led quick questions and contextual attachment menus so messaging feels guided from the first tap.",
    comparisonSrc: MESSAGING_FLOW_BEFORE_AFTER_SRC,
    comparisonAlt:
      "Twine messaging flow before and after: dark mode chat compared to light mode Instagram-style chat",
  },
  {
    id: "discovery",
    icon: LayoutGrid,
    title: "Discovery Cards",
    body: "Surfaced price, star ratings, and category filters up front so students can evaluate services at a glance.",
    reason:
      "Interviewees said trust was the deciding factor before booking, but the first card layout buried ratings, pricing, and portfolio proof below the fold.",
    outcome:
      "Cards were redesigned to surface price, star ratings, and category filters up front so students can evaluate services at a glance.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Insights Dashboard",
    body: "Simplified into earnings, profile views, clients, and ongoing projects — one screen that answers how am I doing.",
    reason:
      "Student entrepreneurs wanted a broad snapshot of their business, not a dense analytics view that felt like a separate product.",
    outcome:
      "The dashboard was simplified into earnings, profile views, clients, and ongoing projects — one screen that answers how am I doing without extra digging.",
  },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/55">
      <span className="h-px w-10 bg-[var(--portfolio-text-muted)]/30" />
      <span>{n}</span>
      <span className="text-[var(--portfolio-text)]/85">{label}</span>
    </div>
  );
}

function BeforeAfterFrame({
  label,
  src,
  alt,
  blendScreen = false,
}: {
  label: "Before" | "After";
  src?: string;
  alt?: string;
  blendScreen?: boolean;
}) {
  if (src) {
    return (
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="relative flex w-full items-center justify-center">
          <ImageWithFallback
            src={src}
            alt={alt ?? `${label} screen`}
            className={`relative z-[1] mx-auto block h-auto w-full max-w-[220px] object-contain${
              blendScreen ? " mix-blend-screen" : ""
            }`}
            draggable={false}
          />
        </div>
        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/45">
          {label}
        </p>
      </div>
    );
  }

  return <BeforeAfterPlaceholder label={label} />;
}

function BeforeAfterPlaceholder({ label }: { label: "Before" | "After" }) {
  const isBefore = label === "Before";

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div
        className={`relative aspect-[9/19] w-full overflow-hidden rounded-sm border border-dashed ${
          isBefore
            ? "border-[var(--portfolio-border)]/35 bg-[var(--portfolio-card)]/40"
            : "border-[var(--portfolio-accent)]/35 bg-[var(--portfolio-accent)]/5"
        }`}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: isBefore
              ? "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, transparent 45%), repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.025) 8px, rgba(255,255,255,0.025) 9px)"
              : "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(0,33,165,0.12), transparent 60%), radial-gradient(ellipse 70% 50% at 50% 80%, rgba(214,139,74,0.08), transparent 55%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-8 border-b border-[var(--portfolio-border)]/15 bg-[var(--portfolio-bg)]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div
            className={`text-[10px] uppercase tracking-[0.32em] ${
              isBefore ? "text-[var(--portfolio-text-muted)]/45" : "text-[var(--portfolio-accent)]/70"
            }`}
          >
            {label}
          </div>
          <div className="text-[12px] leading-[1.5] text-[var(--portfolio-text-muted)]/55">
            Screen placeholder
          </div>
          <div className="mt-1 h-24 w-[58%] rounded-md border border-[var(--portfolio-border)]/20 bg-[var(--portfolio-bg)]/35" />
          <div className="h-2.5 w-[72%] rounded-full bg-[var(--portfolio-border)]/15" />
          <div className="h-2.5 w-[52%] rounded-full bg-[var(--portfolio-border)]/10" />
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/45">
        {label}
      </p>
    </div>
  );
}

function BeforeAfterComparison({ item }: { item: RedesignItem }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="space-y-4 lg:col-span-5">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-accent)]/80">
          Why we changed it
        </div>
        <p className="text-[14px] leading-[1.75] text-[var(--portfolio-text-muted)] md:text-[15px]">
          {item.reason}
        </p>
        <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/55">
          What changed
        </div>
        <p className="text-[14px] leading-[1.75] text-[#cfc6b6]/70 md:text-[15px]">{item.outcome}</p>
      </div>

      <div className="lg:col-span-7">
        <TwineCaseStudyMediaFrame>
          {item.comparisonSrc ? (
            <ImageWithFallback
              src={item.comparisonSrc}
              alt={item.comparisonAlt ?? `${item.title} before and after`}
              className="relative z-[1] mx-auto block h-auto w-auto max-w-full mix-blend-screen"
              draggable={false}
            />
          ) : (
            <div className="flex items-center gap-3 sm:gap-4">
              <BeforeAfterFrame
                label="Before"
                src={item.beforeSrc}
                alt={item.beforeAlt}
                blendScreen={Boolean(item.beforeSrc)}
              />
              <div
                className="hidden shrink-0 text-[var(--portfolio-text-muted)]/35 sm:flex sm:flex-col sm:items-center sm:gap-1"
                aria-hidden
              >
                <ArrowRight size={18} strokeWidth={1.25} />
              </div>
              <BeforeAfterFrame label="After" src={item.afterSrc} alt={item.afterAlt} />
            </div>
          )}
        </TwineCaseStudyMediaFrame>
      </div>
    </div>
  );
}

export function RedesignSolutionsSection() {
  const [activeId, setActiveId] = useState(REDESIGNS[0].id);
  const activeItem = REDESIGNS.find((item) => item.id === activeId) ?? REDESIGNS[0];

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
          Not every screen stayed the same after <span className="italic">testing</span> and{" "}
          <span className="italic">team discussions</span>.
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
                <Icon
                  size={22}
                  strokeWidth={1.25}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--portfolio-accent)]"
                      : "text-[var(--portfolio-text-muted)] group-hover:text-[var(--portfolio-text)]"
                  }`}
                />
                <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--portfolio-text-muted)]/55">
                  0{i + 1}
                </div>
                <div className="mt-2 text-[15px] text-[var(--portfolio-text)]">{item.title}</div>
                <div className="mt-3 text-[13px] leading-[1.6] text-[#cfc6b6]/65">{item.body}</div>
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
              <BeforeAfterComparison item={activeItem} />
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
