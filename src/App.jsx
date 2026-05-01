import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Experiences from "./Pages/Experiences";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route
          path="*"
          element={
            <center>
              <h3 style={{ color: "white" }}>
                Not Found Page <br /> 404
              </h3>
            </center>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
