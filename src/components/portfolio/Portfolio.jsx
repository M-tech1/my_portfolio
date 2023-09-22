import React from "react";
import "./portfolio.css";
import img1 from "../../assets/me.png";
import vtu from "../../assets/project_img/vtu.JPG";
import fxbot from "../../assets/project_img/fxbot.JPG";
import enverge from "../../assets/project_img/enverge.JPG";
import igclone from "../../assets/project_img/igclone.JPG";
import envergepef from "../../assets/project_img/enverge perfume.JPG";
import pokemon from "../../assets/project_img/pokemon.JPG";

// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const data = [
  {
    id: 1,
    image: vtu,
    title: "Enverge VTU Mobile APP",
    github: "https://github.com/M-tech1",
    demo: "https://play.google.com/store/apps/details?id=enverge.android.app",
  },

  {
    id: 2,
    image: fxbot,
    title: "Forex trading platform for selling & trading with BOTs ",
    github: "https://github.com/M-tech1/fxbot360-website-v1",
    demo: "http://fxbot360.com/",
  },

  {
    id: 3,
    image: enverge,
    title: "Enverge global, IT and Tech solutions",
    github: "https://github.com/M-tech1",
    demo: "https//enverge.ca",
  },

  {
    id: 4,
    image: igclone,
    title: "Instagram clone project - with React.JS",
    github: "https://github.com/M-tech1/instagram_clone",
    demo: "https://instagram-clone-7qus3njqe-fxbot.vercel.app/",
  },
  {
    id: 5,
    image: envergepef,
    title: "An E-commerce website for perfumes and Cosmetics ",
    github: "https//github.com/m-tech1",
    demo: "https//Envergeperfumes.com",
  },

  {
    id: 6,
    image: pokemon,
    title: "Pokermon APP",
    github: "https://github.com/M-tech1/Pokemon-App",
    demo: "https://serene-medovik-cb4ee7.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent works</h5>
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
