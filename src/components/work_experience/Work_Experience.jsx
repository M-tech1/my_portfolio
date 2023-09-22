import React from "react";
import "./work_Experience.css";

const Work_Experience = () => {
  return (
    <section id="Work_Experience">
      <h2>Work Experience</h2>

      <div className="work_experience">
        <div className="job">
          <h3>Outsource Global</h3>
          <p className="job-title">
            <b>Position:</b> <em>Front-end Developer </em>
          </p>
          <p className="job-dates">
            <b>Dates:</b> April 2023 - Present
          </p>
          <ul className="job-description">
            <li>
              Developed responsive and user-friendly web interfaces using HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Collaborated with cross-functional teams to design and implement
              new features.
            </li>
            <li>
              Optimized website performance and conducted regular code reviews.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Enverge Limited</h3>
          <p className="job-title">
            <b>Position: </b>
            <em>Data analyst & Software developer </em>
          </p>
          <p className="job-dates">
            <b>Dates: </b>
            <em>November 2021 - Septemper 2023 </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              Developed and deloployed a Virtual top-up application for Airtime,
              Data and Cable Tv subscriptions
            </li>
            <li>Developed and manage website for company</li>
            <li>
              Collaborated with other network Engineer to deploy live servers
              and monitor them.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>FxBot360</h3>
          <p className="job-title">
            <b>Position: </b> <em>Software Engineer </em>
          </p>
          <p className="job-dates">Dates: December 2020 - Present</p>
          <ul className="job-description">
            <li>
              Developed responsive and user-friendly web interfaces using HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Collaborated with cross-functional teams to design and implement
              new features.
            </li>
            <li>
              Optimized website performance and conducted regular code reviews.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Smart-linkup</h3>
          <p className="job-title">
            <b>Position: </b> <em>Manager </em>
          </p>
          <p className="job-dates">
            <b>Dates: </b> <em>June 2021 - Date </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              Created wireframes, prototypes, and mockups to effectively
              communicate design ideas.
            </li>
            <li>
              Conducted user research and gathered feedback to improve the user
              experience.
            </li>
            <li>
              Collaborated with developers to implement designs and ensure
              consistency.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work_Experience;
