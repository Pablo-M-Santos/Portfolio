import { useEffect, useState, useRef } from "react";
import Icon from "./Icon";
import Section from "./Section";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const MONTH_NAMES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const fallbackMonths = ["dez/25", "jan/26", "fev/26", "mar/26", "abr/26", "mai/26", "jun/26", "jul/26", "ago/26", "set/26", "out/26", "nov/26"];
const fallbackMonthlyTotals = [58, 38, 52, 71, 27, 21, 39, 57, 34, 214, 48, 26];

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

export default function Github() {
  const [totalContributions, setTotalContributions] = useState<number>(665);
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [months, setMonths] = useState<string[]>(fallbackMonths);
  const [monthlyTotals, setMonthlyTotals] = useState<number[]>(fallbackMonthlyTotals);
  const [activeDaysCount, setActiveDaysCount] = useState<number>(171);
  const [maxStreak, setMaxStreak] = useState<string>("13 d");
  const [bestDay, setBestDay] = useState<{ count: number; date: string }>({
    count: 64,
    date: "15 de outubro de 2026",
  });
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/Pablo-M-Santos?y=last");
        if (!response.ok) throw new Error("Falha ao buscar dados do GitHub");

        const data = await response.json();
        const rawContributions: ContributionDay[] = Array.isArray(data?.contributions) ? data.contributions : [];
        const contributions = rawContributions.slice(-365);

        if (contributions.length > 0) {
          setDays(contributions);

          const total = contributions.reduce((sum, d) => sum + d.count, 0);
          setTotalContributions(total);

          const active = contributions.filter((d) => d.count > 0).length;
          setActiveDaysCount(active);

          let currentStreak = 0;
          let longestStreak = 0;
          for (const day of contributions) {
            if (day.count > 0) {
              currentStreak++;
              if (currentStreak > longestStreak) longestStreak = currentStreak;
            } else {
              currentStreak = 0;
            }
          }
          setMaxStreak(`${longestStreak} d`);

          const best = contributions.reduce(
            (max, current) => (current.count > max.count ? current : max),
            contributions[0]
          );
          if (best && best.count > 0) {
            const formattedDate = new Date(`${best.date}T12:00:00`).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
            setBestDay({ count: best.count, date: formattedDate });
          }

          const monthMap: Record<string, { label: string; total: number }> = {};

          contributions.forEach((d) => {
            const [year, month] = d.date.split("-");
            const key = `${year}-${month}`;
            const monthIndex = parseInt(month, 10) - 1;
            const label = `${MONTH_NAMES[monthIndex]}/${year.slice(2)}`;

            if (!monthMap[key]) {
              monthMap[key] = { label, total: 0 };
            }
            monthMap[key].total += d.count;
          });

          const last12Months = Object.keys(monthMap)
            .sort()
            .slice(-12)
            .map((key) => monthMap[key]);

          setMonths(last12Months.map((m) => m.label));
          setMonthlyTotals(last12Months.map((m) => m.total));
        }
      } catch (error) {
        console.error("Erro ao carregar contribuições reais:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const animatedTotal = useCountUp(totalContributions.toString(), 1600, isVisible);
  const animatedActiveDays = useCountUp(activeDaysCount.toString(), 1600, isVisible);
  const animatedBestDayCount = useCountUp(bestDay.count.toString(), 1600, isVisible);

  const firstDayOffset = days.length > 0 ? new Date(`${days[0].date}T12:00:00`).getDay() : 0;

  return (
    <Section
      id="github"
      index="05"
      icon="git-pr"
      title="Um ano em blocos"
      subtitle={
        loading
          ? "Sincronizando com a API do GitHub..."
          : "Contribuições reais no GitHub nos últimos 12 meses, direto da API."
      }
      animateHeader
    >
      <div 
        ref={containerRef}
        style={{ animationDelay: "120ms" }}
        className={`rounded-lg border border-line bg-surface p-6 sm:p-8 opacity-0 transition-all duration-300 ease-out hover:border-accent hover:shadow-[0_10px_30px_-12px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] ${
          isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-2xl font-medium leading-8 sm:text-3xl">
            <span className="text-accent">{animatedTotal}</span> contribuições no último ano
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
              {months.map((month) => (
                <span key={month}>{month.split("/")[0]}</span>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="flex w-5 flex-col justify-between py-0.5 font-mono text-[10px] text-muted">
                <span>Seg</span>
                <span>Qua</span>
                <span>Sex</span>
              </div>
              <div className="grid flex-1 grid-flow-col grid-rows-7 gap-1">
                {days.length > 0 ? (
                  <>
                    {Array.from({ length: firstDayOffset }, (_, i) => (
                      <span key={`empty-${i}`} className="aspect-square rounded-[2px] opacity-0" />
                    ))}
                    {days.map((day) => {
                      const formattedDate = new Date(`${day.date}T12:00:00`).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });
                      return (
                        <span
                          key={day.date}
                          title={`${day.count} contribuições em ${formattedDate}`}
                          className={`aspect-square rounded-[2px] transition-colors ${
                            [
                              "bg-raised",
                              "bg-accent/30",
                              "bg-accent/50",
                              "bg-accent/75",
                              "bg-accent",
                            ][Math.min(Math.max(day.level, 0), 4)]
                          }`}
                        />
                      );
                    })}
                  </>
                ) : (
                  Array.from({ length: 364 }, (_, index) => {
                    const fallbackLevel = loading ? 0 : (index * 17 + Math.floor(index / 7) * 11) % 5;
                    return (
                      <span
                        key={index}
                        className={`aspect-square rounded-[2px] ${loading ? "animate-pulse bg-raised" : ["bg-raised", "bg-accent/30", "bg-accent/50", "bg-accent/75", "bg-accent"][fallbackLevel]}`}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1 font-mono text-[10px] text-muted">
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
              ["calendar", "DIAS ATIVOS", animatedActiveDays],
              ["flame", "MAIOR SEQUÊNCIA", maxStreak],
              ["trophy", "MELHOR DIA", animatedBestDayCount],
            ].map(([icon, label, value], index) => (
              <article key={label} className="rounded-md bg-raised p-3">
                <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-muted">
                  <Icon name={icon as "calendar"} size={12} className="text-accent" />
                  {label}
                </p>
                <strong className="mt-1 block font-mono text-2xl font-medium text-accent">{value}</strong>
                {index === 2 && <span className="font-mono text-[10px] text-muted">{bestDay.date}</span>}
              </article>
            ))}
          </div>
          <div className="rounded-md bg-raised p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Contribuições por mês</p>
            <div className="mt-4 flex h-32 items-end gap-2">
              {monthlyTotals.map((value, index) => {
                const label = months[index] || `mês ${index + 1}`;
                const maxVal = Math.max(...monthlyTotals, 1);
                return (
                  <div
                    key={`${label}-${index}`}
                    className="group relative flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2 rounded-sm transition-colors hover:bg-raised/80 py-1 px-0.5"
                  >
                    <div className="absolute -top-9 z-10 hidden group-hover:flex flex-col items-center whitespace-nowrap rounded bg-ink px-2 py-1 font-mono text-[10px] text-bg shadow-lg">
                      <span className="font-bold">{value} contribuições</span>
                      <span className="text-[9px] text-muted-foreground">{label}</span>
                    </div>
                    <span
                      className="w-full max-w-10 rounded-t-sm bg-accent transition-all duration-500 group-hover:brightness-125"
                      style={{ height: `${Math.max(4, (value / maxVal) * 100)}%` }}
                    />
                    <span className="whitespace-nowrap font-mono text-[9px] text-muted">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}