import { type MouseEvent } from "react";
import { motion } from "motion/react";
import { toast, Toaster } from "sonner";
import { useTheme } from "../../contexts/ThemeContext";

export function Contact() {
  const { colors, theme, displayFont } = useTheme();

  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-16 pt-32 md:pt-44"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${colors.secondary}55, transparent 60%), ${colors.bgGradient}`,
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at 50% 100%, ${colors.secondary}55, transparent 60%), ${colors.bgGradient}`,
            `radial-gradient(ellipse at 48% 98%, ${colors.secondary}66, transparent 58%), ${colors.bgGradient}`,
            `radial-gradient(ellipse at 50% 100%, ${colors.secondary}55, transparent 60%), ${colors.bgGradient}`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          className="mb-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `${colors.text}8c` }}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="h-px w-10" style={{ backgroundColor: `${colors.text}33` }} />
          <span>End credits</span>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <ContactLink
            label="Email"
            value="william.fleckenstein@gmail.com"
            href="mailto:william.fleckenstein@gmail.com"
            colors={colors}
            displayFont={displayFont}
            copyValue="william.fleckenstein@gmail.com"
            cursorLabel="Copy"
          />
          <ContactLink
            label="Read.cv"
            value="Resume"
            href="https://drive.google.com/file/d/1tZv0Ts7-z4SHjTG3ziMyiTe8iKFR7iyT/view?usp=sharing"
            colors={colors}
            displayFont={displayFont}
            cursorLabel="Open"
          />
        </motion.div>

        <motion.div
          className="mt-24 flex flex-wrap items-end justify-between gap-4 border-t pt-6 text-[11px] uppercase tracking-[0.22em]"
          style={{
            borderColor: `${colors.border}1a`,
            color: `${colors.text}66`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            © 2026 William Fleckenstein
          </motion.div>
          <motion.div className="flex items-center gap-2">
            <motion.span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: colors.accent }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Fin.</span>
          </motion.div>
        </motion.div>
      </div>

      <Toaster
        theme={theme}
        position="bottom-center"
        toastOptions={{
          style: {
            background: colors.cardBg,
            border: `1px solid ${colors.accent}40`,
            color: colors.text,
          },
        }}
      />
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
  colors,
  displayFont,
  copyValue,
  cursorLabel = "Open",
}: {
  label: string;
  value: string;
  href: string;
  colors: ReturnType<typeof useTheme>["colors"];
  displayFont: string;
  copyValue?: string;
  cursorLabel?: string;
}) {
  const handleClick = (e: MouseEvent) => {
    if (!copyValue) return;
    e.preventDefault();
    navigator.clipboard.writeText(copyValue).then(() => {
      toast.success("Email copied to clipboard");
    });
  };

  return (
    <motion.a
      href={href}
      target={copyValue ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-cursor="hover"
      data-cursor-label={cursorLabel}
      onClick={handleClick}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="group flex items-center justify-between gap-6 border-b py-4"
      style={{ borderColor: `${colors.border}1a` }}
      whileHover={{
        borderColor: `${colors.text}44`,
        x: 6,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <span
        className="text-[11px] uppercase tracking-[0.22em] transition-colors group-hover:text-[var(--link-accent)]"
        style={{
          color: `${colors.text}99`,
          ["--link-accent" as string]: colors.text,
        }}
      >
        {label}
      </span>
      <motion.span
        className="flex items-center gap-3 italic"
        style={{
          fontFamily: displayFont,
          fontSize: "clamp(22px, 2.6vw, 36px)",
          fontWeight: 300,
          color: colors.text,
        }}
      >
        <motion.span className="group-hover:opacity-90">
          {value}
        </motion.span>
        <motion.span
          className="inline-block"
          initial={false}
          whileHover={{ x: 6, rotate: copyValue ? 0 : -8 }}
        >
          ↗
        </motion.span>
      </motion.span>
    </motion.a>
  );
}
