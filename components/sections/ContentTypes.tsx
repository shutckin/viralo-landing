import { contentTypes } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ContentTypes() {
  return (
    <section id="content" className="section bg-bg-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <Reveal>
            <div>
              <span className="eyebrow-accent">{contentTypes.label}</span>
              <h2 className="display mt-5 max-w-3xl">{contentTypes.title}</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-lg max-w-xl lg:justify-self-end">{contentTypes.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid border border-fg-line md:grid-cols-2 lg:grid-cols-3">
          {contentTypes.items.map((item, index) => (
            <Reveal key={item.title} delay={80 + index * 55}>
              <article
                className={`group min-h-[260px] border-b border-r border-fg-line p-5 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] last:border-r-0 ${
                  item.highlight
                    ? "bg-accent text-white hover:bg-paper"
                    : "hover:-translate-y-1 hover:bg-panel"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={
                      item.highlight
                        ? "icon-box border-white/30 bg-white text-accent transition duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                        : "icon-box"
                    }
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <span
                    className={`mono text-[0.68rem] uppercase tracking-[0.18em] transition duration-500 ${
                      item.highlight ? "text-white/70 group-hover:text-white/62" : "text-fg-muted"
                    }`}
                  >
                    format / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className={`h3 transition duration-500 ${item.highlight ? "text-white group-hover:text-white" : ""}`}>
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 leading-[1.62] transition duration-500 ${
                      item.highlight ? "text-white/86 group-hover:text-white/78" : "text-fg-soft"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
