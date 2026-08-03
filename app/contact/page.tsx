import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the appropriate Ezra division."
};

const contacts = [
  {
    title: "Ezra Health",
    text: "Primary care inquiries and appointment information.",
    email: "primarycare@ezrahealth.org"
  },
  {
    title: "Ezra Mobile Wound Care",
    text: "General partnership or service inquiries. Do not email PHI.",
    email: "woundcare@ezrahealth.org"
  },
  {
    title: "Ezra Academics Foundation",
    text: "Scholarship, donor, volunteer, and community partnership inquiries.",
    email: "academics@ezrahealth.org"
  },
  {
    title: "Ezra Healthcare Management",
    text: "Corporate, administrative, and general inquiries.",
    email: "info@ezrahealth.org"
  }
];

export default function ContactPage() {
  return (
    <main>
      <section className="pageHeader">
        <div className="container narrow">
          <p className="eyebrow">Contact Ezra</p>
          <h1>Reach the right division.</h1>
          <p className="lead">
            The addresses below are recommended placeholders. Create and verify
            each mailbox before publishing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactGrid">
          {contacts.map((contact) => (
            <article className="contactCard" key={contact.title}>
              <h2>{contact.title}</h2>
              <p>{contact.text}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="noticeSection">
        <div className="container notice">
          <strong>Privacy notice:</strong>
          <span>
            Ordinary email is not an appropriate channel for medical records,
            wound photographs, diagnoses, insurance identifiers, or other
            protected health information.
          </span>
        </div>
      </section>
    </main>
  );
}
