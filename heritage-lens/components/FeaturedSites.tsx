import SiteCard from "./SiteCard";

const featuredSites = [
  {
    title: "Taj Mahal",
    location: "Agra, India",
    description: "A marble monument celebrated for its architecture and craft.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    href: "#taj-mahal",
  },
  {
    title: "Hampi",
    location: "Karnataka, India",
    description: "A historic city of temples, markets, and stone landscapes.",
    image:
      "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=900&q=80",
    href: "#hampi",
  },
  {
    title: "Konark Sun Temple",
    location: "Odisha, India",
    description:
      "A stone chariot of the sun, carved with celestial detail and precise geometry.",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    href: "#konark-sun-temple",
  },
];

export default function FeaturedSites() {
  return (
    <section
      id="featured-sites"
      className="relative overflow-hidden bg-background px-6 py-20 text-foreground sm:px-10 lg:px-16"
    >
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#2f6f73]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="explore-reveal mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Curated Heritage
          </p>
          <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Featured Sites
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredSites.map((site, index) => (
            <div
              key={site.title}
              className="explore-card opacity-100 transition duration-500"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <SiteCard {...site} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
