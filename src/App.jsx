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
import Education from "./components/education/Education.jsx";

// import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Tool_Experience />
      <Work_Experience />
      {/* <Education /> */}
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
