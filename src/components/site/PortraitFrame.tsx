import { cn } from "@/lib/utils";
export function PortraitFrame({ className, caption, label = "Portrait", ratio = "portrait", motif = "portrait" }: { className?: string; caption?: string; label?: string; ratio?: "portrait" | "square" | "wide"; motif?: "portrait" | "grid" }) {
  const ratios = { portrait: "aspect-[3/4]", square: "aspect-square", wide: "aspect-[4/3]" } as const;
  return <figure className={cn("relative", className)}><div className={cn("tarot-frame w-full", ratios[ratio])} role="img" aria-label={caption ?? label}><div className={cn("absolute inset-2", motif === "grid" ? "grid-placeholder" : "portrait-placeholder")} /><span className="absolute bottom-4 left-1/2 -translate-x-1/2 trikaal-mark">Trikaal</span></div>{caption ? <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{caption}</figcaption> : null}</figure>;
}
