import { cn } from "@/lib/utils";
export function Chips({ items, className, tone = "light" }: { items: readonly string[]; className?: string; tone?: "light" | "dark" }) {
  return <ul className={cn("flex flex-wrap gap-2", className)}>{items.map((item) => <li key={item} className={cn("border px-3 py-1.5 text-xs font-medium tracking-wide", tone === "dark" ? "border-parchment/25 text-parchment/85" : "border-ink/15 text-foreground/75")}>{item}</li>)}</ul>;
}
