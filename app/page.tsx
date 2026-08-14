import Image from "next/image";
import Link from "next/link";

const divisions = [
  { title:"Primary Care", subtitle:"Ezra Health", href:"/primary-care/", accent:"pink", text:"Whole-person primary care focused on prevention, wellness, and personalized care." },
  { title:"Wound Consulting", subtitle:"Ezra Wound Consulting", href:"/arizona-wound-care/", accent:"teal", text:"Specialized wound consultation for complex and non-healing wounds." },
  { title:"Academics", subtitle:"Ezra Academics Foundation", href:"/academics/", accent:"purple", text:"Educational equity, mentorship, financial assistance, and community outreach." }
];

export default function HomePage(){
  return <main>
    <section className="hero homeHero">
      <div className="container homeHeroGrid">
        <div className="homeHeroCopy">
          <p className="eyebrow">Ezra Healthcare Management</p>
          <h1>Compassionate care. Purposeful impact.</h1>
          <p className="lead">Ezra Healthcare Management provides the home for access to primary care services, wound consulting, and nonprofit education outreach. Each division serves a distinct audience while sharing a commitment to compassion, access, integrity, and meaningful outcomes.</p>
          <div className="buttonRow"><Link className="button" href="/primary-care/">Explore Primary Care</Link><Link className="button buttonGhost" href="/contact/">Contact Ezra</Link></div>
        </div>
        <div className="homeVisual"><Image src="/images/about-family-approved.jpeg" alt="Ezra Healthcare Management family illustration" width={900} height={900} priority /></div>
      </div>
    </section>
    <section className="section divisionsSection">
      <div className="container sectionIntro centered"><p className="eyebrow">The Ezra Ecosystem</p><h2>Three divisions. One shared purpose.</h2></div>
      <div className="container divisionCards">
        {divisions.map(d=><article className={`cleanDivisionCard ${d.accent}`} key={d.title}><div className="accentTop"/><p className="eyebrow">{d.subtitle}</p><h3>{d.title}</h3><p>{d.text}</p><Link href={d.href}>Learn more →</Link></article>)}
      </div>
    </section>
    <section className="section faithStrip"><div className="container faithGrid"><div><p className="eyebrow">Our foundation</p><h2>Faith in my foundation. Science in my approach.</h2></div><blockquote>“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.” <strong>Philippians 4:6</strong></blockquote></div></section>
  </main>
}
