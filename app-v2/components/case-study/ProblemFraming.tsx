import { SectionShell, Quote, Reveal } from "./shared";

export default function ProblemFraming({
  title,
  lead,
  insights,
  quote,
  howMightWe,
}: {
  title: React.ReactNode;
  lead: string;
  insights: { label: string; text: string }[];
  quote: { text: string; attribution: string };
  howMightWe: string;
}) {
  return (
    <>
      <SectionShell eyebrow="Understanding the Problem" title={title} lead={lead} alt>
        <Reveal className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {insights.map((i) => (
            <div key={i.label} className="bg-[var(--color-surface)] p-6">
              <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-green)]">
                {i.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {i.text}
              </p>
            </div>
          ))}
        </Reveal>
        <Quote text={quote.text} attribution={quote.attribution} />
      </SectionShell>
      <div className="wrap py-14 text-center border-y border-[var(--color-border)]">
        <p className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-green)]">
          How Might We
        </p>
        <p className="mt-4 max-w-[52ch] mx-auto italic text-xl md:text-2xl leading-snug">
          {howMightWe}
        </p>
      </div>
    </>
  );
}
