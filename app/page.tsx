import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    title: "Ezra Health",
    subtitle: "Primary Care Services",
    description:
      "Preventive care, routine visits, chronic-condition support, patient education, and coordinated primary care.",
    href: "/primary-care/",
    image: "/images/primary-care-hero.webp",
    accent: "pink"
  },
  {
    title: "Ezra Mobile Wound Care",
    subtitle: "Arizona Mobile Wound Care",
    description:
      "Mobile wound assessment, individualized care planning, and referral support for patients and healthcare partners.",
    href: "/arizona-wound-care/",
    image: "/images/wound-care-hero.webp",
    accent: "teal"
  },
  {
    title: "Ezra Academics Foundation",
    subtitle: "Nonprofit Education & Outreach",
    description:
      "Scholarships, mentorship, health education, and programs supporting low-income and underserved students.",
    href: "/academics/",
    image: "/images/academics-hero.webp",
    accent: "gold"
  }
];

const highlights = [
  ["Integrated", "One parent organization"],
  ["Accessible", "Care and education pathways"],
  ["Purposeful", "Mission-driven programs"],
  ["Scalable", "Built for long-term growth"]
];

export default function HomePage() {
  return (
    <main>
      <section className="hero parentHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Ezra Healthcare Management</p>
            <h1>Advancing care, education, and community opportunity.</h1>
            <p className="lead">
              A parent organization supporting primary care, Arizona mobile wound
              care, and nonprofit educational initiatives through one unified
              Ezra mission.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/services/">Explore Our Services</Link>
              <Link className="button buttonGhost" href="/contact/">Connect With Ezra</Link>
            </div>
          </div>

          <div className="heroVisual logoPanel">
            <Image
              src="/images/parent-logo.webp"
              alt="Ezra Healthcare Management"
              width={900}
              height={360}
              priority
            />
            <div className="missionStrip">
              <span>Healthcare</span>
              <span>Education</span>
              <span>Community</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlightBand">
        <div className="container highlightGrid">
          {highlights.map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div className="imageCard">
            <Image
              src="/images/founder-story.webp"
              alt="Ezra founder story illustration"
              width={900}
              height={1200}
            />
          </div>
          <div>
            <p className="eyebrow">About Ezra</p>
            <h2>One organization, created to serve through multiple pathways.</h2>
            <p className="largeCopy">
              Ezra Healthcare Management provides the strategic home for clinical
              services, mobile wound care, and nonprofit education. Each division
              serves a distinct audience while sharing a commitment to compassion,
              access, integrity, and meaningful outcomes.
            </p>
            <Link className="textLink" href="/about/">
              Learn more about Ezra <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container sectionIntro centered">
          <p className="eyebrow">Our services and programs</p>
          <h2>The Ezra ecosystem</h2>
          <p>
            Choose the division that matches your healthcare, referral, educational,
            or community partnership needs.
          </p>
        </div>

        <div className="container divisionGrid">
          {divisions.map((division) => (
            <article className={`divisionCard ${division.accent}`} key={division.title}>
              <div className="divisionImage">
                <Image
                  src={division.image}
                  alt={`${division.title} illustration`}
                  width={680}
                  height={680}
                />
              </div>
              <div className="divisionBody">
                <p className="eyebrow">{division.subtitle}</p>
                <h3>{division.title}</h3>
                <p>{division.description}</p>
                <Link className="textLink" href={division.href}>
                  View division <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container sectionIntro">
          <p className="eyebrow">Who we support</p>
          <h2>Built for patients, referral partners, students, and communities.</h2>
        </div>

        <div className="container audienceGrid">
          <article>
            <h3>Patients & Families</h3>
            <p>Clear pathways to primary care and mobile wound services.</p>
          </article>
          <article>
            <h3>Healthcare Partners</h3>
            <p>Referral coordination for agencies, facilities, and care teams.</p>
          </article>
          <article>
            <h3>Students</h3>
            <p>Scholarships, mentorship, and practical educational support.</p>
          </article>
          <article>
            <h3>Community Partners</h3>
            <p>Outreach, education, and mission-aligned collaboration.</p>
          </article>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaCard">
          <div>
            <p className="eyebrow">Ready to connect?</p>
            <h2>Find the right Ezra division for your needs.</h2>
          </div>
          <Link className="button buttonLight" href="/contact/">Contact Ezra</Link>
        </div>
      </section>
    </main>
  );
}
