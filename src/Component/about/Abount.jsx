import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTitle from "../UI/ComponentTitle";
import image from '../coder.jpg'
gsap.registerPlugin(ScrollTrigger);

// Reusable Skill Chip Component
const SkillChip = ({ label }) => {
  return (
    <Chip
      label={label}
      sx={{
        margin: "0.2rem",
        backgroundColor: "white",
        fontSize: "14px",
        padding: "5px 10px",
        border: "none",
        borderRadius: "20px",
        transition: "0.2s",
        color: "#000",
        "&:hover": {
          backgroundColor: "#ea4020",
          color: "#ffffff",
          border: "1px solid #f6e7e4",
        },
      }}
    />
  );
};

// New: Reusable Skills Grid Component
const SkillsGrid = ({ skills }) => {
  const skillsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Skill Chips Animation
      gsap.from(skillsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
      });
    }, skillsRef);
   

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={skillsRef}>
      <Grid container spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <SkillChip label={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

function About() {
  const aboutRef = useRef(null);
const headingRef = useRef(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About Section Fade-in Animation
      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "React Native", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Material-UI", "Tailwind CSS", "PrimeReact", "Redux",
    "Context API", "Socket.IO", "GSAP", "PHP", "Git", "Docker", "Arduino",
    "Problem-Solving", "Teamwork",
  ];

  return (
    <Box id="about" ref={aboutRef} sx={{ padding: { xs: 2, md: 8 } }}>
        <ComponentTitle title="About" ref={headingRef} />

      {/* About Me Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              textAlign: "center",
              border: "2px solid #cb7c6f",
            }}
          >
            <Box
              component="img"
              src={image}
              alt="Meet Shah"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              "& h4": {
                borderLeft: "2px solid #ea4020",
                paddingLeft: "10px",
                fontSize: "18px",
                mt: "25px",
                mb: "25px",
              },
              "& h6": {
                fontWeight: 500,
                color: "#292929",
                fontSize: "18px",
                mt: "20px",
                paddingLeft: "10px",
              },
              "& p": {
                paddingLeft: "10px",
                color: "#555a64",
                fontSize: "15px",
                lineHeight: "25px",
                mt: "15px",
              },
            }}
          >
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h6" gutterBottom>
              Hello, my name is Meet Shah, and I am a Full Stack Web Developer.
            </Typography>
            <Typography paragraph>
              Welcome to my portfolio! I'm a passionate Full Stack Developer skilled in building scalable web applications using the MERN stack. With expertise in frontend and backend technologies, I aim to deliver high-performance solutions. Let's collaborate to bring creative digital solutions to life!
            </Typography>
          </Box>

          {/* Skills Section */}
          <Typography
            variant="h4"
            gutterBottom
            id="ts"
            sx={{
              mt: 4,
              borderLeft: "2px solid #ea4020",
              paddingLeft: "10px",
              fontSize: "18px",
              mb: "25px",
              mt: "25px",
            }}
          >
            Technologies and Skills
          </Typography>
          <SkillsGrid skills={skills} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;