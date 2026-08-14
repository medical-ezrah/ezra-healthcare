import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    title: "Primary Care",
    subtitle: "Ezra Health",
    href: "/primary-care/",
    accent: "pink",
    text: "Whole-person primary care focused on prevention, wellness, and personalized care."
  },
  {
    title: "Wound Consulting",
    subtitle: "Ezra Wound Consulting",
    href: "/arizona-wound-care/",
    accent: "teal",
    text: "Specialized wound consultation for complex and non-healing wounds."
  },
  {
    title: "Academics",
    subtitle: "Ezra Academics Foundation",
    href: "/academics/",
    accent: "purple",
    text: "Educational equity, mentorship, financial assistance, and community outreach."
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero polishedHomeHero">
        <div className="container polishedHomeGrid">
          <div className="polishedHomeCopy">
            <p className="eyebrow">Ezra Healthcare Management</p>
            <h1>Compassionate care.<br /><span>Purposeful impact.</span></h1>
            <p className="lead">
              Ezra Healthcare Management provides the home for access to primary care services,
              wound consulting, and nonprofit education outreach. Each division serves a distinct
              audience while sharing a commitment to compassion, access, integrity, and meaningful outcomes.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/primary-care/">Explore Primary Care</Link>
              <Link className="button buttonGhost" href="/contact/">Contact Ezra</Link>
            </div>
            <div className="homeTrustRow" aria-label="Ezra values">
              <span>Compassionate Care</span>
              <span>Evidence-Based Practice</span>
              <span>Faith-Inspired Purpose</span>
            </div>
          </div>

          <div className="polishedHomePortrait">
            <Image
              src="/images/home-hero-approved.png"
              alt="Joanna Ibanez, FNP- C"
              width={1100}
              height={1100}
              priority
            />
          </div>
        </div>
      </section>

      <section className="homeDivisionFloat">
        <div className="container">
          <div className="homeDivisionHeading">
            <p className="eyebrow">The Ezra Ecosystem</p>
            <h2>Three divisions. One shared purpose.</h2>
          </div>
          <div className="divisionCards homeDivisionCards">
            {divisions.map((division) => (
              <article className={`cleanDivisionCard ${division.accent}`} key={division.title}>
                <div className="accentTop" />
                <p className="eyebrow">{division.subtitle}</p>
                <h3>{division.title}</h3>
                <p>{division.text}</p>
                <Link href={division.href}>Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section homeMissionSection">
        <div className="container homeMissionGrid">
          <div>
            <p className="eyebrow">Our foundation</p>
            <h2>Faith in my foundation.<br />Science in my approach.</h2>
          </div>
          <blockquote>
            “Do not be anxious about anything, but in every situation, by prayer and petition,
            with thanksgiving, present your requests to God.”
            <strong> Philippians 4:6</strong>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
