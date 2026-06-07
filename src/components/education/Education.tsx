import React from "react";
import "./education.css";
import { HiAcademicCap } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

interface EducationItem {
  type: "degree" | "certificate";
  title: string;
  institution: string;
  date: string;
  description: string;
  certificateLink?: string;
}

const educationList: EducationItem[] = [
  {
    type: "degree",
    title: "B.Eng. in Computer Engineering",
    institution: "Federal University of Technology Minna",
    date: "2014 – 2019",
    description:
      "Focused on software engineering, hardware & embedded systems, computer networking, data structures, and algorithms.",
  },
  {
    type: "certificate",
    title: "Advanced Frontend Development",
    institution: "Qwasar Silicon Valley",
    date: "2023",
    description:
      "Built 4+ projects using HTML, CSS, JavaScript, React, and Tailwind CSS to Silicon Valley standards.",
    certificateLink:
      "https://upskill.us.qwasar.io/certificates/MTI1Mi1vbHUtYWtlX20tbWF5LTIwMjEtMjAtYTAwOQ==",
  },
  {
    type: "certificate",
    title: "Fullstack Engineering",
    institution: "Qwasar Silicon Valley",
    date: "2023",
    description:
      "Completed 52 projects covering full-stack fundamentals — backend, frontend, and database technologies — at Silicon Valley standards.",
    certificateLink:
      "https://upskill.us.qwasar.io/certificates/MTM1Ni1vbHUtYWtlX20tanVsLTIwMjEtMzAtOTM1MQ==",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section" data-reveal>
      <h5>Academic & Professional</h5>
      <h2>Education & Certifications</h2>

      <div className="container edu__container">
        {educationList.map((item, index) => (
          <div key={index} className={`edu__card edu__card--${item.type}`}>
            <div className="edu__icon">
              {item.type === "degree" ? <HiAcademicCap /> : <MdVerified />}
            </div>

            <div className="edu__body">
              <div className="edu__header">
                <span className={`edu__badge edu__badge--${item.type}`}>
                  {item.type === "degree" ? "Degree" : "Certificate"}
                </span>
                <span className="edu__date">{item.date}</span>
              </div>

              <h3 className="edu__title">{item.title}</h3>
              <p className="edu__institution">{item.institution}</p>
              <p className="edu__description">{item.description}</p>

              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu__link"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
