const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.querySelectorAll(".commit-card__toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

const copyButton = document.querySelector("[data-copy-email]");
const copiedLabel = document.querySelector("[data-copied]");
let copiedTimer;

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
  } catch {
    return;
  }
  copiedLabel.hidden = false;
  clearTimeout(copiedTimer);
  copiedTimer = setTimeout(() => {
    copiedLabel.hidden = true;
  }, 2000);
});

const GITHUB_USER = "Pablo-M-Santos";
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;
const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const LONG_MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function parseDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function longDate(iso) {
  const date = parseDate(iso);
  return `${date.getDate()} de ${LONG_MONTHS[date.getMonth()]} de ${date.getFullYear()}`;
}

function longestStreak(days) {
  let best = 0;
  let current = 0;
  for (const day of days) {
    current = day.count > 0 ? current + 1 : 0;
    best = Math.max(best, current);
  }
  return best;
}

function renderHeatmap(days) {
  const grid = document.querySelector("[data-heatmap-grid]");
  const monthsRow = document.querySelector("[data-heatmap-months]");
  const leadingBlanks = parseDate(days[0].date).getDay();

  grid.replaceChildren();
  monthsRow.replaceChildren();

  for (let i = 0; i < leadingBlanks; i++) {
    const blank = document.createElement("i");
    blank.className = "cell cell--blank";
    grid.append(blank);
  }

  let lastMonth = -1;
  days.forEach((day, index) => {
    const cell = document.createElement("i");
    cell.className = `cell cell--${day.level}`;
    cell.title = `${day.count === 0 ? "Nenhuma contribuição" : `${day.count} contribuições`} em ${longDate(day.date)}`;
    grid.append(cell);

    const date = parseDate(day.date);
    const column = Math.floor((index + leadingBlanks) / 7);
    if (date.getMonth() !== lastMonth && date.getDate() <= 7) {
      lastMonth = date.getMonth();
      const label = document.createElement("span");
      label.textContent = MONTHS[lastMonth];
      label.style.setProperty("--col", column);
      monthsRow.append(label);
    }
  });
}

function renderMonthly(days) {
  const totals = new Map();
  for (const day of days) {
    const key = day.date.slice(0, 7);
    totals.set(key, (totals.get(key) ?? 0) + day.count);
  }

  const entries = [...totals.entries()];
  const max = Math.max(...entries.map(([, count]) => count), 1);
  const step = Math.ceil(max / 4 / 5) * 5;
  const top = step * 4;

  const chart = document.querySelector("[data-monthly]");
  chart.replaceChildren();

  const axis = document.createElement("div");
  axis.className = "monthly__axis";
  for (let i = 0; i <= 4; i++) {
    const tick = document.createElement("span");
    tick.textContent = i * step;
    axis.append(tick);
  }

  const bars = document.createElement("div");
  bars.className = "monthly__bars";
  const labels = document.createElement("div");
  labels.className = "monthly__labels";

  for (const [key, count] of entries) {
    const [year, month] = key.split("-");
    const bar = document.createElement("div");
    bar.className = "monthly__bar";
    bar.style.height = `${(count / top) * 100}%`;
    bar.title = `${count} contribuições`;
    bars.append(bar);

    const label = document.createElement("span");
    label.textContent = `${MONTHS[Number(month) - 1]}/${year.slice(2)}`;
    labels.append(label);
  }

  chart.append(axis, bars, labels);
}

async function loadContributions() {
  try {
    const response = await fetch(CONTRIBUTIONS_URL);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    const days = data.contributions;
    if (!days?.length) throw new Error("empty");

    const total = days.reduce((sum, day) => sum + day.count, 0);
    const best = days.reduce((top, day) => (day.count > top.count ? day : top), days[0]);

    document.querySelector("[data-total]").textContent = total;
    document.querySelector("[data-active-days]").textContent = days.filter((day) => day.count > 0).length;
    document.querySelector("[data-streak]").textContent = `${longestStreak(days)} d`;
    document.querySelector("[data-best-count]").textContent = best.count;
    document.querySelector("[data-best-date]").textContent = longDate(best.date);

    renderHeatmap(days);
    renderMonthly(days);
  } catch {
    document.querySelector("[data-heatmap]").hidden = true;
  }
}

loadContributions();
