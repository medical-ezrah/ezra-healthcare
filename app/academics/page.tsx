import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ezra Academics Foundation",
  description:
    "A nonprofit division supporting students through scholarships, mentorship, health education, and community programs."
};

const programs = [
  ["Scholarships", "Financial support for eligible students pursuing educational goals."],
  ["Mentorship", "Guidance, encouragement, and practical support from experienced professionals."],
  ["Health Education", "Accessible education that supports healthier students and communities."],
  ["Community Outreach", "Programs and partnerships serving low-income and underserved populations."]
];

export default function AcademicsPage() {
  return (
    <main>
      <section className="subHero goldHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Nonprofit division</p>
            <h1>Ezra Academics Foundation</h1>
            <p className="lead">
              Expanding opportunity through educational support, mentorship,
              scholarships, and community health education.
            </p>
            <div className="buttonRow">
              <Link className="button" href="/contact/">Partner With Us</Link>
            </div>
          </div>
          <div className="heroVisual imageCard">
            <Image
              src="/images/academics-hero.webp"
              alt="Ezra Health education and family illustration"
              width={900}
              height={1200}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sectionIntro centered">
          <p className="eyebrow">Programs</p>
          <h2>Support that helps students move forward.</h2>
        </div>
        <div className="container programGrid">
          {programs.map(([title, text]) => (
            <article className="programCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
