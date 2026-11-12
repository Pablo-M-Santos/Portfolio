import { useState, useEffect } from "react";
import Icon from "./Icon";
import LinkButton from "./LinkButton";
import LogLine from "./LogLine";
import pabloImg from "../assets/img/pablo.png";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-65px)] flex-col overflow-hidden pb-6 pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--color-grid)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid)_1px,transparent_1px)] bg-[length:48px_48px] mask-[radial-gradient(141%_141%_at_0%_0%,#000_20%,transparent_70%)]"
      />

      <div className="mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_380px]">
        <div className="flex flex-col">
          <div className="animate-[fadeInDown_0.6s_ease-out_0.1s_both]">
            <LogLine>[developer] Disponível para novos desafios.</LogLine>
          </div>

          <h1 className="mt-3 text-[clamp(40px,6vw,65px)] font-bold leading-tight tracking-[-0.03em] animate-[fadeInDown_0.6s_ease-out_0.3s_both]">
            Pablo Moreira Santos
          </h1>

          <p className="mt-2 font-mono text-xl leading-7 text-accent animate-[fadeInDown_0.6s_ease-out_0.4s_both]">
            @Pablo-M-Santos
          </p>

          <p className="mt-6 max-w-[634px] text-lg leading-7 text-muted sm:text-xl animate-[fadeInDown_0.6s_ease-out_0.5s_both]">
            Dev Backend Java &amp; Full-Stack. Desenvolvo sistemas corporativos de grande porte e construo interfaces web
            modernas com Vue.js e React.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-[fadeInDown_0.6s_ease-out_0.6s_both]">
            <LinkButton href="#projetos" icon="folder">
              Ver projetos
            </LinkButton>
            <LinkButton href="#contato" icon="send" variant="secondary">
              Falar comigo
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[380px] md:h-[420px]">
          <div 
            className={`absolute inset-0 rounded-2xl bg-surface transition-all duration-700 ${
              imageLoaded ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
          />

          <div 
            className={`absolute inset-0 overflow-hidden rounded-2xl bg-surface transition-all duration-1000 ease-out ${
              imageLoaded 
                ? "opacity-100 translate-y-0 scale-100 filter-none" 
                : "opacity-0 translate-y-4 scale-95 blur-sm"
            }`}
          >
            <img
              src={pabloImg}
              alt="Pablo Moreira Santos"
              className="h-full w-full object-cover object-top transition-transform duration-700 "
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg/90 to-transparent"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="mt-12 grid size-[34px] animate-bounce place-items-center self-center rounded-full border border-line bg-surface text-muted"
      >
        <Icon name="arrow-down" size={16} />
      </a>
    </section>
  );
}