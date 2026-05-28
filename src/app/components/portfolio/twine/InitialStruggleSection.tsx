import { motion } from "motion/react";
import type { ReactNode } from "react";
import { InitialStruggleFlowsFigure } from "./InitialStruggleFlowsFigure";

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/55">
      <span className="h-px w-10 bg-[var(--portfolio-text-muted)]/30" />
      <span>{n}</span>
      <span className="text-[var(--portfolio-text)]/85">{label}</span>
    </div>
  );
}

function AudienceHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm bg-[var(--portfolio-accent)]/15 px-1.5 py-0.5 font-medium text-[var(--portfolio-accent)]">
      {children}
    </span>
  );
}

export function InitialStruggleSection() {
  return (
    <section id="initial-struggle" className="relative scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel n="01" label="Initial Struggle" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2 }}
            className="max-w-[760px] space-y-6 lg:pt-2"
          >
            <p className="text-[15px] leading-[1.8] text-[var(--portfolio-text-muted)] md:text-[16px]">
              Compared to the other ideas in the class, ours was more complex because we had two
              distinct user groups with different problems:{" "}
              <AudienceHighlight>student consumers</AudienceHighlight> and{" "}
              <AudienceHighlight>student producers</AudienceHighlight>.
            </p>
            <p className="text-[15px] leading-[1.8] text-[var(--portfolio-text-muted)] md:text-[16px]">
              In response, we designed two separate user flows at login, introducing tailored
              features and slightly different navigation experiences based on the selected role.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative"
          >
            <InitialStruggleFlowsFigure />

            <p
              className="mt-5 text-center text-[10px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/50"
              style={{ fontFamily: "var(--portfolio-display-font)" }}
            >
              Two audiences · One marketplace
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
