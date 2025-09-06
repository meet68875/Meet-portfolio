import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meetImage from "./meet.png";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const typewriterRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const backgroundShapeRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Typewriter Effect
  useEffect(() => {
    const titles = [
      "Full-Stack Web Developer",
      "React Pro",
      "Node.js Ninja",
      "Frontend Specialist",
      "UI/UX Enthusiast",
      "Pro Coder",
    ];

    let currentTitle = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 1500;

    const type = () => {
      const fullText = titles[currentTitle];
      if (typewriterRef.current) {
        typewriterRef.current.innerText = fullText.substring(0, charIndex);
      }

      if (!isDeleting && charIndex < fullText.length) {
        charIndex++;
        setTimeout(type, typeSpeed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, deleteSpeed);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, pauseDuration);
        } else {
          isDeleting = false;
          currentTitle = (currentTitle + 1) % titles.length;
          setTimeout(type, 400);
        }
      }
    };
    type();
    return () => {
      if (typewriterRef.current) {
        typewriterRef.current.innerText = "";
      }
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!isMobile) {
        timeline
          .from(titleRef.current.querySelectorAll(".letter"), {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
          })
          .from(
            typewriterRef.current.parentNode,
            {
              x: -50,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".main-btn",
            {
              y: 30,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            imageWrapperRef.current,
            {
              scale: 0.8,
              opacity: 0,
              duration: 1.5,
              ease: "power3.out",
            },
            "-=1"
          )
          .from(
            backgroundShapeRef.current,
            {
              scale: 0,
              transformOrigin: "center center",
              duration: 1.5,
              ease: "power3.out",
            },
            "-=1.2"
          );
      } else {
        timeline.from(
          [
            titleRef.current,
            typewriterRef.current.parentNode,
            ".main-btn",
            imageWrapperRef.current,
          ],
          {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Box
      id="home"
      ref={containerRef}
      sx={{
        py: { xs: 8, md: 10 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Text Section */}
          <Grid item xs={12} md={6}>
            <Stack
              spacing={{ xs: 2, md: 3 }}
              sx={{
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                  fontWeight: 400,
                }}
              >
                Hi There, I'm
              </Typography>
              <Typography
                variant="h2"
                ref={titleRef}
                sx={{
                  color: "#292929",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.5rem",
                    md: "4rem",
                    lg: "4.5rem",
                  },
                  fontWeight: 600,
                }}
              >
                MEET SHAH
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  borderLeft: { md: "3px solid #ea4020" },
                  pl: { md: 2 },
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                    lg: "2.5rem",
                  },
                  fontWeight: 300,
                  color: "#444",
                  minHeight: "40px",
                }}
              >
                <span ref={typewriterRef}></span>
              </Typography>
              <Button
                className="main-btn"
                variant="contained"
                href="#contact" // scrolls to contact section
                sx={{
                  bgcolor: "#ea4020",
                  color: "white",
                  py: "10px",
                  px: "20px",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  borderRadius: "5px",
                  "&:hover": {
                    bgcolor: "#c4341b",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Grid>
          {/* Right Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              ref={imageWrapperRef}
              sx={{
                position: "relative",
                width: { xs: "80%", sm: "70%", md: "100%" },
                maxWidth: "500px",
              }}
            >
              <Box
                ref={backgroundShapeRef}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  bgcolor: "#f0f0f0",
                  zIndex: -1,
                  borderRadius: {
                    xs: "50% 50% 0 0",
                    md: "47% 0 0 47%",
                  },
                  border: "20px solid #ea4020",
                  borderRight: 0,
                  display: { xs: "none", md: "block" },
                }}
              />
              <Box
                component="img"
                loading="lazy"
                src={meetImage}
                alt="Meet Shah"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: { xs: "50%", md: "47% 0 0 47%" },
                  border: "15px solid #292929",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
