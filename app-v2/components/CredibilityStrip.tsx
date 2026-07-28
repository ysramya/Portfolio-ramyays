/**
 * Sits directly below the hero: the handful of facts a recruiter needs in
 * the first scroll to classify Ramya as a research hire rather than a
 * career switcher. Deliberately terse — these are trust signals, not a
 * resume section.
 */
const signals = [
  { value: "RAISE Lab", label: "Graduate Research Assistant, DePaul" },
  { value: "IRB-Approved", label: "Mixed-methods research on dark patterns in generative AI" },
  { value: "Under Review", label: "Papers on AI ethics & human-AI interaction" },
  { value: "MSc HCI", label: "Human-Computer Interaction, DePaul University" },
];

export default function CredibilityStrip() {
  return (
    <section className="wrap pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
        {signals.map((s) => (
          <div key={s.value} className="bg-[var(--color-bg)] p-6">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
              {s.value}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-muted)]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
