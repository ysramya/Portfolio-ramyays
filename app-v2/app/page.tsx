import DeepBand from "@/components/ds/DeepBand";
import StarField from "@/components/home/StarField";
import NightHero from "@/components/home/NightHero";
import TrekMap from "@/components/home/TrekMap";
import TentScene from "@/components/home/TentScene";

/**
 * Homepage — deep-green opening, ivory body with numbered sections,
 * deep-green close: the same shape as every case study.
 */



export default function Home() {
  return (
    <div className="night theme-deep" data-nav="dark">
      <StarField />
      <NightHero />
      <TrekMap />


      {/* ── Closing ──────────────────────────────────────────────── */}
      <DeepBand id="contact">
        <div className="wrap grid gap-10 py-[clamp(48px,6vw,80px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
          <div>
            <p className="eyebrow eyebrow-rule">Currently</p>
            <h2 className="mt-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.08, maxWidth: "13em" }}>
              Looking for product strategy and operations roles where research and data shape the decisions.
            </h2>
          </div>
          <div>
            <p className="lead">
              I&rsquo;m most useful where the problem is unclear and several teams are involved:
              <strong>working out what to build and why, and getting it moving</strong>. Open to{" "}
              <strong>Product Strategy, Product Operations, Product Planning and Product Program roles</strong>,
              including AI-focused teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn">
                Download resume <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </DeepBand>

      <TentScene />
    </div>
  );
}
