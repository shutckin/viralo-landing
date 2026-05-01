import { pricing } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

function CheckIcon({ active }: { active: boolean }) {
  return (
    <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-sm border ${active ? "border-bg bg-bg text-accent" : "border-accent bg-accent text-bg"}`}>
      <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
        <path
          d="M5 12l5 5 9-11"
          stroke="currentColor"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section bg-bg-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{pricing.label}</span>
              <h2 className="display mt-5 max-w-3xl">{pricing.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-lg max-w-xl lg:justify-self-end">{pricing.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-start">
          {pricing.plans.map((plan, index) => {
            const featured = plan.style === "dark";
            return (
              <Reveal key={`${plan.tag}-${plan.name ?? ""}`} delay={100 + index * 90}>
                <article className={`flex min-h-[560px] flex-col p-5 md:p-6 ${featured ? "paper-panel md:-translate-y-4" : "tech-panel"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {plan.tag}
                    </div>
                    {plan.badge && (
                      <span className="bg-bg px-2 py-1 mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-accent">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-8">
                    {plan.name && <h3 className="h3 mb-5">{plan.name}</h3>}
                    <div className="flex items-baseline">
                      <span className="mono text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-none">
                        {plan.price}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-bold opacity-60">{plan.unit}</div>
                    <p className="mt-5 min-h-[96px] text-[0.98rem] font-semibold leading-[1.55] opacity-75">
                      {plan.description}
                    </p>
                  </div>

                  <a href={plan.cta.href} className={`btn mt-7 w-full ${featured ? "btn-dark" : "btn-primary"}`}>
                    {plan.cta.label}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon active={featured} />
                        <span className="leading-[1.45] opacity-85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={360}>
          <div className="mt-10 text-center">
            <a href="#cta" className="inline-flex items-center gap-3 mono text-[0.72rem] uppercase tracking-[0.18em] text-fg-muted transition hover:text-accent">
              {pricing.footerNote}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
