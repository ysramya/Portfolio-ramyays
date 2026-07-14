import Image from "next/image";
import Reveal from "./Reveal";
import { radius } from "./tokens";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  /** Wide items span 2 grid columns — use for a hero shot within the set. */
  wide?: boolean;
};

/**
 * Why this exists: general-purpose multi-image display where each image
 * carries its own caption/context — mockups, product shots, varied aspect
 * ratios. For uniform screen-comparison grids with no captions, use
 * ImageGrid instead; for research artifacts specifically, use
 * ResearchGallery, which adds methodology framing.
 */
export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <Reveal className="wrap py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <figure
          key={item.src}
          className={`overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] ${
            item.wide ? "md:col-span-2" : ""
          }`}
          style={{ borderRadius: radius.card }}
        >
          <div className={`relative ${item.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
          </div>
          {item.caption && (
            <figcaption className="p-3 text-xs text-[var(--color-ink-faint)] border-t border-[var(--color-border)]">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </Reveal>
  );
}
