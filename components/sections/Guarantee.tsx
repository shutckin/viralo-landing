import { guarantee } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Guarantee() {
  return (
    <section className="section">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{guarantee.label}</span>
              <h2 className="display mt-5 max-w-3xl">{guarantee.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="tech-panel-strong p-5">
              <div className="mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                {guarantee.noteLabel}
              </div>
              <p className="mt-4 text-[1.1rem] font-semibold leading-[1.45] text-fg-soft">
                {guarantee.noteBody}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {guarantee.points.map((point, index) => (
            <Reveal key={point.title} delay={90 + index * 80}>
              <article className="tech-panel flex min-h-[270px] flex-col p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-box">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </div>
                  <span className="mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-muted">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="h3">{point.title}</h3>
                  <p className="mt-4 leading-[1.62] text-fg-soft">{point.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
