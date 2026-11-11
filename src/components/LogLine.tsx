import type { ReactNode } from "react";

interface LogLineProps {
  className?: string;
  children: ReactNode;
}

export default function LogLine({ className = "", children }: LogLineProps) {
  return (
    <p className={`font-mono text-xs leading-4 text-muted ${className}`}>
      <span className="text-accent">INFO</span> {children}
    </p>
  );
}
