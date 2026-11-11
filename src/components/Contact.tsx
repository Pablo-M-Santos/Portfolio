import { useState } from "react";
import Icon from "./Icon";
import LogLine from "./LogLine";
import Section from "./Section";
import { contactCommands, EMAIL } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section
      id="contato"
      index="07"
      icon="terminal"
      title="Bora conversar"
      subtitle="Clique no comando de email para copiar o endereço. Os outros abrem direto."
    >
      <div className="overflow-hidden rounded-lg border border-line bg-surface font-mono text-sm">
        <div className="flex h-8 items-center justify-between border-b border-line bg-raised px-4 text-[10px] text-muted">
          <span className="flex gap-1.5">
            <i className="size-2 rounded-full bg-line" />
            <i className="size-2 rounded-full bg-line" />
            <i className="size-2 rounded-full bg-line" />
          </span>
          <span>pablo@portfolio: ~</span>
        </div>
        <div className="space-y-5 p-6 sm:p-8">
          <div>
            <button type="button" onClick={copyEmail} className="flex items-center gap-3 text-left transition hover:text-accent">
              <span className="text-accent">$</span>
              <span>contact --email</span>
              <span className="ml-auto hidden items-center gap-2 text-xs text-muted sm:flex">
                <Icon name="copy" size={14} />
                {copied ? "copiado" : "clique para copiar"}
              </span>
            </button>
            <p className="mt-2 flex items-center gap-3 text-muted">
              <Icon name="mail" size={14} />
              {EMAIL}
            </p>
          </div>
          {contactCommands.map(({ command, icon, text, href, external, isLink }) => (
            <div key={command}>
              <p className="flex items-center gap-3">
                <span className="text-accent">$</span>
                {command}
              </p>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className={`mt-2 flex items-center gap-3 text-muted ${isLink ? "underline decoration-line underline-offset-4 transition hover:text-accent" : ""}`}
              >
                <Icon name={icon} size={14} />
                {text}
              </a>
            </div>
          ))}
          <div className="border-t border-line pt-4">
            <LogLine>[contact] Respondo em português ou inglês.</LogLine>
          </div>
        </div>
      </div>
    </Section>
  );
}
