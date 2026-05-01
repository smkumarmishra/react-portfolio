import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";

const Experiences = () => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="Experiences."
        paraText="A quick snapshot of roles and projects I've worked on."
        buttonText="Back To Home"
      />

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px 40px",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Experiences
        </h2>

        <div style={{ display: "grid", gap: "16px" }}>
          <div
            style={{
              border: "1px solid #2e344e",
              borderRadius: "12px",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.04)",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>Your Role — Company</h3>
            <p style={{ opacity: 0.85, marginBottom: "10px" }}>
              Month YYYY – Month YYYY · Location
            </p>
            <ul style={{ paddingLeft: "18px", lineHeight: 1.7 }}>
              <li>Replace this with your key achievement or impact.</li>
              <li>Add 2–3 bullets per experience for best readability.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
