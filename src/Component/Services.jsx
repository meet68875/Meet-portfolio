import React, { useEffect, useRef, forwardRef } from "react";
import { Box, Typography, Container } from "@mui/material";
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

// Define a simple, reusable data structure for your education items
const educationData = [
  {
    title: "SHREE SWAMINARAYAN GURUKUL OF COMPUTER SCIENCE, BHAVNAGAR",
    years: "2020 - 2023",
  },
  {
    title: "B M COMMERCE HIGH SCHOOL, BHAVNAGAR",
    years: "2018 - 2020",
  },
];

const AnimatedTimeline = forwardRef(({ data }, ref) => {
  const connectorRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for each timeline item
      gsap.from(ref.current.children, {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });

      // Animation for each timeline connector
      connectorRefs.current.forEach((connector, index) => {
        if (connector) {
          gsap.fromTo(
            connector,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: connector.parentElement,
                start: "top 75%",
                end: "bottom 50%",
                // 👇 Adjust this value to control speed
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
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        px: { xs: 0, md: 2 },
      }}
    >
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: "#ef7641",
                height: "15px",
                width: "15px",
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
                  height: "8rem",
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ pt: 1, pb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" },
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              {item.years}
            </Typography>
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
      // Animate Heading (using the ref passed from parent)
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
        mt: { xs: "5%", md: "5%" }, // responsive margin-top
        mb: { xs: "10%", md: "5%" }, // responsive margin-bottom
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