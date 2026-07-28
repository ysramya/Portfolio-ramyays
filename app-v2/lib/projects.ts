export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  accent: "green" | "yellow";
};

// Order is deliberate, not chronological — it's the sequence a recruiter
// should read. `accent` alternates green/yellow down the list so no run of
// rows reads monochrome; if you reorder these, reassign the accents too.
export const projects: Project[] = [
  {
    slug: "mainstreet",
    title: "PM Dashboard",
    // TODO(content): no matching one-liner was provided for this project.
    description: "A single-screen view into $1B+ of managed assets.",
    category: "Data Analytics · Power BI",
    image: "/img/mainstreet/laptop-mockup.png",
    accent: "green",
  },
  {
    slug: "raahi",
    title: "Raahi",
    description: "A browser plugin that catches dark and manipulative patterns on the web.",
    category: "0→1 Product · Browser Tool",
    image: "/img/raahi/laptop-mockup.png",
    accent: "yellow",
  },
  {
    slug: "asap",
    title: "ASAP",
    description: "Designing safer conversational AI experiences.",
    category: "Academic Planning · AI UX",
    image: "/img/asap/phone-mockup.png",
    accent: "green",
  },
  {
    slug: "invisible-impacts",
    title: "Invisible Impacts",
    description: "Making AI infrastructure visible through interaction.",
    category: "Sustainability · Physical Computing",
    image: "/img/coac/laptop-mockup.png",
    accent: "yellow",
  },
  {
    slug: "wellnut",
    title: "Wellnut",
    description: "A VR companion for student mental wellness.",
    category: "VR / XR · Mental Health",
    image: "/img/wellnut/vr-session.jpg",
    accent: "green",
  },
];
