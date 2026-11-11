import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

interface LinkButtonProps {
  href: string;
  icon: IconName;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  children: ReactNode;
}

const variants = {
  primary: "bg-accent text-on-accent hover:brightness-110",
  secondary: "border border-line bg-surface text-ink hover:border-accent",
};

export default function LinkButton({ href, icon, variant = "primary", external, className = "", children }: LinkButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex h-[46px] items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold leading-5 transition ${variants[variant]} ${className}`}
    >
      <Icon name={icon} size={16} width={16} />
      {children}
    </a>
  );
}
