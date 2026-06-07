import React from "react";
import "./tool_experience.css";

const PROFICIENCY = { Experienced: 85, Intermediate: 60, Beginner: 40 };

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js / Next.js  ||  Javascript / Typescript",
        level: "Experienced",
      },
      {
        name: "HTML / CSS  ||  Bootstrap / Tailwind CSS / ",
        level: "Experienced",
      },
      { name: "React Native / Flutter", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: " Node JS & Express", level: "Experienced" },
      { name: "AWS & FireBase", level: "Experienced" },
      { name: "Mobile Applications", level: "Intermediate" },
      { name: "MySQL / PostgreSQL", level: "Intermediate" },
    ],
  },

  {
    category: "AI Tools & workflow Automation",
    items: [
      { name: "Claude / Codex", level: "Experienced" },
      { name: "OpenAI API (GPT-3.5, GPT-4)", level: "Intermediate" },
      { name: "PayStack / Flutterwave", level: "Experienced" },
      { name: "GitHub / GitLab", level: "Experienced" },
    ],
  },
  {
    category: "Graphics Design & others",
    items: [
      { name: "CorelDraw / Photoshop", level: "Experienced" },
      { name: "Canva / Figma", level: "Experienced" },
      { name: "Google Ads", level: "Experienced" },
      { name: "MetaTrader: Forex BOT", level: "Experienced" },

      { name: "WordPress (CMS)", level: "Experienced" },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="skill__item">
    <div className="skill__meta">
      <span className="skill__name">{name}</span>
      <span className="skill__level">{level}</span>
    </div>
    <div className="skill__track">
      <div
        className="skill__fill"
        style={{ "--skill-width": `${PROFICIENCY[level]}%` }}
      />
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" data-reveal>
      <h5>My skills & expertise</h5>
      <h2>Tools & Technologies</h2>

      <div className="container skills__container">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__group">
            <h3 className="skills__category">{category}</h3>
            {items.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
