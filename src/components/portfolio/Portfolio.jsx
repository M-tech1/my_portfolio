import React, { useState } from "react";
import "./portfolio.css";
import enverge from "../../assets/project_img/enverge.JPG";
import MedEx from "../../assets/project_img/medex.JPG";
import Vreg from "../../assets/project_img/vreg.PNG";
import aimedcare from "../../assets/project_img/aiMedcare.JPG";
import azana from "../../assets/project_img/azana.png";
import vvs from "../../assets/project_img/vvs.png";
import bead from "../../assets/project_img/beadPage.jpg";
import eugym from "../../assets/project_img/eugym.jpg";
import fxbo360 from "../../assets/project_img/fxbot360.jpg";

const data = [
  {
    id: 1,
    image: eugym,
    title: "Eugym Fitness",
    category: "Web",
    github: "#",
    demo: "https://eugym-fe.vercel.app/",
  },
  {
    id: 2,
    image: bead,
    title: "Bead",
    category: "Web",
    github: "https://github.com/M-tech1",
    demo: "https://bead.com.ng",
  },
  {
    id: 3,
    image: aimedcare,
    title: "aiMedcare Solution",
    category: "Web",
    github: "https://github.com/M-tech1/ai_MedCare",
    demo: "https://ai-med-care-delta.vercel.app/",
  },
  {
    id: 4,
    image: MedEx,
    title: "MedEx",
    category: "Enterprise",
    github: "https://github.com/M-tech1",
    demo: "https://medex.ng/",
  },
  {
    id: 5,
    image: Vreg,
    title: "Vehicle Registrations",
    category: "Enterprise",
    github: "https://github.com/M-tech1/",
    demo: "https://vreg.gov.ng/",
  },
  {
    id: 6,
    image: vvs,
    title: "Vehicle Verification System",
    category: "Enterprise",
    github: "https://github.com/",
    demo: "https://vvs.ng/?code=PS6bc416kEyK",
  },
  {
    id: 7,
    image: azana,
    title: "Azana",
    category: "Fintech",
    github: "https://github.com/",
    demo: "https://azana.com",
  },
  {
    id: 8,
    image: enverge,
    title: "Enverge — IT & Tech Solutions",
    category: "Enterprise",
    github: "https://github.com/M-tech1",
    demo: "https://enverge.ca/",
  },
  {
    id: 9,
    image: fxbot360,
    title: "Forex Trading BOTs",
    category: "Fintech",
    github: "https://github.com/M-tech1/",
    demo: "https://fxbot360-website-v1.vercel.app/",
  },
];

const filters = ["All", "Web", "Enterprise", "Fintech"];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? data : data.filter((d) => d.category === active);

  return (
    <section id="portfolio" data-reveal>
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="portfolio__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`portfolio__filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {visible.map(({ id, image, title, github, demo }) => (
          <div key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <div className="portfolio__overlay">
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
