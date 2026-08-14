import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  accent: "pink" | "teal" | "gold";
};

export default function DivisionCard({
  title, subtitle, description, href, image, accent
}: Props) {
  return (
    <article className={`divisionCard ${accent}`}>
      <div className="divisionImage">
        <Image src={image} alt="" width={680} height={680} />
      </div>
      <div className="divisionBody">
        <p className="eyebrow">{subtitle}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="textLink" href={href}>
          Explore this division <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
