"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
];

export default function Pagination() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorX, setIndicatorX] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const moveIndicatorTo = (href: string) => {
    const container = containerRef.current;
    const el = linkRefs.current[href];
    if (!container || !el) return;
    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const centerX = r.left - cRect.left + r.width / 2;
    setIndicatorX(centerX);
  };

  useLayoutEffect(() => {
    // Position on initial mount
    moveIndicatorTo(pathname);
    // Reposition on resize
    const onResize = () => moveIndicatorTo(pathname);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    moveIndicatorTo(pathname);
  }, [pathname]);

  return (
    <nav aria-label="Primary navigation">
      <div
        className={`pill-nav${expanded ? " expanded" : ""}`}
        ref={containerRef}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onTouchStart={() => setExpanded(true)}
      >
        {indicatorX !== null && (
          <span
            className={`pill-indicator${expanded ? " expanded" : ""}`}
            // style={expanded ? { left: `${indicatorX}px`, width: indicatorW ?? undefined } : undefined}
            aria-hidden
          />
        )}
        {links.map((l) => {
          const isActive = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={isActive ? "active" : undefined}
              ref={(node) => { linkRefs.current[l.href] = node; }}
              onClick={(e) => {
                if (!expanded) {
                  e.preventDefault();
                  setExpanded(true);
                  moveIndicatorTo(l.href);
                } else {
                  moveIndicatorTo(l.href);
                  setExpanded(false);
                }
              }}
            >
              <span className="tab-label">{l.label}</span>
              <span className="tab-underline" aria-hidden />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}


