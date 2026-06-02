// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
     
    </div>
  );
};

export default App; 