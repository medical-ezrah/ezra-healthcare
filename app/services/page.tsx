import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services and Programs",
  description:
    "Explore Ezra Health primary care, Ezra Mobile Wound Care in Arizona, and Ezra Academics Foundation programs."
};

const offerings = [
  {
    title: "Ezra Health",
    category: "Primary Care",
    image: "/images/primary-care-hero.webp",
    href: "/primary-care/",
    items: [
      "Preventive and annual visits",
      "Chronic-condition follow-up",
      "Medication review",
      "Routine screenings",
      "Patient education",
      "Care coordination"
    ]
  },
  {
    title: "Ezra Mobile Wound Care",
    category: "Arizona Wound Services",
    image: "/images/wound-care-hero.webp",
    href: "/arizona-wound-care/",
    items: [
      "Mobile wound assessment",
      "Pressure injury support",
      "Diabetic and vascular wounds",
      "Surgical and complex wounds",
      "Care-plan recommendations",
      "Referral-partner coordination"
    ]
  },
  {
    title: "Ezra Academics Foundation",
    category: "Nonprofit Programs",
    image: "/images/academics-hero.webp",
    href: "/academics/",
    items: [
      "Scholarships",
      "Student mentorship",
      "Health education",
      "Community outreach",
      "Educational resources",
      "Mission-aligned partnerships"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container narrow">
          <p className="eyebrow">Services and programs</p>
          <h1>Three divisions serving one broader mission.</h1>
          <p className="lead">
            Explore clinical services, mobile wound care, nonprofit programs,
            and community partnership opportunities across the Ezra organization.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container stackedServices">
          {offerings.map((offering, index) => (
            <article className="serviceFeature" key={offering.title}>
              <div className={`serviceFeatureImage ${index % 2 ? "orderTwo" : ""}`}>
                <Image
                  src={offering.image}
                  alt={`${offering.title} services`}
                  width={900}
                  height={900}
                />
              </div>
              <div className="serviceFeatureBody">
                <p className="eyebrow">{offering.category}</p>
                <h2>{offering.title}</h2>
                <div className="featureList">
                  {offering.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link className="button" href={offering.href}>Learn More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
