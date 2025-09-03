import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { gsap } from "gsap";
import { Power3 } from "gsap/all";
import meetImage from "./meet.png";

function Main() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Letter-by-letter animation on hover
    if (textRef.current) {
      const letters = textRef.current.innerText.split("");
      textRef.current.innerHTML = letters
        .map((letter) =>
          letter === " "
            ? `<span class="letter space">&nbsp;</span>`
            : `<span class="letter">${letter}</span>`
        )
        .join("");

      const lettersSpan = gsap.utils.toArray(".letter");
      lettersSpan.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
          gsap.to(letter, {
            y: -10,
            color: "#ea4020",
            duration: 0.3,
            ease: "power3.out",
          });
        });

        letter.addEventListener("mouseleave", () => {
          gsap.to(letter, {
            y: 0,
            color: "#292929",
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });
    }

    // GSAP Timeline for intro animation
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!isMobile) {
        // Desktop Animation
        timeline.from(".banner-left h5", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        timeline.from(
          ".banner-left .letter",
          {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        );
        timeline.from(
          ".banner-left .line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
        timeline.from(
          ".banner-left h4",
          {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
        timeline.from(
          ".banner-left .btn-main",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
        timeline.from(
          ".banner-img img",
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1"
        );
      } else {
        // Simple mobile animation
        timeline.from(
          ".banner-left h5, .banner-left h2, .banner-left h4, .banner-left .btn-main, .banner-img img",
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
    <Box ref={containerRef} sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 10 }}>
      <Container id="home" maxWidth="xl">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              className="banner-left"
              sx={{ mt: { xs: 4, md: 0 }, mb: { xs: 4, md: 0 } }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Hi There, I'm
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                ref={textRef}
                sx={{
                  color: "#292929",
                  fontSize: { xs: "2.5rem", sm: "4.5rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "3px",
                  "& .letter": {
                    display: "inline-block",
                    cursor: "pointer",
                    mx: "1px",
                  },
                  "& .letter.space": {
                    width: "5px",
                  },
                }}
              >
                MEET SHAH
              </Typography>
              <Box
                className="line"
                sx={{
                  height: "3px",
                  width: "140px",
                  mb: "9px",
                  mt: "0px",
                  bgcolor: "#ea4020",
                }}
              />
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  borderLeft: "2px solid #ea4020",
                  pl: "10px",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                  mb: "25px",
                  mt: "25px",
                  fontWeight: 200,
                }}
              >
                Full-Stack Web Developer
              </Typography>
              <Button
                className="btn-main"
                variant="contained"
                sx={{
                  bgcolor: "#ea4020",
                  color: "white",
                  py: "10px",
                  px: "20px",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  borderRadius: "5px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#0056b3",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              className="banner-top"
              sx={{
                p: "40px",
                position: "relative",
                mt: { xs: 0, md: 0 },
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  backgroundImage:
                    'url("https://demo.dezven.com/project/web-design/portfolio/1/images/dots.png")',
                  position: "absolute",
                  top: 0,
                  left: { xs: 0, md: "-50px" },
                  right: 0,
                  bottom: 0,
                  backgroundPosition: "left",
                  backgroundSize: "cover",
                  animation: "rotate 80s linear infinite",
                  zIndex: -1,
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  left: 0,
                  width: { xs: "100%", md: "calc(100% + 50px)" },
                  border: "20px solid #ea4020",
                  borderRight: 0,
                  borderRadius: { xs: "0% 0% 0% 0%", md: "47% 0% 0% 47%" },
                  bgcolor: "#fff",
                  zIndex: -1,
                },
                "@keyframes rotate": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            >
              <Box
                className="banner-img"
                sx={{
                  borderRadius: { xs: "0", md: "50% 50% 0% 50%" },
                  border: "15px solid #292929",
                  position: "relative",
                  zIndex: 1,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  loading="lazy"
                  src={meetImage}
                  alt="meet"
                  sx={{ width: "100%", display: "block" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
