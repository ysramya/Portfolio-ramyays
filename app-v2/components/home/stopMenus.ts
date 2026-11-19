/**
 * Dropdown content for every stop on the trail map. Every destination is a
 * page or section that already exists. The Work stop's list is the projects
 * themselves (built in StopFlyouts from lib/projects), so it isn't repeated here.
 */
export type MenuItem = { label: string; note: string; href: string; external?: boolean };
export type StopMenu = { title: string; items: MenuItem[]; all?: { label: string; href: string }; image?: { src: string; w: number; h: number; alt: string };
  /** Polaroid collage: one photo per section, each linking to its section. */
  /** A portrait, heading and short intro shown above the links. */
  profile?: { src: string; w: number; h: number; alt: string; heading: string; intro: string };
  photos?: { label: string; src: string; href: string; alt: string }[] };

export const menus: Record<string, StopMenu> = {
  approach: {
    title: "My approach",
    items: [],
    image: {
      src: "/img/approach/my-approach.webp", w: 1024, h: 687,
      alt: "My Approach: from messy questions to real, shippable products. Five steps: Understand the people, problem and context; Explore multiple possibilities; Test by turning ideas into prototypes and getting real feedback; Build by working with product and engineering to ship it; Improve by continuing to learn and iterate. Double Diamond (explore, focus, and make better decisions) combined with Agile (build, learn, and adapt in continuous cycles).",
    },
    all: { label: "See it in my work", href: "/case-studies" },
  },
  beyond: {
    title: "Playground",
    items: [
      { label: "Interiors", note: "Interior design", href: "/beyond-the-screen#interiors" },
      { label: "Cityscapes", note: "Photography", href: "/beyond-the-screen#cityscapes" },
      { label: "Nature", note: "Photography", href: "/beyond-the-screen#nature" },
      { label: "Cooking", note: "Food", href: "/beyond-the-screen#cooking" },
      { label: "Digital paintings", note: "Art", href: "/beyond-the-screen#paintings" },
    ],
    photos: [
      { label: "Interiors", src: "/img/playground/interiors.jpg", href: "/beyond-the-screen#interiors", alt: "A bedroom interior design with a green bed and wood-panelled wardrobe." },
      { label: "Cityscapes", src: "/img/playground/cityscapes.jpg", href: "/beyond-the-screen#cityscapes", alt: "A skyscraper silhouetted against an orange evening sky." },
      { label: "Nature", src: "/img/playground/nature.jpg", href: "/beyond-the-screen#nature", alt: "A still lake reflecting trees and a sunset sky." },
      { label: "Cooking", src: "/img/playground/cooking.jpg", href: "/beyond-the-screen#cooking", alt: "A plated dessert of sticky rice with mango." },
      { label: "Digital paintings", src: "/img/playground/paintings.jpg", href: "/beyond-the-screen#paintings", alt: "A digital painting of a flute-playing figure beside a woman, over a peacock-feather landscape." },
    ],
    all: { label: "Everything beyond the screen", href: "/beyond-the-screen" },
  },
  resume: {
    title: "Résumé",
    items: [
      { label: "Download the PDF", note: "Opens in a new tab", href: "/resume.pdf", external: true },
      { label: "Experience & education", note: "The same story, on the page", href: "/about#experience" },
      { label: "LinkedIn", note: "Opens in a new tab", href: "https://www.linkedin.com/in/ramyays", external: true },
    ],
  },
  about: {
    title: "About me",
    profile: {
      src: "/img/about/ramya-golden-gate-sunset.webp", w: 1086, h: 1448,
      alt: "Ramya smiling at a red railing, with the Golden Gate Bridge and the bay behind her at sunset.",
      heading: "Hi, I’m Ramya",
      intro: "I’m a UX and Product Designer working across enterprise, SaaS, and AI products. I bring together user research, product thinking, and design to turn complex problems into clear, usable solutions.",
    },
    items: [],
    all: { label: "More about me", href: "/about" },
  },
  next: {
    title: "What’s next?",
    items: [
      { label: "What I’m looking for", note: "Roles and the kind of problems I'm most useful on", href: "/#contact" },
      { label: "Download résumé", note: "PDF, opens in a new tab", href: "/resume.pdf", external: true },
      { label: "Connect on LinkedIn", note: "Opens in a new tab", href: "https://www.linkedin.com/in/ramyays", external: true },
    ],
  },
};
