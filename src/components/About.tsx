import Icon from "./Icon";
import RichText from "./RichText";
import Section from "./Section";
import TagList from "./TagList";
import { bio, languages, skillGroups, training } from "../data";

const panel = "rounded-lg border border-line bg-surface";
const caption = "font-mono text-xs uppercase leading-4 tracking-[0.05em] text-muted";

export default function About() {
  return (
    <Section
      id="sobre"
      index="02"
      icon="shield"
      title="Ficha de personagem"
      subtitle="Resumo profissional, como está no CV — só que com um pouco mais de personalidade."
    >
      <div className="flex flex-col gap-6">
        <article className={`${panel} p-5 sm:p-8`}>
          <p className="mb-4 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">
            <span className="text-accent">$</span> cat sobre.md
          </p>
          <div className="flex max-w-[833px] flex-col gap-4 text-muted">
            {bio.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </article>

        <article className={`${panel} flex flex-wrap items-center justify-between gap-4 p-[25px]`}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Classe</p>
            <h3 className="mt-1 text-2xl font-bold leading-8">Full-Stack Engineer</h3>
            <p className="font-mono text-xs text-muted">Base: Fortaleza - CE</p>
          </div>
          <div className="flex flex-col items-center rounded-md bg-raised px-5 py-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Nível</span>
            <strong className="font-mono text-3xl font-semibold leading-9 text-accent">3+</strong>
            <span className="font-mono text-[11px] text-muted">anos de Java</span>
          </div>
        </article>

        <div className={`${panel} flex flex-col gap-5 p-[25px]`}>
          {skillGroups.map(({ label, icon, iconWidth, items }) => (
            <div key={label} className="grid items-start gap-2 md:grid-cols-[158px_1fr]">
              <p className={`flex items-center gap-2 ${caption} tracking-[0.05em]`}>
                <Icon name={icon} width={iconWidth} className="text-accent" />
                {label}
              </p>
              <TagList items={items} variant="chip" />
            </div>
          ))}
        </div>

        <div className={`${panel} flex flex-col gap-4 p-[25px]`}>
          <p className={`flex items-center gap-2 ${caption}`}>
            <Icon name="book" className="text-accent" />
            Treinamento
          </p>
          <ul className="flex flex-col gap-2">
            {training.map(({ name, institution, period }) => (
              <li key={name} className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm leading-5 text-muted">
                <span>
                  <span className="text-ink">{name}</span> · {institution}
                </span>
                <span className="font-mono text-xs leading-4">{period}</span>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs leading-4 text-muted">{languages}</p>
        </div>
      </div>
    </Section>
  );
}
