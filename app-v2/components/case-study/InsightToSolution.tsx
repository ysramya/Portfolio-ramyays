import { SectionShell, CardGrid } from "./shared";

export default function InsightToSolution({
  title,
  lead,
  decisions,
}: {
  title: React.ReactNode;
  lead?: string;
  decisions: { label: string; title: string; body: string; note?: string }[];
}) {
  return (
    <SectionShell eyebrow="From Insight to Solution" title={title} lead={lead} alt>
      <CardGrid cards={decisions} />
    </SectionShell>
  );
}
