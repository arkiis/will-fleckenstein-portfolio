import { useEffect, useRef } from "react";
import { analytics } from "../lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

/**
 * Tracks scroll depth milestones and time on page for long case studies.
 */
export function useCaseStudyScrollTracking(caseStudy?: string) {
  const reached = useRef<Set<number>>(new Set());
  const startedAt = useRef(Date.now());
  const exitSent = useRef(false);

  useEffect(() => {
    if (!caseStudy) return;

    startedAt.current = Date.now();
    reached.current = new Set();
    exitSent.current = false;

    analytics.caseStudyView(caseStudy);

    const sendExit = () => {
      if (exitSent.current) return;
      exitSent.current = true;
      const seconds = Math.round((Date.now() - startedAt.current) / 1000);
      analytics.caseStudyExit(caseStudy, seconds);
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.min(
        100,
        Math.round((window.scrollY / scrollable) * 100),
      );

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !reached.current.has(milestone)) {
          reached.current.add(milestone);
          analytics.caseStudyScroll(caseStudy, milestone);
        }
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") sendExit();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", sendExit);
    document.addEventListener("visibilitychange", onVisibility);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", sendExit);
      document.removeEventListener("visibilitychange", onVisibility);
      sendExit();
    };
  }, [caseStudy]);
}
