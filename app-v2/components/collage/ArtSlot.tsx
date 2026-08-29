import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

/**
 * A slot for a piece of collage artwork.
 *
 * The scrapbook homepage is carried by illustration — a portrait, stamps,
 * ornaments, project art — and none of it exists as files yet. Rather than
 * render broken images or silent empty boxes, this checks for the file at
 * build time and falls back to a labelled placeholder that names what
 * belongs there. Drop the real file at the same path and it swaps itself
 * in with no code change.
 */
export default function ArtSlot({
  src,
  alt,
  label,
  aspect = "1/1",
  className = "",
}: {
  src: string;
  alt: string;
  /** What art belongs here — shown in the placeholder. */
  label: string;
  aspect?: string;
  className?: string;
}) {
  const exists = existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));

  if (exists) {
    return (
      <div className={`relative w-full ${className}`} style={{ aspectRatio: aspect }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 60vw, 420px" className="object-contain" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex items-center justify-center text-center ${className}`}
      style={{
        aspectRatio: aspect,
        border: "1px dashed rgba(36,31,26,0.3)",
        background:
          "repeating-linear-gradient(45deg, rgba(36,31,26,0.03) 0 6px, transparent 6px 12px)",
      }}
    >
      <span
        className="font-[family-name:var(--font-type)] text-[0.58rem] tracking-[0.14em] uppercase px-2 leading-snug"
        style={{ color: "rgba(36,31,26,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}
