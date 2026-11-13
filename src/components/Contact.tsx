import { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import LogLine from "./LogLine";
import Section from "./Section";
import { contactCommands, EMAIL } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
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
      animateHeader
    >
      <div
        ref={containerRef}
        style={{ animationDelay: "120ms" }}
        className={`overflow-hidden rounded-lg border border-line bg-surface font-mono text-xs sm:text-sm opacity-0 ${
          isVisible ? "animate-[fadeInUp_0.7s_ease-out_forwards]" : ""
        }`}
      >
        <div className="flex h-8 items-center justify-between border-b border-line bg-raised px-3.5 sm:px-4 text-[10px] text-muted">
          <span className="flex gap-1.5">
            <i className="size-2 rounded-full bg-line" />
            <i className="size-2 rounded-full bg-line" />
            <i className="size-2 rounded-full bg-line" />
          </span>
          <span>pablo@portfolio: ~</span>
        </div>
        <div className="space-y-5 p-4 sm:p-8">
          <div>
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full cursor-pointer flex-wrap items-center justify-between gap-2 text-left transition hover:text-accent"
            >
              <span className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-accent">$</span>
                <span>contact --email</span>
              </span>
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted">
                <Icon name="copy" size={14} />
                {copied ? "copiado" : "copiar"}
              </span>
            </button>
            <p className="mt-2 flex items-center gap-2.5 sm:gap-3 break-all text-muted">
              <Icon name="mail" size={14} />
              {EMAIL}
            </p>
          </div>
          {contactCommands.map(({ command, icon, text, href, external, isLink }) => (
            <div key={command}>
              <p className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-accent">$</span>
                <span className="break-all">{command}</span>
              </p>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className={`mt-2 flex items-center gap-2.5 sm:gap-3 break-all text-muted ${isLink ? "underline decoration-line underline-offset-4 transition hover:text-accent" : ""}`}
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