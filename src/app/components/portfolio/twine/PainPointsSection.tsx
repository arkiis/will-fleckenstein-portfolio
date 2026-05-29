import { motion, AnimatePresence } from "motion/react";
import { useState, type ElementType } from "react";
import {
  BarChart3,
  EyeOff,
  ShieldQuestion,
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TwineCaseStudyMediaFrame } from "./TwineCaseStudyMediaFrame";
import visibilityScreens from "../../../../imports/twine-visibility-screens.png";
import growthToolsScreens from "../../../../imports/twine-growth-tools-screens.png";
import trustScreens from "../../../../imports/twine-trust-screens.png";

type PainPointItem = {
  id: string;
  role: "Entrepreneur" | "Consumer";
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  painTitle: string;
  painBody: string;
  solutionTitle: string;
  solutionBody: string;
  evidenceSrc: string;
  evidenceAlt: string;
};

const PAIN_POINTS: PainPointItem[] = [
  {
    id: "visibility",
    role: "Entrepreneur",
    icon: EyeOff,
    painTitle: "Hard to be discovered",
    painBody: "Most students never discover the services they offer.",
    solutionTitle: "Discovery that puts services in front of buyers",
    solutionBody:
      "We built a browsable marketplace home with categories, featured listings, and service detail pages so student businesses show up where people are already looking.",
    evidenceSrc: visibilityScreens,
    evidenceAlt:
      "Twine discovery screens: marketplace home with featured listings and search feed with category filters",
  },
  {
    id: "growth-tools",
    role: "Entrepreneur",
    icon: BarChart3,
    painTitle: "No way to track metrics",
    painBody: "Communication and tracking are scattered across DMs, forms, and notes.",
    solutionTitle: "One insights hub for earnings and momentum",
    solutionBody:
      "We added an analytics dashboard with earnings, profile views, clients, and ongoing projects so entrepreneurs can track progress without juggling multiple apps.",
    evidenceSrc: growthToolsScreens,
    evidenceAlt:
      "Twine insights screen: earnings, profile views, clients metrics with gator praise and ongoing projects",
  },
  {
    id: "trust",
    role: "Consumer",
    icon: ShieldQuestion,
    painTitle: "Hard to verify quality work",
    painBody:
      "Quality is hard to verify before booking because reviews are scattered across different platforms.",
    solutionTitle: "Reviews and ratings on profiles and search",
    solutionBody:
      "We added reviews to each project, assigned every profile a rating, and displayed each project's rating on the search page.",
    evidenceSrc: trustScreens,
    evidenceAlt:
      "Twine trust screens: profile with project reviews and ratings beside search results showing star ratings",
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

export function PainPointsSection() {
  const [activeId, setActiveId] = useState(PAIN_POINTS[0].id);
  const activeItem = PAIN_POINTS.find((item) => item.id === activeId) ?? PAIN_POINTS[0];

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
                    aria-label={`${item.role}: ${item.painTitle}. ${item.painBody}`}
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
                      {item.role}
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
                <TwineCaseStudyMediaFrame>
                  <SolutionInFrame item={activeItem} />
                  <ImageWithFallback
                    src={activeItem.evidenceSrc}
                    alt={activeItem.evidenceAlt}
                    className="relative z-[1] mx-auto block h-auto w-full max-w-full mix-blend-screen"
                    draggable={false}
                    loading="eager"
                    decoding="async"
                  />
                </TwineCaseStudyMediaFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
