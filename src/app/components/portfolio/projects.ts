import twineImg from "../../../imports/twine-thumbnail.png";
import harmonyImg from "../../../imports/harmonia-thumbnail.png";
import twineMockup from "../../../imports/twine-phone-mockup.png";
import harmonyMockup from "../../../imports/harmonia-phone-mockup.png";

export type CaseStudy = {
  slug: string;
  n: string;
  year: string;
  title: string;
  tag: string;
  role: string;
  blurb: string;
  img: string;
  mockup: string;
  device: "phone" | "desktop";
  tileColor: string;
  hue: string;
  meta: { label: string; value: string }[];
  premise: string;
  chapters: {
    n: string;
    title: string;
    body: string;
    quote?: string;
    bullets?: { label: string; value: string }[];
  }[];
  gallery: { src: string; caption: string }[];
  outcome: string;
  reflection: string;
  next: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "twine",
    n: "01",
    year: "2026",
    title: "Twine",
    tag: "Where UF students find student run services",
    role: "Product · Research · Brand · Interaction",
    blurb:
      "A mobile concept for UF students to find, trust, and book services from other students without digging through DMs and group chats.",
    img: twineImg,
    mockup: twineMockup,
    device: "phone",
    tileColor: "#1a3d6e",
    hue: "from-[#0e1a3a] to-[var(--portfolio-bg)]",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Focus", value: "Research · UX/UI · Brand · IxD" },
      { label: "Platform", value: "iOS · Mobile" },
      { label: "Year", value: "2026" },
    ],
    premise:
      "How do you make campus services easier to find and trust, for the people offering them and the people looking for them?",
    chapters: [
      {
        n: "I",
        title: "The scattered campus",
        body: "Student services show up everywhere at once: Instagram DMs, group chats, flyers, word of mouth, random Google Forms. Good work gets buried. People who need help cannot find it. People who offer services cannot grow.",
        bullets: [
          { label: "Low visibility", value: "Most students do not know these services exist." },
          { label: "Fragmented comms", value: "Providers juggle Instagram, forms, and DMs." },
          { label: "Trust gaps", value: "Quality is hard to verify before booking." },
          { label: "Broken discovery", value: "No central place to browse or compare." },
          { label: "No tools", value: "Providers have no analytics, no structure." },
        ],
      },
      {
        n: "II",
        title: "Listening to both sides",
        body: "I ran interviews with both sides of the marketplace. Long enough to feel like real conversations, structured enough to compare. Ten core questions per person, with follow ups based on their role.",
        bullets: [
          { label: "Method", value: "Structured interviews · 10 core questions" },
          { label: "Participants", value: "4 student entrepreneurs · 3 student consumers" },
          { label: "Why", value: "Consistency, plus room for follow up where it mattered" },
        ],
        quote:
          "I just want one place where I can find everything I need on campus.",
      },
      {
        n: "III",
        title: "What both sides said",
        body: "Different words, same need: a system that makes trust easy to read and easy to build.",
        bullets: [
          { label: "Consumers", value: "Trust first, then cost, quality, and turnaround. Reviews and portfolios matter most." },
          { label: "Entrepreneurs", value: "Visibility is the bottleneck. Communication is scattered. They want structure." },
          { label: "Shared truth", value: "Discovery is broken; trust drives every decision." },
        ],
      },
      {
        n: "IV",
        title: "Designing for two protagonists",
        body: "I built personas for both sides so the product would not default to one audience. Christopher, 21, a student photographer building a brand. Kamille, 18, a freshman who wants one place to find everything on campus.",
        quote:
          "I'm excited to build my brand and turn what I love into something bigger.",
      },
      {
        n: "V",
        title: "A campus friendly brand",
        body: "Twine uses a knot for connection, UF blue for trust, and a small gator in the mark so it feels local. Less like a startup pitch, more like something that already belongs on campus.",
        bullets: [
          { label: "Palette", value: "#0021A5 · #8090D2 · #EFEFEF" },
          { label: "Typography", value: "Inter Bold + Regular" },
          { label: "Symbol", value: "Knot = connection · Gator = belonging" },
        ],
      },
      {
        n: "VI",
        title: "Six principles, one feeling",
        body: "A small set of principles guided every screen so the product felt structured without feeling cold.",
        bullets: [
          { label: "Visual hierarchy", value: "Scannable structure, progressive disclosure." },
          { label: "Contextual guidance", value: "Help that meets the user at the task." },
          { label: "Simple icons", value: "Universal, recognizable, low cognitive load." },
          { label: "Anthropomorphism", value: "The gator makes the system feel social." },
          { label: "Praise as motivation", value: "Positive feedback that earns engagement." },
          { label: "Consistent feedback", value: "Every state, change, and error reads clearly." },
        ],
      },
      {
        n: "VII",
        title: "From wireframes to the real thing",
        body: "I started with rough flows to validate structure before visuals. Reviews, portfolios, and verified profiles came after the foundation worked. Final screens cover discovery, messaging, profiles, and a simple growth view for providers.",
        bullets: [
          { label: "Discovery", value: "Cards with price, rating, category, and quick filter." },
          { label: "Messaging", value: "Starter prompts reduce the cost of first contact." },
          { label: "Profile", value: "Portfolio + services + reviews as one trust surface." },
          { label: "Growth", value: "Earnings, views, clients, and active jobs at a glance." },
        ],
      },
    ],
    gallery: [
      { src: twineImg, caption: "Discovery: browsing with trust signals" },
      { src: twineImg, caption: "Provider profile: portfolio and services together" },
      { src: twineImg, caption: "Provider dashboard: earnings and activity" },
    ],
    outcome:
      "Twine pulls scattered campus services into one place that treats buyers and sellers as equals.",
    reflection:
      "This was never about building another marketplace. It was about making discovery and trust less awkward on a campus that already has the talent, just not the right container.",
    next: "harmony",
  },
  {
    slug: "harmony",
    n: "02",
    year: "2026",
    title: "Harmonia",
    tag: "Roommate app for shared accountability",
    role: "Product · Systems · Gamification",
    blurb:
      "A shared living app that helps roommates track chores and expectations with a visual system that makes tension easier to name.",
    img: harmonyImg,
    mockup: harmonyMockup,
    device: "phone",
    tileColor: "#4a3f6e",
    hue: "from-[#1f1a2a] to-[var(--portfolio-bg)]",
    meta: [
      { label: "Type", value: "Course capstone" },
      { label: "Duration", value: "10 weeks" },
      { label: "Team", value: "2 designers" },
      { label: "Tools", value: "Figma · Origami · Diary studies" },
    ],
    premise:
      "What if the chore wheel grew up and actually helped roommates talk about the stuff they avoid?",
    chapters: [
      {
        n: "I",
        title: "The thing nobody says",
        body: "Most roommate fights are not really about dishes. They are about who notices, who nags, who carries the invisible load. I wanted a system that made that visible without making it worse.",
      },
      {
        n: "II",
        title: "A visual language for tension",
        body: "Each household reads as a small living system: a garden that grows or wilts based on shared load. Chores are acts of care, not just checklist items.",
        quote:
          "I wanted the home screen to feel the way the apartment feels.",
      },
      {
        n: "III",
        title: "Gamification without shame",
        body: "No leaderboards. No streaks. The only score is how the home feels overall. Roommates can request, decline, and renegotiate. The app holds space for the conversation; it does not replace it.",
      },
    ],
    gallery: [
      { src: harmonyImg, caption: "Household garden, week 3" },
      { src: harmonyImg, caption: "Care request flow" },
    ],
    outcome:
      "Tested with 4 households over 2 weeks. Three said housework conversations got easier. One kept using the prototype after the study.",
    reflection:
      "I had to unlearn a lot of default product habits. The win was knowing when to stop adding features.",
    next: "twine",
  },
];

export const findProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
