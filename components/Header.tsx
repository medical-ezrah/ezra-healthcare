import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/primary-care/", label: "Primary Care" },
  { href: "/arizona-wound-care/", label: "Wound Care" },
  { href: "/academics/", label: "Ezra Academics" },
  { href: "/resources/", label: "Resources" },
  { href: "/contact/", label: "Contact" }
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brand" href="/">
          <Image
            src="/images/parent-logo.webp"
            alt="Ezra Healthcare Management"
            width={280}
            height={100}
            priority
          />
        </Link>

        <nav className="desktopNav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <Link className="button buttonSmall" href="/contact/">
          Connect With Ezra
        </Link>
      </div>
    </header>
  );
}
