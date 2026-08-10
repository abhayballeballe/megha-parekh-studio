import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function EditorialCard({ children, className, as: Tag = "article", lift = true, index }: { children: ReactNode; className?: string; as?: "article" | "div" | "li"; lift?: boolean; index?: string }) { return <Tag className={cn("card-frame relative flex flex-col p-6 sm:p-8", lift && "card-lift", className)}>{index ? <span className="absolute right-5 top-5 font-display text-sm text-mineral">{index}</span> : null}{children}</Tag>; }
export function CardTitle({ children, className }: { children: ReactNode; className?: string }) { return <h3 className={cn("text-xl leading-snug sm:text-2xl", className)}>{children}</h3>; }
export function CardLabel({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function CardBody({ children, className }: { children: ReactNode; className?: string }) { return <p className={cn("mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base", className)}>{children}</p>; }
