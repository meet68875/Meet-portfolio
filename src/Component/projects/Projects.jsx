import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Card,
  CardContent,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import ComponentTitle from "../UI/ComponentTitle";

// Project Data (unchanged)
const projectsData = [
  {
    date: "01/2022",
    title: "Gesture Control Software v1",
    description: `Based on the hardware named Arduino with the help of this system which holds an Arduino circuit, ultrasonic sensors, some jumper wire, and type-B to type-A cable which easily connected to your laptop or pc.`,
    achievements: "1st rank for Best Project by Apex Software House",
    githubLink: "https://github.com/your-username/project-v1",
    liveLink: null,
  },
  {
    date: "12/2022",
    title: "Gesture Control Software v2",
    description: `Based on the successful response to our previous project, we take this idea further to implement this into the software with the help of Python, OpenCV, and Machine Learning.`,
    achievements: "1st rank for best innovation project by Azziptech",
    githubLink: "https://github.com/your-username/project-v2",
    liveLink: null,
  },
  {
    date: "1/2023",
    title: "Attendance Management System",
    description: `This web application software is user-friendly for a person who manages attendance. With the help of this software, students and teachers can connect through the software. Some time-consuming protocols like attendance, leave, etc., can be easily managed.`,
    achievements: null,
    githubLink: "https://github.com/your-username/attendance-system",
    liveLink: "https://live-link.com",
  },
  {
    date: "10/2023",
    title: "Movie Booking Website",
    description: `Experience the ultimate convenience in movie booking with our user-friendly website. Easily add, edit, or delete movie listings with just a few clicks. Seamlessly book your favorite shows hassle-free. Whether you're an admin managing the platform or a user looking for the perfect movie night, our secure login pages cater to your needs. Enjoy a streamlined movie booking experience like never before.`,
    achievements: null,
    githubLink: "https://github.com/your-username/movie-booking-site",
    liveLink: "https://live-link.com",
  },
];
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "70%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  maxHeight: "80vh",
  overflowY: "auto",
  outline: "none",
};

// Project Card Component
const ProjectCard = ({ project, onClick }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      borderLeft: "4px solid #ef7641",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
      },
    }}
  >
    <CardContent sx={{ pb: 1 }}>
      <Typography variant="caption" color="text.secondary" gutterBottom>
        {project.date}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {project.description.length > 120
          ? `${project.description.substring(0, 120)}...`
          : project.description}
      </Typography>
      {project.achievements && (
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "primary.main", fontStyle: "italic" }}
        >
          🏆 {project.achievements}
        </Typography>
      )}
    </CardContent>
    <Box sx={{ p: 2, pt: 0 }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          onClick={() => onClick(project)}
          size="small"
          sx={{
            color: "#ea4020",
            fontWeight: "bold",
            "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
          }}
        >
          Read More
        </Button>
        <Box>
          {project.githubLink && (
            <IconButton
              href={project.githubLink}
              target="_blank"
              size="small"
              sx={{ color: "#292929" }}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {project.liveLink && (
            <IconButton
              href={project.liveLink}
              target="_blank"
              size="small"
              sx={{ color: "#ea4020" }}
            >
              <OpenInNewIcon />
            </IconButton>
          )}
        </Box>
      </Stack>
    </Box>
  </Card>
);

// Main Projects Component
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const headingRef = useRef(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <ComponentTitle title="projects" ref={headingRef} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: { xs: 3, sm: 4, md: 5 },
            mt: 4,
          }}
        >
          {projectsData.map((project, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
                maxWidth: { xs: "100%", sm: "45%", md: "30%" },
              }}
            >
              <ProjectCard project={project} onClick={handleOpen} />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedProject && (
              <>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {selectedProject.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {selectedProject.date}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography sx={{ mt: 2 }}>
                  {selectedProject.description}
                </Typography>
                {selectedProject.achievements && (
                  <Typography
                    variant="body1"
                    sx={{ mt: 2, color: "primary.main", fontStyle: "italic" }}
                  >
                    🏆 <b>Achievements:</b> {selectedProject.achievements}
                  </Typography>
                )}
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  {selectedProject.githubLink && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={selectedProject.githubLink}
                      target="_blank"
                      sx={{ color: "#292929", borderColor: "#292929" }}
                    >
                      GitHub
                    </Button>
                  )}
                  {selectedProject.liveLink && (
                    <Button
                      variant="contained"
                      startIcon={<OpenInNewIcon />}
                      href={selectedProject.liveLink}
                      target="_blank"
                      sx={{
                        bgcolor: "#ea4020",
                        "&:hover": { bgcolor: "#c4341b" },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Projects;
