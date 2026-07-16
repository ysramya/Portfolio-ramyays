"use client";

const COOKIE_NAME = "rv_id";

function getVisitorId(): string {
  const match = document.cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (match) return match[1];
  const id = crypto.randomUUID();
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${id}; path=/; max-age=${oneYear}; samesite=lax`;
  return id;
}

function send(body: Record<string, unknown>) {
  const payload = JSON.stringify({ visitorId: getVisitorId(), ...body });
  // sendBeacon survives page unload (e.g. clicking an external link);
  // fetch with keepalive is the fallback where sendBeacon isn't available.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
  } else {
    fetch("/api/track", { method: "POST", body: payload, keepalive: true }).catch(() => {});
  }
}

export function trackPageview(path: string) {
  send({ type: "pageview", path, referrer: document.referrer });
}

export function trackClick(label: string) {
  send({ type: "click", label });
}
