import React from "react";
import "./portfolio.css";
// import img1 from "../../assets/me.png";
import enverge from "../../assets/project_img/enverge.JPG";
import igclone from "../../assets/project_img/igclone.JPG";
import pokemon from "../../assets/project_img/pokemon.JPG";
import MedEx from "../../assets/project_img/medex.JPG";
import Vreg from "../../assets/project_img/vreg.JPG";
import evg from "../../assets/project_img/evg.JPG";
import mhhf from "../../assets/project_img/mhhf.JPG";

// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const data = [
  // {
  //   id: 1,
  //   image: vtu,
  //   title: "Enverge VTU Mobile APP",
  //   github: "https://github.com/M-tech1",
  //   demo: "https://play.google.com/store/apps/details?id=enverge.android.app",
  // },

  {
    id: 1,
    image: MedEx,
    title: "MedEx",
    github: "https://github.com/M-tech1",
    demo: "https://medex.ng/",
  },

  {
    id: 2,
    image: Vreg,
    title: "Vehicle Registrations",
    github: "https://github.com/M-tech1/",
    demo: "https://vreg.gov.ng/",
  },

  {
    id: 3,
    image: enverge,
    title: "Enverge global, IT and Tech solutions",
    github: "https://github.com/M-tech1",
    demo: "https://enverge.ca/",
  },
  {
    id: 4,
    image: evg,
    title: "interconnect exchange services ",
    github: "https//github.com/m-tech1",
    demo: "https://envergecomm.net/",
  },
  {
    id: 5,
    image: mhhf,
    title: "Maranatha",
    github: "https://github.com/M-tech1/",
    demo: "https://mhhf.ca/",
  },

  {
    id: 6,
    image: igclone,
    title: "Instagram clone project - React & firebase",
    github: "https://github.com/M-tech1/instagram_clone",
    demo: "https://instagram-clone-7qus3njqe-fxbot.vercel.app/",
  },

  {
    id: 7,
    image: pokemon,
    title: "Pokermon APP",
    github: "https://github.com/M-tech1/Pokemon-App",
    demo: "https://serene-medovik-cb4ee7.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div
        className="container portfolio__container"
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={20}
        // slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
      >
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
