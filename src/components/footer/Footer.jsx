import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <a href="#" className="footer__logo">
          Martins Ake
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://web.facebook.com/martinsake8/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/akemartins/" target="_blank">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/in/martinsake/" target="_blank">
            <FaLinkedin />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; 2023, All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
