import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { whatsappLink, type WhatsAppIntent } from "@/lib/brand";

export const actionVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-oxblood/90 hover:shadow-[var(--shadow-lift)]",
        outline: "border border-ink/25 bg-transparent text-foreground hover:border-oxblood hover:text-primary",
        ghost: "px-0 text-primary link-underline",
        clay: "bg-accent text-accent-foreground hover:bg-clay/90",
      },
      size: { default: "", lg: "min-h-12 px-8 text-[0.95rem]", sm: "min-h-10 px-4 text-xs" },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ActionProps = VariantProps<typeof actionVariants> & { children: ReactNode; className?: string };

export function ActionLink({ to, children, className, variant, size }: ActionProps & { to: string }) {
  return <Link to={to} className={cn(actionVariants({ variant, size }), className)}>{children}</Link>;
}

export function WhatsAppButton({ intent = "general", children, className, variant, size, ariaLabel }: ActionProps & { intent?: WhatsAppIntent; ariaLabel?: string }) {
  return <a href={whatsappLink(intent)} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={cn(actionVariants({ variant, size }), className)}>{children}</a>;
}
