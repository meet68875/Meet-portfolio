import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Abount from "./Component/about/Abount";
import Services from "./Component/Services";
import Contact from "./Component/contact/Contact";
import Projects from "./Component/projects/Projects";
import Experience from "./Component/Experience/Experience";
import Resume from "./Component/Resume/Resume";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll CSS
import Layout from "./Layout";
import Footer from "./Component/footer/footer";

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Target the container
      smooth: true, // Enable smooth scrolling
    });

    // Cleanup on unmount
    return () => {
      scroll.destroy();
    };
  }, []);
  window.global = window;
  return (
    <div data-scroll-container>
      <Navbar />
       <Layout>
      <Main />
      <br />
      <Abount />
      <Services />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer/>
      </Layout>
    </div>
  );
};


export default App