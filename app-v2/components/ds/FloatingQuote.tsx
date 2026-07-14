import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

/**
 * Why this exists: verbatim participant or stakeholder voice needs to
 * visually interrupt the reading flow, not blend into body copy — a glass
 * surface floats it above the page rather than sitting flush like
 * InsightCards' flat card fill. Use for direct quotes only; paraphrased
 * findings belong in a body paragraph.
 */
export default function FloatingQuote({
  text,
  attribution,
  accent = "var(--color-green)",
}: {
  text: string;
  attribution: string;
  accent?: string;
}) {
  return (
    <div className="wrap py-8">
      <Reveal>
        <GlassCard strong className="p-7 md:p-9 max-w-[64ch] mx-auto">
          <p className="text-2xl leading-relaxed italic" style={{ color: accent }}>
            &ldquo;{text}&rdquo;
          </p>
          <p className="mt-4 text-xs tracking-wide text-[var(--color-ink-faint)]">
            {attribution}
          </p>
        </GlassCard>
      </Reveal>
    </div>
  );
}
