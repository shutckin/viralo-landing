import { nav } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-bg/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-3 focus:font-bold focus:text-bg"
      >
        Перейти к содержимому
      </a>
      <div className="shell py-4">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-4 rounded-full border border-fg/10 bg-panel/80 px-4 py-3 shadow-[0_18px_70px_rgba(40,30,20,0.08)]">
          <a
            href="#"
            className="text-[1.35rem] font-black leading-none text-fg"
            aria-label="VIRALO — главная"
          >
            {nav.brand}
            <span className="text-accent">.</span>
          </a>

          <nav aria-label="Главное меню" className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <a href={nav.cta.href} className="btn btn-primary btn-sm whitespace-nowrap">
            <span className="hidden sm:inline">{nav.cta.label}</span>
            <span className="sm:hidden">Заявка</span>
          </a>
        </div>
      </div>
    </header>
  );
}
