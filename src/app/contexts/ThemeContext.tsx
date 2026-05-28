import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { DISPLAY_FONT, HERO_HEADING_SIZE } from "../constants/typography";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  displayFont: string;
  colors: {
    bg: string;
    bgGradient: string;
    text: string;
    textMuted: string;
    textDim: string;
    secondary: string;
    accent: string;
    border: string;
    cardBg: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyCssVariables(colors: ThemeContextType["colors"]) {
  const root = document.documentElement;
  root.style.setProperty("--portfolio-bg", colors.bg);
  root.style.setProperty("--portfolio-card", colors.cardBg);
  root.style.setProperty("--portfolio-text", colors.text);
  root.style.setProperty("--portfolio-text-muted", colors.textMuted);
  root.style.setProperty("--portfolio-text-dim", colors.textDim);
  root.style.setProperty("--portfolio-secondary", colors.secondary);
  root.style.setProperty("--portfolio-accent", colors.accent);
  root.style.setProperty("--portfolio-border", colors.border);
  root.style.setProperty("--portfolio-display-font", DISPLAY_FONT);
  root.style.setProperty("--portfolio-hero-heading-size", HERO_HEADING_SIZE);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return (saved as Theme) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const colors =
    theme === "dark"
      ? {
          bg: "#0c0f14",
          bgGradient: "linear-gradient(180deg, #0c0f14 0%, #111620 100%)",
          text: "#f5f7fa",
          textMuted: "#e2e8f0",
          textDim: "#94a3b8",
          secondary: "#3d5270",
          accent: "#5fa7ff",
          border: "rgba(148, 163, 184, 0.28)",
          cardBg: "#111620",
        }
      : {
          bg: "#f4f6f9",
          bgGradient: "linear-gradient(180deg, #f4f6f9 0%, #e8edf4 100%)",
          text: "#0f172a",
          textMuted: "#334155",
          textDim: "#64748b",
          secondary: "#5a7a9e",
          accent: "#3b82e8",
          border: "rgba(100, 116, 139, 0.35)",
          cardBg: "#e8edf4",
        };

  useEffect(() => {
    applyCssVariables(colors);
  }, [colors]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colors, displayFont: DISPLAY_FONT }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
