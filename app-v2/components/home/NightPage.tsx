import type { ReactNode } from "react";
import StarField from "./StarField";

/** The persistent night sky: one star field behind a whole page's content. */
export default function NightPage({ children }: { children: ReactNode }) {
  return (
    <div className="night theme-deep" data-nav="dark">
      <StarField />
      {children}
    </div>
  );
}
