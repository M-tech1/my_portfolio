import "./portfolio.css";
import enverge from "../../assets/project_img/enverge.JPG";
import MedEx from "../../assets/project_img/medex.JPG";
import Vreg from "../../assets/project_img/vreg.PNG";
import aimedcare from "../../assets/project_img/aiMedcare.JPG";
import azana from "../../assets/project_img/azana.png";
import vvs from "../../assets/project_img/vvs.png";
import bead from "../../assets/project_img/beadPage.jpg";
import fxbot from "../../assets/project_img/fxbot360.jpg";

const data = [
  {
    id: 1,
    image: bead,
    title: "Bead",
    github: "https://github.com/M-tech1",
    demo: "https://bead.com.ng",
  },
  {
    id: 2,
    image: aimedcare,
    title: "aiMedcare Solution",
    github: "https://github.com/M-tech1/ai_MedCare",
    demo: "https://ai-med-care-delta.vercel.app/",
  },

  {
    id: 3,
    image: MedEx,
    title: "MedEx",
    github: "https://github.com/M-tech1",
    demo: "https://medex.ng/",
  },

  {
    id: 4,
    image: Vreg,
    title: "Vehicle Registrations",
    github: "https://github.com/M-tech1/",
    demo: "https://vreg.gov.ng/",
  },

  {
    id: 5,
    image: vvs,
    title: "Vihecle Verification system",
    github: "https://github.com/",
    demo: "https://vvs.ng/?code=PS6bc416kEyK",
  },
  {
    id: 6,
    image: azana,
    title: "Azana",
    github: "https://github.com/",
    demo: "https://azana.com",
  },
  {
    id: 7,
    image: enverge,
    title: "Enverge global, IT and Tech solutions",
    github: "https://github.com/M-tech1",
    demo: "https://enverge.ca/",
  },

  {
    id: 8,
    image: fxbot,
    title: "Forex Trading BOTs",
    github: "https://github.com/M-tech1/",
    demo: "https://fxbot360-website-v1.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <div key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {" "}
                <img src={image} alt={title} />{" "}
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
