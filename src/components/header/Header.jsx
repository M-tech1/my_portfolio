import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container header__container" data-reveal>
          <h5>Hello, I'm</h5>
          <h1 className="gradient-text">Martins Ake</h1>
          <h5 className="typewriter">Software Engineer & AI Enthusiast</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <div className="me__glow" />
            <img className="img" src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            <span>Scroll down</span>
            <span className="scroll__arrow">↓</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
