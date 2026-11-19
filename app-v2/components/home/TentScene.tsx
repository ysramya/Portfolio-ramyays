/**
 * A small camp scene for the foot of the homepage: a classic yellow ridge tent
 * (triangular front, door flaps tied back and lit from inside, a hanging
 * lantern, poles, guy lines and stakes) between stands of layered pines. Drawn as
 * filled shapes with a thin cream outline so it reads like the painted map.
 * Decorative only.
 */

const GROUND = 200;

/** A pine: stacked tiers with scalloped, drooping bough tips and a trunk. */
function pinePath(x: number, base: number, h: number, w: number, tiers = 4) {
  const trunkH = h * 0.1;
  const top = base - h;
  const crownH = h - trunkH;
  const step = crownH / (tiers + 0.6);
  let d = "";
  for (let i = 0; i < tiers; i++) {
    const yt = top + i * step * 0.9;
    const yb = top + (i + 1.55) * step;
    const half = (w / 2) * (0.38 + (0.62 * (i + 1)) / tiers);
    const l = x - half;
    const r = x + half;
    // Slightly concave flanks out to the bough tips, then a scalloped hem back.
    d += `M${x} ${yt} `;
    d += `Q${x + half * 0.42} ${yt + (yb - yt) * 0.62} ${r} ${yb} `;
    const n = 3;
    for (let k = 1; k <= n; k++) {
      const ex = r - ((r - l) * k) / n;
      const cx = r - ((r - l) * (k - 0.5)) / n;
      d += `Q${cx} ${yb - (yb - yt) * 0.2} ${ex} ${yb} `;
    }
    d += `Q${x - half * 0.42} ${yt + (yb - yt) * 0.62} ${x} ${yt} Z `;
  }
  return { crown: d, trunk: { x: x - w * 0.045, y: base - trunkH - step * 0.2, w: w * 0.09, h: trunkH + step * 0.2 } };
}

type Pine = { x: number; base: number; h: number; w: number; tiers?: number; far?: boolean };

const PINES: Pine[] = [
  // far row, smaller and darker for depth
  { x: 150, base: GROUND - 6, h: 58, w: 30, tiers: 3, far: true },
  { x: 186, base: GROUND - 8, h: 44, w: 24, tiers: 3, far: true },
  { x: 478, base: GROUND - 8, h: 62, w: 32, tiers: 3, far: true },
  { x: 506, base: GROUND - 6, h: 46, w: 24, tiers: 3, far: true },
  // left stand
  { x: 26, base: GROUND + 2, h: 78, w: 42 },
  { x: 66, base: GROUND, h: 128, w: 66, tiers: 5 },
  { x: 112, base: GROUND + 1, h: 88, w: 48 },
  // right stand
  { x: 532, base: GROUND + 1, h: 92, w: 50 },
  { x: 576, base: GROUND, h: 138, w: 72, tiers: 5 },
  { x: 618, base: GROUND + 2, h: 80, w: 42 },
];

