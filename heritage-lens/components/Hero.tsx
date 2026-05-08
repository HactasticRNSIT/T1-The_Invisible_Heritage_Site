export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 py-20 text-foreground sm:px-10 lg:px-16 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.22),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(139,115,85,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-gold/25 blur-[110px]" />
      <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-[#2f6f73]/20 blur-[130px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.38),rgba(11,15,25,0.76)),radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.22)_46%,rgba(11,15,25,0.86)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up mb-5 w-fit rounded-full border border-gold/40 bg-card-background px-4 py-2 text-sm font-medium text-gold shadow-[0_0_34px_rgba(212,175,55,0.18)] backdrop-blur transition duration-300 hover:border-gold/70 hover:bg-white/10">
            HeritageLens AI
          </p>
          <h1 className="animate-fade-in-up animation-delay-150 text-5xl font-semibold leading-tight text-foreground [text-shadow:0_0_34px_rgba(245,245,245,0.12)] sm:text-6xl lg:text-7xl">
            Rediscover Forgotten Heritage
          </h1>
          <p className="animate-fade-in-up animation-delay-300 mt-7 max-w-xl text-lg leading-8 text-[#D4AF37] [text-shadow:0_0_18px_rgba(212,175,55,0.35)] sm:text-xl">
            Thousands of culturally significant places remain digitally
            invisible. HeritageLens AI brings them back to life through stories,
            maps, and community knowledge.
          </p>
          <div className="animate-fade-in-up animation-delay-450 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#featured-sites"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#D4AF37] px-7 text-base font-semibold text-[#0B0F19] shadow-[0_0_38px_rgba(212,175,55,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#f0cb53] hover:shadow-[0_0_46px_rgba(212,175,55,0.42)] active:scale-95"
            >
              Explore Sites
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gold/35 bg-card-background px-7 text-base font-semibold text-foreground shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-600 relative min-h-[440px]">
          <div className="animate-float-soft absolute left-6 top-5 z-20 rounded-2xl border border-white/10 bg-card-background p-4 shadow-xl backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Community Memory
            </p>
            <p className="mt-2 text-3xl font-semibold text-gold">1,248</p>
            <p className="mt-1 text-sm text-secondary">local stories mapped</p>
          </div>

          <div className="animate-float-soft animation-delay-300 absolute bottom-8 right-2 z-20 rounded-2xl border border-white/10 bg-card-background p-4 shadow-xl backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10 sm:right-10">
            <p className="text-sm font-semibold text-foreground">Hidden site found</p>
            <p className="mt-1 max-w-[190px] text-sm leading-6 text-[#D4AF37] [text-shadow:0_0_14px_rgba(212,175,55,0.25)]">
              Stepwell archive matched with village records.
            </p>
          </div>

          <div className="animate-float-slow relative mx-auto h-[440px] max-w-[560px] rounded-[2rem] border border-white/10 bg-card-background p-5 shadow-[0_0_80px_rgba(212,175,55,0.14),0_28px_70px_rgba(0,0,0,0.52)] backdrop-blur transition duration-500 before:absolute before:-inset-10 before:-z-10 before:rounded-[3rem] before:bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_62%)] before:blur-2xl hover:border-gold/25">
            <div className="absolute inset-5 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(255,255,255,0.03)),url('/globe.svg')] bg-[length:120px] bg-[right_2rem_top_2rem] bg-no-repeat opacity-95 invert" />
            <div className="absolute inset-5 rounded-[1.5rem] bg-[linear-gradient(to_bottom,rgba(11,15,25,0.1),rgba(11,15,25,0.72))]" />
            <div className="absolute inset-8 rounded-[1.35rem] border border-gold/20" />

            <div className="absolute left-[18%] top-[30%] h-28 w-44 rotate-[-10deg] rounded-full bg-secondary/45 blur-sm" />
            <div className="absolute right-[15%] top-[22%] h-36 w-48 rotate-12 rounded-full bg-gold/30 blur-sm" />
            <div className="absolute bottom-[18%] left-[24%] h-32 w-52 rotate-6 rounded-full bg-white/10 blur-sm" />

            <div className="absolute left-[28%] top-[34%] h-3 w-3 animate-ping rounded-full bg-gold" />
            <div className="absolute left-[28%] top-[34%] h-3 w-3 rounded-full bg-gold ring-8 ring-gold/20" />
            <div className="absolute right-[27%] top-[42%] h-3 w-3 rounded-full bg-secondary ring-8 ring-secondary/25" />
            <div className="absolute bottom-[29%] left-[43%] h-3 w-3 rounded-full bg-foreground ring-8 ring-white/15" />

            <div className="absolute left-[31%] top-[36%] h-px w-[170px] rotate-[18deg] bg-gold/45" />
            <div className="absolute bottom-[34%] left-[45%] h-px w-[145px] rotate-[-38deg] bg-secondary/60" />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-card-background p-4 shadow-lg backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Living Heritage Map
                  </p>
                  <p className="mt-1 text-sm text-[#D4AF37] [text-shadow:0_0_14px_rgba(212,175,55,0.25)]">
                    Stories, sites, and local knowledge connected.
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gold/15 p-3">
                  <div className="h-full w-full rounded-full bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
