import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="section bg-bg-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{testimonials.label}</span>
              <h2 className="display mt-5 max-w-3xl">
                {testimonials.titleLines[0]}
                <br />
                <span className="text-fg-muted">{testimonials.titleLines[1]}</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-muted lg:justify-self-end">
              verified channels / q1 2026
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.handle} delay={90 + index * 80}>
              <article className="tech-panel flex min-h-[430px] flex-col p-5 md:p-6">
                <header className="flex items-center justify-between gap-4 border-b border-fg-line pb-5">
                  <div>
                    <div className="text-lg font-extrabold leading-none text-fg">{item.name}</div>
                    <div className="mt-2 mono text-[0.64rem] uppercase tracking-[0.18em] text-fg-muted">
                      {item.handle}
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-xl font-black text-bg">
                    {item.name[0]}
                  </div>
                </header>

                <blockquote className="mt-8">
                  <p className="text-[1.08rem] font-semibold leading-[1.45] text-fg-soft">
                    «{item.quote}»
                  </p>
                </blockquote>

                <footer className="mt-auto pt-10">
                  <div className="mono text-[3rem] font-semibold leading-none text-accent">
                    {item.stat}
                  </div>
                  <div className="mt-3 text-sm font-bold text-fg">{item.statLabel}</div>
                  <div className="mt-5 border-t border-fg-line pt-4 text-sm text-fg-muted">
                    {item.role}
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
