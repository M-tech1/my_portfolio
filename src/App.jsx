import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Tool_Experience from "./components/tool_experience/Tool_Experience.jsx";
import Work_Experience from "./components/work_experience/Work_Experience.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Education from "./components/education/Education.tsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

const BackgroundOrbs = () => (
  <div className="bg-orbs">
    <div className="bg-orb" />
    <div className="bg-orb" />
  </div>
);

const App = () => {
  useScrollReveal();
  return (
    <>
      <BackgroundOrbs />
      <Header />
      <Nav />
      <About />
      <Work_Experience />
      <Education />
      <Portfolio />
      <Tool_Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
