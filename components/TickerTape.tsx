"use client";

import Link from "next/link";

export type TickerItem = {
  href: string;
  headline: string;
};

function padUnit(items: TickerItem[]): TickerItem[] {
  if (items.length === 0) {
    return [{ href: "/", headline: "COMICS ON THE DAY'S NEWS" }];
  }
  const unit = [...items];
  while (unit.length < 10) {
    unit.push(...items);
  }
  return unit;
}

function Dingbat() {
  return (
    <span className="ticker-dingbat" aria-hidden="true">
      ★
    </span>
  );
}

export function TickerTape({ items }: { items: TickerItem[] }) {
  const unit = padUnit(items);
  const duration = Math.max(36, unit.length * 3.2);
  return (
    <div className="ticker" role="region" aria-label="Latest headlines">
      <div className="ticker-track" style={{ animationDuration: `${duration}s` }}>
        <div className="ticker-unit">
          {unit.map((item, i) => (
            <span className="ticker-cell" key={`a-${item.href}-${i}`}>
              <Dingbat />
              <Link href={item.href} className="ticker-item">
                {item.headline}
              </Link>
            </span>
          ))}
        </div>
        <div className="ticker-unit" aria-hidden="true">
          {unit.map((item, i) => (
            <span className="ticker-cell" key={`b-${item.href}-${i}`}>
              <Dingbat />
              <Link href={item.href} className="ticker-item" tabIndex={-1}>
                {item.headline}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
