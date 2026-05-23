import { motion } from "motion/react";

export function Manifesto() {
  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-[var(--portfolio-text-muted)]/55">
          <span className="h-px w-10 bg-[var(--portfolio-text-muted)]/30" />
          <span>01 · Manifesto</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-[1100px] leading-[1.12] tracking-[-0.015em] text-[var(--portfolio-text)]"
          style={{
            fontFamily: "var(--portfolio-display-font)",
            fontSize: "clamp(28px, 4.4vw, 64px)",
            fontWeight: 300,
          }}
        >
          I believe the best products feel{" "}
          <span className="italic text-[var(--portfolio-accent)]">quiet</span>. They earn your
          attention by saying less, by waiting, by knowing when to{" "}
          <span className="italic text-[var(--portfolio-accent)]">disappear</span>. I&apos;m
          drawn to interfaces that behave like a good friend in a long
          conversation — present, generous, and unafraid of the dark parts.
        </motion.p>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {[
            {
              n: "→",
              t: "Story over screens",
              b: "Every flow has a protagonist, a stake, and a reason to keep going. If a screen doesn't move the story forward, it shouldn't exist.",
            },
            {
              n: "↗",
              t: "Warmth as a feature",
              b: "Emotional UX isn't decoration — it's the difference between a product that's used and a product that's loved.",
            },
            {
              n: "↘",
              t: "Slow is a choice",
              b: "Some interactions should take a beat. I design the pause as carefully as the payload.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="border-t border-[var(--portfolio-border)]/12 pt-6"
            >
              <div className="mb-6 text-[var(--portfolio-accent)]" style={{ fontSize: "28px" }}>
                {p.n}
              </div>
              <div className="mb-3 text-[14px] uppercase tracking-[0.18em] text-[#e9e2d6]">
                {p.t}
              </div>
              <p className="text-[14px] leading-[1.65] text-[#cfc6b6]/65">
                {p.b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
