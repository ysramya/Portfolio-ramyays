import { SectionShell, CardGrid, Reveal } from "./shared";
import Link from "next/link";

export default function ImpactReflection({
  title,
  lead,
  takeaways,
  next,
}: {
  title: React.ReactNode;
  lead?: string;
  takeaways: { label: string; title: string; body: string; note?: string }[];
  next?: { label: string; href: string; text: string };
}) {
  return (
    <SectionShell eyebrow="Impact & Reflection" title={title} lead={lead}>
      <CardGrid cards={takeaways} columns={2} />
      {next && (
        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-border)] pt-8">
          <p className="italic text-[var(--color-ink-muted)] max-w-[52ch]">
            {next.text}
          </p>
          <Link
            href={next.href}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] text-black px-6 py-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-transform hover:-translate-y-0.5"
          >
            {next.label} →
          </Link>
        </Reveal>
      )}
    </SectionShell>
  );
}
