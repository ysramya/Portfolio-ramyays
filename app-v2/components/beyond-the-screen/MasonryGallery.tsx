"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery";
import Lightbox from "./Lightbox";

/**
 * True masonry via CSS columns (not a fixed-row grid) — each image keeps
 * its natural aspect ratio and the columns self-balance, which is what
 * "editorial masonry" means here rather than a cropped photo-grid.
 * "-wide" filenames get column-span:all so a few images can break the
 * rhythm and span the full gallery width, per the brief.
 */
export default function MasonryGallery({ images, emptyLabel }: { images: GalleryImage[]; emptyLabel: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div
        className="rounded-2xl border border-dashed border-[var(--color-border)] py-20 text-center text-sm text-[var(--color-ink-faint)]"
      >
        {emptyLabel}
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 [column-fill:balance]">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full mb-8 rounded-2xl overflow-hidden cursor-zoom-in break-inside-avoid"
            style={img.wide ? { columnSpan: "all" } : undefined}
            aria-label={`Open ${img.alt} in lightbox`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.65), transparent 55%)" }}
            >
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[var(--color-ink)]">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
