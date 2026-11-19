"use client";

/**
 * A dropdown for every stop on the trail map. Clicking a stop (or arriving on
 * /#case-studies for Work) opens a panel anchored under that stop; Esc, the
 * Close button or a click elsewhere closes it, and opening another stop swaps
 * it. Clicks are caught in the capture phase so the stop's own link doesn't
 * navigate. Without JS the stops stay plain links to their pages. Each stop
 * link gains aria-expanded / aria-controls so it reads as a disclosure.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ART, CROP, stops } from "./trekStops";
import { menus } from "./stopMenus";

/** A few cards' own `image` paths don't exist in /public; these do. */
const THUMB: Record<string, string> = { mainstreet: "/img/mainstreet/dashboard.jpg" };
const STEP = CROP.h - 30;
const TALL_H = STEP * (stops.length - 1) + CROP.h;

function Paper({ on, children }: { on: boolean; children: React.ReactNode }) {
  return on ? <div className="paper-card">{children}</div> : <>{children}</>;
}

export default function StopFlyouts() {
  const [openId, setOpenId] = useState<string | null>(null);
  const panel = useRef<HTMLDivElement>(null);

  const close = useCallback((refocus = false) => {
    setOpenId((cur) => {
      if (refocus && cur) document.querySelector<HTMLElement>(`[data-stop="${cur}"]`)?.focus();
      return null;
    });
    if (location.hash === "#case-studies") history.replaceState(null, "", location.pathname + location.search);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const stop = target?.closest?.<SVGElement | HTMLElement>("[data-stop]");
      if (stop) {
        e.preventDefault();
        e.stopPropagation();
        const id = stop.getAttribute("data-stop");
        setOpenId((o) => (o === id ? null : id));
        return;
      }
      if (panel.current && !panel.current.contains(target as Node)) setOpenId(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    if (location.hash === "#case-studies") setOpenId("projects");
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-stop]").forEach((a) => {
      const id = a.getAttribute("data-stop");
      a.setAttribute("aria-expanded", String(id === openId));
      a.setAttribute("aria-controls", `flyout-${id}`);
    });
    if (openId) panel.current?.focus({ preventScroll: true });
  }, [openId]);

  if (!openId) return null;
  const i = stops.findIndex((s) => s.id === openId);
  const s = stops[i];
  if (!s) return null;

  const pos = {
    "--dl": `${(s.box.x / ART.w) * 100}%`,
    "--dt": `${((s.box.y + s.box.h + 14) / ART.h) * 100}%`,
    "--mt": `${((i * STEP + 200) / TALL_H) * 100}%`,
    "--pw": openId === "projects" ? "min(520px, 46%)" : openId === "approach" ? "min(660px, 60%)" : openId === "beyond" ? "min(580px, 56%)" : openId === "about" ? "min(480px, 48%)" : "min(360px, 40%)",
  } as React.CSSProperties;

  const isWork = openId === "projects";
  const menu = menus[openId];
  const title = isWork ? "Selected work" : menu?.title ?? s.text;

  return (
    <div ref={panel} id={`flyout-${openId}`} role="region" aria-label={title} tabIndex={-1} className="work-flyout" style={pos}>
      <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
        <filter id="paper-edge" x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="flex items-center justify-between gap-4 px-1 pb-3">
        <p className="meta">{title}</p>
        <button type="button" onClick={() => close(true)} className="work-close" aria-label={`Close ${title}`}>
          Close <span aria-hidden="true">×</span>
        </button>
      </div>

      {isWork ? (
        <Paper on>
          <ol className="grid gap-2">
            {projects.map((p, k) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="work-row">
                  <span className="work-thumb">
                    <Image src={THUMB[p.slug] ?? p.image} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="meta block">{String(k + 1).padStart(2, "0")} · {p.category}</span>
                    <span className="work-title">{p.title}</span>
                    <span className="work-stat">{p.productType}</span>
                  </span>
                  <span aria-hidden="true" className="work-go">→</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/case-studies" className="work-all">All work <span aria-hidden="true">→</span></Link>
        </Paper>
      ) : (
        menu && (
          <>
            {menu.image && (
              <div className="approach-paper">
                <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
                  <filter id="paper-edge" x="-4%" y="-4%" width="108%" height="108%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </svg>
                <div className="approach-sheet">
                  <Image src={menu.image.src} width={menu.image.w} height={menu.image.h} alt={menu.image.alt} sizes="(max-width: 899px) 90vw, 640px" className="approach-img" />
                </div>
              </div>
            )}
            <Paper on={!menu.image && !menu.photos}>
            {menu.profile && (
              <div className="about-card">
                <Image src={menu.profile.src} width={menu.profile.w} height={menu.profile.h} alt={menu.profile.alt} sizes="140px" className="about-photo" />
                <div className="min-w-0">
                  <p className="about-heading">{menu.profile.heading}</p>
                  <p className="about-intro">{menu.profile.intro}</p>
                </div>
              </div>
            )}
            {menu.photos && (
              <div className="polaroids">
                <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
                  <filter id="paper-edge" x="-4%" y="-4%" width="108%" height="108%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </svg>
                <p className="polaroids-title" aria-hidden="true">Beyond the screen</p>
                <ul className="polaroids-grid">
                  {menu.photos.map((ph, k) => (
                    <li key={ph.label} style={{ "--r": `${[-3, 2.2, -1.6, 2.8, -2.4][k % 5]}deg` } as React.CSSProperties}>
                      <Link href={ph.href} className="polaroid">
                        <Image src={ph.src} width={560} height={560} alt={ph.alt} sizes="160px" />
                        <span>{ph.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {menu.items.length > 0 && (
            <ul className={menu.photos ? "sr-only" : "grid gap-1"}>
              {menu.items.map((it) => {
                const inner = (
                  <>
                    <span className="min-w-0">
                      <span className="work-title">{it.label}</span>
                      <span className="work-stat">{it.note}</span>
                    </span>
                    <span aria-hidden="true" className="work-go">{it.external ? "↗" : "→"}</span>
                  </>
                );
                return (
                  <li key={it.label}>
                    {it.external ? (
                      <a href={it.href} target="_blank" rel="noopener" className="work-row work-row-plain">{inner}</a>
                    ) : (
                      <Link href={it.href} className="work-row work-row-plain">{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
            )}
            {menu.all && menu.profile && (
              <Link href={menu.all.href} className="work-all">{menu.all.label} <span aria-hidden="true">→</span></Link>
            )}
            </Paper>
            {menu.all && !menu.profile && (
              <Link href={menu.all.href} className="work-all">{menu.all.label} <span aria-hidden="true">→</span></Link>
            )}
          </>
        )
      )}
    </div>
  );
}
