"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Arrow } from "./Icon";

/** Section tabs that highlight the section in view and scroll smoothly on click. */
export function CourseTabs({ tabs, label }: { tabs: [string, string][]; label: string }) {
  const [current, setCurrent] = useState(tabs[0]?.[0]);
  useEffect(() => {
    const spy = () => {
      const y = window.scrollY + 180;
      let cur = tabs[0]?.[0];
      for (const [id] of tabs) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setCurrent(cur);
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
    return () => window.removeEventListener("scroll", spy);
  }, [tabs]);

  return (
    <nav className="tabs" aria-label={label}>
      {tabs.map(([id, l]) => (
        <a
          key={id}
          href={`#${id}`}
          className={current === id ? "on" : undefined}
          onClick={(e) => {
            e.preventDefault();
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          }}
        >
          {l}
        </a>
      ))}
    </nav>
  );
}

/** Smooth-scroll link to a section on the same page. */
export function ScrollLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}

/** Fee + Enroll bar fixed to the bottom on phones/tablets once the hero buttons scroll away. */
export function MobileEnrollBar({ watchId, feeLabel, fee, enrollLabel, enrollHref }: {
  watchId: string; feeLabel: string; fee: ReactNode; enrollLabel: string; enrollHref: string;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([en]) => setShow(!en.isIntersecting && en.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);
  return (
    <div className={`mbar${show ? " show" : ""}`} aria-hidden={!show}>
      <div className="price"><small>{feeLabel}</small>{fee}</div>
      <Link className="btn" href={enrollHref} tabIndex={show ? 0 : -1}>{enrollLabel}<Arrow /></Link>
    </div>
  );
}
