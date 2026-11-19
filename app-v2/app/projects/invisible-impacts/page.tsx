import type { Metadata } from "next";
import CaseStudyPage, { type CaseStudyData } from "@/components/case-study/CaseStudyPage";

/**
 * Cost of a Click (Invisible Impacts), in the shared case-study layout.
 * Photography is the real project only. Framing: DePaul Summer Impact Grant
 * 2025; the 85% / 73% / 30% figures are self-reported exit-survey responses;
 * 6M+ is reach, not behavior change.
 */

export const metadata: Metadata = {
  title: "Cost of a Click | Ramya Yerramilli",
  description:
    "An interactive installation that translates the environmental cost of AI into a physical and digital experience.",
};

const C = "/img/coac";

const data: CaseStudyData = {
  slug: "invisible-impacts",
  title: "Cost of a Click",
  kicker: "Case study · Invisible Impacts",
  tagline: "We turned an invisible environmental cost into something people could see and feel.",
  snapshot: [
    ["Role", "Lead UX researcher"],
    ["Team", "UX researcher · UI designer · developer · PM"],
    ["Platform", "Installation, Arduino + web"],
    ["Tools", "Figma · Framer · Arduino"],
    ["Duration", "10 weeks"],
  ],
  hero: [
    { src: `${C}/hero-installation.jpg`, w: 2268, h: 2962, alt: "The installation at the DePaul Jarvis showcase: a lit water tank on a draped table, a monitor above it running the Cost of a Click visual, and a laptop beside it." },
    { src: `${C}/exhibition-room.jpg`, w: 1280, h: 960, alt: "The exhibition room: the lit tank on the DePaul-draped table on the left, the four-panel video wall on the right." },
  ],
  challenge: {
    title: "AI feels invisible. So do its environmental costs.",
    lead: "Statistics had not changed how people think about it.",
    facts: [
      { v: "15", l: "semi-structured interviews" },
      { v: "42", l: "survey responses" },
      { v: "3", l: "concept directions explored" },
      { v: "2", l: "usability test rounds before the exhibition" },
    ],
    flow: { items: ["Everyday AI use", "Invisible infrastructure", "Abstract numbers"], arrows: true },
  },
  approach: {
    title: "Don’t explain the infrastructure. Make people feel it.",
    steps: ["Interviews & survey", "Journey mapping", "3 concept directions", "Physical + digital prototype", "2 rounds of testing"],
    gallery: [
      { src: `${C}/team-build.jpg`, w: 4160, h: 3120, alt: "Two teammates assembling the reservoir: one lowering the pump into the water, the other watching from a chair.", cap: "Assembling the reservoir and seating the pump." },
      { src: `${C}/team-testing.jpg`, w: 1536, h: 2048, alt: "Four team members standing beside the finished installation: the tank, the monitor and the Cost of a Click poster.", cap: "Assembled and running, before doors opened." },
    ],
  },
  solution: {
    title: "Every prompt creates a visible consequence.",
    lead: "Each AI prompt triggers a pump and a real-time on-screen counter of the environmental cost.",
    explorer: [
      { id: "pump", label: "Pump", src: `${C}/pump-bucket.jpg`, w: 1536, h: 2048, alt: "The submersible pump sitting in a bucket of water, tubing and power cable running out of frame." },
      { id: "arduino", label: "Arduino", src: `${C}/arduino-wiring.jpg`, w: 3024, h: 4032, alt: "The Arduino board wired to a relay module, with the pump’s power line running through it." },
      { id: "wall", label: "Video wall", src: `${C}/video-wall.jpg`, w: 960, h: 1280, alt: "The four-panel video wall showing the Cost of a Click title card and a QR code reading “Scan for more information”." },
      { id: "site", label: "Project site", src: `${C}/digital-interface.png`, w: 1080, h: 1080, alt: "The project website shown on a laptop: “Invisible Impact. Visible Change.”, a DePaul University Impact Grant 2025 badge, and figures for weekly active users, daily queries and gallons of water." },
    ],
  },
  impact: {
    title: "The invisible made visible, and the response was measurable.",
    metrics: [
      { v: "85%", l: "reported changed awareness of AI’s footprint" },
      { v: "73%", l: "reported intent to use AI more mindfully" },
      { v: "30%", l: "increase in self-reported informed decision-making" },
      { v: "6M+", l: "TikTok views of the exhibition footage" },
    ],
    note: "Winner of the DePaul Summer Impact Grant 2025 and a featured installation at the Summer Showcase. Survey figures are self-reported exit-survey responses; 6M+ views measure reach, not behavior change.",
    gallery: [
      { src: `${C}/team-showcase.jpg`, w: 1280, h: 960, alt: "The full team standing either side of the installation table at the DePaul Summer Showcase.", cap: "The team at the Summer Showcase, 2025." },
      { src: `${C}/marketing-materials.jpg`, w: 1280, h: 496, alt: "Printed take-aways laid out on a table: brochures, bookmarks and hand fans in the Cost of a Click pattern.", cap: "Take-aways designed to travel home." },
    ],
    video: { src: `${C}/tiktok-viral.mp4`, poster: `${C}/tiktok-poster.jpg`, w: 506, h: 900, alt: "TikTok footage of visitors interacting with the Cost of a Click installation", cap: "The footage that reached 6M+ views." },
    reflection: "design the experience, not just the information.",
  },
};

export default function InvisibleImpactsPage() {
  return <CaseStudyPage d={data} />;
}
