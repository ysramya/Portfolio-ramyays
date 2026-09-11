export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  /** Optional silent loop shown in place of `image` on the homepage card. */
  video?: string;
  accent: "green" | "yellow";
};

// Order is deliberate, not chronological — it's the sequence a recruiter
// should read, and each case study's closing band links to the next one:
// ASAP → PM Dashboard → Raahi → Wellnut → Invisible Impacts → About.
export const projects: Project[] = [
  {
    slug: "asap",
    title: "ASAP",
    description: "Turning big goals into small, doable steps.",
    category: "AI Product Design · Mobile",
    // `image` doubles as the loop's poster and the reduced-motion fallback.
    image: "/img/asap/thumb-poster.jpg",
    video: "/video/asap-thumb.mp4",
    accent: "green",
  },
  {
    slug: "mainstreet",
    title: "PM Dashboard",
    description: "A single-screen view into $1B+ of managed assets.",
    category: "Data Analytics · Power BI",
    image: "/img/mainstreet/laptop-mockup.png",
    accent: "yellow",
  },
  {
    slug: "raahi",
    title: "Raahi",
    description: "A browser plugin that catches dark and manipulative patterns on the web.",
    category: "0→1 Product · Browser Tool",
    image: "/img/raahi/laptop-mockup.png",
    accent: "green",
  },
  {
    slug: "wellnut",
    title: "Wellnut",
    description: "A VR companion for student mental wellness.",
    category: "VR / XR · Mental Health",
    image: "/img/wellnut/vr-session.jpg",
    accent: "yellow",
  },
  {
    slug: "invisible-impacts",
    title: "Invisible Impacts",
    description: "Making AI infrastructure visible through interaction.",
    category: "Sustainability · Physical Computing",
    image: "/img/coac/laptop-mockup.png",
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
      eyebrow: "Next project",
      cta: "View case study",
    };
  }
  return {
    href: "/about",
    title: "About me",
    description: "How I think, and what shaped my journey as a designer.",
    eyebrow: "Up next",
    cta: "Read more",
  };
}
