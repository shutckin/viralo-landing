import { howItWorks } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const stepIcons = ["send", "sparkles", "play"];

export function HowItWorks() {
  return (
    <section id="how" className="section bg-bg-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{howItWorks.label}</span>
              <h2 className="display mt-5 max-w-4xl">{howItWorks.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="hidden h-px bg-fg-line lg:block" aria-hidden="true" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.num} delay={100 + index * 90}>
              <article className="tech-panel flex min-h-[330px] flex-col p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-box">
                    <Icon name={stepIcons[index] ?? "sparkles"} className="h-5 w-5" />
                  </div>
                  <div className="mono text-[3.2rem] font-semibold leading-none text-fg-faint">
                    {step.num}
                  </div>
                </div>
                <div className="mt-auto pt-10">
                  <span className="mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                    {step.meta}
                  </span>
                  <h3 className="h3 mt-4">{step.title}</h3>
                  <p className="mt-4 leading-[1.62] text-fg-soft">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420}>
          <div className="mt-5 border border-accent/45 bg-accent/10 p-5 text-[1.02rem] font-semibold leading-[1.55] text-fg-soft">
            {howItWorks.note}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
