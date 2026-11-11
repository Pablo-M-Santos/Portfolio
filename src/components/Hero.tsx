import Icon from "./Icon";
import LinkButton from "./LinkButton";
import LogLine from "./LogLine";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-65px)] flex-col overflow-hidden pb-6 pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--color-grid)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid)_1px,transparent_1px)] bg-[length:48px_48px] mask-[radial-gradient(141%_141%_at_0%_0%,#000_20%,transparent_70%)]"
      />
      <div className="mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_380px]">
        <div>
          <LogLine>[developer] Disponível para novos desafios.</LogLine>
          <h1 className="mt-3 text-[clamp(40px,6vw,65px)] font-bold leading-tight tracking-[-0.03em]">
            Pablo Moreira Santos
          </h1>
          <p className="mt-2 font-mono text-xl leading-7 text-accent">@Pablo-M-Santos</p>
          <p className="mt-6 max-w-[634px] text-lg leading-7 text-muted sm:text-xl">
            Dev Backend Java &amp; Full-Stack. Desenvolvo sistemas corporativos de grande porte e construo interfaces web
            modernas com Vue.js e React.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projetos" icon="folder">
              Ver projetos
            </LinkButton>
            <LinkButton href="#contato" icon="send" variant="secondary">
              Falar comigo
            </LinkButton>
          </div>
        </div>
        <div aria-hidden="true" className="hidden h-[420px] rounded-2xl border border-line bg-surface md:block" />
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
