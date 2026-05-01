"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const active = open === null ? faq.items[0] : faq.items[open];

  return (
    <section id="faq" className="section scroll-mt-32 overflow-hidden bg-bg-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <aside className="faq-cover relative min-h-[520px] overflow-hidden rounded-lg bg-paper p-7 text-bg md:p-10">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="eyebrow text-bg/55">{faq.label}</span>
                  <h2 className="mt-8 text-[clamp(3.2rem,5.7vw,5.9rem)] font-extrabold leading-[0.9] text-bg">
                    Коротко
                    <br />
                    <span className="whitespace-nowrap">о главном.</span>
                  </h2>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-[auto_1fr] md:items-end lg:grid-cols-1">
                  <div className="grid h-28 w-28 place-items-center rounded-full border border-bg/15 text-[2.8rem] font-extrabold">
                    {String((open ?? 0) + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold uppercase text-bg/45">Сейчас открыто</div>
                    <p className="mt-3 max-w-sm text-xl font-extrabold leading-[1.15] text-bg">
                      {active.q}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg bg-panel p-2 shadow-[0_30px_90px_rgba(51,41,31,0.08)]">
              {faq.items.map((item, index) => {
                const isOpen = open === index;
                const panelId = `faq-panel-${index}`;
                return (
                  <article key={item.q} className="faq-row border-b border-fg/10 last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-3 py-5 text-left md:gap-7 md:px-6 md:py-7"
                    >
                      <span className="mono text-[0.76rem] font-bold uppercase tracking-[0.12em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.15rem] font-extrabold leading-[1.15] text-fg md:text-[1.65rem]">
                        {item.q}
                      </span>
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-full border text-2xl leading-none transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          isOpen
                            ? "rotate-45 border-accent bg-accent text-white"
                            : "border-fg/15 text-fg group-hover:-translate-y-1 group-hover:border-fg"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl px-3 pb-7 pl-12 text-[1rem] leading-[1.75] text-fg-soft md:px-6 md:pl-[5.7rem] md:text-[1.08rem]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
