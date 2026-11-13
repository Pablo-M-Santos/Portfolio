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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
      <div className="mx-auto flex min-h-[65px] max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
        {/* Logotipo */}
        <a
          href="#topo"
          className="font-mono text-sm font-semibold leading-5 text-ink hover:text-accent transition"
        >
          pablo
        </a>

       <nav
          aria-label="Seções"
          className="hidden md:flex items-center gap-1"
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

        <div className="flex items-center gap-2">
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

          <button
            type="button"
            aria-label="Abrir menu de navegação"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="grid size-8 cursor-pointer place-items-center rounded-md border border-line text-ink transition hover:bg-raised md:hidden"
          >
            <Icon name={mobileMenuOpen ? "crosshair" : "panels"} size={16} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Seções Mobile"
          className="flex flex-col border-t border-header-line bg-header px-5 py-4 md:hidden gap-1 shadow-lg"
        >
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href;

            return (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveSection(href);
                  setMobileMenuOpen(false); 
                }}
                className={`rounded-md px-3 py-2.5 font-mono text-sm leading-4 transition ${
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
      )}
    </header>
  );
}