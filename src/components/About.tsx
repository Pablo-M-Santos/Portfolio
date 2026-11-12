import { useEffect, useState, useRef } from "react";
import Icon from "./Icon";
import RichText from "./RichText";
import Section from "./Section";
import TagList from "./TagList";
import { bio, languages, skillGroups, training } from "../data";

const panel =
  "rounded-lg border border-line bg-surface transition-all duration-300 ease-out hover:border-accent hover:shadow-[0_10px_30px_-12px_color-mix(in_srgb,var(--color-accent)_35%,transparent)]";
const caption = "font-mono text-xs uppercase leading-4 tracking-[0.05em] text-muted";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="sobre"
      index="02"
      icon="shield"
      title="Ficha de personagem"
      subtitle="Resumo profissional, como está no CV — só que com um pouco mais de personalidade."
      animateHeader
    >
      <div ref={containerRef} className="flex flex-col gap-6 py-2">
        <article
          className={`${panel} p-5 sm:p-8 opacity-0 ${
            isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards] [animation-delay:100ms]" : ""
          }`}
        >
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

        <article
          className={`${panel} flex flex-col gap-6 p-[25px] opacity-0 ${
            isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards] [animation-delay:200ms]" : ""
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line">
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
          </div>

          <div className="flex flex-col gap-5">
            {skillGroups.map(({ label, icon, iconWidth, items }, groupIndex) => (
              <div
                key={label}
                style={{ animationDelay: `${300 + groupIndex * 80}ms` }}
                className={`grid items-start gap-2 md:grid-cols-[158px_1fr] opacity-0 ${
                  isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
                }`}
              >
                <p className={`flex items-center gap-2 ${caption} tracking-[0.05em]`}>
                  <Icon name={icon} width={iconWidth} className="text-accent" />
                  {label}
                </p>
                <TagList items={items} variant="chip" />
              </div>
            ))}
          </div>

          <div
            style={{ animationDelay: "600ms" }}
            className={`flex flex-col gap-5 pt-6 border-t border-line opacity-0 ${
              isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
            }`}
          >
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
        </article>
      </div>
    </Section>
  );
}