import React from "react";
import "./tool_experience.css";

const PROFICIENCY = { Experienced: 85, Intermediate: 60, Beginner: 40 };

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", level: "Experienced" },
      { name: "React.js / Next.js", level: "Experienced" },
      { name: "Javascript / Typescript", level: "Experienced" },
      { name: "Bootstrap / Tailwind CSS", level: "Experienced" },
      { name: "React Native / Flutter", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Ruby on Rails", level: "Experienced" },
      { name: "FireBase", level: "Experienced" },
      { name: "AWS Tools", level: "Intermediate" },
      { name: "Mobile Applications", level: "Intermediate" },
      { name: "Node JS & Express", level: "Beginner" },
      { name: "MySQL / PostgreSQL", level: "Beginner" },
    ],
  },
  {
    category: "Graphics & Design",
    items: [
      { name: "CorelDraw", level: "Experienced" },
      { name: "Canva", level: "Experienced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Adobe XD", level: "Intermediate" },
      { name: "PhotoShop", level: "Intermediate" },
      { name: "Illustrator", level: "Intermediate" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Google Ads", level: "Experienced" },
      { name: "MetaTrader: Forex BOT", level: "Experienced" },
      { name: "PayStack / Flutterwave", level: "Experienced" },
      { name: "GitHub", level: "Experienced" },
      { name: "WordPress (CMS)", level: "Experienced" },
      { name: "Locust & Selenium", level: "Intermediate" },
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
