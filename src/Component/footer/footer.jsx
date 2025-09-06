import React from "react";
import { Box, Container, Typography, Stack, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: "text.primary",
        py: 6,
        borderTop: "1px solid #e0e0e0",
      }}
      bgcolor={"#f7f7f7"}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={3}
        >
          {/* About / Name */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Meet Shah
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MERN Stack Developer | Passionate about Web Development
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              <IconButton
                href="https://github.com/your-username"
                target="_blank"
                sx={{ color: "#292929" }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedInIcon />
              </IconButton>
             {/*  <IconButton
                href="https://twitter.com/your-twitter"
                target="_blank"
                sx={{ color: "#1DA1F2" }}
              >
                <TwitterIcon />
              </IconButton> */}
            </Stack>
          </Box>

          {/* Quick Links */}
          <Stack direction="row" spacing={{ xs: 2, md: 4 }} mt={{ xs: 2, md: 0 }}>
            <Link href="#projects" underline="none" sx={{ color: "text.primary", "&:hover": { color: "#ea4020" } }}>
              Projects
            </Link>
            <Link href="#experience" underline="none" sx={{ color: "text.primary", "&:hover": { color: "#ea4020" } }}>
              Experience
            </Link>
            <Link href="#education" underline="none" sx={{ color: "text.primary", "&:hover": { color: "#ea4020" } }}>
              Education
            </Link>
            <Link href="#contact" underline="none" sx={{ color: "text.primary", "&:hover": { color: "#ea4020" } }}>
              Contact
            </Link>
          </Stack>
        </Stack>

        {/* Footer Bottom */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Meet Shah. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
