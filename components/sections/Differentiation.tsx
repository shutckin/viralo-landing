import { differentiation } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Differentiation() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <span className="eyebrow-accent">{differentiation.label}</span>
          <h2 className="display mt-5 max-w-4xl">
            {differentiation.titleLines[0]}
            <br />
            <span className="text-fg-muted">{differentiation.titleLines[1]}</span>
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-fg-line border-y border-fg-line">
          {differentiation.cards.map((card, index) => (
            <Reveal key={card.num} delay={index * 70}>
              <article className={`grid gap-6 py-7 md:grid-cols-[140px_0.85fr_1.15fr] md:items-start ${card.highlight ? "text-accent" : ""}`}>
                <div className="mono text-[3.2rem] font-semibold leading-none text-current opacity-60">
                  {card.num}
                </div>
                <h3 className={`h3 ${card.highlight ? "text-accent" : "text-fg"}`}>{card.title}</h3>
                <p className={`max-w-2xl leading-[1.65] ${card.highlight ? "text-fg" : "text-fg-soft"}`}>
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
