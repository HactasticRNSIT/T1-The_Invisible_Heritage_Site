import { getFeaturedSites, siteToCard } from "@/lib/heritageApi";
import type { ApiSite } from "@/lib/heritageApi";

import SiteCard from "./SiteCard";
import { Section } from "./ui";

const fallbackFeaturedSites: ApiSite[] = [
  {
    name: "Modhera Sun Temple",
    location: { state: "Gujarat", country: "India" },
    description:
      "Carved stone pillars and sacred geometry glowing in warm temple light.",
    images: [
      "https://images.unsplash.com/photo-1762542312590-69b5800a76d9?auto=format&fit=crop&w=1200&q=80",
    ],
    imageAlt:
      "Intricately carved stone pillars inside an ancient Indian temple",
    badge: "Featured Site",
  },
  {
    name: "Hampi",
    location: { state: "Karnataka", country: "India" },
    description:
      "A cinematic landscape of temple columns, pavilions, and weathered ruins.",
    images: [
      "https://images.pexels.com/photos/35978661/pexels-photo-35978661.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    imageAlt: "Ancient stone temple with intricate columns in Hampi",
    badge: "Featured Site",
  },
  {
    name: "Lepakshi Temple",
    location: { state: "Andhra Pradesh", country: "India" },
    description:
      "Sacred stone corridors and ancient pillars preserved in sharp daylight.",
    images: [
      "https://images.pexels.com/photos/34071245/pexels-photo-34071245.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    imageAlt: "Ancient Indian temple ruins with stone pillars under blue sky",
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
