import { motion, AnimatePresence } from "motion/react";
import { useState, type ElementType } from "react";
import { BarChart3, LayoutGrid, MessageSquare } from "lucide-react";
import {
  BeforeAfterProgressCarousel,
  type BeforeAfterCarouselSlide,
} from "./BeforeAfterProgressCarousel";

const MESSAGING_FLOW_CAROUSEL_SLIDES: BeforeAfterCarouselSlide[] = [
  {
    id: "inbox",
    src: "/images/twine-messaging-flow-inbox-comparison.png?v=20260530",
    alt: "Twine messaging inbox before and after: dark message list compared to light Instagram-style inbox",
  },
  {
    id: "conversation",
    src: "/images/twine-messaging-flow-conversation-comparison.png?v=20260530",
    alt: "Twine conversation screen before and after: dark quick questions compared to light starter tips with gator helper",
  },
  {
    id: "attachment",
    src: "/images/twine-messaging-flow-attachment-comparison.png?v=20260531",
    alt: "Twine messaging attachment menu before and after: dark action sheet compared to light chat with camera, location, photos, and file options",
  },
];

const INSIGHTS_CAROUSEL_SLIDES: BeforeAfterCarouselSlide[] = [
  {
    id: "insights",
    src: "/images/twine-insights-dashboard-before-after.png?v=20260601",
    alt: "Twine insights dashboard before and after: dark analytics home compared to light insights with gator praise and metric cards",
  },
];

const BROWSING_CAROUSEL_SLIDES: BeforeAfterCarouselSlide[] = [
  {
    id: "browsing",
    src: "/images/twine-browsing-before-after.png?v=20260601",
    alt: "Twine browsing before and after: structured discovery home compared to image-first Pinterest-style search feed",
  },
];

type RedesignItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  reason: string;
  carouselSlides: BeforeAfterCarouselSlide[];
};

const REDESIGNS: RedesignItem[] = [
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Messaging Flow",
    reason:
      "We changed it based on a majority vote for light mode and updated the design to better match what our participants are most familiar with when finding services, which is Instagram, by more closely mimicking its style.",
    carouselSlides: MESSAGING_FLOW_CAROUSEL_SLIDES,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Insights Dashboard",
    reason:
      "We changed it to feel more modern and appealing to a younger audience, adding persuasion through praise to encourage entrepreneurs to keep earning.",
    carouselSlides: INSIGHTS_CAROUSEL_SLIDES,
  },
  {
    id: "browsing",
    icon: LayoutGrid,
    title: "Browsing",
    reason:
      "We decided on a more conservative design and focused heavily on images, mimicking Instagram and Pinterest layouts to pull people in through visuals, and moved these components to the search screen instead.",
    carouselSlides: BROWSING_CAROUSEL_SLIDES,
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

function BeforeAfterComparison({ item }: { item: RedesignItem }) {
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

      <div className="w-full min-w-0">
        <BeforeAfterProgressCarousel slides={item.carouselSlides} />
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
              <BeforeAfterComparison item={activeItem} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
