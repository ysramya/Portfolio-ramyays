/**
 * Page transition — motion spec §08.
 *
 * A template remounts on every route change, so this gives each navigation a
 * short enter (opacity + 8px rise) without touching any page's markup and
 * without delaying navigation: the animation runs on content that is already
 * there. `.page-enter` only animates once `.motion-ready` is set, so with JS
 * off the content renders plainly.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
