import Image from "next/image";

const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_ttkgBWixIcpIw_vPOhWdKSM5A1YIg-w_1hLFc66nwBX6kg/viewform?pli=1";

const mission = "Ezra Academics Foundation operates exclusively for charitable and educational purposes by advancing educational equity for low-income and underserved students. The organization provides financial assistance, scholarships, academic support resources, mentorship, and health education initiatives designed to improve academic achievement, support career readiness, and promote long-term socioeconomic mobility.";

const programs = [
  ["Financial Aid", "Helping students overcome financial barriers so they can participate in important senior-year and academic experiences."],
  ["Scholarships", "Supporting educational opportunity and recognizing students working toward their future goals."],
  ["Mentorship", "Connecting students with encouragement, guidance, and resources that support academic and career readiness."],
  ["Community Impact", "Building stronger communities through educational support, health education, and opportunity."],
];

const eligibility = [
  ["High School Enrollment", "Currently enrolled in 12th grade at a public high school."],
  ["Residency", "Must live in a low-income or underserved area."],
  ["Financial Need", "Must demonstrate financial hardship, such as free/reduced lunch eligibility or household income verification."],
  ["Personal Statement", "A short paragraph explaining goals, challenges, and how this assistance would help."],
];

export default function AcademicsPage() {
  return (
    <main>
      <section className="academicsShowcaseHero">
        <div className="container academicsShowcaseGrid">
          <div className="academicsShowcaseCopy">
            <p className="eyebrow academicsGold">Ezra Academics Foundation</p>
            <h1>Investing in education.<br />Empowering the future.</h1>
            <p>{mission}</p>
            <div className="buttonRow">
              <a className="button academicsButton" href={applicationUrl} target="_blank" rel="noreferrer">Request Assistance</a>
              <a className="button buttonGhost" href="mailto:academics@ezrahealth.org">Email the Foundation</a>
            </div>
          </div>
          <div className="academicsShowcaseImage">
            <Image
              src="/images/academics-approved-transparent.png"
              alt="Ezra Health and Academics"
              width={1200}
              height={800}
              priority
            />
          </div>
        </div>
      </section>

      <section className="academicsProgramSection">
        <div className="container academicsProgramGrid">
          {programs.map(([title, text]) => (
            <article className="academicsProgramCard" key={title}>
              <div className="academicsProgramMark" aria-hidden="true">♡</div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section academicsMissionBand">
        <div className="container academicsMissionBandInner">
          <div>
            <p className="eyebrow academicsGold">Our Mission</p>
            <h2>Together, we can create opportunities that change lives for generations.</h2>
          </div>
          <a className="button academicsButton" href={applicationUrl} target="_blank" rel="noreferrer">Learn More &amp; Apply</a>
        </div>
      </section>

      <section className="section academicsPresidentSection">
        <div className="container contentSplit">
          <div>
            <p className="eyebrow">President&apos;s Message</p>
            <h2>Our mission is personal.</h2>
          </div>
          <div>
            <p>Growing up in a low-income neighborhood with a hardworking mom and a dad who struggled with addiction, I understand what it’s like to face challenges that feel bigger than you. Despite the obstacles, I never let my circumstances define me.</p>
            <p>As the President of this organization, I feel a deep responsibility to give back to the same kind of community that shaped me. I know how tough it can be when money is tight and opportunities seem out of reach—especially during high school. That’s why we’re here: to offer support and financial assistance to students who just need a little help to reach their goals.</p>
            <p>If you or someone you know could use that support, please reach out by email—we’re here for you.</p>
          </div>
        </div>
      </section>

      <section className="section academicsSendoffSection">
        <div className="container academicsSendoffGrid">
          <div className="academicsSendoffImage">
            <Image
              src="/images/senior-sendoff-2027-flyer.jpeg"
              alt="Ezra Health Gives Back Senior Send-Off Graduation Expense Assistance Program"
              width={900}
              height={1200}
            />
          </div>
          <div>
            <p className="eyebrow academicsGold">Senior Send-Off</p>
            <h2>Graduation Expense Assistance Program</h2>
            <p className="leadSmall">No senior should miss out on milestone experiences because of finances.</p>
            <div className="academicsAssistanceList">
              <span>Yearbook</span>
              <span>Grad Night</span>
              <span>Prom Night</span>
              <span>End-of-year activities</span>
              <span>Class materials</span>
              <span>College application fees</span>
            </div>
            <a className="button academicsButton" href={applicationUrl} target="_blank" rel="noreferrer">Open Application</a>
          </div>
        </div>
      </section>

      <section className="section academicsEligibilitySection">
        <div className="container">
          <div className="sectionIntro">
            <p className="eyebrow academicsGold">Eligibility Requirements</p>
            <h2>Who may request assistance</h2>
          </div>
          <div className="eligibilityGrid">
            {eligibility.map(([title, text], index) => (
              <article className="eligibilityCard" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="academicsNotices">
            <div className="noticeBox">
              <h3>Proof of income</h3>
              <p>A copy of a parent’s recent pay stub may be requested. The last name, pay period, and amount should remain visible. All other sensitive information must be covered before submission.</p>
            </div>
            <div className="noticeBox">
              <h3>Interested donors</h3>
              <p>Acceptance of donations is currently pending. During this transition, assistance can still be provided to high school seniors through coordination with our organization and school officials.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
