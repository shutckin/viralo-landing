import { painBlock } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

function ComparisonPanel({
  title,
  rows,
  tone,
}: {
  title: string;
  rows: { metric: string; label: string }[];
  tone: "muted" | "accent";
}) {
  return (
    <article className={tone === "accent" ? "paper-panel p-5 md:p-7" : "tech-panel p-5 md:p-7"}>
      <div className="flex items-center justify-between border-b border-current/15 pb-4">
        <h3 className="h3">{title}</h3>
        <span className="mono text-[0.68rem] uppercase tracking-[0.18em] opacity-60">
          {tone === "accent" ? "VIRALO" : "solo"}
        </span>
      </div>
      <div className="mt-2">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-current/10 py-5 last:border-b-0">
            <span className="text-sm font-semibold leading-snug opacity-72">{row.label}</span>
            <span className="mono text-[clamp(1.5rem,4vw,2.6rem)] font-semibold leading-none">
              {row.metric}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function PainBlock() {
  return (
    <section className="section">
      <div className="shell section-grid">
        <Reveal>
          <div>
            <span className="eyebrow-accent">{painBlock.label}</span>
            <h2 className="display mt-5">
              {painBlock.titleLines[0]}
              <br />
              <span className="text-fg-muted">{painBlock.titleLines[1]}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal delay={100}>
            <ComparisonPanel title={painBlock.before.title} rows={painBlock.before.rows} tone="muted" />
          </Reveal>
          <Reveal delay={180}>
            <ComparisonPanel title={painBlock.after.title} rows={painBlock.after.rows} tone="accent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
