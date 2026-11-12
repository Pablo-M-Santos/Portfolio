import { useEffect, useState } from "react";
import Icon from "./Icon";
import { navItems } from "../data";

type Theme = "dark" | "light";

function initialTheme(): Theme {
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-header-line bg-header backdrop-blur-md">
      <div className="mx-auto flex min-h-[65px] max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
        <a href="#topo" className="font-mono text-sm font-semibold leading-5">
          pablo
        </a>
        <nav
          aria-label="Seções"
          className="order-3 flex w-full items-center gap-1 overflow-x-auto md:order-none md:w-auto"
        >
          {navItems.map(({ label, href, accent }) => (
            <a
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 font-mono text-xs leading-4 transition hover:bg-raised hover:text-ink ${accent ? "text-accent" : "text-muted"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Alternar tema"
          onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          className="grid size-8 cursor-pointer place-items-center rounded-md border border-line text-ink transition hover:bg-raised"
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
        </button>
      </div>
    </header>
  );
}
