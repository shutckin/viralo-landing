import { ticker } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";

export function Ticker() {
  const items = [
    ...ticker.items.map((item) => (
      <span key={item.label} className="inline-flex items-baseline gap-3">
        <span className="mono text-[0.72rem] uppercase tracking-[0.18em] text-fg-muted">
          {item.label}
        </span>
        <span className="mono text-[1.2rem] font-semibold leading-none text-accent">
          {item.value}
        </span>
      </span>
    )),
    <span key="note" className="inline-flex items-center gap-3">
      <span className="live-dot" aria-hidden="true" />
      <span className="mono text-[0.72rem] uppercase tracking-[0.18em] text-fg-soft">
        {ticker.note}
      </span>
    </span>,
  ];

  return (
    <div className="border-y border-fg-line bg-bg-2 py-4">
      <Marquee items={items} />
    </div>
  );
}
