import type { ReactNode } from "react";

/** Re-mounts on every navigation, so each page fades in (CSS respects reduced motion). */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="enter">{children}</div>;
}
