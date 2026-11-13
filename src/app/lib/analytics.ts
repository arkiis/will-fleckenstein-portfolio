import { track } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null | undefined>;

function send(name: string, properties?: Props) {
  track(name, properties);
}

/** Homepage contact section (end credits). */
export const analytics = {
  contactEmailCopy: () => send("contact_email", { action: "copy" }),
  contactResumeOpen: () => send("contact_resume", { action: "open" }),

  footerLinkedIn: () => send("footer_linkedin", { action: "open" }),

  workProjectClick: (slug: string) => send("work_project_click", { slug }),

  funProjectClick: (slug: string) => send("fun_project_click", { slug }),

  navSectionClick: (section: string) => send("nav_section_click", { section }),

  caseStudyView: (caseStudy: string) => send("case_study_view", { case_study: caseStudy }),

  caseStudyScroll: (caseStudy: string, percent: number) =>
    send("case_study_scroll", { case_study: caseStudy, percent }),

  caseStudyExit: (caseStudy: string, seconds: number) =>
    send("case_study_exit", { case_study: caseStudy, seconds }),

  caseStudyNext: (from: string, to: string) =>
    send("case_study_next", { from, to }),

  caseStudyBackIndex: (from: string) =>
    send("case_study_back_index", { from }),

  externalLinkClick: (caseStudy: string, label: string) =>
    send("external_link_click", { case_study: caseStudy, label }),
};
