import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Stack,
  IconButton,
} from "@mui/material";
import emailjs from "emailjs-com";
import ComponentTitle from "../UI/ComponentTitle";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = {
  email: "meetdev68875@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  location: "Gujarat, India",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });

      gsap.from(infoRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    let formIsValid = true;

    if (!formData.name.trim()) {
      formIsValid = false;
      tempErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      formIsValid = false;
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.subject.trim()) {
      formIsValid = false;
      tempErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      formIsValid = false;
      tempErrors.message = "Message is required.";
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      .send("service_ewt9nwd", "template_rozbnvg", formData, "1iKmxJIKcvH0-u-YR")
      .then(
        () => {
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
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{ py: 10, bgcolor: "#fafafa" }}
    >
      <Box ref={titleRef}>
        <ComponentTitle title="Contact us" />
      </Box>

      {/* Flex Layout */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="stretch"
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto", mt: 6 }}
      >
        {/* Contact Form */}
        <Card
          ref={formRef}
          sx={{
            flex: 2,
            borderRadius: "16px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
            p: 3,
            bgcolor: "#fff",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Send me a message 📧
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Have a question or want to work together? Let’s connect!
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ "& .MuiTextField-root": { mb: 2 } }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  bgcolor: "#ea4020",
                  "&:hover": { bgcolor: "#c4341b" },
                  py: 1.4,
                  fontWeight: "bold",
                  borderRadius: "10px",
                  mt: 1,
                }}
              >
                Send Message
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card
          ref={infoRef}
          sx={{
            flex: 1,
            borderRadius: "16px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
            p: 3,
            bgcolor: "#fff",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Information 📞
            </Typography>
            <Stack spacing={3} sx={{ mt: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailIcon sx={{ color: "#ea4020" }} />
                <Typography variant="body1">{contactInfo.email}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon sx={{ color: "#ea4020" }} />
                <Typography variant="body1">{contactInfo.location}</Typography>
              </Stack>
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <IconButton
                href={contactInfo.github}
                target="_blank"
                sx={{
                  color: "#292929",
                  "&:hover": { bgcolor: "rgba(41,41,41,0.1)" },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href={contactInfo.linkedin}
                target="_blank"
                sx={{
                  color: "#0A66C2",
                  "&:hover": { bgcolor: "rgba(10,102,194,0.1)" },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
