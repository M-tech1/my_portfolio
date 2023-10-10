import React from "react";
import "./work_Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";

const Work_Experience = () => {
  return (
    <section id="Work_Experience">
      <h5>Professional </h5>
      <h2>Work Experience</h2>

      <div className="work_experience">
        <div className="job">
          <div className="work_icon">
            <MdWorkHistory />
            <h3>Outsource Global</h3>
            {/* <img src="#"></img> */}
          </div>

          <p className="job-title">
            <b>Position :</b> <em>FrontEnd Developer</em>
          </p>
          <p className="job-dates">
            <b>Dates :</b> April 2023 - Present
          </p>
          <ul className="job-description">
            <li>
              ● Joined the team of professionals to work on a Medical Exchange
              (MedEx) project that aids pharmaceuticals and medical supplies to
              patients allowing a seamless flow of business communication
              between chains of supplies from Manufacturers to retailers.
            </li>
            <li>
              ● Collaborated with cross-functional teams to design and implement
              new features, Gained hands-on experience with
              JavaScript/Typescript, Ruby on Rails, React, React Hooks, APIs and
              tech principles whilst working on the projects
            </li>
            <li>
              ● Developed responsive and user-friendly web interfaces using
              React, style-Component, TypeScript for the project.
            </li>

            <li>
              Optimized website performance and conducted regular code reviews.
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            <MdWorkHistory />
            <h3>Enverge Limited</h3>
          </div>

          <p className="job-title">
            <b>Position : </b>
            <em>Data analyst & Software developer </em>
          </p>
          <p className="job-dates">
            <b>Dates : </b>
            <em>November 2021 - October 2023 </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              ● Built and deployed a mobile-based virtual TopUp application for
              Airtime, Data, and Cable Tv subscriptions with electricity bill
              payments and more. Using a SaaS solution and integrated with
              Paystack payment gateway solution and published on google
              playstore
            </li>
            <li>
              ● Applied data analysis skills using Microsoft Excel to measure
              statistical data of traffic from all mobile network operators in
              Nigeria and give proper documentation
            </li>
            <li>
              ● I was also part of the NOC (network operation center) team, to
              monitor mobile networks and be sure traffic is always up and
              running, I have gained hands-on experience with VOS3000,
              Tera-Term, WinBox, Networking, and Telecommunication principles
              whilst working with the team and deploying Routers, switches and
              MikroTik Servers
            </li>
            <li>Developed and manage website for company and clients</li>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            <MdWorkHistory />
            <h3>FxBot360</h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>Software Engineer </em>
          </p>
          <p className="job-dates">Dates: December 2020 - Present</p>
          <ul className="job-description">
            <li>
              ● Software Engineer and strategy Developer/Tester using the Meta
              Quote language - MT4/5
            </li>
            <li>
              ● Developed responsive and user-friendly web interfaces using
              HTML, CSS, and JavaScript.
            </li>
            <li>
              ● Collaborated with teams members to implement new features and
              strategy for forex trading.
            </li>
            <li>
              ● Optimized website performance and conducted regular code
              reviews.
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            <MdWorkHistory />
            <h3>SmartLinUp</h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>Manager </em>
          </p>
          <p className="job-dates">
            <b>Dates: </b> <em>December 2019 - Date </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              ● Frelancing and creating quality and professional software for
              companies and business around the world
            </li>
            <li>
              ● Conducting user research and gathered feedback to improve the
              user experience for existing software
            </li>
            <li>● professional user interfaces and user experience design</li>
            <li>● Conducting professional consultations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work_Experience;
