import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="Edu" id="education">
      <h2>Education / Certification</h2>
      <div className="education-item">
        <h3>Federal University of Technology Minna</h3>
        <p className="education-degree">
          Bachelor of Engeneering in Computer Engineering
        </p>
        <p className="education-dates">Dates: Auguest 2014 - November 2019</p>
        <p className="education-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere enim vel volutpat maximus.
        </p>
      </div>

      <div className="education-item">
        <h3>Qwasar at silicon valley</h3>
        <p className="education-degree">Software Engineering</p>
        <p className="education-dates">Dates: July 2022 - Auguest 2023</p>
        <p className="education-description">
          Vestibulum ac metus sit amet diam condimentum feugiat sed ut tortor.
          Integer eget fermentum nunc, non ullamcorper sapien.
        </p>
      </div>
    </section>
  );
};

export default Education;
