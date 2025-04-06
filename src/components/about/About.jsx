import React from "react";
import "./about.css";
import ME from "../../assets/me11.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h3> Experience</h3>
              <small>4 + years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about_icon" />
              <h3>Clients</h3>
              <small>25+ Nationwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h3> Project</h3>
              <small>20+ completed</small>
            </article>
          </div>

          <p>
            <small>
              I’m an ambitious and result oriented Software Engineer with a
              Bachelor's degree in Computer Engineering and 4 years of working
              experience, proficient in frontend tools and frameworks,
              specialized in creating visually appealing and user friendly
              interfaces while staying abreast of the latest web technologies to
              deliver responsive and high-perfuming web applications.
            </small>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
