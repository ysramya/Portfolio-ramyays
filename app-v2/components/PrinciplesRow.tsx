const principles = [
  {
    label: "Research-Driven",
    accent: "green" as const,
    body: "I use mixed-methods research to uncover real human needs and meaningful insights.",
    icon: <circle cx="12" cy="12" r="8" />,
  },
  {
    label: "AI & Human Insight",
    accent: "yellow" as const,
    body: "I explore how humans understand, interact, and build trust with intelligent systems.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
  {
    label: "Systems Thinking",
    accent: "green" as const,
    body: "From user flows to ecosystems, I design experiences that consider the bigger picture.",
    icon: <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />,
  },
  {
    label: "Impact Focused",
    accent: "yellow" as const,
    body: "I turn insights into actionable solutions that create measurable human and business impact.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
      </>
    ),
  },
];

// Section
//  └── Parent Grid — owns the single full-width top/bottom border
//       ├── Item — owns only its side divider (left on desktop, top on
//       │         the mobile stack), never the horizontal section rules
//       ├── Item
//       ├── Item
//       └── Item
export default function PrinciplesRow() {
  return (
    <section className="wrap py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 items-stretch border-t border-b border-white/10">
        {principles.map((p, i) => {
          const accentVar =
            p.accent === "yellow" ? "var(--color-yellow)" : "var(--color-green)";
          return (
            <div
              key={p.label}
              className={`p-8 border-white/10 ${
                i === 0
                  ? "border-t-0 md:border-l-0"
                  : "border-t md:border-t-0 md:border-l"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke={accentVar}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {p.icon}
              </svg>
              <h3 className="mt-4 font-[family-name:var(--font-display)] font-semibold">
                {p.label}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                {p.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
