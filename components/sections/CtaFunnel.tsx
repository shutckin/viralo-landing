import { ctaFunnel } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFunnel() {
  return (
    <section id="cta" className="section">
      <div className="shell">
        <Reveal>
          <div className="paper-panel overflow-hidden">
            <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
              <div>
                <span className="eyebrow text-bg/70">{ctaFunnel.label}</span>
                <h2 className="mt-7 text-[clamp(2.6rem,6vw,4.5rem)] font-black leading-[0.96] text-bg">
                  {ctaFunnel.titleLines[0]}
                  <br />
                  {ctaFunnel.titleLines[1]}
                </h2>
                <p className="mt-7 max-w-xl text-[1.12rem] font-semibold leading-[1.55] text-bg/70">
                  {ctaFunnel.subtitle}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={ctaFunnel.primary.href} className="btn btn-dark">
                    {ctaFunnel.primary.label}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a href={ctaFunnel.secondary.href} className="btn border-bg/20 bg-transparent text-bg hover:bg-bg hover:text-fg">
                    {ctaFunnel.secondary.label}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {ctaFunnel.stats.map(([value, label]) => (
                  <div key={label} className="border border-bg/15 p-4">
                    <div className="text-[clamp(1.25rem,3vw,2rem)] font-black leading-none text-bg">
                      {value}
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-snug text-bg/60">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {ctaFunnel.formFields.map((field, index) => (
            <Reveal key={field.title} delay={100 + index * 80}>
              <a href={field.href} className="tech-panel group block p-5 transition hover:border-accent">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-box">
                    <Icon name={field.icon} className="h-5 w-5" />
                  </div>
                  <span className="mono text-[0.68rem] uppercase tracking-[0.18em] text-fg-muted">
                    field / 0{index + 1}
                  </span>
                </div>
                <h3 className="h3 mt-10">{field.title}</h3>
                <p className="mt-3 leading-[1.62] text-fg-soft">{field.body}</p>
                <div className="mt-8 flex items-center justify-between border-t border-fg-line pt-4">
                  <span className="mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-muted">
                    В заявке
                  </span>
                  <Icon name="arrow" className="h-4 w-4 text-accent transition group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
