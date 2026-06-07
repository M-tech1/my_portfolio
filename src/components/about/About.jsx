import React, { useEffect, useRef } from "react";
import "./about.css";
import ME from "../../assets/me11.jpg";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Clients Nationwide" },
  { value: 20, suffix: "+", label: "Projects Completed" },
];

const useCounter = (ref, target) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = () => {
        start += 1;
        el.textContent = start + (el.dataset.suffix || "");
        if (start < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target]);
};

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null);
  useCounter(ref, value);
  return (
    <div className="about__stat">
      <span className="about__stat-number gradient-text" ref={ref} data-suffix={suffix}>0{suffix}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" data-reveal>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__stats">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>

          <div className="about__divider" />

          <p className="about__bio">
            I am a skilled Full-Stack Engineer with over 4 years of experience
            building efficient and scalable software solutions across diverse
            industries. I've led and contributed to impactful projects in
            healthcare, government, eCommerce, and education. I excel at
            bridging the gap between technical teams and business stakeholders,
            translating complex requirements into clear, actionable insights.
          </p>

          <a href="#contact" className="btn btn-primary about__cta">
            Let's Talk
          </a>
        </div>

        <div className="about__image-wrap">
          <div className="about__image-bg" />
          <img src={ME} alt="Martins Ake" className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default About;
