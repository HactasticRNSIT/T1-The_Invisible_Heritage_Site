type SiteCardProps = {
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt?: string;
  href?: string;
  badge?: string;
  visibilityScore?: number;
  riskLabel?: string;
};

export default function SiteCard({
  title,
  location,
  description,
  image,
  imageAlt,
  href = "#",
  badge = "Heritage Site",
  visibilityScore,
  riskLabel,
}: SiteCardProps) {
  const hasVisibilityData =
    typeof visibilityScore === "number" || typeof riskLabel === "string";

  return (
    <article className="group rounded-xl bg-[linear-gradient(135deg,rgba(212,175,55,0.72),rgba(255,255,255,0.14),rgba(47,111,115,0.48))] p-px shadow-[0_24px_60px_rgba(0,0,0,0.34),0_0_32px_rgba(212,175,55,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(212,175,55,0.18),0_0_46px_rgba(47,111,115,0.14)]">
      <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-card-background backdrop-blur-xl">
        <div className="relative h-48 overflow-hidden md:h-52 xl:h-56">
          <img
            src={image}
            alt={imageAlt ?? title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.08),rgba(11,15,25,0.82))]" />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-gold/30 bg-background/45 px-3 py-1 text-xs font-semibold text-gold shadow-[0_0_24px_rgba(212,175,55,0.18)] backdrop-blur">
              {badge}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,0.9)]" />
          </div>
        </div>

        <div className="p-4 md:p-5">
          <p className="mb-3 text-sm font-medium text-gold">{location}</p>
          <h3 className="text-xl font-semibold leading-tight text-foreground transition duration-300 group-hover:text-gold md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-foreground/72 md:min-h-[72px]">
            {description}
          </p>

          {hasVisibilityData ? (
            <div className="mt-5 grid gap-3 rounded-xl border border-white/10 bg-background/35 p-4 shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] backdrop-blur">
              {typeof visibilityScore === "number" ? (
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
                      Visibility
                    </span>
                    <span className="text-sm font-semibold text-gold">
                      {visibilityScore}/100
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37,#2f6f73)] shadow-[0_0_18px_rgba(212,175,55,0.45)]"
                      style={{ width: `${visibilityScore}%` }}
                    />
                  </div>
                </div>
              ) : null}

              {riskLabel ? (
                <p className="rounded-lg border border-gold/20 bg-gold/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                  {riskLabel}
                </p>
              ) : null}
            </div>
          ) : null}

          <a
            href={href}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-gold/35 bg-white/5 px-5 text-sm font-semibold text-foreground shadow-[0_0_26px_rgba(212,175,55,0.12)] backdrop-blur transition duration-300 hover:border-gold/70 hover:bg-gold hover:text-background hover:shadow-[0_0_34px_rgba(212,175,55,0.34)]"
          >
            Explore
          </a>
        </div>
      </div>
    </article>
  );
}
