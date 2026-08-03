import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Ezra",
  description:
    "Learn about the mission and structure of Ezra Healthcare Management and its divisions."
};

export default function AboutPage() {
  return (
    <main>
      <section className="subHero neutralHero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">About Ezra</p>
            <h1>A parent organization built for purposeful growth.</h1>
            <p className="lead">
              Ezra Healthcare Management connects clinical care, mobile wound
              services, education, and community impact under a unified standard.
            </p>
          </div>
          <div className="heroVisual imageCard">
            <Image
              src="/images/founder-story.webp"
              alt="Ezra founder story illustration"
              width={900}
              height={1200}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Create accessible pathways to care, knowledge, and opportunity.</h2>
          </div>
          <div className="largeCopy">
            <p>
              The parent-company structure allows each Ezra division to serve a
              distinct need while sharing a common identity, operational vision,
              and commitment to meaningful outcomes.
            </p>
            <p>
              This page can later include the founder biography, credentials,
              organization history, board information, and verified public-facing
              statements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
