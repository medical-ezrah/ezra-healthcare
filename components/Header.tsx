import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/primary-care/", label: "Primary Care" },
  { href: "/arizona-wound-care/", label: "Wound Consulting" },
  { href: "/academics/", label: "Academics" },
  { href: "/contact/", label: "Contact" }
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brand" href="/">
          <Image src="/images/ezra-logo.jpeg" alt="Ezra Healthcare Management" width={330} height={105} priority />
        </Link>
        <nav className="desktopNav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="button buttonSmall" href="/contact/">Contact Ezra</Link>
      </div>
    </header>
  );
}
