"use client";

/**
 * Click any case-study image to see it large. One listener for the page; the
 * original file is recovered from next/image's optimiser URL so the zoomed
 * view is not the downsized one. Esc, the Close button or a click outside
 * dismiss it (native <dialog>).
 */

import { useEffect, useRef, useState } from "react";

export default function ZoomShots() {
  const ref = useRef<HTMLDialogElement>(null);
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.("img.cs-shot") as HTMLImageElement | null;
      if (!t) return;
      let src = t.currentSrc || t.src;
      try {
        const u = new URL(src, location.href);
        const raw = u.searchParams.get("url");
        if (raw) src = decodeURIComponent(raw);
      } catch {}
      setImg({ src, alt: t.alt });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (img && !d.open) d.showModal();
  }, [img]);

  return (
    <dialog
      ref={ref}
      className="cs-zoom"
      aria-label="Enlarged image"
      onClose={() => setImg(null)}
      onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
    >
      {img && (
        <>
          <button type="button" className="cs-zoom-close" onClick={() => ref.current?.close()}>Close <span aria-hidden="true">×</span></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} />
        </>
      )}
    </dialog>
  );
}
