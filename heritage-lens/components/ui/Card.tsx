import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "glass" | "gradient" | "subtle";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section";
  children: ReactNode;
  padding?: CardPadding;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  glass: "rounded-xl border border-white/10 bg-card-background backdrop-blur-xl",
  gradient:
    "rounded-xl bg-[linear-gradient(135deg,rgba(212,175,55,0.62),rgba(255,255,255,0.12),rgba(47,111,115,0.44))] p-px shadow-[0_24px_70px_rgba(0,0,0,0.35),0_0_34px_rgba(212,175,55,0.08)]",
  subtle:
    "rounded-xl border border-gold/20 bg-white/[0.045] shadow-[0_0_28px_rgba(212,175,55,0.08)] backdrop-blur",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5 md:p-6",
  lg: "p-6 md:p-8",
};

export default function Card({
  as: Component = "article",
  children,
  className = "",
  padding = "md",
  variant = "glass",
  ...props
}: CardProps) {
  const classes = [variantClasses[variant], paddingClasses[padding], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
