// import React, { useState } from 'react';
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogActions,
  Chip,
  useTheme,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  // const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  const projects = [
    {
      title: 'Cyber Armor',
      image: 'CyberArmor.png',
      technologies: ['HTML', 'CSS', 'JavaScript' , 'Bootstrap'],
      liveDemo: 'https://cyber-armor-4e1be.web.app',
      github: 'https://github.com/VinodKumar2213/Cyber-Armor',
      // details: 'Built a responsive e-commerce platform with features like product filtering, user authentication, and payment integration. Implemented state management using Redux and integrated with a Node.js backend.',
    },
    {
      title: 'H2GO Water Bottle',
      image: 'H2GO.png',
      technologies: ['HTML', 'CSS', 'JavaScript' , 'Bootstrap'],
      liveDemo: 'https://h2go-86434.web.app',
      github: 'https://github.com/VinodKumar2213/H2GO',
      // details: 'Developed a real-time task management application with features like drag-and-drop task organization, team collaboration, and deadline tracking. Utilized Firebase for backend services.',
    },
    {
      title: 'SpaLaLa Facial Spa',
      image: 'SpaLaLa.png',
      technologies: ['HTML', 'CSS', 'JavaScript' , 'Bootstrap'],
      liveDemo: 'https://spalala-e41d7.web.app',
      github: 'https://github.com/VinodKumar2213/Spa-La-La',
      // details: 'Created a weather dashboard that displays current weather conditions and forecasts using the OpenWeather API. Implemented interactive charts for temperature and precipitation data.',
    },
    
    {
      title: 'GlycoCheck diabetes treatment',
      image: 'GlycoCheck.png',
      technologies: ['HTML', 'CSS', 'JavaScript' , 'Bootstrap'],
      liveDemo: 'https://glyko-check.web.app',
      github: 'https://github.com/VinodKumar2213/Glyko-check',
      // details: 'Built a cross-platform mobile application that helps users find recipes based on ingredients they have at home. Implemented features like recipe saving, meal planning, and nutritional information tracking.',
    },
    {
      title: 'Phone-Glow E-commerce Website',
      image: 'PhoneGlow.png',
      technologies: ['React', 'Material UI'],
      liveDemo: 'https://mobilecase-demo.web.app/',
      github: 'https://github.com/VinodKumar2213/Phone-glow',
      // details: 'Developed an AI-powered chatbot that answers customer service queries. Used natural language processing for intent recognition and implemented a web interface for easy interaction with the AI system.',
    },
    {
      title: 'Portfolio Website',
      image: 'Portfolio.png',
      technologies: ['React', 'Material UI'],
      liveDemo: 'https://vinodkumar-mallidi.web.app/',
      github: 'https://github.com/VinodKumar2213/portfolio',
      // details: 'Designed and developed a personal portfolio website showcasing projects and skills. Implemented smooth animations and transitions using Framer Motion with a responsive design that works across all devices.',
    },
  ];

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
                color: theme.palette.text.primary,
                mb:2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '50%',
                  height: 4,
                  bottom: -10,
                  left: '25%',
                  borderRadius: 2,
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
              }}
            >
              My Projects
            </Typography>
          </Box>

          <Grid container spacing={4} display={'flex'} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ mt: 'auto' }}>
                        <Button
                          size="small"
                          startIcon={<GitHub />}
                          href={project.github}
                          target="_blank"
                          sx={{ mr: 1 }}
                        >
                          Code
                        </Button>
                        <Button
                          size="small"
                          startIcon={<Launch />}
                          href={project.liveDemo}
                          target="_blank"
                        >
                          Visit Project
                        </Button>
                        {/* <Button
                          size="small"
                          onClick={() => setSelectedProject(project)}
                          sx={{ ml: 1 }}
                        >
                          Learn More
                        </Button> */}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* <Dialog
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogContent>
                <Box sx={{ mb: 2 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Box>
                <Typography variant="body1" paragraph>
                  {selectedProject.details}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
                <Button
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHub />}
                >
                  View Code
                </Button>
                <Button
                  href={selectedProject.liveDemo}
                  target="_blank"
                  startIcon={<Launch />}
                  variant="contained"
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog> */}
      </Container>
    </Box>
  );
};

export default Projects;
