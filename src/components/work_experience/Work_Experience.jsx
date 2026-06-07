import { useState } from "react";
import "./work_Experience.css";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const jobs = [
  {
    company: "Outsource Global",
    position: "Frontend Developer",
    dates: "April 2023 – Present",
    current: true,
    summary: [
      "Joined a team of professionals to work on MedEx — a medical exchange platform aiding pharmaceuticals and medical supplies using TypeScript, Ruby on Rails, React, and REST APIs.",
      "Delivered MedEx's front-end architecture supporting a mobile-friendly UX with Chart.js and ReCharts dashboards, achieving an average session duration of 15 minutes from a previously unmeasured baseline.",
    ],
    more: [
      "Part of the IDEC Dev Team building a national portal for automated Customs Import Duty Exemption applications using Next.js, ShadCN & Tailwind — built certificate viewing pages improving end-user access by 79%.",
      "Designed and implemented the Medex Logistics Module, streamlining supply chain workflows and improving delivery efficiency by 90%.",
      "Optimized website performance and conducted regular code reviews.",
    ],
  },
  {
    company: "Enverge Limited",
    position: "Data Analyst & Software Developer",
    dates: "November 2021 – October 2023",
    current: false,
    summary: [
      "Built and deployed a mobile VTU application for Airtime, Data, Cable TV, and electricity bill payments, integrated with Paystack and published on Google Play Store.",
      "Applied data analysis using Microsoft Excel to measure and document traffic statistics across all mobile network operators in Nigeria.",
    ],
    more: [
      "Part of the NOC team monitoring mobile networks, gaining hands-on experience with VOS3000, Tera-Term, WinBox, and Networking/Telecom principles while deploying routers, switches, and MikroTik servers.",
      "Developed and managed websites for the company and clients.",
    ],
  },
  {
    company: "Ai-MedCare",
    position: "Team Lead",
    dates: "December 2022 – Present",
    current: true,
    summary: [
      "Designed and deployed an AI-powered medical platform using Gemini & MedLM LLMs, React + Vite, Tailwind CSS, and ShadCN — delivering personalised healthcare recommendations.",
    ],
    more: [
      "Reduced patient wait times by 30% and improved health record documentation accuracy by 40%.",
      "Streamlined clinical workflows and enhanced patient outcomes with measurable impact in healthcare delivery.",
    ],
  },
  {
    company: "FxBot360",
    position: "Software Engineer",
    dates: "December 2020 – 2024",
    current: false,
    summary: [
      "Strategy developer and tester using MetaQuotes Language (MT4/MT5) for automated Forex trading bots.",
      "Developed responsive web interfaces and collaborated with the team to implement new trading features and strategies.",
    ],
    more: [
      "Optimized website performance and conducted regular code reviews.",
    ],
  },
  {
    company: "Mitcrux Limited",
    position: "Manager",
    dates: "December 2019 – Present",
    current: true,
    summary: [
      "Creating quality and professional software for companies and businesses worldwide.",
      "Conducting user research and gathering feedback to improve UX for existing software products.",
    ],
    more: [
      "Professional UI/UX design and implementation.",
      "Conducting professional technology consultations for clients.",
    ],
  },
  {
    company: "Digital Shortlets",
    position: "Freelance Developer",
    dates: "2023",
    current: false,
    summary: [
      "Built an intuitive Administrator Dashboard using React, Tailwind CSS, and ReCharts with interactive analytics and data visualization — improving dashboard performance by 25% and operational efficiency by 30%.",
    ],
    more: [
      "Integrated RESTful API endpoints for real-time data flow and dynamic user interactivity.",
    ],
  },
];

const JobCard = ({ company, position, dates, current, summary, more }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="job__card">
      <div className="job__header">
        <div className="job__company-row">
          <h3 className="job__company">{company}</h3>
          {current && <span className="job__badge">Current</span>}
        </div>
        <p className="job__position">{position}</p>
        <p className="job__dates">{dates}</p>
      </div>

      <ul className="job__list">
        {summary.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {more.length > 0 && (
        <>
          <ul className={`job__list job__more ${expanded ? "visible" : ""}`}>
            {more.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <button className="job__toggle" onClick={() => setExpanded((p) => !p)}>
            {expanded ? (
              <>View less <FaAngleDoubleUp /></>
            ) : (
              <>View more <FaAngleDoubleDown /></>
            )}
          </button>
        </>
      )}
    </div>
  );
};

const Work_Experience = () => {
  return (
    <section id="Work_Experience" data-reveal>
      <h5>Professional</h5>
      <h2>Work Experience</h2>

      <div className="container work__container">
        {jobs.map((job) => (
          <JobCard key={job.company} {...job} />
        ))}
      </div>
    </section>
  );
};

export default Work_Experience;
