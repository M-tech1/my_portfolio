import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <HeaderSocials />
        <div class="content">
          <div class="text-content">
            <div class="text">
              <h5>Hello I'm</h5>{" "}
            </div>
            <div class="name">
              <h1>Ake Martins</h1>
            </div>
            <div class="title">
              <h2>Computer Engineer</h2>
              <h5 className="h4text">( Fullstack Developer  )</h5>
              
            </div>
            <div class="job">
              <span>I'm a</span>
              <div class="typing-text">
                <span class="one">Fullstack Developer</span>
              </div>
            
            </div>
            <CTA />
          
          </div>

          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll down
          </a>
        </div>
        <a href="#contact" className="scroll__down">Scroll down</a>
        <HeaderSocials/>
      </header>

    </>
  );
};

export default Header;
