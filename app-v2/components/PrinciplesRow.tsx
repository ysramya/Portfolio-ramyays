const principles = [
  {
    label: "Ambiguity, early",
    accent: "green" as const,
    body: "Architecture projects start with a brief that contradicts itself. So does most research. I'm comfortable defining the problem before there's a method for it.",
    icon: <circle cx="12" cy="12" r="8" />,
  },
  {
    label: "Stakeholders who disagree",
    accent: "yellow" as const,
    body: "Clients, contractors, and consultants rarely want the same thing. Aligning them on a $250K build is the same skill as aligning PMs and engineers on what to ship.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
      </>
    ),
  },
  {
    label: "Constraints as inputs",
    accent: "green" as const,
    body: "Budget, code, structure, timeline — a building is a systems problem with real consequences. I read products the same way: flows, edge cases, and everything downstream.",
    icon: <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />,
  },
  {
    label: "Research that ships",
    accent: "yellow" as const,
    body: "Six years of drawings that had to get built means I don't stop at findings. Research earns its keep when it changes a decision someone was about to make.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
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
      <div className="max-w-[60ch]">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold">
          Six years in architecture, first
        </h2>
        <p className="mt-3 text-[var(--color-ink-muted)]">
          I led residential and commercial projects before moving into UX. It
          is the reason I work the way I do.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 items-stretch border-t border-b border-white/10">
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
