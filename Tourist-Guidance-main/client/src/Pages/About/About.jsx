import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.scss";
import Aboutcont from "./Aboutcont";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div id="About">
      <Navbar />
      <Aboutcont />
      <Footer />
    </div>
  );
};

export default About;
