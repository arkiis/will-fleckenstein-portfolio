import { motion, AnimatePresence } from "motion/react";
import { useState, type ElementType } from "react";
import { BarChart3, LayoutGrid, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TwineCaseStudyMediaFrame, MEDIA_FRAME_BACKGROUND_SOFT } from "./TwineCaseStudyMediaFrame";

const COMMUNICATION_SCREENS_SRC = "/images/twine-communication-screens.png";
const ANALYTICS_SCREENS_SRC = "/images/twine-analytics-screens.png";
const BROWSING_SCREENS_SRC = "/images/twine-browsing-screens.png";

type WhatIDidItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  body: string;
  evidenceSrc: string;
  evidenceAlt: string;
};

const ITEMS: WhatIDidItem[] = [
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication Screens",
    body: "Messaging in one central location from producer to consumer, an all in one place for chat, contextual project guidance, and service management.",
    evidenceSrc: COMMUNICATION_SCREENS_SRC,
    evidenceAlt:
      "Twine communication screens: messages inbox, chat with attachment menu, and conversation starter with quick questions",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics Screens",
    body: "An insights dashboard for student entrepreneurs, providing a broad view of earnings, profile views, clients, and ongoing projects.",
    evidenceSrc: ANALYTICS_SCREENS_SRC,
    evidenceAlt:
      "Twine analytics screens: insights dashboard with earnings and ongoing projects, plus earnings detail with withdrawal and year filters",
  },
  {
    id: "browsing",
    icon: LayoutGrid,
    title: "Browsing Screens",
    body: "A discovery feed with category filters, trust signals, and a masonry layout built for scanning campus services quickly.",
    evidenceSrc: BROWSING_SCREENS_SRC,
    evidenceAlt:
      "Twine browsing screens: discovery home with categories and recently viewed, plus service detail with reviews",
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

function DesignEvidence({ item }: { item: WhatIDidItem }) {
  const isBrowsing = item.id === "browsing";

  return (
    <figure className="min-w-0">
      <TwineCaseStudyMediaFrame background={isBrowsing ? MEDIA_FRAME_BACKGROUND_SOFT : undefined}>
        <ImageWithFallback
          src={item.evidenceSrc}
          alt={item.evidenceAlt}
          className="relative z-[1] mx-auto block h-auto w-auto max-w-full mix-blend-screen"
          draggable={false}
          loading="eager"
          decoding="sync"
        />
      </TwineCaseStudyMediaFrame>
    </figure>
  );
}

export function WhatIDidSection() {
  const [activeId, setActiveId] = useState("communication");
  const activeItem = ITEMS.find((item) => item.id === activeId) ?? ITEMS[0];

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
          <span className="italic">messaging</span>, <span className="italic">analytics</span>, and{" "}
          <span className="italic">discovery</span>.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3">
          {ITEMS.map((item, i) => {
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
              <DesignEvidence item={activeItem} />
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
