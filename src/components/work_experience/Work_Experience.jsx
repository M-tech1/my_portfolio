import { useState } from "react";
import "./work_Experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
// import { MdWorkHistory } from "react-icons/md";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const Work_Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (
    <section id="Work_Experience">
      <h5>Professional </h5>
      <h2>Work Experience</h2>

      <div className="work_experience">
        {/* ********new *********** */}
        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
            <h3>Outsource Global</h3>
          </div>

          <p className="job-title">
            <b>Position :</b> <em>FrontEnd Developer</em>
          </p>
          <p className="job-dates">
            <b>Dates :</b> April 2023 - Present
          </p>

          <ul className="job-description">
            <li>
              <small>
                ● Joined a team of professionals to work on a Medical Exchange
                (MedEx) project that aids pharmaceuticals and medical supplies
                to patients allowing a seamless flow of business communication
                between chains of supplies between Manufacturers down to the
                Retailers, working with Typescript, Ruby on Rails, React, React
                Hooks, APIs and applying core tech principles while working on
                projects, code reviews, and pair programming sessions..
              </small>
            </li>

            <li>
              <small>
                ● Delivered the MedEx platform's front-end architecture that
                supported a user-friendly mobile experience leveraging React.ts
                and using tools like chart.js and re-chart to build an
                interactive web chart component and Admin Dashboards achieving
                an average session duration of 15 minutes from a previously
                unmeasured baseline.
              </small>
            </li>

            <div className={`more-content ${showMore ? "show" : ""}`}>
              <li>
                <small>
                  ● I was also part of the IDEC Dev Team for a national project
                  building a portal for a simpler and smarter end-to-end
                  automated process for the Customs Import Duty Exemption
                  application, working with Next.ts, ShadCN & Tailwind, I built
                  the certificate viewing pages for the IDEC - M&E project, that
                  helped end-users up to 79% easier access to viewing and
                  downloading their certificates.
                </small>
              </li>
              <li>
                <small>
                  ● Designed and implemented the Medex Logistics Module to
                  optimize the transition and delivery process of medical items
                  procured through the Medex platform. By streamlining workflows
                  and enhancing coordination between stakeholders, the module
                  improved supply chain efficiency by 90%, significantly
                  accelerating delivery times and ensuring seamless operations
                  across the platform.
                </small>
              </li>

              <li>
                <small>
                  ● Optimized website performance and conducted regular code
                  reviews.
                </small>
              </li>
            </div>
          </ul>
          <div className="readMore">
            <button
              className="view-button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "View less" : "View More..."}
            </button>
            <div onClick={() => setShowMore(!showMore)}>
              {showMore ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
            </div>
          </div>
        </div>

        {/* ********************* */}

        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
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
              <small>
                ● Built and deployed a mobile-based virtual TopUp application
                for Airtime, Data, and Cable Tv subscriptions with electricity
                bill payments and more. Using a SaaS solution and integrated
                with Paystack payment gateway solution and published on google
                playstore
              </small>
            </li>
            <li>
              <small>
                ● Applied data analysis skills using Microsoft Excel to measure
                statistical data of traffic from all mobile network operators in
                Nigeria and give proper documentation
              </small>
            </li>
            <div className={`more-content ${showMore2 ? "show" : ""}`}>
              <li>
                <small>
                  ● I was also part of the NOC (network operation center) team,
                  to monitor mobile networks and be sure traffic is always up
                  and running, I have gained hands-on experience with VOS3000,
                  Tera-Term, WinBox, Networking, and Telecommunication
                  principles whilst working with the team and deploying Routers,
                  switches and MikroTik Servers
                </small>
              </li>
              <li>
                <small>
                  ● Developed and manage website for company and clients
                </small>
              </li>
            </div>
          </ul>
          <div className="readMore">
            <button
              className="view-button"
              onClick={() => setShowMore2(!showMore2)}
            >
              {showMore2 ? "View less" : "View More..."}
            </button>
            <div onClick={() => setShowMore2(!showMore2)}>
              {showMore2 ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
            </div>
          </div>
        </div>

        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
            <h3>Mitcrux Limited</h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>Manager </em>
          </p>
          <p className="job-dates">
            <b>Dates: </b> <em>December 2019 - Date </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              <small>
                ● creating quality and professional software for companies and
                businessses around the world
              </small>
            </li>
            <li>
              <small>
                ● Conducting user research and gathered feedback to improve the
                user experience for existing softwares
              </small>
            </li>
            <small>
              <li>● professional user interfaces and user experience design</li>
            </small>
            <small>
              <li>● Conducting professional consultations</li>
            </small>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
            <h3>Ai-MedCare</h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>TeamLead </em>
          </p>
          <p className="job-dates">
            <b>Dates: </b> <em>December 2022 - Date </em>{" "}
          </p>
          <ul className="job-description">
            <li>
              <small>
                ● Designed and deployed an AI-powered medical solution
                leveraging advanced Large Language Models (LLMs) such as Gemini
                and MedLM, alongside modern technologies like React + Vite,
                Tailwind CSS, and ShadCN. This innovative platform delivers
                personalized healthcare recommendations, significantly reducing
                patient wait times by 30% and improving the accuracy and
                efficiency of health record documentation by 40%. The solution
                has enhanced patient outcomes and streamlined clinical
                workflows, demonstrating measurable impact in healthcare
                delivery
              </small>
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
            <h3>FxBot360</h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>Software Engineer </em>
          </p>
          <p className="job-dates">Dates: December 2020 - 2024</p>
          <ul className="job-description">
            <li>
              <small>
                ● Software Engineer and strategy Developer/Tester using the Meta
                Quote language - MT4/5
              </small>
            </li>
            <li>
              <small>
                ● Developed responsive and user-friendly web interfaces using
                HTML, CSS, and JavaScript.
              </small>
            </li>
            <li>
              <small>
                ● Collaborated with teams members to implement new features and
                strategy for forex trading.
              </small>
            </li>
            <li>
              <small>
                ● Optimized website performance and conducted regular code
                reviews.
              </small>
            </li>
          </ul>
        </div>

        <div className="job">
          <div className="work_icon">
            {/* <MdWorkHistory /> */}
            <h3>Digital Shortlets </h3>
          </div>
          <p className="job-title">
            <b>Position: </b> <em>Freelancing </em>
          </p>

          <ul className="job-description">
            <li>
              <small>
                ● Developed an intuitive and responsive Administrator Dashboard
                using React, Tailwind CSS, and ReCharts, delivering a seamless
                user experience with interactive analytics and data
                visualization. Integrated RESTful API endpoints to enable
                real-time data flow and dynamic user interactivity, improving
                dashboard performance by 25% and enhancing user engagement. The
                solution streamlined data accessibility and decision-making for
                administrators, resulting in a 30% increase in operational
                efficiency.
              </small>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work_Experience;
