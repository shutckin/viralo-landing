import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-fg-line bg-bg-2">
      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-none text-fg">
              {footer.brand}
              <span className="text-accent">.</span>
            </div>
            <p className="mt-6 max-w-sm text-[1.05rem] font-semibold leading-[1.5] text-fg-soft">
              {footer.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <div className="mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  {column.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm font-semibold text-fg-soft transition hover:text-accent">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-fg-line pt-6 mono text-[0.66rem] uppercase tracking-[0.16em] text-fg-muted md:flex-row md:items-center">
          <div>{footer.legal.copyright}</div>
          <div className="flex flex-wrap gap-5">
            {footer.legal.links.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
