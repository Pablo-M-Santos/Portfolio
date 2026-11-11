import Icon from "./Icon";
import Section from "./Section";

const monthContributions = [4, 58, 38, 52, 71, 27, 21, 39, 57, 34, 214, 8];
const monthLabels = ["nov/25", "dez/25", "jan/26", "fev/26", "mar/26", "abr/26", "mai/26", "jun/26", "jul/26", "ago/26", "set/26", "out/26", "nov/26"];

function contributionLevel(index: number) {
  const value = (index * 17 + Math.floor(index / 7) * 11) % 10;
  if (value < 4) return 0;
  if (value < 6) return 1;
  if (value < 8) return 2;
  if (value < 9) return 3;
  return 4;
}

export default function Github() {
  return (
    <Section
      id="github"
      index="05"
      icon="git-pr"
      title="Um ano em blocos"
      subtitle="Contribuições reais no GitHub nos últimos 12 meses, direto da API."
    >
      <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-2xl font-medium leading-8 sm:text-3xl">
            <span className="text-accent">665</span> contribuições no último ano
          </h3>
          <a
            href="https://github.com/Pablo-M-Santos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-raised px-3 py-2 font-mono text-xs text-muted transition hover:text-ink"
          >
            <Icon name="github" size={14} />
            github
          </a>
        </div>

        <div className="mt-7 overflow-x-auto pb-2">
          <div className="min-w-[700px]">
            <div className="mb-2 ml-7 grid grid-cols-12 font-mono text-[10px] text-muted">
              {["nov", "dez", "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out"].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="flex w-5 flex-col justify-between py-0.5 font-mono text-[10px] text-muted">
                <span>Seg</span>
                <span>Qua</span>
                <span>Sex</span>
              </div>
              <div className="grid flex-1 grid-flow-col grid-rows-7 gap-1">
                {Array.from({ length: 364 }, (_, index) => (
                  <span
                    key={index}
                    title={`${contributionLevel(index)} contribuições`}
                    className={`aspect-square rounded-[2px] ${[
                      "bg-raised",
                      "bg-accent/30",
                      "bg-accent/50",
                      "bg-accent/75",
                      "bg-accent",
                    ][contributionLevel(index)]}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-end items-center gap-1 font-mono text-[10px] text-muted">
              menos
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`size-3 rounded-[2px] ${["bg-raised", "bg-accent/30", "bg-accent/50", "bg-accent/75", "bg-accent"][level]}`}
                />
              ))}
              mais
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-line" />
        <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["calendar", "DIAS ATIVOS", "171"],
              ["flame", "MAIOR SEQUÊNCIA", "13 d"],
              ["trophy", "MELHOR DIA", "64"],
            ].map(([icon, label, value], index) => (
              <article key={label} className="rounded-md bg-raised p-3">
                <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-muted">
                  <Icon name={icon as "calendar"} size={12} className="text-accent" />
                  {label}
                </p>
                <strong className="mt-1 block font-mono text-2xl font-medium text-accent">{value}</strong>
                {index === 2 && <span className="font-mono text-[10px] text-muted">15 de outubro de 2026</span>}
              </article>
            ))}
          </div>
          <div className="rounded-md bg-raised p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Contribuições por mês</p>
            <div className="mt-4 flex h-32 items-end gap-2">
              {monthContributions.map((value, index) => (
                <div key={monthLabels[index]} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2">
                  <span
                    className="w-full max-w-10 rounded-t-sm bg-accent"
                    style={{ height: `${Math.max(3, (value / 220) * 100)}%` }}
                  />
                  <span className="whitespace-nowrap font-mono text-[9px] text-muted">{monthLabels[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
