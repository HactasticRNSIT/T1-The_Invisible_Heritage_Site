import type { HTMLAttributes, ReactNode } from "react";

type SectionTone = "default" | "deep";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  containerClassName?: string;
  decorative?: ReactNode;
  tone?: SectionTone;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  deep: "bg-[#090d16]",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  decorative,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        "relative overflow-hidden px-5 py-16 text-foreground sm:px-8 md:px-10 md:py-20 lg:px-16 xl:px-20",
        toneClasses[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {decorative}
      <div
        className={["relative mx-auto max-w-7xl", containerClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
