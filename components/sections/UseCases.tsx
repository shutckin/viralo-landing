import { useCases } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function UseCases() {
  return (
    <section id="for-whom" className="section">
      <div className="shell section-grid">
        <Reveal>
          <div>
            <span className="eyebrow-accent">{useCases.label}</span>
            <h2 className="display mt-5">{useCases.title}</h2>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {useCases.items.map((item, index) => (
            <Reveal key={item.title} delay={80 + index * 55}>
              <article className={`tech-panel p-5 transition hover:border-accent ${item.highlight ? "bg-panel-2" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-box">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <span className="mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="h3 mt-8">{item.title}</h3>
                <p className="mt-3 leading-[1.62] text-fg-soft">{item.body}</p>
                {item.highlight && (
                  <div className="mt-6 h-1 w-16 bg-accent" aria-hidden="true" />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
