/**
 * Layout primitives — 6 containers, each a different max-width and CSS
 * Grid. These own width and grid structure only; content atoms
 * (../atoms) own no width opinion and get placed into these grids by the
 * page composing them. See components/ds/README.md for the full system.
 */
export { default as HeroLayout } from "./HeroLayout";
export { default as ReadingLayout } from "./ReadingLayout";
export { default as EditorialLayout } from "./EditorialLayout";
export { default as GalleryLayout } from "./GalleryLayout";
export { default as SplitLayout } from "./SplitLayout";
export { default as FullBleedLayout } from "./FullBleedLayout";
