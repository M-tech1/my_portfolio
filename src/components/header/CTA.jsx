import React from "react";
import CV from "../../assets/M-Resume.pdf";
import { FiDownload } from "react-icons/fi";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        <FiDownload /> Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
