import { getHiddenGems, siteToCard } from "@/lib/heritageApi";
import type { ApiSite } from "@/lib/heritageApi";

import SiteCard from "./SiteCard";

const fallbackHiddenGems: ApiSite[] = [
  {
    name: "Rani ki Vav Stepwell",
    location: { district: "Patan", country: "India" },
    description:
      "An underground architectural archive whose stories are often hidden behind larger monument circuits.",
    images: [
      "https://images.pexels.com/photos/36892704/pexels-photo-36892704.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    imageAlt:
      "Historic Indian temple ruins with intricate sandstone carvings",
    badge: "Underrated Place",
    visibilityScore: 34,
    riskLabel: "Low visibility score",
  },
  {
    name: "Majuli Satras",
    location: { state: "Assam", country: "India" },
    description:
      "Living monasteries and cultural practices on a river island shaped by erosion, migration, and fragile memory.",
    images: [
      "https://images.pexels.com/photos/7470318/pexels-photo-7470318.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    imageAlt: "Ancient temple with carved architecture under a blue sky",
    badge: "Disappearing Heritage",
    visibilityScore: 27,
    riskLabel: "Erosion threat",
  },
  {
    name: "Bidar Fort",
    location: { state: "Karnataka", country: "India" },
    description:
      "A layered Deccan fortress with quiet courtyards, gateways, and water systems that rarely surface in travel discovery.",
    images: [
      "https://images.pexels.com/photos/28411721/pexels-photo-28411721.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    imageAlt: "Old temple ruins surrounded by mountains and greenery",
    badge: "Under-Mapped Site",
    visibilityScore: 41,
    riskLabel: "Sparse digital records",
  },
];

export default async function HiddenGems() {
  const hiddenGems = await getHiddenGems(fallbackHiddenGems);

  return (
    <section
      id="hidden-gems"
      className="relative overflow-hidden bg-[#080b13] px-5 py-16 text-foreground sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20"
    >
      <div className="absolute left-1/3 top-0 h-72 w-96 rounded-full bg-secondary/14 blur-[120px]" />
      <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-gold/12 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.12),transparent_26%),radial-gradient(circle_at_78%_35%,rgba(47,111,115,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:gap-8 lg:mb-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Hidden Gems
            </p>
            <h2 className="text-3xl font-semibold text-foreground [text-shadow:0_0_30px_rgba(212,175,55,0.12)] md:text-4xl xl:text-5xl">
              Places History Forgot
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
              Many culturally rich places never become searchable, mapped, or
              preserved online. HeritageLens highlights underrated places with
              low visibility scores before their stories disappear.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
            {[
              "Underrated places",
              "Low visibility score",
              "Disappearing heritage",
            ].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-gold/20 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-foreground/82 shadow-[0_0_30px_rgba(212,175,55,0.08)] backdrop-blur"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {hiddenGems.map((site) => (
            <SiteCard key={site._id || site.name} {...siteToCard(site)} />
          ))}
        </div>
      </div>
    </section>
  );
}
