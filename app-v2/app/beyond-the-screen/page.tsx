import type { Metadata } from "next";
import { getGalleryImages } from "@/lib/gallery";
import MasonryGallery from "@/components/beyond-the-screen/MasonryGallery";

export const metadata: Metadata = {
  title: "Beyond the Screen — Ramya Yerramilli",
  description:
    "Outside of research and design, I explore creativity through digital painting, cityscapes, nature, interiors, and cooking.",
};

const sectionStyle: React.CSSProperties = { padding: "clamp(4rem, 12vw, 11.25rem) 0" };

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto px-6" style={{ maxWidth: "720px" }}>
      <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">{eyebrow}</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.05] text-[var(--color-ink)]">
        {title}
      </h2>
      <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed">{description}</p>
    </div>
  );
}

export default function BeyondTheScreenPage() {
  const paintings = getGalleryImages("paintings");
  const cityscapes = getGalleryImages("Cityscape");
  const nature = getGalleryImages("Nature");
  const interiors = getGalleryImages("interiors");
  const cooking = getGalleryImages("cooking");

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "92dvh", paddingTop: "var(--nav-h)" }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 1200px 800px at 50% 0%, color-mix(in oklab, var(--color-green) 14%, transparent) 0%, transparent 60%), var(--color-bg)",
          }}
        />
        <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(3rem,9vw,7rem)] text-[var(--color-ink)]">
          Beyond the
          <br />
          <span className="italic" style={{ color: "var(--color-green)" }}>Screen</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-relaxed text-[var(--color-ink-muted)]" style={{ maxWidth: "62ch" }}>
          Outside of research and design, I explore creativity through digital
          painting, photography — cityscapes, nature, and interiors — and
          cooking. These practices keep me curious, observant, and grounded —
          qualities that continue to shape how I approach every project.
        </p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-faint)" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* 01 — Digital Paintings */}
      <section style={sectionStyle}>
        <SectionIntro
          eyebrow="01 · Digital Paintings"
          title="Digital Paintings"
          description="Ideas often begin long before they're structured into systems. Digital painting gives me space to experiment with color, composition, and atmosphere without constraints, exploring emotion before function."
        />
        <div className="mx-auto px-6 mt-14" style={{ maxWidth: "1500px" }}>
          <MasonryGallery images={paintings} emptyLabel="Paintings coming soon." />
        </div>
      </section>

      {/* 02 — Cityscapes */}
      <section style={{ ...sectionStyle, background: "var(--color-bg-secondary)" }}>
        <SectionIntro
          eyebrow="02 · Cityscapes"
          title="Cityscapes"
          description="I enjoy documenting quiet moments in the city — streets, skylines, architecture, and changing light. Photography has taught me to slow down, notice patterns, and appreciate the details that often go unseen."
        />
        <div className="mx-auto px-6 mt-14" style={{ maxWidth: "1500px" }}>
          <MasonryGallery images={cityscapes} emptyLabel="Cityscapes coming soon." />
        </div>
      </section>

      {/* 03 — Nature */}
      <section style={sectionStyle}>
        <SectionIntro
          eyebrow="03 · Nature"
          title="Nature"
          description="Landscapes, light, and the outdoors — a different pace from the city, but the same instinct to notice and observe before reaching for a camera."
        />
        <div className="mx-auto px-6 mt-14" style={{ maxWidth: "1500px" }}>
          <MasonryGallery images={nature} emptyLabel="Nature photos coming soon." />
        </div>
      </section>

      {/* 04 — Interiors */}
      <section style={{ ...sectionStyle, background: "var(--color-bg-secondary)" }}>
        <SectionIntro
          eyebrow="04 · Interiors"
          title="Interiors"
          description="Rooms hold the same questions I ask in research — how does a space guide attention, invite pause, or shape a mood before anyone notices why. Interior photography is where that instinct started."
        />
        <div className="mx-auto px-6 mt-14" style={{ maxWidth: "1500px" }}>
          <MasonryGallery images={interiors} emptyLabel="Interiors coming soon." />
        </div>
      </section>

      {/* 05 — Cooking */}
      <section style={sectionStyle}>
        <SectionIntro
          eyebrow="05 · Cooking"
          title="Cooking"
          description="Cooking is another form of design. Every meal is a balance of experimentation, iteration, and intuition. It's where planning meets improvisation, and where small decisions come together to create something meaningful."
        />
        <div className="mx-auto px-6 mt-14" style={{ maxWidth: "1500px" }}>
          <MasonryGallery images={cooking} emptyLabel="Cooking photos coming soon." />
        </div>
      </section>
    </div>
  );
}
