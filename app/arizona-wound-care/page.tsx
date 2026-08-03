import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arizona Mobile Wound Care",
  description:
    "Ezra Mobile Wound Care provides mobile wound consultation and referral support in Arizona."
};

const wounds = [
  "Pressure injuries",
  "Diabetic foot ulcers",
  "Venous leg ulcers",
  "Arterial wounds",
  "Surgical wounds",
  "Skin tears",
  "Moisture-associated skin damage",
  "Complex and nonhealing wounds"
];

const partners = [
  "Home health agencies",
  "Hospice organizations",
  "Assisted-living communities",
  "Residential care settings",
  "Primary care offices",
  "Hospital discharge teams"
];

export default function WoundCarePage() {
  return (
    <main>
      <section className="subHero tealHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Arizona mobile services</p>
            <h1>Ezra Mobile Wound Care</h1>
            <p className="lead">
              Focused wound assessment, individualized recommendations, and
              coordinated support where patients receive care.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/contact/">Discuss a Referral</Link>
            </div>
          </div>
          <div className="heroVisual imageCard">
            <Image
              src="/images/wound-care-hero.webp"
              alt="Ezra Mobile Wound Care clinician illustration"
              width={900}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Wounds supported</p>
            <h2>Wound-specific evaluation and care planning.</h2>
            <div className="serviceGrid compact">
              {wounds.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
          <div className="imageCard suppliesCard">
            <Image
              src="/images/wound-supplies.webp"
              alt="Examples of wound care supplies"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container sectionIntro">
          <p className="eyebrow">Referral partners</p>
          <h2>Built to coordinate with existing care teams.</h2>
        </div>
        <div className="container serviceGrid">
          {partners.map((partner) => <div key={partner}>{partner}</div>)}
        </div>
      </section>

      <section className="noticeSection">
        <div className="container notice">
          <strong>Referral privacy:</strong>
          <span>
            Do not submit patient names, wound photos, medical records, insurance
            information, or other PHI through ordinary email or a basic website
            form. Connect this page to an approved secure referral platform before
            accepting clinical information.
          </span>
        </div>
      </section>
    </main>
  );
}
