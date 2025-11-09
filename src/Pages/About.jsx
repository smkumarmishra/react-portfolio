import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";
import AboutContent from "../Components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="About."
        paraText="I'm a friendly full stack web developer...!"
          buttonText="Back To Home"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
