import SiteCard from "./SiteCard";

const hiddenGems = [
  {
    title: "Rani ki Vav Stepwell",
    location: "Patan, India",
    description:
      "An underground architectural archive whose stories are often hidden behind larger monument circuits.",
    image:
      "https://images.unsplash.com/photo-1623059508779-c842f62f6d4e?auto=format&fit=crop&w=900&q=80",
    href: "#rani-ki-vav",
    badge: "Underrated Place",
    visibilityScore: 34,
    riskLabel: "Low visibility score",
  },
  {
    title: "Majuli Satras",
    location: "Assam, India",
    description:
      "Living monasteries and cultural practices on a river island shaped by erosion, migration, and fragile memory.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
    href: "#majuli",
    badge: "Disappearing Heritage",
    visibilityScore: 27,
    riskLabel: "Erosion threat",
  },
  {
    title: "Bidar Fort",
    location: "Karnataka, India",
    description:
      "A layered Deccan fortress with quiet courtyards, gateways, and water systems that rarely surface in travel discovery.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    href: "#bidar-fort",
    badge: "Under-Mapped Site",
    visibilityScore: 41,
    riskLabel: "Sparse digital records",
  },
];

export default function HiddenGems() {
  return (
    <section
      id="hidden-gems"
      className="relative overflow-hidden bg-[#080b13] px-6 py-24 text-foreground sm:px-10 lg:px-16"
    >
      <div className="absolute left-1/3 top-0 h-72 w-96 rounded-full bg-secondary/14 blur-[120px]" />
      <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-gold/12 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.12),transparent_26%),radial-gradient(circle_at_78%_35%,rgba(47,111,115,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Hidden Gems
            </p>
            <h2 className="text-4xl font-semibold text-foreground [text-shadow:0_0_30px_rgba(212,175,55,0.12)] sm:text-5xl">
              Places History Forgot
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
              Many culturally rich places never become searchable, mapped, or
              preserved online. HeritageLens highlights underrated places with
              low visibility scores before their stories disappear.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {["Underrated places", "Low visibility score", "Disappearing heritage"].map(
              (label) => (
                <div
                  key={label}
                  className="rounded-xl border border-gold/20 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-foreground/82 shadow-[0_0_30px_rgba(212,175,55,0.08)] backdrop-blur"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hiddenGems.map((site) => (
            <SiteCard key={site.title} {...site} />
          ))}
        </div>
      </div>
    </section>
  );
}
