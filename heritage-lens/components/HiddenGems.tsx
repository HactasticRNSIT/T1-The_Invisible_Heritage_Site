import SiteCard from "./SiteCard";

const hiddenGems = [
  {
    title: "Rani ki Vav",
    location: "Patan, India",
    description: "An intricately carved stepwell with layered heritage details.",
  },
  {
    title: "Majuli",
    location: "Assam, India",
    description: "A river island known for monasteries and living traditions.",
  },
];

export default function HiddenGems() {
  return (
    <section>
      <h2>Hidden Gems</h2>
      <div>
        {hiddenGems.map((site) => (
          <SiteCard key={site.title} {...site} />
        ))}
      </div>
    </section>
  );
}
