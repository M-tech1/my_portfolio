import React from "react";
import "./tool_experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import ProgressBar from './ProgressBar';

const Experience = () => {
  const Percent = 75;
  return (
    <section id="experience">
      <h5>my skills & expertise </h5>
      <h2>Tools & Technologies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Technologies</h3>
          <div className="experience__container">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />

              <div className="tool">
                <h4>HTML / CSS</h4>
                <text> Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>React.js / Next.js</h4>
                <text> Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Javascript / Typescript</h4>
                <text> Experieced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Python</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Bootstrap / tailwind CSS</h4>
                <text> Experieced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>React Native/Flutter</h4>
                <text>Intermediate</text>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>BackEnd Technologies</h3>
          <div className="experience__container">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Ruby on Rails</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>MySql / PostgreSQL</h4>
                <text>Beginner</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Node JS & Express</h4>
                <text>Beginner</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>AWS tools</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Mobile Applications</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>FireBase</h4>
                <text>Experienced</text>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Graphics & Project Design</h3>
          <div className="experience__container">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>CorelDraw</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Canva</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>PhotoShop</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Figma</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Illustrator</h4>
                <text>Intermediate</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Adobe XD</h4>
                <text>Intermediate</text>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__container">
            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Google Ads</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>MetaTrader: Forex BOT</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>PayStack / Flutter wave (fintech)</h4>
                <text> Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>GitHub</h4>
                <text>Experienced</text>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>WordPress (CMS)</h4>
                <text> Experienced</text>
              </div>
            </article>

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Networking</h4>
                <text> Experienced</text>
              </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience_icon" />
              <div className="tool">
                <h4>Locust & Selenium</h4>
                <text>Intermediate</text>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
