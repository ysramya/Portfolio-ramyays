/**
 * Design-system barrel export. Navigation and Footer are intentionally
 * not re-exported here — they're global chrome owned by app/layout.tsx,
 * not case-study building blocks. See README.md for the full catalog and
 * how each component maps to a section of a case study.
 */
export { default as Reveal } from "./Reveal";
export { default as GlassCard } from "./GlassCard";
export { default as Hero } from "./Hero";
export type { HeroMeta } from "./Hero";
export { default as EditorialStatement } from "./EditorialStatement";
export { default as SplitLayout } from "./SplitLayout";
export { default as FeatureShowcase } from "./FeatureShowcase";
export { default as Gallery } from "./Gallery";
export type { GalleryItem } from "./Gallery";
export { default as ImageGrid } from "./ImageGrid";
export { default as ResearchGallery } from "./ResearchGallery";
export { default as InsightCards } from "./InsightCards";
export type { InsightCard } from "./InsightCards";
export { default as Metrics } from "./Metrics";
export { default as FloatingQuote } from "./FloatingQuote";
export { default as BehindTheBuild } from "./BehindTheBuild";
export type { BuildStep } from "./BehindTheBuild";
export { default as NextProject } from "./NextProject";

export * from "./tokens";
