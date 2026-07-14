import Image from "next/image";
import Reveal from "./Reveal";
import { radius } from "./tokens";

/**
 * Why this exists: a uniform NxN grid with no captions, for scanning a set
 * of screens or states at a glance (onboarding flow, UI variations) where
 * the point is the collection, not any single image's story. If images
 * need individual context, use Gallery instead.
 */
export default function ImageGrid({
  images,
  columns = 3,
}: {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}) {
  const colsClass =
    columns === 4 ? "sm:grid-cols-3 lg:grid-cols-4" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <Reveal className={`wrap py-8 grid grid-cols-2 ${colsClass} gap-3`}>
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-square overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]"
          style={{ borderRadius: radius.media }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </Reveal>
  );
}
