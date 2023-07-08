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
               <h5> Experience</h5>
                <small>3+ years working</small>
            </article>

            <article className="about__card">
               <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>20+ Nationwide</small>
            </article>

            <article className="about__card">
                <VscFolderLibrary className="about_icon" />
                <h5> Project</h5>
                <small>20+ completed</small>
            </article>


        </div>

          <p>
          I'm a software engineer passionate about innovation and technology with skills in both frontend and backend of
          software development, databases, data analysis, software testing and software development tools. Also
          possessing strong leadership and management skills in tech-related subjects
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk </a>
         

        </div>
      </div>
    </section>
  );
};

export default About;
