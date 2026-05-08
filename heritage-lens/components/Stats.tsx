const stats = [
  {
    label: "Forgotten Sites",
    value: "12,000+",
    detail: "unmapped places waiting to be rediscovered",
  },
  {
    label: "Oral Histories Saved",
    value: "3,500+",
    detail: "community stories preserved as living records",
  },
  {
    label: "Languages Supported",
    value: "12",
    detail: "regional voices included in heritage discovery",
  },
  {
    label: "Village Archives Linked",
    value: "800+",
    detail: "local records connected to visible site pages",
  },
  {
    label: "Community Contributors",
    value: "5,200+",
    detail: "people adding memories, photos, and context",
  },
  {
    label: "Risk Alerts",
    value: "420+",
    detail: "fragile sites flagged for erosion or neglect",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#090d16] px-6 py-20 text-foreground sm:px-10 lg:px-16">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-72 w-96 rounded-full bg-[#2f6f73]/14 blur-[130px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.34),rgba(11,15,25,0.72))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Impact Snapshot
          </p>
          <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Heritage made visible, measurable, and alive.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="group rounded-xl bg-[linear-gradient(135deg,rgba(212,175,55,0.58),rgba(255,255,255,0.12),rgba(47,111,115,0.42))] p-px shadow-[0_22px_60px_rgba(0,0,0,0.3),0_0_28px_rgba(212,175,55,0.07)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_78px_rgba(0,0,0,0.36),0_0_42px_rgba(212,175,55,0.16)]"
            >
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground/58">
                  {stat.label}
                </p>
                <p className="mt-4 text-4xl font-semibold text-gold [text-shadow:0_0_28px_rgba(212,175,55,0.32)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-foreground/68">
                  {stat.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
