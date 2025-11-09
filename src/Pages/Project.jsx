import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";
import Work from "../Components/Workcard/Work";
import Search from "../Components/Search/Search";
import workcardData from "../Components/Workcard/WorkcardData.js";

const Project = () => {
  const [filteredData, setFilteredData] = useState(workcardData);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredData(workcardData); // empty search → show all projects
    } else {
      const result = workcardData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(result);
    }
  };

  return (
    <div>
      <Navbar />
      <HeroImg
        heading="Project."
        paraText="Some of recent works"
        buttonText="Back To Home"
      />
      {/* Pass search handler */}
      <Search onSearch={handleSearch} />
      {/* Show filtered projects */}
      <Work workcardData={filteredData} />
      <Footer />
    </div>
  );
};

export default Project;
