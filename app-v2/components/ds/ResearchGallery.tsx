import Image from "next/image";
import Reveal from "./Reveal";
import { radius } from "./tokens";

/**
 * Why this exists: Gallery's specialized sibling for research artifacts
 * specifically — interview photos, affinity maps, survey data — where
 * provenance (method, date, participant count) matters as much as the
 * image. The methodology eyebrow is what separates this from a generic
 * Gallery: it frames the images as evidence, not just visuals.
 */
export default function ResearchGallery({
  method,
  items,
}: {
  method: string;
  items: { src: string; alt: string; caption: string }[];
}) {
  return (
    <div className="wrap py-8">
      <Reveal>
        <p className="text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)] mb-4">
          {method}
        </p>
      </Reveal>
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4" delay={0.05}>
        {items.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]"
            style={{ borderRadius: radius.card }}
          >
            <div className="relative aspect-[4/3]">
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            </div>
            <figcaption className="p-3 text-xs text-[var(--color-ink-faint)] border-t border-[var(--color-border)]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </div>
  );
}
