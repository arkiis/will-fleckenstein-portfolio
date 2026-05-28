import { motion, AnimatePresence } from "motion/react";
import { useState, type ElementType } from "react";
import { PenLine, MonitorSmartphone, Palette } from "lucide-react";
import gatorLogo from "../../../../imports/gator_UI_logo.png";
import { AffinityMappingEvidence } from "./AffinityMappingEvidence";
import { MessagingDesignEvolution } from "./MessagingDesignEvolution";
import { WhatIDidEvidenceFigure } from "./WhatIDidEvidenceFigure";

type WhatIDidItem = {
  id: string;
  icon: ElementType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  body: string;
  evidenceSrc?: string;
  evidenceAlt?: string;
  fadeBottom?: boolean;
  evidenceImageClassName?: string;
};

const ITEMS: WhatIDidItem[] = [
  {
    id: "screens",
    icon: MonitorSmartphone,
    title: "Low & hi-fidelity screens",
    body: "Iterated messaging from an early dark chat pattern into Twine's light UI — inbox, threads, and gator-led conversation starters.",
  },
  {
    id: "affinity",
    icon: PenLine,
    title: "Affinity mapping & synthesis",
    body: "After semi-structured interviews with seven UF students across both sides of the marketplace, I clustered raw quotes into themes and translated them into design opportunities.",
  },
  {
    id: "brand",
    icon: Palette,
    title: "Logo & brand iteration",
    body: "Explored multiple logo directions before landing on a knot mark with an embedded gator.",
    evidenceSrc: gatorLogo,
    evidenceAlt: "Twine final logo mark with gator inside the knot",
    evidenceImageClassName:
      "mx-auto block h-auto max-h-[min(380px,48vh)] w-auto max-w-[min(100%,520px)] object-contain py-10",
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

export function WhatIDidSection() {
  const [activeId, setActiveId] = useState("screens");
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
          My role across the <span className="italic">research</span>,{" "}
          <span className="italic">design</span>, and <span className="italic">brand</span> work.
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
              {activeItem.id === "affinity" ? (
                <AffinityMappingEvidence />
              ) : activeItem.id === "screens" ? (
                <MessagingDesignEvolution />
              ) : (
                <WhatIDidEvidenceFigure
                  src={activeItem.evidenceSrc!}
                  alt={activeItem.evidenceAlt!}
                  fadeBottom={activeItem.fadeBottom}
                  imageClassName={activeItem.evidenceImageClassName}
                />
              )}
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
