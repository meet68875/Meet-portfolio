import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  IconButton,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Card,
  CardContent,
  CardActionArea,
  useTheme,
  useMediaQuery,
  CardActions,
} from "@mui/material";
import { GitHub, OpenInNew, Close } from "@mui/icons-material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponentTitle from "../UI/ComponentTitle";

gsap.registerPlugin(ScrollTrigger);

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

const ProjectCard = ({ project, onClick }) => {
  const { date, title, description, liveLink } = project;
  const truncatedDescription = description.length > 100
    ? description.substring(0, 100) + "..."
    : description;

  const theme = useTheme();

  return (
    <Card
      elevation={8}
      sx={{
        height: 200, // Fixed height for all cards
       
        borderRadius: theme.shape.borderRadius * 2,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: `0 16px 24px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.1)`,
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", p: 3 }}>
          <Box mb={2}>
            <Chip
              label={date}
              size="small"
              sx={{ bgcolor: "#ea4020", color: "#fff", fontWeight: 600 }}
            />
          </Box>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.6 }}>
            {truncatedDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end", px: 3, pb: 3, pt: 0 }}>
        {liveLink && (
          <Button
            size="small"
            color="primary"
            endIcon={<OpenInNew />}
            href={liveLink}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            sx={{
              color: '#ea4020',
              '&:hover': {
                backgroundColor: 'rgba(234, 64, 32, 0.04)',
              },
            }}
          >
            Live
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const ProjectDetailsModal = ({ open, project, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!project) return null;

  const { date, title, description, achievements, githubLink, liveLink } = project;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: theme.shape.borderRadius * 2 },
          boxShadow: theme.shadows[20],
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>{title}</Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: '#ea4020',
              '&:hover': {
                bgcolor: 'rgba(234, 64, 32, 0.1)',
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          <Chip
            label={date}
            size="small"
            sx={{
              bgcolor: '#ea4020',
              color: '#fff',
              fontWeight: 'bold',
            }}
          />
          {achievements && (
            <Chip
              label={achievements}
              size="small"
              icon={<span role="img" aria-label="trophy">🏆</span>}
              sx={{
                bgcolor: theme.palette.success.main,
                color: theme.palette.success.contrastText,
                fontWeight: 'bold',
              }}
            />
          )}
        </Box>
        <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mt: 1 }}>
          Description
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: 'flex-start', gap: 2, flexWrap: 'wrap', borderTop: `1px solid ${theme.palette.divider}` }}>
        {githubLink && (
          <Button
            href={githubLink}
            target="_blank"
            rel="noopener"
            variant="contained"
            sx={{
              bgcolor: theme.palette.grey[900],
              "&:hover": {
                bgcolor: "grey.700",
              },
              textTransform: 'none',
            }}
            startIcon={<GitHub />}
          >
            GitHub
          </Button>
        )}
        {liveLink && (
          <Button
            href={liveLink}
            target="_blank"
            rel="noopener"
            variant="contained"
            sx={{
              bgcolor: '#ea4020',
              "&:hover": {
                bgcolor: "#d43a1c",
              },
              textTransform: 'none',
            }}
            startIcon={<OpenInNew />}
          >
            Live Demo
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

function Projects() {
  const headingRef = useRef(null);
  const projectsGridRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    // Add a check to ensure refs are not null before animating
    if (!headingRef.current || !projectsGridRef.current) return;

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

      // Use gsap.utils.toArray() for a robust solution
      const projectCards = gsap.utils.toArray(projectsGridRef.current.children);
      
      gsap.from(projectCards, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top 80%",
        },
      });
    }, projectsGridRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.default' }}>
      <ComponentTitle title="Projects" ref={headingRef} />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center" ref={projectsGridRef}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProjectCard project={project} onClick={() => handleOpenModal(project)} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProjectDetailsModal
        open={openModal}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </Box>
  );
}

export default Projects;