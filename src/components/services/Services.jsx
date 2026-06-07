import React, { useState } from "react";
import "./services.css";
import { BiPalette, BiCode, BiDotsHorizontalRounded } from "react-icons/bi";

const services = [
  {
    icon: <BiPalette />,
    title: "Graphics & UI/UX",
    summary: "Professional design for brands, apps, and digital presence.",
    items: [
      "Professional Logo Design",
      "Branding",
      "Banner & Flier Design",
      "Figma Design",
      "Photo Frame",
      "MOG Designs",
    ],
  },
  {
    icon: <BiCode />,
    title: "Web / Mobile Development",
    summary: "End-to-end web and mobile applications built to scale.",
    items: [
      "Web Applications",
      "CMS Websites",
      "Professional E-Commerce",
      "Professional Blog Sites",
      "Mobile Applications",
      "Site & App Monetisation",
      "SEO & Site Optimisation",
      "Site Maintenance & Management",
    ],
  },
  {
    icon: <BiDotsHorizontalRounded />,
    title: "Others",
    summary: "Consulting, automation, and digital growth services.",
    items: [
      "Consultation",
      "Forex Bot Development",
      "Network & Server Installation",
      "Content Creation",
      "Social Media Management",
    ],
  },
];

const ServiceCard = ({ icon, title, summary, items }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`service__card ${expanded ? "expanded" : ""}`}>
      <div className="service__shimmer" />
      <div className="service__icon">{icon}</div>
      <h3 className="service__title">{title}</h3>
      <p className="service__summary">{summary}</p>
      <button
        className="service__toggle"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show less ↑" : "See all services ↓"}
      </button>
      <ul className={`service__list ${expanded ? "visible" : ""}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" data-reveal>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Services;
