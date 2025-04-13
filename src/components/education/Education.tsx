import React from "react";
import "./education.css";

interface EducationItem {
  title: string;
  institution: string;
  date: string;
  description?: string;
  certificateLink?: string;
}

const educationList: EducationItem[] = [
  {
    title: "B.Eng. in Computer Engineering",
    institution: "Federal University of Technology Minna",
    date: "2014 - 2019",
    description:
      "Focused on software engineering, Hardwares/Embedded systems, Computer Networking, data structures, and algorithms.",
  },
  {
    title: "Advanced Frontend Development",
    institution: "Qwasar Silicon Valley",
    date: "2022",
    description:
      "Built 4+ projects using HTML, CSS, JavaScript, and React and tailwind CSS",
    certificateLink:
      "https://upskill.us.qwasar.io/certificates/MTI1Mi1vbHUtYWtlX20tbWF5LTIwMjEtMjAtYTAwOQ==",
  },
  {
    title: "fullstack engineering",
    institution: "Qwasar Silicon Valley",
    date: "2023",
    description:
      "completion of 52 projects in addition to coding exercises at Silicon Valley standards covering fundamental concepts of fullstack engineering programming (including backend/frontend/database technologies).",
    certificateLink:
      "https://upskill.us.qwasar.io/certificates/MTM1Ni1vbHUtYWtlX20tanVsLTIwMjEtMzAtOTM1MQ==",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="education-list">
        {educationList.map((item, index) => (
          <div key={index} className="education-card">
            <h3 className="education-title">{item.title}</h3>
            <p className="education-institution">{item.institution}</p>
            <p className="education-date">{item.date}</p>

            {item.description && (
              <p className="education-description">{item.description}</p>
            )}
            {item.certificateLink && (
              <a
                href={item.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
