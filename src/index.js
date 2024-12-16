import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Abount from "./Component/about/Abount";
import Services from "./Component/Services";
import Contact from "./Component/contact/Contact";
import Projects from "./Component/projects/Projects";
import Experience from "./Component/Experience/Experience";
import Resume from "./Component/Resume/Resume";
ReactDOM.render(
  <>
   
   <Navbar/>
      <Main/>
      <br/> 
      <Abount/>
      <Services/>
      <Projects/>
      <Experience/>
      <Resume/>
      <Contact/>
    
  </>,
  document.getElementById("root")
);
