import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <section>
          <p className="eyebrow">Ezra Healthcare Management</p>
          <h2>Purpose-driven care, education, and community impact.</h2>
          <p className="footerCopy">
            Parent organization for Ezra Health, Ezra Mobile Wound Care,
            and Ezra Academics Foundation.
          </p>
        </section>

        <section>
          <h3>Divisions</h3>
          <Link href="/primary-care/">Ezra Health</Link>
          <Link href="/arizona-wound-care/">Ezra Mobile Wound Care</Link>
          <Link href="/academics/">Ezra Academics Foundation</Link>
        </section>

        <section>
          <h3>Company</h3>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <a href="mailto:info@ezrahealth.org">info@ezrahealth.org</a>
        </section>
      </div>

      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} Ezra Healthcare Management.</span>
        <span>Do not send protected health information through ordinary email.</span>
      </div>
    </footer>
  );
}
