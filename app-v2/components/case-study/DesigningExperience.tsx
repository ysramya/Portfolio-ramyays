import { SectionShell, PhotoGrid } from "./shared";

export default function DesigningExperience({
  title,
  lead,
  photos,
}: {
  title: React.ReactNode;
  lead: string;
  photos: { src: string; alt: string; caption: string }[];
}) {
  return (
    <SectionShell eyebrow="Designing the Experience" title={title} lead={lead}>
      <PhotoGrid items={photos} />
    </SectionShell>
  );
}
