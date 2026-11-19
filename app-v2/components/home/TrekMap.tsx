import Link from "next/link";
import { ART, CROP, stops, type Stop } from "./trekStops";
import StopFlyouts from "./StopFlyouts";

/**
 * Second scroll: the illustrated trail map as one responsive SVG.
 * Two compositions share the same painting and the same links, switched by
 * CSS only: a wide map, and a tall one for phones and small tablets where each
 * destination gets its own window of the painting, in route order.
 */
const SRC = "/img/map/trek-map.webp";
const PAD = 8;

function Destination({ s, i }: { s: Stop; i: number }) {
  const { box, marker } = s;
  const pill = { x: box.x - PAD, y: box.y - PAD, w: box.w + PAD * 2, h: box.h + PAD * 2 };
  const body = (
    <>
      {s.hit.map((r, k) => (
        <rect key={k} className="trail-hit" x={r.x} y={r.y} width={r.w} height={r.h} />
      ))}
      <rect className="trail-hit" x={pill.x} y={pill.y - 6} width={pill.w} height={pill.h + 12} />
      <circle className="trail-ring" cx={marker.x} cy={marker.y} r="20" />
      <rect className="trail-pill" x={pill.x} y={pill.y} width={pill.w} height={pill.h} rx={pill.h / 2} />
      <text className="trail-text" x={pill.x + pill.w / 2} y={pill.y + pill.h / 2} textAnchor="middle" dominantBaseline="central">
        {s.text} ›
      </text>
    </>
  );
  const common = { className: "trail-stop", "data-stop": s.id, style: { "--i": i } as React.CSSProperties, "aria-label": s.label };
  return s.external ? (
    <a href={s.href} target="_blank" rel="noopener" {...common}>
      {body}
    </a>
  ) : (
    <Link href={s.href} {...common}>
      {body}
    </Link>
  );
}

export default function TrekMap() {
  const tileStep = CROP.h - 30;
  const tallH = tileStep * (stops.length - 1) + CROP.h;
  return (
    <section id="trail" className="trail" aria-labelledby="trail-h">
      <h2 id="trail-h" className="sr-only">
        Explore the trail
      </h2>
      <div data-reveal>
       <div className="trail-frame">
        {/* Wide composition */}
        <svg className="trail-svg trail-wide" viewBox={`0 0 ${ART.w} ${ART.h}`} role="group" aria-label="Illustrated trail map with six destinations">
          <defs>
            <filter id="w-feather" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="46" />
            </filter>
            <mask id="w-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={ART.w} height={ART.h}>
              <rect x="70" y="60" width={ART.w - 140} height={ART.h - 120} rx="40" fill="#fff" filter="url(#w-feather)" />
            </mask>
          </defs>
          <image href={SRC} width={ART.w} height={ART.h} mask="url(#w-mask)" />
          {stops.map((s, i) => (
            <Destination key={s.id} s={s} i={i} />
          ))}
        </svg>

        {/* Phone composition: one window of the painting per destination */}
        <svg className="trail-svg trail-tall" viewBox={`0 0 ${CROP.w} ${tallH}`} role="group" aria-label="Illustrated trail map with six destinations">
          <defs>
            <filter id="t-feather" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
            <mask id="t-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={CROP.w} height={CROP.h}>
              <rect x="30" y="26" width={CROP.w - 60} height={CROP.h - 52} rx="22" fill="#fff" filter="url(#t-feather)" />
            </mask>
          </defs>
          {stops.map((s, i) => (
            <g key={s.id} transform={`translate(0 ${i * tileStep})`} mask="url(#t-mask)">
              <svg x="0" y="0" width={CROP.w} height={CROP.h} viewBox={`${s.crop.x} ${s.crop.y} ${CROP.w} ${CROP.h}`} overflow="hidden">
                <image href={SRC} width={ART.w} height={ART.h} />
                <Destination s={s} i={i} />
              </svg>
            </g>
          ))}
        </svg>
        <StopFlyouts />
       </div>
      </div>
    </section>
  );
}
