import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "gold" | "glass" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-55";

const variantClasses: Record<ButtonVariant, string> = {
  gold:
    "bg-gold text-background shadow-[0_0_38px_rgba(212,175,55,0.3)] hover:-translate-y-1 hover:bg-[#f0cb53] hover:shadow-[0_0_46px_rgba(212,175,55,0.42)] active:scale-95",
  glass:
    "border border-gold/35 bg-card-background text-foreground shadow-sm backdrop-blur hover:-translate-y-1 hover:border-gold/70 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-foreground/78 hover:bg-white/10 hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-14 px-8 text-base md:text-lg",
};

export default function Button({
  children,
  className = "",
  size = "md",
  variant = "gold",
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const linkProps = props as LinkButtonProps;

    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
