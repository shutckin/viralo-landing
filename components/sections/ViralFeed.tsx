import { viralFeed } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function ViralFeed() {
  return (
    <section id="feed" className="section">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 border-b border-fg-line pb-8 md:flex-row md:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{viralFeed.label}</span>
              <h2 className="display mt-5 max-w-4xl">
                {viralFeed.titleLines[0]}
                <br />
                <span className="text-fg-muted">{viralFeed.titleLines[1]}</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a href={viralFeed.seeAll.href} className="btn btn-ghost self-start md:self-auto">
              {viralFeed.seeAll.label}
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {viralFeed.cards.map((card, index) => (
            <Reveal key={card.handle} delay={index * 70}>
              <article className={`signal-card group flex aspect-[9/13] min-h-[420px] flex-col justify-between p-5 transition hover:-translate-y-1 ${card.highlight ? "border border-accent" : "border border-fg-line"}`}>
                <header className="relative z-10 flex items-center justify-between">
                  <span className="mono bg-bg px-2 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-fg-soft">
                    {card.platform}
                  </span>
                  {card.highlight && (
                    <span className="bg-accent px-2 py-1 mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-bg">
                      хит
                    </span>
                  )}
                </header>

                <div className="relative z-10">
                  <h3 className="h3 max-w-[15rem]">«{card.title}»</h3>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="mono text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-none text-accent">
                        <CountUp value={card.views} />
                      </div>
                      <div className="mt-3 mono text-[0.66rem] uppercase tracking-[0.18em] text-fg-muted">
                        {card.handle}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-md border border-fg-line-strong bg-bg text-fg transition group-hover:border-accent group-hover:text-accent"
                      aria-label="Воспроизвести"
                    >
                      <Icon name="play" className="h-4 w-4 translate-x-[1px]" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
