import Image from "next/image";
import Reveal from "./Reveal";
import { radius } from "./tokens";

/**
 * Why this exists: the workhorse alternating image/text section for
 * walking through a design rationale or a solution — generalizes the
 * pattern already proven in the homepage's editorial project list
 * (ProjectRow.tsx). Flip `imageSide` per section to keep visual rhythm
 * down a long case-study page instead of every block reading identically.
 */
export default function SplitLayout({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imageSide = "left",
  accent = "var(--color-green)",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  accent?: string;
}) {
  const imageFirst = imageSide === "left";

  return (
    <Reveal className="wrap py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ borderRadius: radius.media, order: imageFirst ? 1 : 2 }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div style={{ order: imageFirst ? 2 : 1 }}>
        {eyebrow && (
          <p
            className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
        )}
        <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-2xl md:text-3xl leading-tight">
          {title}
        </h3>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed max-w-[46ch]">
          {body}
        </p>
      </div>
    </Reveal>
  );
}
