import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import LinkButton from "./LinkButton";
import Section from "./Section";
import TagList from "./TagList";
import { projects } from "../data";
import type { Project } from "../types";

const label = "mt-[22px] font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted";

function ProjectCard({ project, isVisible, index }: { project: Project; isVisible: boolean; index: number }) {
  const { number, icon, title, description, primaryLabel, primaryTags, stack, cta, href, image, mediaClassName, mediaFirst } = project;

  return (
    <article
      style={{ animationDelay: `${index * 140}ms` }}
      className={`grid overflow-hidden rounded-lg border border-line bg-surface opacity-0 md:grid-cols-[5fr_4fr] ${
        isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
      }`}
    >
      <div className="flex flex-col items-start p-5 sm:p-8">
        <p className="flex items-center gap-3 text-muted">
          <span className="font-mono text-3xl sm:text-4xl font-semibold leading-10 text-accent">{number}</span>
          <Icon name={icon} size={20} />
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl font-bold leading-8 sm:leading-9 tracking-[-0.025em]">{title}</h3>
        <p className="mt-3.5 text-sm sm:text-base leading-relaxed sm:leading-[26px] text-muted">{description}</p>
        <p className={label}>{primaryLabel}</p>
        <TagList items={primaryTags} variant="light" className="mt-2" />
        <p className={label}>stack</p>
        <TagList items={stack} variant="outline" className="mt-2" />
        <LinkButton href={href} icon="external" external className="mt-6 sm:mt-7">
          {cta}
        </LinkButton>
      </div>
      <figure className={`relative order-first flex ${mediaFirst ? "md:order-first" : "md:order-last"} ${mediaClassName}`}>
        <img src={image.src} alt={image.alt} className="min-h-60 sm:min-h-72 w-full object-cover" />
        <figcaption className="absolute left-4 top-4 rounded-md bg-overlay px-2.5 py-1 font-mono text-xs leading-4 backdrop-blur-sm">
          <span className="text-accent">{number}</span> · destaque
        </figcaption>
      </figure>
    </article>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="projetos"
      index="04"
      icon="folder-git"
      title="Coisas que eu coloquei no ar"
      subtitle="Projetos pessoais e da AceleraDev, do globo 3D ao controle de finanças por áudio."
    >
      <div ref={containerRef} className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </Section>
  );
}