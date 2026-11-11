interface TagListProps {
  items: string[];
  variant?: "chip" | "muted" | "light" | "outline";
  className?: string;
}

const variants = {
  chip: "rounded-md bg-raised px-2.5 py-1 text-xs leading-4 text-ink",
  muted: "rounded bg-raised px-2 py-0.5 text-[11px] leading-[16.5px] text-muted",
  light: "rounded bg-raised px-2 py-[3px] text-[11px] leading-[16.5px] text-ink",
  outline: "rounded border border-accent/40 px-2 py-[3px] text-[11px] leading-[16.5px] text-accent",
};

export default function TagList({ items, variant = "muted", className = "" }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`font-mono ${variants[variant]}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