export default function TentScene() {
  return (
    <div className="tent-scene" aria-hidden="true">
      <svg viewBox="0 0 640 230" preserveAspectRatio="xMidYMax meet" focusable="false">
        <defs>
          <radialGradient id="tentGlow" cx="50%" cy="62%" r="50%">
            <stop offset="0" stopColor="#ffd45a" stopOpacity=".38" />
            <stop offset="1" stopColor="#ffd45a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tentFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd53f" />
            <stop offset="1" stopColor="#e89c00" />
          </linearGradient>
          <linearGradient id="tentSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d88f00" />
            <stop offset="1" stopColor="#8f5200" />
          </linearGradient>
          <linearGradient id="tentDoor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff1c2" />
            <stop offset="1" stopColor="#f5b400" />
          </linearGradient>
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#fffbe6" stopOpacity=".95" />
            <stop offset="1" stopColor="#fffbe6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pineNear" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#163024" />
            <stop offset=".55" stopColor="#24432f" />
            <stop offset="1" stopColor="#2f5238" />
          </linearGradient>
          <linearGradient id="pineFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#173025" />
            <stop offset="1" stopColor="#0f2119" />
          </linearGradient>
        </defs>

        <ellipse cx="328" cy="170" rx="250" ry="120" fill="url(#tentGlow)" />

        {/* Pines: far row first, then the two near stands */}
        {PINES.map((p, i) => {
          const { crown, trunk } = pinePath(p.x, p.base, p.h, p.w, p.tiers);
          return (
            <g key={i} opacity={p.far ? 0.7 : 1}>
              <rect x={trunk.x} y={trunk.y} width={trunk.w} height={trunk.h} rx="1" fill="#3a2a1c" />
              <path
                d={crown}
                fill={p.far ? "url(#pineFar)" : "url(#pineNear)"}
                stroke="#d9c7a0"
                strokeOpacity={p.far ? 0.18 : 0.42}
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </g>
          );
        })}

        {/* Ground */}
        <path d="M0 198 Q160 186 320 198 T640 194 V230 H0 Z" fill="#070d12" />
        <path d="M0 198 Q160 186 320 198 T640 194" fill="none" stroke="#d9c7a0" strokeOpacity=".45" strokeWidth="1.2" />
        <g stroke="#7f9a72" strokeOpacity=".55" strokeWidth="1" strokeLinecap="round" fill="none">
          <path d="M150 194 l-3 -7 M150 194 l1 -8 M150 194 l4 -6" />
          <path d="M196 197 l-3 -6 M196 197 l1 -7 M196 197 l4 -5" />
          <path d="M466 196 l-3 -6 M466 196 l1 -8 M466 196 l4 -6" />
          <path d="M500 195 l-2 -6 M500 195 l2 -7" />
        </g>

        {/* Shadow under the tent */}
        <ellipse cx="326" cy="201" rx="132" ry="7" fill="#000" opacity=".45" />

        {/* Guy lines and stakes, from the pole tips out to the ground */}
        <g stroke="#d9c7a0" strokeOpacity=".55" strokeWidth="1" strokeDasharray="3 4" fill="none">
          <path d="M300 66 L190 204" />
          <path d="M354 60 L488 198" />
        </g>
        <g stroke="#d9c7a0" strokeWidth="1.6" strokeLinecap="round">
          <path d="M187 198 L192 208" />
          <path d="M491 192 L486 202" />
        </g>

        {/* Classic ridge tent, three-quarter view: side roof first, then the front */}
        <path d="M300 78 L354 70 Q392 128 440 190 L388 200 Q338 140 300 78 Z" fill="url(#tentSide)" />
        <g stroke="#6e4000" strokeOpacity=".35" strokeWidth="1" fill="none">
          <path d="M318 76 Q360 136 404 197" />
          <path d="M336 73 Q378 132 422 193" />
        </g>
        <path d="M300 78 L354 70" stroke="#fff1c2" strokeOpacity=".8" strokeWidth="1.6" strokeLinecap="round" />

        {/* Front panel */}
        <path d="M300 78 Q262 140 212 200 L388 200 Q338 140 300 78 Z" fill="url(#tentFront)" />
        {/* stitched seams just inside the edges */}
        <g stroke="#fff1c2" strokeOpacity=".55" strokeWidth="1" strokeDasharray="3 3" fill="none">
          <path d="M299 90 Q266 144 224 196" />
          <path d="M301 90 Q334 144 376 196" />
        </g>

        {/* Doorway: flaps pulled back and tied, warm light inside */}
        <path d="M300 96 L272 200 L328 200 Z" fill="url(#tentDoor)" />
        <circle cx="300" cy="172" r="30" fill="url(#lanternGlow)" />
        <path d="M300 112 L300 132" stroke="#7a4a00" strokeWidth="1" />
        <rect x="295" y="132" width="10" height="13" rx="2.5" fill="#fff7d6" stroke="#7a4a00" strokeWidth="1" />
        <path d="M294 132 h12" stroke="#7a4a00" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M300 96 Q276 150 272 200 L248 200 Q266 140 300 96 Z" fill="#ffe08a" stroke="#7a4a00" strokeOpacity=".6" strokeWidth="1" />
        <path d="M300 96 Q324 150 328 200 L352 200 Q334 140 300 96 Z" fill="#f2b21c" stroke="#7a4a00" strokeOpacity=".6" strokeWidth="1" />
        <path d="M256 162 L270 166 M330 166 L344 162" stroke="#5a3400" strokeWidth="1.8" strokeLinecap="round" />

        {/* Poles poking out at both ends of the ridge */}
        <g stroke="#fdf0cc" strokeWidth="2.2" strokeLinecap="round">
          <path d="M300 78 L300 64" />
          <path d="M354 70 L354 58" />
        </g>

        {/* Outline and hem */}
        <path d="M212 200 Q262 140 300 78 Q338 140 388 200" fill="none" stroke="#7a4a00" strokeOpacity=".75" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M354 70 Q392 128 440 190" fill="none" stroke="#7a4a00" strokeOpacity=".6" strokeWidth="1.2" />
        <path d="M208 200 H388 L442 190" fill="none" stroke="#5a3400" strokeOpacity=".8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
