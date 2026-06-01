import { useCaseStudyScrollTracking } from "./useCaseStudyScrollTracking";

/** Scroll / exit tracking when `caseStudy` is provided (e.g. unused router pages). */
export function useVisitorTracking(caseStudy?: string) {
  useCaseStudyScrollTracking(caseStudy);
}
