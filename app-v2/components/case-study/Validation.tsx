import { SectionShell, StatRow, Timeline, PhotoGrid } from "./shared";

export default function Validation({
  title,
  lead,
  stats,
  timeline,
  photos,
}: {
  title: React.ReactNode;
  lead?: string;
  stats: { label: string; value: string; desc: string }[];
  timeline: { date: string; title: string; body: string }[];
  photos?: { src: string; alt: string; caption: string }[];
}) {
  return (
    <SectionShell eyebrow="Validation" title={title} lead={lead} alt>
      <StatRow stats={stats} />
      <Timeline items={timeline} />
      {photos && <PhotoGrid items={photos} />}
    </SectionShell>
  );
}
