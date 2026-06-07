import React, { useEffect, useRef } from "react";
import "./about.css";
import ME from "../../assets/me11.jpg";

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Clients Worldwide" },
  { value: 30, suffix: "+", label: "Projects Completed" },
];

const useCounter = (ref, target) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = () => {
          start += 1;
          el.textContent = start + (el.dataset.suffix || "");
          if (start < target) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target]);
};

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null);
  useCounter(ref, value);
  return (
    <div className="about__stat">
      <span
        className="about__stat-number gradient-text"
        ref={ref}
        data-suffix={suffix}
      >
        0{suffix}
      </span>
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
            Results-driven Software Engineer and AI Enthusiast with over 6years
            of experience designing scalable, high-performance web applications
            on the Frontend domain. Passionate about software architecture,
            UI/UX optimization, system design and AI solutions, with a proven
            track record of delivering complex, interactive platforms that
            enhance user engagement. Adept at team work, managing projects, and
            implementing modern best practices to drive engineering excellence.
            Experienced in React, Next.js, TypeScript, Tailwind, modern UI
            frameworks and the user of Agentic systems. Strong understanding of
            performance profiling, accessibility (a11y), security best
            practices, and DevOps-friendly frontend pipelines.
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
