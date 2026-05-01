import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  separator?: ReactNode;
  label?: string;
}

export function Marquee({ items, separator, label = "Ключевые форматы и этапы" }: MarqueeProps) {
  const sep = separator ?? (
    <span aria-hidden="true" className="h-2 w-2 bg-accent" />
  );

  const content = (
    <div className="marquee__track">
      {items.map((item, i) => (
        <span key={`a-${i}`} className="inline-flex items-center gap-8">
          {item}
          {sep}
        </span>
      ))}
      {items.map((item, i) => (
        <span key={`b-${i}`} className="inline-flex items-center gap-8" aria-hidden="true">
          {item}
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-label={label}>
      {content}
    </div>
  );
}
