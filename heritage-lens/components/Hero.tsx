import Image from "next/image";

import { Button } from "./ui";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-5 py-16 text-foreground sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-28 xl:px-20">
      <Image
        src="https://images.pexels.com/photos/30647802/pexels-photo-30647802.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Ancient Indian temple architecture under a clear sky"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-28"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.22),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(139,115,85,0.24),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-gold/25 blur-[110px]" />
      <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-56 w-[22rem] -translate-x-1/2 rounded-full bg-[#2f6f73]/20 blur-[110px] md:h-72 md:w-[34rem] md:blur-[130px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.38),rgba(11,15,25,0.76)),radial-gradient(circle_at_center,transparent_0%,rgba(11,15,25,0.22)_46%,rgba(11,15,25,0.86)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
        <div className="max-w-2xl text-center sm:text-left">
          <p className="animate-fade-in-up mx-auto mb-5 w-fit rounded-full border border-gold/40 bg-card-background px-4 py-2 text-xs font-medium text-gold shadow-[0_0_34px_rgba(212,175,55,0.18)] backdrop-blur transition duration-300 hover:border-gold/70 hover:bg-white/10 sm:mx-0 sm:text-sm">
            HeritageLens AI
          </p>
          <h1 className="animate-fade-in-up animation-delay-150 text-4xl font-semibold leading-tight text-foreground [text-shadow:0_0_34px_rgba(245,245,245,0.12)] md:text-5xl lg:text-6xl xl:text-7xl">
            Rediscover Forgotten Heritage
          </h1>
          <p className="animate-fade-in-up animation-delay-300 mx-auto mt-6 max-w-xl text-base leading-7 text-[#D4AF37] [text-shadow:0_0_18px_rgba(212,175,55,0.35)] sm:mx-0 md:text-lg md:leading-8 xl:text-xl">
            Thousands of culturally significant places remain digitally
            invisible. HeritageLens AI brings them back to life through stories,
            maps, and community knowledge.
          </p>
          <div className="animate-fade-in-up animation-delay-450 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start md:mt-10">
            <Button href="#featured-sites" variant="gold">
              Explore Sites
            </Button>
            <Button href="#about" variant="glass">
              Learn More
            </Button>
            <Button href="/login" variant="ghost">
              Login
            </Button>
            <Button href="/register" variant="glass">
              Register
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-600 relative min-h-[360px] md:min-h-[420px] lg:min-h-[440px]">
          <div className="animate-float-soft absolute left-2 top-4 z-20 max-w-[170px] rounded-2xl border border-white/10 bg-card-background p-3 shadow-xl backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10 md:left-6 md:top-5 md:max-w-none md:p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              Community Memory
            </p>
            <p className="mt-2 text-2xl font-semibold text-gold md:text-3xl">1,248</p>
            <p className="mt-1 text-sm text-secondary">local stories mapped</p>
          </div>

          <div className="animate-float-soft animation-delay-300 absolute bottom-6 right-0 z-20 max-w-[210px] rounded-2xl border border-white/10 bg-card-background p-3 shadow-xl backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10 md:bottom-8 md:right-10 md:p-4">
            <p className="text-sm font-semibold text-foreground">Hidden site found</p>
            <p className="mt-1 max-w-[190px] text-sm leading-6 text-[#D4AF37] [text-shadow:0_0_14px_rgba(212,175,55,0.25)]">
              Stepwell archive matched with village records.
            </p>
          </div>

          <div className="animate-float-slow relative mx-auto h-[360px] max-w-[560px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-card-background p-4 shadow-[0_0_80px_rgba(212,175,55,0.14),0_28px_70px_rgba(0,0,0,0.52)] backdrop-blur transition duration-500 before:absolute before:-inset-6 before:-z-10 before:rounded-[2rem] before:bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_62%)] before:blur-2xl hover:border-gold/25 md:h-[420px] md:rounded-[2rem] md:p-5 lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1762542312590-69b5800a76d9?auto=format&fit=crop&w=1200&q=80"
              alt="Intricate carved pillars inside an ancient Indian temple"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 object-cover opacity-90"
            />
            <div className="absolute inset-4 rounded-[1.25rem] bg-[linear-gradient(to_bottom,rgba(11,15,25,0.1),rgba(11,15,25,0.72))] md:inset-5 md:rounded-[1.5rem]" />
            <div className="absolute inset-6 rounded-[1.15rem] border border-gold/20 md:inset-8 md:rounded-[1.35rem]" />

            <div className="absolute left-[18%] top-[30%] h-28 w-44 rotate-[-10deg] rounded-full bg-secondary/45 blur-sm" />
            <div className="absolute right-[15%] top-[22%] h-36 w-48 rotate-12 rounded-full bg-gold/30 blur-sm" />
            <div className="absolute bottom-[18%] left-[24%] h-32 w-52 rotate-6 rounded-full bg-white/10 blur-sm" />

            <div className="absolute left-[28%] top-[34%] h-3 w-3 animate-ping rounded-full bg-gold" />
            <div className="absolute left-[28%] top-[34%] h-3 w-3 rounded-full bg-gold ring-8 ring-gold/20" />
            <div className="absolute right-[27%] top-[42%] h-3 w-3 rounded-full bg-secondary ring-8 ring-secondary/25" />
            <div className="absolute bottom-[29%] left-[43%] h-3 w-3 rounded-full bg-foreground ring-8 ring-white/15" />

            <div className="absolute left-[31%] top-[36%] h-px w-[170px] rotate-[18deg] bg-gold/45" />
            <div className="absolute bottom-[34%] left-[45%] h-px w-[145px] rotate-[-38deg] bg-secondary/60" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-card-background p-3 shadow-lg backdrop-blur transition duration-300 hover:border-gold/35 hover:bg-white/10 md:bottom-8 md:left-8 md:right-8 md:p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Living Heritage Map
                  </p>
                  <p className="mt-1 text-sm text-[#D4AF37] [text-shadow:0_0_14px_rgba(212,175,55,0.25)]">
                    Stories, sites, and local knowledge connected.
                  </p>
                </div>
                <div className="hidden h-12 w-12 rounded-full bg-gold/15 p-3 sm:block">
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
