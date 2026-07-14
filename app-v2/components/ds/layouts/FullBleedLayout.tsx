import Image from "next/image";
import type { ReactNode } from "react";

/**
 * FullBleedLayout — 100vw, image background with a grid-positioned overlay.
 *
 * Like HeroLayout but mid-page: no viewport-height minimum, and the
 * overlay grid defaults to centering content rather than pinning it to
 * the bottom. Use for a single dramatic image moment (the shipped
 * product, the next-project teaser) where the image should feel like it
 * owns the section rather than sitting inside a card.
 */
export default function FullBleedLayout({
  image,
  imageAlt,
  overlayClassName = "items-center justify-items-center text-center",
  minHeight = "70dvh",
  imageOpacity = 1,
  children,
}: {
  image: string;
  imageAlt: string;
  overlayClassName?: string;
  minHeight?: string;
  imageOpacity?: number;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight }}>
      <div className="absolute inset-0" style={{ opacity: imageOpacity }}>
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-[var(--color-bg)]/10" />
      </div>
      <div
        className={`relative z-10 grid px-6 md:px-10 py-20 ${overlayClassName}`}
        style={{ minHeight }}
      >
        {children}
      </div>
    </section>
  );
}
