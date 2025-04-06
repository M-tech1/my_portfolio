import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container ">
        <article className="service">
          <div className="service__head">
            <h3> Graphics & Ui/Ux </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Professional logo Design</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Branding</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Banner & flier Design</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Figma Design</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Photo frame</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>MOG Designs</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web / Mobile Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Web Applications</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>CMS - website</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Professional E-Commerce websites</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Professional Blog Site</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Professional Mobile applications</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Site & App monitizations (Adsense & Admob)</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>SEO and site optimizations</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Site maintainance and management</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3> Others </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Consultation</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Forex Bot development and integration</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Network and Server installation</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Content creation</p>
            </li>

            <li>
              <BiCheck className="services__list-icon" />
              <p>Social media account management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
