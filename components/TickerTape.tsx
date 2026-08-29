"use client";

import Link from "next/link";

export type TickerItem = {
  href: string;
  src: string;
  alt: string;
};

function padUnit(items: TickerItem[]): TickerItem[] {
  const unit = [...items];
  while (unit.length > 0 && unit.length < 12) {
    unit.push(...items);
  }
  return unit;
}

function Unit({ items, hidden }: { items: TickerItem[]; hidden?: boolean }) {
  return (
    <div className="ticker-unit" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <Link
          key={`${hidden ? "b" : "a"}-${item.href}-${i}`}
          href={item.href}
          className="ticker-cell"
          tabIndex={hidden ? -1 : undefined}
          aria-label={item.alt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt="" width={72} height={36} className="ticker-thumb" />
        </Link>
      ))}
    </div>
  );
}

export function TickerTape({ items }: { items: TickerItem[] }) {
  if (items.length === 0) return null;
  const unit = padUnit(items);
  const duration = Math.max(28, unit.length * 2.4);
  return (
    <div className="ticker" role="region" aria-label="Latest comics">
      <div className="ticker-track" style={{ animationDuration: `${duration}s` }}>
        <Unit items={unit} />
        <Unit items={unit} hidden />
      </div>
    </div>
  );
}
