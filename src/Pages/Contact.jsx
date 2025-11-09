import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";
import ContactForm from "../Components/ContactForm/ContactForm";

const Contact = (props) => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="Contact."
        paraText="Now Let's have to Connect with me..."
        buttonText="Back To Home"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
