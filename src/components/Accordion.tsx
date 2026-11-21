"use client";

import { useId, useState, type ReactNode } from "react";

export type AccordionItem = { q: ReactNode; a: ReactNode; lead?: ReactNode };

export function Accordion({ items, openFirst = false }: { items: AccordionItem[]; openFirst?: boolean }) {
  const base = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set(openFirst ? [0] : []));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={`acc-item${isOpen ? " open" : ""}`}>
            <h3>
              <button className="acc-btn" type="button" aria-expanded={isOpen} aria-controls={`${base}-p${i}`} id={`${base}-b${i}`} onClick={() => toggle(i)}>
                <span className="acc-lead">{it.lead}<span>{it.q}</span></span>
                <span className="pm" aria-hidden="true" />
              </button>
            </h3>
            <div className="acc-panel" id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-b${i}`}>
              <div><div className="inner">{it.a}</div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
