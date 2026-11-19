/**
 * Destinations over the painted map (public/img/map/trek-map.webp, 1536x1024).
 * `label` is the box of the painted label, which the SVG pill redraws so the
 * text is real, crisp and accessible. `hit` are extra rectangles (the
 * landmark) that belong to the same link. `crop` is the window of the painting
 * shown for this stop in the phone composition. If the artwork is swapped,
 * only these numbers need re-aligning.
 */
export type Rect = { x: number; y: number; w: number; h: number };
export type Stop = {
  id: string;
  label: string;
  text: string;
  href: string;
  external?: boolean;
  box: Rect;
  marker: { x: number; y: number };
  hit: Rect[];
  crop: { x: number; y: number };
};

export const ART = { w: 1536, h: 1024 };
export const CROP = { w: 500, h: 300 };

export const stops: Stop[] = [
  { id: "approach", label: "My approach", text: "My approach", href: "/case-studies",
    box: { x: 250, y: 668, w: 225, h: 54 }, marker: { x: 264, y: 714 },
    hit: [{ x: 148, y: 625, w: 108, h: 125 }], crop: { x: 100, y: 575 } },
  { id: "projects", label: "Work: selected projects", text: "Work", href: "/#case-studies",
    box: { x: 668, y: 540, w: 262, h: 58 }, marker: { x: 688, y: 590 },
    hit: [{ x: 455, y: 500, w: 245, h: 165 }], crop: { x: 470, y: 445 } },
  { id: "beyond", label: "Playground", text: "Playground", href: "/beyond-the-screen",
    box: { x: 668, y: 362, w: 226, h: 56 }, marker: { x: 688, y: 402 },
    hit: [{ x: 480, y: 290, w: 285, h: 125 }], crop: { x: 460, y: 255 } },
  { id: "resume", label: "Résumé (PDF, opens in a new tab)", text: "Résumé", href: "/resume.pdf", external: true,
    box: { x: 1030, y: 322, w: 165, h: 56 }, marker: { x: 1043, y: 371 },
    hit: [{ x: 920, y: 275, w: 115, h: 110 }], crop: { x: 890, y: 215 } },
  { id: "about", label: "About me", text: "About me", href: "/about",
    box: { x: 1168, y: 490, w: 192, h: 58 }, marker: { x: 1183, y: 543 },
    hit: [{ x: 1052, y: 432, w: 130, h: 130 }], crop: { x: 1000, y: 400 } },
  { id: "next", label: "What’s next?", text: "What’s next?", href: "/#contact",
    box: { x: 1212, y: 158, w: 225, h: 58 }, marker: { x: 1233, y: 215 },
    hit: [{ x: 1055, y: 118, w: 175, h: 135 }], crop: { x: 1030, y: 20 } },
];
