import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Button,
  Snackbar,
  Alert,
  Link,
  Paper,
} from "@mui/material";
import { Email, Send, Call, LocationOn } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTitle from "../UI/ComponentTitle";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formFieldsRef = useRef([]);
  formFieldsRef.current = [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const addToRefs = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setFormErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Please correct the form errors.",
        severity: "error",
      });
      return;
    }

    setSnackbar({
      open: true,
      message: "Sending message...",
      severity: "info",
    });

    emailjs
      .send(
        "service_ewt9nwd", // Replace with your EmailJS Service ID
        "template_rozbnvg", // Replace with your EmailJS Template ID
        formData,
        "1iKmxJIKcvH0-u-YR" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setSnackbar({
            open: true,
            message: "Message sent successfully!",
            severity: "success",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setSnackbar({
            open: true,
            message: "Failed to send message. Please try again.",
            severity: "error",
          });
        }
      );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the section title
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

      // Animation for the contact info card
      gsap.from(contactInfoRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
        },
      });

      // Staggered animation for the form fields
      gsap.from(formFieldsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <ComponentTitle title="Contact Me" ref={headingRef} />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 0, // No rounded corners
          }}
        >
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Box
                ref={contactInfoRef}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  py: { xs: 0, md: 3 },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  Get In Touch
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Feel free to reach out to me for any inquiries, project
                  collaborations, or just to say hello.
                </Typography>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <Email sx={{ mr: 1, color: "#ea4020" }} />
                    <Link
                      href="mailto:meetdev68875@gmail.com"
                      color="inherit"
                      underline="none"
                      sx={{
                        "&:hover": {
                          color: "#c32e18",
                          textDecoration: "underline",
                        },
                      }}
                    >
                     meetdev68875@gmail.com
                    </Link>
                  </Box>
                  {/* <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <Call sx={{ mr: 1, color: "#ea4020" }} />
                    <Typography variant="body1">+91 9726214508</Typography>
                  </Box> */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOn sx={{ mr: 1, color: "#ea4020" }} />
                    <Typography variant="body1">
                      Bhavnagar, Gujarat, India
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Box component="form" onSubmit={handleSubmit} noValidate ref={formRef}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} ref={addToRefs}>
                    <TextField
                      fullWidth
                      label="Your Name *"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!formErrors.name}
                      helperText={formErrors.name}
                      InputProps={{ sx: { borderRadius: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} ref={addToRefs}>
                    <TextField
                      fullWidth
                      label="Your Email *"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      InputProps={{ sx: { borderRadius: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} ref={addToRefs}>
                    <TextField
                      fullWidth
                      label="Your Subject *"
                      name="subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!formErrors.subject}
                      helperText={formErrors.subject}
                      InputProps={{ sx: { borderRadius: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} ref={addToRefs}>
                    <TextField
                      fullWidth
                      label="Your Message *"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!formErrors.message}
                      helperText={formErrors.message}
                      InputProps={{ sx: { borderRadius: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} ref={addToRefs}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<Send />}
                      sx={{
                        bgcolor: "#ea4020",
                        "&:hover": {
                          bgcolor: "#c32e18",
                        },
                        mt: 2,
                        py: 1.5,
                        px: 4,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderRadius: 0,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 8,
          bgcolor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            Copyright © 2024 All Rights Reserved MEET SHAH
          </Typography>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%", borderRadius: 0 }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;