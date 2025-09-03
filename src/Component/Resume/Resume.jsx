import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lightbox from "react-image-lightbox"; // Import Lightbox
import "react-image-lightbox/style.css"; // Import styles

import resumeImage from "./Meet_Shah_Resume_page-0001.jpg";
import resumeImage1 from "./Meet_Shah_Resume_page-0002.jpg";

gsap.registerPlugin(ScrollTrigger);

const ComponentTitle = React.forwardRef(({ title }, ref) => (
  <Typography
    ref={ref}
    variant="h4"
    component="h2"
    sx={{
      textAlign: "center",
      my: 4,
      fontWeight: 600,
      textTransform: "uppercase",
      color: "#333",
    }}
  >
    {title}
  </Typography>
));

const images = [resumeImage, resumeImage1];

function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const downloadButtonRef = useRef(null);
  const sectionRef = useRef(null);

  // Lightbox state management
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleOpen = (index) => {
    if (isMobile) {
      return;
    }
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    const imagesToPreload = [resumeImage, resumeImage1];
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

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

      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        downloadButtonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: downloadButtonRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="resume"
      ref={sectionRef}
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <ComponentTitle title="My Resume" ref={headingRef} />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            mb: { xs: 4, sm: 6, md: 8 },
          }}
        >
          {/* First Resume Page Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              ref={addToRefs}
              onClick={() => handleOpen(0)} // Pass index 0
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                cursor: isMobile ? "default" : "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: isMobile ? "none" : "translateY(-5px)",
                  boxShadow: isMobile ? "none" : theme.shadows[3],
                },
              }}
            >
              <CardMedia
                component="img"
                image={resumeImage}
                alt="Resume Page 1 Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Card>
          </Grid>

          {/* Second Resume Page Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              ref={addToRefs}
              onClick={() => handleOpen(1)} // Pass index 1
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                border: "1px solid #e0e0e0",
                overflow: "hidden",
                cursor: isMobile ? "default" : "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: isMobile ? "none" : "translateY(-5px)",
                  boxShadow: isMobile ? "none" : theme.shadows[3],
                },
              }}
            >
              <CardMedia
                component="img"
                image={resumeImage1}
                alt="Resume Page 2 Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            ref={downloadButtonRef}
            variant="contained"
            href="/Meet-Shah-Resume.pdf"
            download="Meet_Shah_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              bgcolor: "#ea4020",
              color: "white",
              fontSize: "16px",
              padding: "10px 20px",
              textTransform: "uppercase",
              fontWeight: 600,
              borderRadius: 0,
              "&:hover": {
                bgcolor: "#c32e18",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>

     
      {/* Lightbox Component */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex + 1) % images.length
            )
          }
        />
      )}
    </Box>
  );
}

export default Resume;