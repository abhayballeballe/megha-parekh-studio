import type { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) { const { ref, armed, visible } = useReveal<HTMLDivElement>(); return <Tag ref={ref} data-visible={visible ? "true" : undefined} style={delay && armed ? { transitionDelay: `${delay}ms` } : undefined} className={cn(armed && "reveal", className)}>{children}</Tag>; }
