import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useActiveSection } from "../../hooks/useActiveSection";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, colors } = useTheme();
  const activeSection = useActiveSection(SECTIONS.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const NavLink = ({
    id,
    label,
    className = "",
  }: {
    id: string;
    label: string;
    className?: string;
  }) => {
    const isActive = activeSection === id;
    return (
      <a
        href={`#${id}`}
        className={`group relative inline-block text-[11px] uppercase tracking-[0.22em] transition-colors ${className}`}
        style={{ color: isActive ? colors.text : `${colors.text}99` }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.color = colors.text;
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.color = `${colors.text}99`;
        }}
        data-cursor="hover"
      >
        {label}
        <motion.span
          className="absolute -bottom-1 left-0 h-px"
          style={{ backgroundColor: colors.text }}
          initial={false}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <span
          className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
          style={{ backgroundColor: `${colors.text}55` }}
        />
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md" : "py-6"
        }`}
        style={{
          background: scrolled
            ? theme === "dark"
              ? "linear-gradient(to bottom, rgba(12,15,20,0.88), rgba(12,15,20,0.58))"
              : "linear-gradient(to bottom, rgba(244,246,249,0.88), rgba(244,246,249,0.58))"
            : "transparent",
        }}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left"
          style={{ backgroundColor: `${colors.text}22` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10"
          animate={{ y: scrolled ? 0 : 0 }}
        >
          <a
            href="#top"
            className="group"
            data-cursor="hover"
          >
            <span
              className="text-[11px] uppercase tracking-[0.28em] transition-colors group-hover:text-[var(--nav-hover)]"
              style={{
                color: colors.text,
                ["--nav-hover" as string]: colors.text,
              }}
            >
              William Fleckenstein
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {SECTIONS.map((s) => (
              <NavLink key={s.id} id={s.id} label={s.label} />
            ))}

            <motion.button
              onClick={toggleTheme}
              className="relative flex h-8 w-8 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${colors.text}12`,
                border: `1px solid ${colors.text}30`,
              }}
              aria-label="Toggle theme"
              data-cursor="hover"
              whileHover={{
                scale: 1.08,
                backgroundColor: `${colors.text}22`,
                borderColor: `${colors.text}55`,
              }}
              whileTap={{ scale: 0.94 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {theme === "dark" ? (
                  <Sun size={16} style={{ color: colors.text }} />
                ) : (
                  <Moon size={16} style={{ color: colors.text }} />
                )}
              </motion.div>
            </motion.button>
          </nav>

          <motion.div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${colors.text}12`,
                border: `1px solid ${colors.text}30`,
              }}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.92 }}
            >
              {theme === "dark" ? (
                <Sun size={16} style={{ color: colors.text }} />
              ) : (
                <Moon size={16} style={{ color: colors.text }} />
              )}
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5"
              aria-label="Toggle menu"
              data-cursor="hover"
            >
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: colors.accent }}
              />
              <span
                className={`block h-[1px] w-6 transition-all duration-300 ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
                style={{ backgroundColor: colors.accent }}
              />
            </button>
          </motion.div>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm md:hidden"
              style={{
                backgroundColor:
                  theme === "dark"
                    ? "rgba(12,15,20,0.82)"
                    : "rgba(244,246,249,0.82)",
              }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col gap-8 p-8 pt-24 shadow-2xl md:hidden"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(135deg, rgba(17,22,32,0.98) 0%, rgba(12,15,20,0.98) 100%)"
                    : "linear-gradient(135deg, rgba(232,237,244,0.98) 0%, rgba(244,246,249,0.98) 100%)",
                borderLeft: `1px solid ${colors.accent}26`,
              }}
            >
              {SECTIONS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="group flex items-center gap-4 text-[14px] uppercase tracking-[0.28em]"
                  style={{
                    color:
                      activeSection === item.id
                        ? colors.text
                        : `${colors.text}99`,
                  }}
                  data-cursor="hover"
                >
                  <motion.span
                    className="h-px"
                    animate={{
                      width: activeSection === item.id ? 48 : 32,
                      backgroundColor:
                        activeSection === item.id
                          ? colors.text
                          : `${colors.text}4d`,
                    }}
                  />
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
