import { useEffect, useState } from "react";
import { Hero } from "./components/portfolio/Hero";
import { Work } from "./components/portfolio/Work";
import { About } from "./components/portfolio/About";
import { Contact } from "./components/portfolio/Contact";
import { Nav } from "./components/portfolio/Nav";
import { Grain } from "./components/portfolio/Grain";
import { Cursor } from "./components/portfolio/Cursor";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";
import { CaseStudyPage } from "./components/portfolio/CaseStudyPage";
import { LoadingSkeleton } from "./components/portfolio/LoadingSkeleton";
import { BODY_FONT } from "./constants/typography";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function readSlugFromHash(): string | null {
  const h = window.location.hash;
  const m = h.match(/^#\/case\/([a-z0-9-]+)/i);
  return m ? m[1] : null;
}

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const [slug, setSlug] = useState<string | null>(() =>
    typeof window === "undefined" ? null : readSlugFromHash(),
  );
  const { colors } = useTheme();

  useEffect(() => {
    const minDisplayTime = 300; // Minimum skeleton display to prevent flash
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => setLoaded(true), remainingTime);
    };

    // Wait for DOM content and initial resources
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const onHash = () => setSlug(readSlugFromHash());
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const navigate = (next: string | null) => {
    if (next) {
      window.location.hash = `#/case/${next}`;
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
    setSlug(next);
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden antialiased transition-colors duration-500"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: BODY_FONT,
      }}
    >
      {!slug && <SmoothScroll />}
      <Grain />
      <Cursor />

      {/* Loading skeleton */}
      <div
        className="transition-opacity duration-700"
        style={{
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? "none" : "auto",
        }}
      >
        <LoadingSkeleton />
      </div>

      {/* Main content */}
      <div
        key={slug ?? "home"}
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        {slug ? (
          <CaseStudyPage slug={slug} onNavigate={navigate} />
        ) : (
          <>
            <Nav />
            <Hero />
            <Work onOpen={navigate} />
            <About />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
