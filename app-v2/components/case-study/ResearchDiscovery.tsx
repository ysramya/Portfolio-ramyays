import { SectionShell, Timeline, CardGrid, PhotoGrid, Quote } from "./shared";

export default function ResearchDiscovery({
  title,
  lead,
  phases,
  methods,
  findingsLead,
  photos,
  quote,
  limitation,
}: {
  title: React.ReactNode;
  lead: string;
  phases: { date: string; title: string; body: string }[];
  methods: { label: string; title: string; body: string }[];
  findingsLead: string;
  photos: { src: string; alt: string; caption: string }[];
  quote: { text: string; attribution: string };
  limitation?: string;
}) {
  return (
    <SectionShell eyebrow="Research & Discovery" title={title} lead={lead}>
      <Timeline items={phases} />
      <div className="mt-14">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          Research method
        </h3>
        <CardGrid cards={methods} />
      </div>
      <div className="mt-14">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
          What the research surfaced
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)] max-w-[68ch]">
          {findingsLead}
        </p>
        <PhotoGrid items={photos} />
        <Quote text={quote.text} attribution={quote.attribution} />
        {limitation && (
          <p className="mt-4 text-xs leading-relaxed text-[var(--color-ink-faint)] border-l-2 border-[var(--color-border)] pl-4 max-w-[68ch]">
            {limitation}
          </p>
        )}
      </div>
    </SectionShell>
  );
}
