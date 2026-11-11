import Icon from "./Icon";
import { stats } from "../data";
import type { Stat } from "../types";

const valueSizes: Record<Stat["valueSize"], string> = {
  xl: "text-5xl leading-[48px]",
  lg: "text-4xl leading-10",
  md: "text-[21px] leading-7",
};

export default function Stats() {
  return (
    <section className="border-y border-line bg-tint py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map(({ label, icon, iconSize, value, valueSize, caption }) => (
          <article key={label} className="flex min-h-[170px] flex-col rounded-lg border border-line bg-surface p-[25px]">
            <header className="flex items-start justify-between gap-2">
              <span className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">{label}</span>
              <Icon name={icon} size={iconSize} className="text-accent" />
            </header>
            <strong
              className={`my-auto py-3 font-mono font-semibold tracking-[-0.025em] text-accent ${valueSizes[valueSize]}`}
            >
              {valueSize === "md"
                ? value.split(" • ").map((part, index) => (
                    <span key={part}>
                      {index > 0 && <span className="text-muted"> • </span>}
                      {part}
                    </span>
                  ))
                : value}
            </strong>
            <p className="text-sm leading-5 text-muted">{caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
