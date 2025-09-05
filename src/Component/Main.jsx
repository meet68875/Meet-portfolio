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
  const textRef = useRef(null);
  const typewriterRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const dotsBackgroundRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
  useEffect(() => {
    // Letter-by-letter animation
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

    // GSAP animations
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (!isMobile) {
        timeline
          .from(".banner-left h5", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          })
          .from(
            ".banner-left .letter",
            {
              y: 50,
              opacity: 0,
              stagger: 0.05,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.8"
          )
          .from(
            ".banner-left .line",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".banner-left h4",
            {
              x: -50,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".banner-left .btn-main",
            {
              y: 30,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            ".banner-img img",
            {
              scale: 0.8,
              opacity: 0,
              duration: 1.5,
              ease: "power3.out",
            },
            "-=1"
          );

        // Scroll effects
        gsap.to(imageWrapperRef.current, {
          yPercent: -15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(dotsBackgroundRef.current, {
          backgroundPosition: "center 100%",
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        });
      } else {
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

    if (dotsBackgroundRef.current) {
      dotsBackgroundRef.current.style.display = isMobile ? "none" : "block";
    }

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Box ref={containerRef} sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 10 }}>
      <Container id="home" maxWidth="xl">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Left Text Section */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
            <Stack
              className="banner-left"
              spacing={2}
              sx={{
                mt: { xs: 4, md: 0 },
                mb: { xs: 4, md: 0 },
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.3rem",
                    md: "1.5rem",
                    lg: "1.8rem",
                  },
                  fontWeight: 400,
                }}
              >
                Hi There, I'm
              </Typography>

              <Typography
                variant="h2"
                ref={textRef}
                sx={{
                  color: "#292929",
                  fontSize: {
                    xs: "2.8rem",
                    sm: "4.5rem",
                    md: "5.5rem",
                    lg: "4.5rem",
                  },
                  fontWeight: 600,

                  textAlign: { xs: "center", md: "left" },
                  "& .letter": {
                    display: "inline-block",
                    cursor: "pointer",
                    mx: "1px",
                  },
                  "& .letter.space": { width: "6px" },
                }}
              >
                MEET SHAH
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  borderLeft: { md: "3px solid #ea4020" },
                  pl: { md: "12px" },
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                    lg: "2.5rem",
                  },
                  fontWeight: 300,
                  color: "#444",
                  textAlign: { xs: "center", md: "left" },
                  minHeight: "50px", // Prevent layout shift
                }}
              >
                <span ref={typewriterRef}></span>
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
            </Stack>
          </Grid>

          {/* Right Image Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              ref={dotsBackgroundRef}
              sx={{
                position: "absolute",
                top: "54%",
                left: "57%",
                width: "100%",
                height: "100%",
                transform: "translate(-35%, -40%)",
                backgroundImage:
                  'url("https://demo.dezven.com/project/web-design/portfolio/1/images/dots.png")',
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                zIndex: -2,
              }}
            />
            <Box
              className="banner-top"
              ref={imageWrapperRef}
              sx={{
                p: "40px",
                position: "relative",
                overflow: "hidden",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  width: { xs: "100%", md: "calc(100% + 50px)" },
                  border: "20px solid #ea4020",
                  borderRight: 0,
                  borderRadius: { xs: "0", md: "47% 0% 0% 47%" },
                  bgcolor: "#fff",
                  zIndex: -1,
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
