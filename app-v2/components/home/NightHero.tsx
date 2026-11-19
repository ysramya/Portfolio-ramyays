import Link from "next/link";
import Image from "next/image";

/**
 * First scroll: centred. Name, positioning line, intro, two actions, scroll cue.
 * Motion (all CSS, see .hv-* in globals.css): the name rises out of a line
 * mask, the rest staggers in behind it, buttons lift on hover, and the whole
 * block eases up and fades as you scroll away from it.
 */
export default function NightHero() {
  return (
    <section className="night-hero wrap" aria-labelledby="hero-name">
      <div className="hv">
        <h1 id="hero-name" className="hv-name">
          <span className="sr-only">Ramya Yerramilli, </span>
          <span className="hv-line"><span className="hv-line-in" style={{ ["--i" as string]: 1 }}>UX &amp; Product Designer</span></span>
        </h1>

        <p className="hv-cta hv-in" style={{ ["--i" as string]: 3 }}>
          <Link href="#trail" className="btn hv-btn">
            View the work <span className="hv-arrow" aria-hidden="true">↓</span>
          </Link>
          <Link href="/about" className="btn btn-outline hv-btn">
            About me <span className="hv-arrow" aria-hidden="true">→</span>
          </Link>
        </p>

        <p className="hv-tag hv-in" style={{ ["--i" as string]: 4 }}>
          <span>Designing enterprise, SaaS, and AI products —</span>
          <span>turning research and insights into products.</span>
        </p>
      </div>

      <div className="hv-side">
        <p className="hv-note" aria-hidden="true">Hi, I&rsquo;m Ramya</p>
        <svg className="hv-arrow-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path className="hv-note-path" d="M-6 19 C 2 17, 8 23, 12 35" />
          <path className="hv-note-path" d="M6 30 L12 36 L16 28" />
        </svg>
        <div className="hv-me" aria-hidden="true">
          <Image src="/img/about/ramya-illustration.png" alt="" width={915} height={980} priority sizes="(max-width: 700px) 36vw, 290px" />
        </div>
      </div>

      <Link href="#trail" className="night-scroll" aria-label="Scroll to explore the trail map">
        <span>Scroll to explore</span>
        <span className="night-scroll-line" aria-hidden="true" />
      </Link>
    </section>
  );
}
