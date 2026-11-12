import { useEffect, useState, useRef } from "react";
import Icon from "./Icon";
import { stats } from "../data";
import type { Stat } from "../types";

const valueSizes: Record<Stat["valueSize"], string> = {
  xl: "text-5xl leading-[48px]",
  lg: "text-4xl leading-10",
  md: "text-[21px] leading-7",
};

function useCountUp(endValue: string, duration: number = 1500, shouldRun: boolean = false) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!shouldRun) return;

    const numericMatch = endValue.match(/[\d,.]+/);
    if (!numericMatch) {
      setDisplayValue(endValue);
      return;
    }

    const rawNumStr = numericMatch[0].replace(/\./g, "").replace(",", ".");
    const targetNum = parseFloat(rawNumStr);

    if (isNaN(targetNum)) {
      setDisplayValue(endValue);
      return;
    }

    const prefix = endValue.substring(0, numericMatch.index);
    const suffix = endValue.substring((numericMatch.index || 0) + numericMatch[0].length);

    let startTime: number | null = null;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      let formattedNum = Number.isInteger(targetNum)
        ? Math.round(currentNum).toLocaleString("pt-BR")
        : currentNum.toFixed(1).replace(".", ",");

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(endValue);
      }
    };

    const animationId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationId);
  }, [endValue, duration, shouldRun]);

  return displayValue;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-line bg-tint py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map(({ label, icon, iconSize, value, valueSize, caption }, index) => {
          const animatedValue = useCountUp(value, 1600, isVisible);

          return (
            <article
              key={label}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
              className={`flex min-h-[170px] flex-col rounded-lg border border-line bg-surface p-[25px] opacity-0 transition-all duration-300 ease-out hover:border-accent hover:shadow-[0_10px_30px_-12px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] ${
                isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
              }`}
            >
              <header className="flex items-start justify-between gap-2">
                <span className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">{label}</span>
                <Icon name={icon} size={iconSize} className="text-accent" />
              </header>
              <strong
                className={`my-auto py-3 font-mono font-semibold tracking-[-0.025em] text-accent ${valueSizes[valueSize]}`}
              >
                {valueSize === "md"
                  ? value.split(" • ").map((part, partIndex) => (
                      <span key={part}>
                        {partIndex > 0 && <span className="text-muted"> • </span>}
                        {part}
                      </span>
                    ))
                  : animatedValue}
              </strong>
              <p className="text-sm leading-5 text-muted">{caption}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}