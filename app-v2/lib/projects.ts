export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  /** Optional silent loop shown in place of `image` on the homepage card. */
  video?: string;
  /** How long the project ran, shown on the homepage card. Omitted where the
   *  case study doesn't state one. */
  duration?: string;
  /** The headline result, shown on every case-study card so they read alike. */
  impact: { stat: string; label: string };
  accent: "green" | "yellow";
};

// Order is deliberate, not chronological — it's the sequence a recruiter
// should read, and each case study's closing band links to the next one:
// PM Dashboard → ASAP → Raahi → Wellnut → Invisible Impacts → About.
// It leads with the clearest business outcome, then the AI product work.
export const projects: Project[] = [
  {
    slug: "mainstreet",
    title: "PM Dashboard",
    description: "Replaced a manual Monday reporting ritual with a live view of $1.2B+ in assets, saving about 3 hours a week per Portfolio Manager.",
    category: "Product Operations · Power BI",
    image: "/img/mainstreet/dashboard-mockup.png",
    video: "/img/mainstreet/thumb.mp4",
    duration: "8 weeks",
    impact: { stat: "~3 hrs", label: "saved every week per Portfolio Manager, with the portfolio view in under 10 seconds" },
    accent: "yellow",
  },
  {
    slug: "asap",
    title: "ASAP",
    description: "An AI planning product that turns a vague goal into a clear next step, shaped by user research and tested across three iterations.",
    category: "AI Product Strategy · Mobile",
    // `image` doubles as the loop's poster and the reduced-motion fallback.
    image: "/img/asap/thumb-poster.jpg",
    video: "/video/asap-thumb.mp4",
    duration: "10 weeks",
    impact: { stat: "3 iterations", label: "across 4 usability scenarios with a live AI prototype; user testing reshaped the AI's behavior" },
    accent: "green",
  },
  {
    slug: "raahi",
    title: "Raahi",
    description: "A browser plugin that turns a practitioner's instinct about dark patterns into documented evidence, built from 12 interviews and a 57+ response survey.",
    category: "0→1 Product · Browser Tool",
    image: "/img/raahi/laptop-mockup.png",
    video: "/img/raahi/thumb.mp4",
    duration: "16 weeks",
    impact: { stat: "57+", label: "practitioners surveyed, plus 12 interviews, which set the product's scope and direction" },
    accent: "green",
  },
  {
    slug: "wellnut",
    title: "Wellnut",
    description: "A VR companion that lowers the barrier to student mental-health support, taken from research to a working prototype in 6 months.",
    category: "Product Research · VR",
    image: "/img/wellnut/vr-session.jpg",
    duration: "6 months",
    impact: { stat: "6 months", label: "from research to a working VR prototype, shown at the Jarvis Innovation Showcase" },
    accent: "yellow",
  },
  {
    slug: "invisible-impacts",
    title: "Invisible Impacts",
    description: "An installation that makes AI's hidden environmental cost tangible, with measured visitor response and a grant win.",
    category: "Research & Delivery · Physical Computing",
    image: "/img/coac/laptop-mockup.png",
    video: "/img/coac/thumb.mp4",
    duration: "10 weeks",
    impact: { stat: "85%", label: "of visitors reported changed awareness of AI's footprint (self-reported); grant winner" },
    accent: "green",
  },
];

/** What follows a case study in the portfolio order. The last one hands off to About. */
export function getNextProject(slug: string): {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  cta: string;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = i >= 0 ? projects[i + 1] : undefined;
  if (next) {
    return {
      href: `/projects/${next.slug}`,
      title: next.title,
      description: next.description,
      eyebrow: "Next case study",
      cta: "Read the case study",
    };
  }
  return {
    href: "/about",
    title: "About me",
    description: "Background, experience, and what I am looking for next.",
    eyebrow: "Up next",
    cta: "Read more",
  };
}
