import type { Metadata } from "next";
import { getGalleryImages } from "@/lib/gallery";
import MasonryGallery from "@/components/beyond-the-screen/MasonryGallery";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";

export const metadata: Metadata = {
  title: "Beyond the Screen — Ramya Yerramilli",
  description:
    "Outside of research and design, I explore creativity through digital painting, cityscapes, nature, interiors, and cooking.",
};

export default function BeyondTheScreenPage() {
  const sections = [
    {
      id: "paintings",
      eyebrow: "Painting",
      title: "Digital Paintings",
      description:
        "Ideas often begin long before they're structured into systems. Digital painting gives me space to experiment with color, composition, and atmosphere without constraints, exploring emotion before function.",
      images: getGalleryImages("paintings"),
      empty: "Paintings coming soon.",
    },
    {
      id: "cityscapes",
      eyebrow: "Photography",
      title: "Cityscapes",
      description:
        "I enjoy documenting quiet moments in the city — streets, skylines, architecture, and changing light. Photography has taught me to slow down, notice patterns, and appreciate the details that often go unseen.",
      images: getGalleryImages("Cityscape"),
      empty: "Cityscapes coming soon.",
    },
    {
      id: "nature",
      eyebrow: "Photography",
      title: "Nature",
      description:
        "Landscapes, light, and the outdoors — a different pace from the city, but the same instinct to notice and observe before reaching for a camera.",
      images: getGalleryImages("Nature"),
      empty: "Nature photos coming soon.",
    },
    {
      id: "interiors",
      eyebrow: "Photography",
      title: "Interiors",
      description:
        "Rooms hold the same questions I ask in research — how does a space guide attention, invite pause, or shape a mood before anyone notices why. Interior photography is where that instinct started.",
      images: getGalleryImages("interiors"),
      empty: "Interiors coming soon.",
    },
    {
      id: "cooking",
      eyebrow: "Food",
      title: "Cooking",
      description:
        "Cooking is another form of design. Every meal is a balance of experimentation, iteration, and intuition. It's where planning meets improvisation, and where small decisions come together to create something meaningful.",
      images: getGalleryImages("cooking"),
      empty: "Cooking photos coming soon.",
    },
  ];

  return (
    <>
      {/* Kept compact on purpose: the first gallery has to break the fold so
          visitors see there's work below, not just a title card. */}
      <DeepBand>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 56 }}>
          <p className="eyebrow eyebrow-rule">Outside the work</p>
          <h1 className="mt-5">Beyond the Screen</h1>
          <p className="lead mt-5" style={{ maxWidth: "46em" }}>
            Outside of research and design, I explore creativity through digital painting,
            photography — cityscapes, nature, and interiors — and cooking. These practices keep
            me curious, observant, and grounded — qualities that continue to shape how I
            approach every project.
          </p>
        </div>
      </DeepBand>

      {sections.map((s, i) => (
        <Section key={s.id} id={s.id} divided={i > 0}>
          <SectionHead n={String(i + 1).padStart(2, "0")} eyebrow={s.eyebrow} title={s.title}>
            <p>{s.description}</p>
          </SectionHead>
          <div className={i === 0 ? "mt-8" : "mt-10"}>
            <MasonryGallery images={s.images} emptyLabel={s.empty} />
          </div>
        </Section>
      ))}
    </>
  );
}
