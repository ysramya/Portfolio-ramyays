"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated tabs, after the 21st.dev component of the same name: a pill that
 * slides between tabs on a shared `layoutId`, and a panel whose content
 * eases in on each switch.
 *
 * Adapted to the site's system: tokens instead of translucent black, no blur
 * or shadow, and transform-only motion (the panel content is never faded, so
 * it can't be caught half-visible). Tabs follow the WAI-ARIA pattern —
 * roving tabindex, arrow/Home/End keys, tabpanel labelled by its tab.
 */

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  /** Accessible name for the tablist. */
  label?: string;
}

export function AnimatedTabs({ tabs, defaultTab, className = "", label = "Tabs" }: AnimatedTabsProps) {
  const [active, setActive] = useState<string>(defaultTab ?? tabs[0]?.id);
  const uid = useId();
  const reduced = useReducedMotion();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  if (!tabs.length) return null;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(tabs[next].id);
    refs.current[tabs[next].id]?.focus();
  };

  return (
    <div className={`flex w-full flex-col gap-3 ${className}`}>
      <div
        role="tablist"
        aria-label={label}
        className="flex w-fit max-w-full flex-wrap gap-1 p-1"
        style={{ background: "var(--panel)", borderRadius: "calc(var(--radius) + 4px)" }}
      >
        {tabs.map((tab, i) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[tab.id] = el;
              }}
              id={`${uid}-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${uid}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className="relative rounded-[var(--radius)] px-4 py-2 text-[14px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
              style={{ color: selected ? "var(--bg)" : "var(--body)" }}
            >
              {selected && (
                <motion.span
                  layoutId={`${uid}-pill`}
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}
                  transition={reduced ? { duration: 0 } : { type: "spring", duration: 0.6, bounce: 0.18 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {tabs.map(
        (tab) =>
          active === tab.id && (
            <div
              key={tab.id}
              role="tabpanel"
              id={`${uid}-panel-${tab.id}`}
              aria-labelledby={`${uid}-tab-${tab.id}`}
              className="p-4 sm:p-6"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--border)",
                borderRadius: "calc(var(--radius) + 4px)",
              }}
            >
              <motion.div
                initial={reduced ? false : { x: -14, scale: 0.98 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ type: "spring", duration: 0.55, bounce: 0.1 }}
              >
                {tab.content}
              </motion.div>
            </div>
          ),
      )}
    </div>
  );
}
