import Reveal from "./Reveal";
import { type } from "./tokens";

/**
 * Why this exists: the "thesis" beat of a case study — a How-Might-We, a
 * driving insight, a single sentence the whole project answers. Text is
 * the entire visual: no image, no card, generous whitespace around it, so
 * it reads as a pause in the narrative rather than another paragraph.
 * Homepage precedent: the "How Might We" band in the Raahi case study.
 */
export default function EditorialStatement({
  eyebrow,
  statement,
  accent = "var(--color-green)",
}: {
  eyebrow?: string;
  statement: string;
  accent?: string;
}) {
  return (
    <div className="wrap py-16 md:py-24 text-center border-y border-white/10">
      <Reveal>
        {eyebrow && (
          <p
            className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase mb-4"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
        )}
        <p
          className="max-w-[42ch] mx-auto italic leading-snug font-[family-name:var(--font-display)]"
          style={{ fontSize: type.statement }}
        >
          {statement}
        </p>
      </Reveal>
    </div>
  );
}
