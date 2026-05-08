import SiteCard from "./SiteCard";

const hiddenGems = [
  {
    title: "Rani ki Vav",
    location: "Patan, India",
    description: "An intricately carved stepwell with layered heritage details.",
    image:
      "https://images.unsplash.com/photo-1623059508779-c842f62f6d4e?auto=format&fit=crop&w=900&q=80",
    href: "#rani-ki-vav",
  },
  {
    title: "Majuli",
    location: "Assam, India",
    description: "A river island known for monasteries and living traditions.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
    href: "#majuli",
  },
  {
    title: "Bidar Fort",
    location: "Karnataka, India",
    description:
      "A layered Deccan fortress with quiet courtyards, gateways, and water systems.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    href: "#bidar-fort",
  },
];

export default function HiddenGems() {
  return (
    <section
      id="hidden-gems"
      className="relative overflow-hidden bg-[#080b13] px-6 py-20 text-foreground sm:px-10 lg:px-16"
    >
      <div className="absolute left-1/3 top-0 h-72 w-96 rounded-full bg-secondary/12 blur-[120px]" />
      <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Lesser-Known Places
          </p>
          <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Hidden Gems
          </h2>
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
