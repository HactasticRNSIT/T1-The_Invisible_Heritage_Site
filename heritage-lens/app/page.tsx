import CommunityStories from "@/components/CommunityStories";
import FeaturedSites from "@/components/FeaturedSites";
import Hero from "@/components/Hero";
import HiddenGems from "@/components/HiddenGems";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedSites />
      <HiddenGems />
      <CommunityStories />
    </main>
  );
}
