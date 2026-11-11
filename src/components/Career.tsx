import { useState } from "react";
import Icon from "./Icon";
import RichText from "./RichText";
import Section from "./Section";
import TagList from "./TagList";
import { commits } from "../data";
import type { Commit } from "../types";

function CommitCard({ commit }: { commit: Commit }) {
  const [expanded, setExpanded] = useState(true);
  const { hash, showHash, period, location, message, roleTitle, company, tags, changes } = commit;

  return (
    <article className="rounded-lg border border-line bg-surface p-[25px]">
      <header className="flex flex-col gap-2 font-mono text-xs leading-4 text-muted">
        <p className="flex items-center gap-2">
          <span>commit</span>
          <span className="text-accent">{hash}</span>
          <span className="rounded bg-raised px-1.5 py-0.5 text-[11px] text-accent">(HEAD -&gt; main)</span>
        </p>
        <p>Author: Pablo Moreira Santos</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="calendar" size={12} />
            Date: {period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="pin" size={12} />
            {location}
          </span>
        </p>
      </header>
      <h3 className="mt-6 font-mono text-[15px] font-normal leading-6">{message}</h3>
      <p className="mt-1.5 text-lg font-semibold leading-7 text-muted">
        <span className="text-ink">{roleTitle}</span> @ {company}
      </p>
      <TagList items={tags} className="mt-4" />
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-raised px-3 py-1.5 font-mono text-xs leading-4"
      >
        $ git show {showHash}
        <Icon name="chevron-up" className={expanded ? "" : "rotate-180"} />
      </button>
      {expanded && (
        <ul className="mt-4 flex flex-col gap-2">
          {changes.map((change) => (
            <li key={change} className="flex gap-2 text-sm leading-[22.75px] text-muted">
              <span className="font-mono text-accent">+</span>
              <span>
                <RichText text={change} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Career() {
  return (
    <Section
      id="carreira"
      index="03"
      icon="crosshair"
      title="$ git log --career"
      subtitle="Cada emprego é um commit. Do mais recente para o primeiro."
      monoTitle
      tinted
    >
      <ol className="relative flex flex-col gap-[46px] before:absolute before:bottom-0 before:left-[5px] before:top-7 before:w-px before:bg-line">
        {commits.map((commit) => (
          <li
            key={commit.hash}
            className="relative pl-10 before:absolute before:left-0 before:top-6 before:size-[11px] before:rounded-full before:border-2 before:border-accent before:bg-bg"
          >
            <CommitCard commit={commit} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
