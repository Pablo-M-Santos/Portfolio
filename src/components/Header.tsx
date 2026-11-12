import { useEffect, useState } from "react";
import Icon from "./Icon";
import { navItems } from "../data";

type Theme = "dark" | "light";

function initialTheme(): Theme {
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-header-line bg-header backdrop-blur-md">
      <div className="mx-auto flex min-h-[65px] max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
        <a
          href="#topo"
          className="font-mono text-sm font-semibold leading-5 text-ink hover:text-accent transition"
        >
          pablo<span className="text-accent">.</span>
        </a>
        <nav
          aria-label="Seções"
          className="order-3 flex w-full items-center gap-1 overflow-x-auto md:order-none md:w-auto"
        >
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => setActiveSection(href)} 
                className={`rounded-md px-3 py-2 font-mono text-xs leading-4 transition ${
                  isActive
                    ? "bg-raised text-accent font-medium shadow-sm"
                    : "text-muted hover:bg-raised hover:text-ink"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label="Alternar tema"
          onClick={() =>
            setTheme((current) => (current === "dark" ? "light" : "dark"))
          }
          className="grid size-8 cursor-pointer place-items-center rounded-md border border-line text-ink transition hover:bg-raised"
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
        </button>
      </div>
    </header>
  );
}
