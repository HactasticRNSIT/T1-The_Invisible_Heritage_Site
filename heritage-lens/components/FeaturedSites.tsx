import SiteCard from "./SiteCard";

const featuredSites = [
  {
    title: "Taj Mahal",
    location: "Agra, India",
    description: "A marble monument celebrated for its architecture and craft.",
  },
  {
    title: "Hampi",
    location: "Karnataka, India",
    description: "A historic city of temples, markets, and stone landscapes.",
  },
];

export default function FeaturedSites() {
  return (
    <section>
      <h2>Featured Sites</h2>
      <div>
        {featuredSites.map((site) => (
          <SiteCard key={site.title} {...site} />
        ))}
      </div>
    </section>
  );
}
