import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Why this exists: the single "here's the solution" moment — one large
 * mockup with supporting copy above it, not diluted by a 50/50 split.
 * Use this once or twice per case study for the moment that most needs to
 * land visually (the shipped product, the key screen); use SplitLayout
 * for everything that's genuinely a comparison or a walkthrough.
 */
export default function FeatureShowcase({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  accent = "var(--color-green)",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  accent?: string;
}) {
  return (
    <Reveal className="wrap py-14 md:py-20">
      {eyebrow && (
        <p
          className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
      )}
      <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight max-w-[24ch]">
        {title}
      </h3>
      <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed max-w-[64ch]">
        {body}
      </p>
      <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </Reveal>
  );
}
