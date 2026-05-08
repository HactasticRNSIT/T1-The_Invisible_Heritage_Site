type SiteCardProps = {
  title: string;
  location: string;
  description: string;
};

export default function SiteCard({
  title,
  location,
  description,
}: SiteCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{description}</p>
    </article>
  );
}
