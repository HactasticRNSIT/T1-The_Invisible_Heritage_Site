export default function Footer() {
  const quickLinks = [
    { label: "Featured Sites", href: "#featured-sites" },
    { label: "Hidden Gems", href: "#hidden-gems" },
    { label: "Community Stories", href: "#community-stories" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/HactasticRNSIT/T1-The_Invisible_Heritage_Site",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 7c.85 0 1.7.12 2.5.33 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M6.94 8.98H3.75V20h3.19V8.98ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm15.15 9.7c0-3.15-1.68-4.61-3.92-4.61a3.39 3.39 0 0 0-3.06 1.68h-.04V8.98h-3.05V20h3.18v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20h3.18v-6.3h-.12Z"
          />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M17.68 3h3.03l-6.62 7.57L21.88 21h-6.1L11 14.76 5.53 21H2.5l7.08-8.1L2.12 3h6.25l4.32 5.71L17.68 3Zm-1.06 16.16h1.68L7.45 4.75H5.65l10.97 14.41Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#070a12] px-5 py-12 text-foreground sm:px-8 md:px-10 lg:px-16 xl:px-20">
      <div className="absolute left-10 top-0 h-64 w-64 rounded-full bg-gold/10 blur-[110px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#2f6f73]/14 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.5),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl md:grid-cols-2 md:p-7 lg:grid-cols-[1.15fr_0.7fr_0.7fr] lg:gap-10 lg:p-8">
        <div>
          <a href="#" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/35 bg-gold/10 text-lg font-semibold text-gold shadow-[0_0_26px_rgba(212,175,55,0.2)]">
              HL
            </span>
            <span className="text-xl font-semibold text-foreground md:text-2xl">
              HeritageLens
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-foreground/68">
            Our mission is to make invisible heritage visible again by
            preserving local memory, mapping forgotten places, and helping
            communities protect stories before they disappear.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-xl font-semibold text-foreground">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-medium text-foreground/68 transition duration-300 hover:translate-x-1 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-foreground">Connect</h2>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-foreground/72 shadow-[0_0_22px_rgba(212,175,55,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:text-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-foreground/58">
            Built for researchers, local communities, and travelers who care
            about memory with meaning.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex max-w-7xl flex-col gap-3 text-sm text-foreground/45 md:flex-row md:items-center md:justify-between">
        <p>(c) 2026 HeritageLens. All rights reserved.</p>
        <p>Rediscover. Preserve. Remember.</p>
      </div>
    </footer>
  );
}
