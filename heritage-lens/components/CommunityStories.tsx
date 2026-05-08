const stories = [
  {
    quote:
      "My grandmother never called it a monument. She called it the place where the village learned to wait for rain.",
    storyteller: "Meera, Patan",
    title: "A stepwell remembered through seasons",
    narrative:
      "HeritageLens preserves small memories that never enter textbooks: songs sung at the steps, water rituals, and the names families still use for carved corners.",
  },
  {
    quote:
      "The monastery is not only old walls. It is the sound of drums at dusk and children learning the same story in a changing river.",
    storyteller: "Rituphon, Majuli",
    title: "A river island holding its voice",
    narrative:
      "Local stories connect erosion, faith, migration, and performance so disappearing places can be understood as living communities, not isolated ruins.",
  },
  {
    quote:
      "Tourists photograph the gate, but my father showed me the hidden tank where workers rested after carrying stone all day.",
    storyteller: "Ayesha, Bidar",
    title: "The fort behind the postcard",
    narrative:
      "Community narratives reveal everyday labor, family routes, forgotten water systems, and the emotional geography behind visible architecture.",
  },
];

const narrativeThreads = [
  "Rituals still practiced",
  "Songs passed across generations",
  "Local names for forgotten places",
  "Memories before they disappear",
];

export default function CommunityStories() {
  return (
    <section
      id="community-stories"
      className="relative overflow-hidden bg-background px-5 py-16 text-foreground sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20"
    >
      <div className="absolute left-[-8rem] top-16 h-96 w-96 rounded-full bg-gold/12 blur-[130px]" />
      <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-[#2f6f73]/18 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.07),transparent_34%),linear-gradient(to_bottom,rgba(8,11,19,0.62),rgba(11,15,25,0.92))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Community Stories
            </p>
            <h2 className="text-3xl font-semibold text-foreground [text-shadow:0_0_30px_rgba(212,175,55,0.14)] md:text-4xl xl:text-5xl">
              Every place has a voice. We help people hear it.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
              Beyond coordinates and photos, heritage lives in memory: the
              grandmother who remembers a festival route, the artisan who knows
              a carving by touch, the child who hears a story before it fades.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {narrativeThreads.map((thread) => (
              <div
                key={thread}
                className="rounded-xl border border-gold/20 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-foreground/80 shadow-[0_0_28px_rgba(212,175,55,0.08)] backdrop-blur"
              >
                {thread}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6 xl:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.title}
              className="group rounded-xl bg-[linear-gradient(135deg,rgba(212,175,55,0.62),rgba(255,255,255,0.12),rgba(47,111,115,0.44))] p-px shadow-[0_24px_70px_rgba(0,0,0,0.35),0_0_34px_rgba(212,175,55,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_32px_88px_rgba(0,0,0,0.4),0_0_48px_rgba(212,175,55,0.18)]"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl md:p-6">
                <div className="absolute right-5 top-4 text-6xl font-semibold leading-none text-gold/15 transition duration-500 group-hover:text-gold/25 md:right-6 md:top-5 md:text-7xl">
                  "
                </div>
                <p className="relative text-base leading-7 text-foreground/88 md:text-lg md:leading-8">
                  "{story.quote}"
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <h3 className="text-xl font-semibold text-foreground transition duration-300 group-hover:text-gold md:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-gold">
                    {story.storyteller}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-foreground/66">
                    {story.narrative}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
