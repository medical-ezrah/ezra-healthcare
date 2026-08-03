import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ezra Health Primary Care",
  description:
    "Primary care services focused on prevention, chronic-condition management, routine visits, and patient education."
};

const services = [
  "Annual and preventive visits",
  "Chronic-condition follow-up",
  "Blood-pressure and diabetes management",
  "Medication review",
  "Routine health screenings",
  "Telehealth when appropriate",
  "Patient education and care coordination",
  "Referrals to specialists"
];

export default function PrimaryCarePage() {
  return (
    <main>
      <section className="subHero pinkHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">A division of Ezra Healthcare Management</p>
            <h1>Ezra Health</h1>
            <p className="lead">
              Primary care designed around prevention, continuity, clear
              communication, and practical next steps.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/contact/">Request Information</Link>
            </div>
          </div>
          <div className="heroVisual imageCard">
            <Image
              src="/images/primary-care-hero.webp"
              alt="Ezra Health primary care"
              width={900}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sectionIntro">
          <p className="eyebrow">Primary care services</p>
          <h2>Support across the routine healthcare journey.</h2>
        </div>
        <div className="container serviceGrid">
          {services.map((service) => <div key={service}>{service}</div>)}
        </div>
      </section>

      <section className="section softSection">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Patient-centered approach</p>
            <h2>Clear plans—not rushed encounters.</h2>
          </div>
          <div>
            <p className="largeCopy">
              Ezra Health is intended to provide thoughtful assessment,
              understandable recommendations, and coordinated follow-through.
              Published services should be updated to match actual licensure,
              location, availability, payer participation, and scope before launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
