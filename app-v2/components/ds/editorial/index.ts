/**
 * Editorial Block system — the asymmetric, magazine-style layout
 * architecture. Each block is layout only (no hardcoded content) and
 * takes an `accent` color so a project-specific theme can flow through
 * without touching these files. See ../README.md for the full rationale
 * and a per-block purpose/imagery/typography/spacing/animation/responsive
 * breakdown.
 */
export { default as Spotlight } from "./Spotlight";
export { default as Narrative } from "./Narrative";
export { default as Evidence } from "./Evidence";
export type { EvidenceItem } from "./Evidence";
export { default as Gallery } from "./Gallery";
export type { EditorialGalleryImage } from "./Gallery";
export { default as FeatureReveal } from "./FeatureReveal";
export { default as Workshop } from "./Workshop";
export type { WorkshopImage } from "./Workshop";
export { default as Quote } from "./Quote";
export { default as Metrics } from "./Metrics";
export type { EditorialMetric } from "./Metrics";
export { default as Transition } from "./Transition";
export { default as NextProject } from "./NextProject";
