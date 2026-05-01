import { hero } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="shell min-h-[calc(100dvh-88px)] py-14 md:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-[980px] justify-center">
            <span className="eyebrow-accent">{hero.label}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-xl mx-auto mt-10 max-w-[1180px] text-center">
            Готовый видео-креатив
            <br />
            из вашего голосового
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="body-lg mx-auto mt-8 max-w-[760px] text-center text-[1.2rem] md:text-[1.35rem]">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={hero.primary.href} className="btn btn-primary">
              {hero.primary.label}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/12">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
            <a href={hero.secondary.href} className="btn btn-ghost">
              {hero.secondary.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="hero-media relative mt-14 overflow-hidden rounded-lg bg-paper p-2 text-bg md:mt-20">
            <div className="grid min-h-[520px] overflow-hidden rounded-md bg-[#ded6cc] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-between p-6 md:p-10">
                <div className="flex items-center justify-between text-[0.72rem] font-extrabold uppercase">
                  <span>voice to video</span>
                  <span>VIRALO</span>
                </div>
                <div>
                  <div className="max-w-[560px] text-[clamp(3rem,6.5vw,6.5rem)] font-extrabold leading-[0.92] text-paper">
                    Идея.
                    <br />
                    Сценарий.
                    <br />
                    Видео.
                  </div>
                  <p className="mt-6 max-w-md text-lg font-semibold leading-[1.45] text-paper/70">
                    Один короткий бриф превращается в креатив для соцсетей, рекламы или контент-плана.
                  </p>
                </div>
              </div>

              <div className="relative min-h-[540px] overflow-hidden md:min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85"
                  alt="Смартфон с интерфейсом соцсетей и видео-контентом"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-2 md:grid-cols-3">
                  {hero.previews.map((preview, index) => (
                    <div
                      key={preview.label}
                      className="hero-chip rounded-md bg-panel/92 p-4 text-paper"
                      style={{ animationDelay: `${index * 180}ms` }}
                    >
                      <div className="text-sm font-extrabold">{preview.label}</div>
                      <div className="mt-1 text-xs font-bold uppercase text-paper/50">{preview.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-7 grid border-y border-fg/12 md:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="border-b border-fg/12 py-6 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <div className="text-[clamp(2.2rem,4vw,4.5rem)] font-extrabold leading-none text-fg">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-extrabold uppercase leading-tight text-fg-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
