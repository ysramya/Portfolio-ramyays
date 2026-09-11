import Image from "next/image";
import type { ReactNode } from "react";
import DeepBand from "../DeepBand";

/**
 * HeroLayout — case-study opener on the deep-green band: the title block on
 * the left, the project's lead image on the right in a soft-cornered frame.
 *
 * The `children` API is unchanged, so the case studies using it keep passing
 * the same title block; the band's `.theme-deep` scope turns that content
 * ivory-on-green without edits.
 */
export default function HeroLayout({
  image,
  imageAlt,
  children,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <DeepBand>
      <div
        className="wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14"
        style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 64 }}
      >
        <div>{children}</div>
        <div className="media relative w-full" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </DeepBand>
  );
}
