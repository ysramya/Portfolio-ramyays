import Link from "next/link";
import DeepBand from "./DeepBand";

/**
 * NextProjectBand — the deep-green close of a case study, pointing to the
 * next piece in the portfolio order. Gives every case study the same shape
 * as the reference: dark opening, ivory body, dark close.
 */
export default function NextProjectBand({
  eyebrow = "Next project",
  title,
  description,
  href,
  cta = "View case study",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href: string;
  cta?: string;
}) {
  return (
    <DeepBand>
      <div className="wrap grid gap-8 py-[clamp(56px,7vw,96px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end md:gap-16">
        <div>
          <p className="eyebrow eyebrow-rule">{eyebrow}</p>
          <h2 className="mt-5" style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06 }}>
            {title}
          </h2>
        </div>
        <div>
          {description && <p className="lead">{description}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={href} className="btn">
              {cta} <span aria-hidden>&#8594;</span>
            </Link>
            <Link href="/#work" className="btn btn-outline">
              All work
            </Link>
          </div>
        </div>
      </div>
    </DeepBand>
  );
}
