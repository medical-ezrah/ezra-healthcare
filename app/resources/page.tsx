import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational resources for patients, caregivers, referral partners, students, and community partners."
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container narrow">
          <p className="eyebrow">Resources</p>
          <h1>Information designed to help people take the next step.</h1>
          <p className="lead">
            Patient education, wound-care guidance, scholarship information,
            referral resources, and community materials will live here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container audienceGrid">
          <article>
            <h3>Primary Care Education</h3>
            <p>Preventive care, chronic-condition education, and visit preparation.</p>
            <Link className="textLink" href="/primary-care/">Explore primary care →</Link>
          </article>
          <article>
            <h3>Wound Care Resources</h3>
            <p>General education for patients, caregivers, and referral partners.</p>
            <Link className="textLink" href="/arizona-wound-care/">Explore wound care →</Link>
          </article>
          <article>
            <h3>Student Resources</h3>
            <p>Scholarship, mentorship, and academic-support information.</p>
            <Link className="textLink" href="/academics/">Explore academics →</Link>
          </article>
          <article>
            <h3>Community Partnerships</h3>
            <p>Opportunities to collaborate with Ezra programs and divisions.</p>
            <Link className="textLink" href="/contact/">Contact Ezra →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
