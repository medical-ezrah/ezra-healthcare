import Image from "next/image";

export default function PrimaryCarePage(){
  return <main>
    <section className="providerHero cleanProviderHero"><div className="container providerGrid">
      <div className="providerPhoto"><Image src="/images/joanna-profile-blush.jpg" alt="Joanna Ibanez, FNP-C" width={900} height={900} priority /></div>
      <div className="providerCopy"><p className="eyebrow">Meet Your Provider</p><h1>Joanna Ibanez, FNP- C</h1>
        <blockquote>“Faith in my foundation. Science in my approach. Compassion in every patient encounter.”</blockquote>
        <p>With more than a decade of healthcare experience, Joanna Ibanez is committed to delivering evidence-based, compassionate care. Her background includes primary care, advanced wound management, preventive medicine, and community health initiatives.</p>
        <p>Through Ezra Health and Ezra Wound Consulting, her mission is to improve access to quality healthcare while treating every patient with dignity, respect, and clinical excellence.</p>
      </div>
    </div></section>
    <section className="section"><div className="container infoCardGrid">
      <article className="infoCard"><div className="accentTop pink"/><p className="eyebrow">Practice Location</p><h2>Reddy Care Medical</h2><p>1196 N. Garey Ave.<br/>Pomona, CA 91766</p><a href="https://www.google.com/maps/search/?api=1&query=Reddy+Care+Medical+1196+N+Garey+Ave+Pomona+CA+91766" target="_blank" rel="noreferrer">Directions →</a></article>
      <article className="infoCard"><div className="accentTop pink"/><p className="eyebrow">Credentials</p><h2>Family Nurse Practitioner</h2><p><strong>California FNP License:</strong> 95034630</p><p><strong>NPI:</strong> 1205629755</p><hr/><p className="eyebrow">Languages</p><p>English<br/>Spanish interpreter services available</p></article>
      <article className="infoCard"><div className="accentTop pink"/><p className="eyebrow">Contact</p><h2>Ezra Health</h2><p><a href="tel:+19096234050">(909) 623-4050</a></p><p><a href="mailto:medical@ezrahealth.org">medical@ezrahealth.org</a></p><p>www.ezrahealth.org</p></article>
    </div></section>
  </main>
}
