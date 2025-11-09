import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";
import SkillsCard from "../Components/SkillCard/SkillsCard";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="Skills."
        paraText="List of skills, What i know ? "
        buttonText="Back To Home"
      />
      <SkillsCard />
      <Footer />
    </div>
  );
};

export default Skills;
