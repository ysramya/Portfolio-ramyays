/**
 * The About page's areas of interest, each with a short "why" and a "where it
 * shows up". The "where" lines are facts from the case studies and resume; the
 * "why" lines are drawn from the About story and the case-study conclusions.
 * Edit the wording here and the pop-ups update.
 */
export type Interest = {
  tag: string;
  why: string;
  how: string;
  links?: { label: string; href: string }[];
};

export const interests: Interest[] = [
  {
    tag: "Product Strategy",
    why: "Good decisions start with understanding people, systems and constraints, and strategy is where those meet.",
    how: "On Raahi I set the product's scope from 12 interviews and a 57+ response survey: a browser plugin instead of a standalone app, built for practitioners first.",
    links: [{ label: "Raahi", href: "/projects/raahi" }],
  },
  {
    tag: "Product Operations",
    why: "I like making the way a team works clearer and faster, so the product can keep up with the business.",
    how: "At MainStreet I replaced a manual weekly reporting process with a live dashboard, saving about 3 hours per Portfolio Manager each week.",
    links: [{ label: "PM Dashboard", href: "/projects/mainstreet" }],
  },
  {
    tag: "Product Discovery",
    why: "The right answer often isn't known yet, so I want to test the problem before committing to a solution.",
    how: "In ASAP, six interviews showed people didn't need another task manager. They needed help getting started, and that changed the product's direction.",
    links: [{ label: "ASAP", href: "/projects/asap" }],
  },
  {
    tag: "Process Improvement",
    why: "A small fix to how work moves through a team adds up across everyone who relies on it.",
    how: "In DePaul's International Admissions I redesigned how requests were categorized, prioritized and assigned: 20% fewer counselor follow-ups and 30%+ more throughput.",
  },
  {
    tag: "Data & Dashboards",
    why: "Numbers only help when people can read them quickly and trust them.",
    how: "The PM Dashboard uses a KPI-first hierarchy, consistent number formatting and a personalized view for each Portfolio Manager, built in Power BI.",
    links: [{ label: "PM Dashboard", href: "/projects/mainstreet" }],
  },
  {
    tag: "Business Problem-Solving",
    why: "I'm most useful where the problem is unclear and several teams are involved.",
    how: "For Wellnut, the barrier came before the first step: 58% of stressed students had never used free support. So I scoped one focused experience over five unfinished features.",
    links: [{ label: "Wellnut", href: "/projects/wellnut" }],
  },
  {
    tag: "Human-AI Interaction",
    why: "Good AI design isn't about doing everything for people. It helps them make the next decision themselves.",
    how: "ASAP asks before it recommends, shows one step at a time, and says how confident it is in each step.",
    links: [{ label: "ASAP", href: "/projects/asap" }],
  },
  {
    tag: "Responsible AI",
    why: "I want AI products that people have good reason to trust.",
    how: "Wellnut's avatar has session limits, clear expectations and a path to human support. Raahi helps practitioners document manipulative patterns in AI.",
    links: [
      { label: "Wellnut", href: "/projects/wellnut" },
      { label: "Raahi", href: "/projects/raahi" },
    ],
  },
  {
    tag: "AI Safety",
    why: "Safety has to be designed in before a product ships, not found afterwards.",
    how: "Raahi's premise is making manipulation visible before it ships, and my RAISE Lab research studies dark patterns in generative AI, including the effects on vulnerable users.",
    links: [{ label: "Raahi", href: "/projects/raahi" }],
  },
  {
    tag: "UX Research",
    why: "Research turns a hunch into evidence a team can act on.",
    how: "Raahi rests on 12 interviews and a 57+ response survey. Cost of a Click used 15 interviews, a 42-response survey and two rounds of usability testing.",
    links: [
      { label: "Raahi", href: "/projects/raahi" },
      { label: "Invisible Impacts", href: "/projects/invisible-impacts" },
    ],
  },
  {
    tag: "Mixed Methods",
    why: "Numbers tell me how many people are affected. Conversations tell me why.",
    how: "Wellnut combined a 33-student survey with a licensed-therapist consultation, and each answered a question the other couldn't.",
    links: [{ label: "Wellnut", href: "/projects/wellnut" }],
  },
  {
    tag: "Systems Thinking",
    why: "I moved from designing spaces to caring about the people and systems around them.",
    how: "For the PM Dashboard, the interface was only as good as the data underneath it, so I cleaned and modeled the Excel and CRM data before designing anything.",
    links: [{ label: "PM Dashboard", href: "/projects/mainstreet" }],
  },
];
