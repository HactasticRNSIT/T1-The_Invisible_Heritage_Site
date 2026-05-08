export type ApiSite = {
  _id?: string;
  name: string;
  description: string;
  category?: string;
  location?: {
    district?: string;
    state?: string;
    country?: string;
  };
  images?: string[];
  badge?: string;
  visibilityScore?: number;
  riskLabel?: string;
};

export type ApiStory = {
  _id?: string;
  title: string;
  quote: string;
  storyteller: string;
  narrative: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) return null;
    return response.json() as Promise<T>;
  } catch {
    return null;
  }
}

export function formatLocation(site: ApiSite) {
  const parts = [
    site.location?.district,
    site.location?.state,
    site.location?.country,
  ].filter(Boolean);

  return parts.join(", ") || "India";
}

export function siteToCard(site: ApiSite) {
  return {
    title: site.name,
    location: formatLocation(site),
    description: site.description,
    image: site.images?.[0] || "/globe.svg",
    href: site._id ? `/sites/${site._id}` : "#",
    badge: site.badge,
    visibilityScore: site.visibilityScore,
    riskLabel: site.riskLabel,
  };
}

export async function getFeaturedSites(fallback: ApiSite[]) {
  const data = await getJson<{ success: boolean; sites: ApiSite[] }>("/sites/featured?limit=3");
  return data?.sites?.length ? data.sites : fallback;
}

export async function getHiddenGems(fallback: ApiSite[]) {
  const data = await getJson<{ success: boolean; sites: ApiSite[] }>("/sites/hidden-gems?limit=3");
  return data?.sites?.length ? data.sites : fallback;
}

export async function getCommunityStories(fallback: ApiStory[]) {
  const data = await getJson<{ success: boolean; stories: ApiStory[] }>("/stories/featured?limit=3");
  return data?.stories?.length ? data.stories : fallback;
}
