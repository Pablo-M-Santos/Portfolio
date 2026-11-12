import Icon from "./Icon";
import Section from "./Section";
import { linkCards } from "../data";

export default function Creator() {
  return (
    <Section
      id="creator"
      index="06"
      icon="megaphone"
      title="Fora do expediente"
      subtitle="Conteúdo de programação, tecnologia e projetos paralelos."
      animateHeader
    >
      <div className="grid max-w-[640px] gap-4 sm:grid-cols-2">
        {linkCards.map(({ icon, label, title, description, cta, href }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${(index + 1) * 120}ms` }}
            className="group flex min-h-[228px] flex-col rounded-lg border border-line bg-surface p-5 opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards] transition-all duration-300 ease-out hover:border-accent hover:shadow-[0_10px_30px_-12px_color-mix(in_srgb,var(--color-accent)_35%,transparent)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-md bg-raised text-accent">
                <Icon name={icon} size={20} />
              </span>
              <Icon name="arrow-up-right" size={20} className="text-muted transition group-hover:text-accent" />
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{label}</p>
            <h3 className="mt-1 text-xl font-bold leading-7">{title}</h3>
            <p className="mt-1 text-sm leading-5 text-muted">{description}</p>
            <span className="mt-auto pt-6 font-mono text-xs text-accent">{cta}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}