import { cn } from "@/lib/utils";

/**
 * Abstract editorial composition for the hero: layered card/grid forms,
 * cropped linework and a TRIKAAL typographic element.
 * Intentionally a designed motif — not an image placeholder.
 */
export function HeroMotif({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative aspect-[4/5] w-full select-none", className)}>
      <div className="vastu-grid absolute inset-0" />
      <div className="absolute left-[6%] top-[10%] h-[62%] w-[46%] -rotate-6 border border-ink/15 bg-muted" />
      <div className="absolute bottom-[8%] right-[4%] h-[58%] w-[44%] rotate-3 border border-clay/50 bg-parchment" />
      <div className="tarot-frame absolute left-1/2 top-1/2 h-[66%] w-[52%] -translate-x-1/2 -translate-y-1/2 bg-ink"><div className="absolute inset-0 flex flex-col items-center justify-between p-5"><span className="trikaal-mark text-parchment/70">Trikaal</span><div className="w-full space-y-2"><div className="h-px w-full bg-parchment/25" /><div className="h-px w-3/4 bg-parchment/20" /><div className="h-px w-1/2 bg-parchment/15" /></div><span className="font-display text-3xl text-parchment/85">◇</span></div></div>
      <div className="absolute left-0 top-[22%] h-px w-1/3 bg-clay/60" />
      <div className="absolute bottom-[18%] right-0 h-px w-1/4 bg-oxblood/50" />
      <div className="absolute bottom-0 left-[18%] h-1/4 w-px bg-ink/15" />
    </div>
  );
}
