import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (!hasVisited) {
      // Pehli baar user aaya hai
      toast.info("! Welcome to my Portfolio !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Ab set kar do taaki dobara toast na aaye
      localStorage.setItem("visited", "true");
    }
  }, []); // only on first load
  return (
    <>
      {/* Toast container render karna zaroori hai */}
      <ToastContainer />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
