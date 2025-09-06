import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTitle from "../UI/ComponentTitle";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    date: "May 2024 – Present",
    company: "Vaikunth Technologies",
    role: "Jr. MERN Stack Developer",
    description: [
      "Developed and deployed 5+ scalable full-stack web applications using the MERN stack, improving user experience for 1,000+ end-users.",
      "Designed and integrated RESTful APIs, streamlining data exchange and reducing server response time by 20%.",
      "Implemented third-party API integrations to enhance application functionality.",
      "Optimized code quality by writing unit tests and debugging issues, achieving 95% code coverage and improving reliability.",
    ],
  },
  {
    date: "Oct 2023 – Mar 2024",
    company: "ROBO+ Edutech",
    role: "Trainer",
    description: [
      "Conducted 10+ hands-on workshops on hardware fundamentals, coding, and problem-solving for 2000+ school students, fostering interest in STEM.",
      "Designed and delivered interactive lessons on electronics, IoT concepts, and programming basics, enabling students to build practical projects.",
      "Enhanced student engagement by integrating real-world applications into the curriculum, increasing participation rates by 30%.",
      "Collaborated with school administrators to tailor training sessions that aligned with educational goals.",
    ],
  },
  {
    date: "Nov 2022 – Jan 2023",
    company: "AzzipTech",
    role: "Intern",
    description: [
      "Designed and implemented a gesture-controlled system using Arduino, ultrasonic sensors, and jumper wire connections for hands-free computer control.",
      "Developed a Python-based software solution with OpenCV and Machine Learning, replacing hardware dependency with webcam-based gesture recognition.",
      "Prototyped and tested hardware and software systems in collaboration with a team, achieving a functional and user-friendly interface.",
    ],
  },
];

const TimelineIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#ea4020"
    />
    <path d="M13 7h-2v5.5l4 2.4-1-1.6V7z" fill="#ea4020" />
  </svg>
);

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const headingRef = useRef(null);
  const timelineRef = useRef(null);
  const connectorRefs = useRef([]);
  connectorRefs.current = [];

  const addToRefs = (el) => {
    if (el && !connectorRefs.current.includes(el)) {
      connectorRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        // Animation for the heading (no change needed here)
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
        });

        // Animation for the timeline items
        gsap.from(gsap.utils.toArray(timelineRef.current.children), {
          opacity: 0,
          x: (index) => (index % 2 === 0 ? -50 : 50),
          stagger: 0.7,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2, // Added scrub property for scroll-linked animation
            toggleActions: "play none none reverse",
          },
        });

        // Animation for the timeline connectors
        connectorRefs.current.forEach((connector) => {
          gsap.from(connector, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: connector,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1, // This already had scrub, which is correct for this effect
            },
          });
        });
      }, timelineRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <Box id="experience" sx={{ py: 8, bgcolor: "background.default" }}>
      <ComponentTitle title="Experience" ref={headingRef} />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {experiences.map((exp, index) => (
              <Paper
                key={index}
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: "10px",
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: "background.paper",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Chip
                  label={exp.date}
                  size="small"
                  sx={{
                    bgcolor: "#ea4020",
                    color: "#fff",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, mt: 1, fontSize: "1.1rem" }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1.5, color: "text.secondary", fontSize: "0.9rem" }}
                >
                  {exp.company}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    p: 0,
                    color: "text.secondary",
                    listStyle: "none",
                    "& li": {
                      mb: 1,
                      position: "relative",
                      pl: 3,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "0.6em",
                        height: "6px",
                        width: "6px",
                        borderRadius: "50%",
                        bgcolor: "#ea4020",
                      },
                    },
                  }}
                >
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        ) : (
          <Timeline position="alternate" ref={timelineRef}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{ bgcolor: "transparent", boxShadow: "none" }}
                  >
                    <TimelineIcon />
                  </TimelineDot>
                  <TimelineConnector
                    ref={addToRefs}
                    sx={{
                      bgcolor: theme.palette.divider,
                      width: "3px",
                      height: "auto",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    flexBasis: { xs: "100%", md: "45%" },
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      borderRadius: "10px",
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: "background.paper",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
           borderLeft: "4px solid #ef7641",

                      textAlign: "left",
                    }}
                  >
                    <Chip
                      label={exp.date}
                      size="small"
                      sx={{
                        bgcolor: "#ea4020",
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600, mt: 1 }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1.5, color: "text.secondary" }}
                    >
                      {exp.company}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        p: 0,
                        color: "text.secondary",
                        
                        listStyle: "none",
                        "& li": {
                          mb: 1,
                          position: "relative",
                          pr: index % 2 !== 0 ? 3 : 0,
                          pl: index % 2 === 0 ? 3 : 0,
                          textAlign: "left",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "0.6em",
                            height: "6px",
                            width: "6px",
                            borderRadius: "50%",
                            bgcolor: "#ea4020",
                            left: index % 2 === 0 ? 0 : "auto",
                            right: index % 2 !== 0 ? 0 : "auto",
                          },
                        },
                      }}
                    >
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Container>
    </Box>
  );
}

export default Experience;