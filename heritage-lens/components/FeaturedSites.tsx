import { getFeaturedSites, siteToCard } from "@/lib/heritageApi";
import type { ApiSite } from "@/lib/heritageApi";

import SiteCard from "./SiteCard";
import { Section } from "./ui";

const fallbackFeaturedSites: ApiSite[] = [
  {
    name: "Taj Mahal",
    location: { district: "Agra", country: "India" },
    description: "A marble monument celebrated for its architecture and craft.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    ],
    badge: "Featured Site",
  },
  {
    name: "Hampi",
    location: { state: "Karnataka", country: "India" },
    description: "A historic city of temples, markets, and stone landscapes.",
    images: [
      "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=900&q=80",
    ],
    badge: "Featured Site",
  },
  {
    name: "Konark Sun Temple",
    location: { state: "Odisha", country: "India" },
    description:
      "A stone chariot of the sun, carved with celestial detail and precise geometry.",
    images: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    ],
    badge: "Featured Site",
  },
];

export default async function FeaturedSites() {
  const featuredSites = await getFeaturedSites(fallbackFeaturedSites);

  return (
    <Section
      id="featured-sites"
      decorative={
        <>
          <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#2f6f73]/15 blur-[120px]" />
        </>
      }
    >
      <div className="explore-reveal mb-8 max-w-2xl md:mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          Curated Heritage
        </p>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl xl:text-5xl">
          Featured Sites
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        {featuredSites.map((site, index) => (
          <div
            key={site._id || site.name}
            className="explore-card opacity-100 transition duration-500"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <SiteCard {...siteToCard(site)} />
          </div>
        ))}
      </div>
    </Section>
  );
}
