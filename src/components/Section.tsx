import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

interface SectionProps {
  id: string;
  index: string;
  icon: IconName;
  title: string;
  subtitle: string;
  monoTitle?: boolean;
  tinted?: boolean;
  animateHeader?: boolean; 
  children: ReactNode;
}

export default function Section({
  id,
  index,
  icon,
  title,
  subtitle,
  monoTitle,
  tinted,
  animateHeader,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${tinted ? "border-y border-line bg-tint" : ""}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className={animateHeader ? "opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]" : ""}>
          <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase leading-4 tracking-[0.18em] text-muted">
            <Icon name={icon} className="text-accent" />
            <span className="text-accent">{index}</span>
            <span>/</span>
            <span>{id}</span>
          </p>
          <h2
            className={`text-[28px] font-bold leading-[34px] tracking-[-0.025em] sm:text-4xl sm:leading-10 ${monoTitle ? "font-mono" : ""}`}
          >
            {title}
          </h2>
          <p className="mb-12 mt-3 text-muted">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}