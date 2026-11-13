import { pageview } from "@vercel/analytics";
import { useEffect, useRef, useState } from "react";
import { Hero } from "./components/portfolio/Hero";
import { Work } from "./components/portfolio/Work";
import { FunProjects } from "./components/portfolio/FunProjects";
import { About } from "./components/portfolio/About";
import { Contact } from "./components/portfolio/Contact";
import { Nav } from "./components/portfolio/Nav";
import { Grain } from "./components/portfolio/Grain";
import { SmoothScroll } from "./components/portfolio/SmoothScroll";
import { CaseStudyPage } from "./components/portfolio/CaseStudyPage";
import { BODY_FONT } from "./constants/typography";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function readSlugFromHash(): string | null {
  const h = window.location.hash;
  const m = h.match(/^#\/case\/([a-z0-9-]+)/i);
  return m ? m[1] : null;
}

function AppContent() {
  const [slug, setSlug] = useState<string | null>(() =>
    typeof window === "undefined" ? null : readSlugFromHash(),
  );
  const { colors } = useTheme();

  useEffect(() => {
    const onHash = () => setSlug(readSlugFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const isInitialPageview = useRef(true);
  useEffect(() => {
    const path = slug ? `/case/${slug}` : "/";
    if (isInitialPageview.current) {
      isInitialPageview.current = false;
      if (!slug) return;
    }
    pageview({ path });
  }, [slug]);

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

      <div key={slug ?? "home"}>
        {slug ? (
          <CaseStudyPage slug={slug} onNavigate={navigate} />
        ) : (
          <>
            <Nav />
            <Hero />
            <Work onOpen={navigate} />
            <FunProjects />
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
