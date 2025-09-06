import React, { useEffect, useRef, forwardRef } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTitle from "./UI/ComponentTitle";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "IIT Guwahati x AlmaBetter – Full Stack MERN Specialization Program",
    years: "2024 – Present",
    description: [
      "Learning advanced MERN stack technologies (MongoDB, Express.js, React.js, Node.js).",
      "Built multiple full-stack projects focusing on scalability and performance.",
      "Hands-on experience with industry-standard tools and workflows.",
    ],
  },
  {
    title: "SHREE SWAMINARAYAN GURUKUL OF COMPUTER SCIENCE, BHAVNAGAR",
    years: "2020 – 2023",
    description: [
      "Bachelor of Computer Applications (BCA).",
      "Strong foundation in programming, databases, and web development.",
      "Actively participated in coding competitions and group projects.",
    ],
  },
  {
    title: "B M COMMERCE HIGH SCHOOL, BHAVNAGAR",
    years: "2018 – 2020",
    description: [
      "Higher Secondary Education in Commerce Stream.",
      "Focused on Mathematics and Statistics as supporting subjects.",
      "Engaged in extracurricular activities and teamwork initiatives.",
    ],
  },
];

const AnimatedTimeline = forwardRef(({ data }, ref) => {
  const connectorRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards
      gsap.from(ref.current.children, {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });

      // Animate dots
      dotRefs.current.forEach((dot, i) => {
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            opacity: 0,
            delay: i * 0.3,
            duration: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
            },
          });
        }
      });

      // Animate connectors
      connectorRefs.current.forEach((connector, i) => {
        if (connector) {
          gsap.fromTo(
            connector,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              delay: i * 0.4,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: connector.parentElement,
                start: "top 70%",
                end: "bottom 50%",
                scrub: 0.5,
              },
            }
          );
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);

  return (
    <Timeline
      ref={ref}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
        px: { xs: 0, md: 2 },
      }}
    >
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              ref={(el) => (dotRefs.current[index] = el)}
              sx={{
                bgcolor: "#ef7641",
                height: { xs: 12, sm: 15 },
                width: { xs: 12, sm: 15 },
                boxShadow: {
                  xs: "none",
                  md: index === 0 ? "0px 0px 10px 3px #fec86a" : "none",
                },
              }}
            />
            {index < data.length - 1 && (
              <TimelineConnector
                ref={(el) => (connectorRefs.current[index] = el)}
                sx={{
                  bgcolor: "#ef7641",
                  height: { xs: "5rem", sm: "8rem", md: "8rem" },
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ py: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2 } }}>
            <Paper
              elevation={4}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: "12px",
                borderLeft: "4px solid #ef7641",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Chip
                label={item.years}
                size="small"
                sx={{
                  bgcolor: "#ef7641",
                  color: "#fff",
                  mb: 1,
                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                }}
              />
              <Typography variant="h6" fontWeight={600} sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" } }}>
                {item.title}
              </Typography>
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "0.4rem", fontSize: i === 0 ? "0.85rem" : "0.8rem" }}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
});

function Education() {
  const headingRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="education"
      sx={{
        mt: { xs: "5%", sm: "5%", md: "5%" },
        mb: { xs: "12%", sm: "8%", md: "5%" },
      }}
    >
      <ComponentTitle title="Education" ref={headingRef} />
      <Container maxWidth="md">
        <AnimatedTimeline data={educationData} ref={timelineRef} />
      </Container>
    </Box>
  );
}

export default Education;
