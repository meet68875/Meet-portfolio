import React, { useRef } from "react";
import { Box, Typography, Chip, Grid, Card, CardContent } from "@mui/material";
import image from "../coder.jpg";
import ComponentTitle from "../UI/ComponentTitle";

const SkillChip = ({ label }) => (
  <Chip
    label={label}
    size="small"
    sx={{
      margin: "0.3rem",
      bgcolor: "white",
      fontSize: "14px",
      borderRadius: "20px",
      color: "#000",
      boxShadow: 1,
      "&:hover": {
        bgcolor: "#ea4020",
        color: "#fff",
        border: "1px solid #f6e7e4",
      },
    }}
  />
);

const About = () => {
  const headingRef = useRef(null);
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "React Native", "Node.js",
    "Express.js", "MongoDB", "MySQL", "Material-UI", "Tailwind CSS",
    "PrimeReact", "Redux", "Context API", "Socket.IO", "GSAP", "PHP",
    "Git", "Docker", "Arduino", "Problem-Solving", "Teamwork",
  ];

  return (
    <>
    <Box
      id="about"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
    <ComponentTitle title="About" ref={headingRef} />

      <Card
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
          bgcolor: "#f9f9f9", // light background for whole section

          overflow: "hidden",
           borderLeft: "4px solid #ef7641",
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "2px solid #cb7c6f",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: 2,
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt="Meet Shah"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* Right Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    borderLeft: "4px solid #ea4020",
                    pl: 1.5,
                    mb: 2,
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 600,
                  }}
                >
                  About Me
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                  Hello, my name is Meet Shah, and I am a Full Stack Web Developer.
                </Typography>

                <Typography sx={{ color: "#555a64", lineHeight: 1.7, mb: 3 }}>
                  Welcome to my portfolio! I'm a passionate Full Stack Developer
                  skilled in building scalable web applications using the MERN
                  stack. With expertise in frontend and backend technologies, I aim
                  to deliver high-performance solutions. Let's collaborate to bring
                  creative digital solutions to life!
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    borderLeft: "4px solid #ea4020",
                    pl: 1.5,
                    mb: 2,
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 600,
                  }}
                >
                  Technologies & Skills
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {skills.map((skill, i) => (
                    <SkillChip key={i} label={skill} />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
    </>

  );
};

export default About;
