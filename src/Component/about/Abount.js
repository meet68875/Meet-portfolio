import React from "react";
import "../about/Abount.css";
import { Box, Grid, Chip, Typography } from "@mui/material";

function Abount() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Material-UI",
    "Tailwind CSS",
    "PrimeReact",
    "Redux",
    "Context API",
    "Socket.IO",
    "GSAP",
    "PHP",
    "Git",
    "Docker",
    "Arduino",
    "Problem-Solving",
    "Teamwork",
  ];

  return (
    <>
      <div className="jumbotron">
        <div className="about-us" id="about">
          {/* Header Section */}
          <div className="heading">
            <h5>ABOUT</h5>
            <h2>
              <span className="heading-border"></span>ABOUT US
              <span className="heading-border"></span>
            </h2>
          </div>
          
          {/* About Me Section */}
          <div className="row">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="about-img">
                <img src={require("../coder.jpg")} alt="Meet Shah" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-12">
              <div className="about-me">
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Hello, my name is Meet Shah, and I am a Full Stack Web Developer.
                </Typography>
                <Typography paragraph>
                  Welcome to my portfolio! I'm a passionate Full Stack Developer skilled in building scalable web
                  applications using the MERN stack. With expertise in frontend and backend technologies, I aim to
                  deliver high-performance solutions. Let's collaborate to bring creative digital solutions to life!
                </Typography>
              </div>

              {/* Skills Section */}
              <Typography variant="h4" gutterBottom id="ts">
                Technologies and Skills
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid item key={index}>
                      <Chip
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{
                          margin:"0.2rem",
                          backgroundColor: 'white',
                          fontSize: "14px",
                          padding: "5px 10px",
                          border: "none",
                          borderRadius: "20px",
                          transition:"0.2s",
                          flexWrap:"wrap",
                          color:'#000',
                          "&:hover": {
                            backgroundColor: "#ea4020",
                            color: "#ffffff",
                            border: "1px solid #f6e7e4"
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abount;
