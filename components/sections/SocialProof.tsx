import { socialProof } from "@/lib/content";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section id="social" className="section">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">02 / {socialProof.label}</span>
              <h2 className="display mt-5 max-w-3xl">
                Где можно использовать видео.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-lg max-w-xl lg:justify-self-end">
              Один готовый креатив можно адаптировать под короткий контент, рекламу, сторис, Telegram и контент-план.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid border border-fg-line md:grid-cols-4">
          {socialProof.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div className="min-h-[190px] border-b border-r border-fg-line p-5 last:border-r-0 md:border-b-0">
                <div className="mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-muted">
                  stat / {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-8 mono text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-none text-fg">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-fg-muted">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {socialProof.handles.map((handle, index) => (
            <Reveal key={handle.handle} delay={80 + index * 60}>
              <article className="tech-panel p-4 transition hover:border-accent">
                <div className="flex items-center justify-between">
                  <span className="mono text-[0.64rem] uppercase tracking-[0.18em] text-fg-muted">
                    задача
                  </span>
                  <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                </div>
                <div className="mt-8 mono text-[2rem] font-semibold leading-none text-accent">
                  <CountUp value={handle.views} />
                </div>
                <div className="mt-3 text-sm font-bold text-fg-soft">{handle.handle}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
