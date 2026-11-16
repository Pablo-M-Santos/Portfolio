import { useEffect, useRef, useState, type ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

interface SectionProps {
  id: string;
  index: string;
  icon: IconName;
  title: string;
  subtitle: string;
  monoTitle?: boolean;
  tinted?: boolean;
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
  children,
}: SectionProps) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${tinted ? "border-y border-line bg-tint" : ""}`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div
          ref={headerRef}
          className={`opacity-0 ${
            headerVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
          }`}
        >
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