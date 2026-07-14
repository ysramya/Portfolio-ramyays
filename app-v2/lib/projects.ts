export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  accent: "green" | "yellow";
};

export const projects: Project[] = [
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
    slug: "asap",
    title: "ASAP",
    description: "Designing safer conversational AI experiences.",
    category: "Academic Planning · AI UX",
    image: "/img/asap/phone-mockup.png",
    accent: "green",
  },
  {
    slug: "mainstreet",
    title: "PM Dashboard",
    // TODO(content): no matching one-liner was provided for this project.
    description: "A single-screen view into $1B+ of managed assets.",
    category: "Data Analytics · Power BI",
    image: "/img/mainstreet/laptop-mockup.png",
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
