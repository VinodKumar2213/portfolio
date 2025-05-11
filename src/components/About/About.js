import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const TimelineItem = ({ item, index }) => {
  const theme = useTheme();
  
  // Set the appropriate icon based on item type
  const getIcon = () => {
    switch(index) {
      case 0: return <WorkIcon sx={{ fontSize: 28 }} />;
      case 1: return <SchoolIcon sx={{ fontSize: 28 }} />;
      case 2: return <CodeIcon sx={{ fontSize: 28 }} />;
      default: return <WorkIcon sx={{ fontSize: 28 }} />;
    }
  };

  return (
    <Box sx={{ position: 'relative', mb: 6 }}>
      {/* Vertical line */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: { xs: 20, md: 40 },
          width: 4,
          borderRadius: 4,
          background: `linear-gradient(to bottom, ${theme.palette.primary.main}88, ${theme.palette.secondary.main}88)`,
          zIndex: 0,
        }}
      />
      
      {/* Content */}
      <Grid container spacing={2}>
        {/* Year bubble */}
        <Grid item xs={2} md={1}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15,
              delay: 0.1 
            }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                width: { xs: 40, md: 80 },
                height: { xs: 40, md: 80 },
                borderRadius: '50%',
                bgcolor: theme.palette.background.paper,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 3,
                border: `3px solid ${index === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
              }}
            >
              {getIcon()}
            </Box>
          </motion.div>
        </Grid>
        
        {/* Content card */}
        <Grid item xs={10} md={11}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              x: 10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                background: theme.palette.background.paper,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 8,
                  height: '100%',
                  bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                },
              }}
            >
              <Box sx={{ ml: 2 }}>
                {/* Year */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="h6"
                    sx={{ 
                      color: index === 0 ? 'primary.main' : 'secondary.main',
                      fontWeight: 'bold'
                    }}
                  >
                    {item.year}
                  </Typography>
                </motion.div>
                
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 'bold',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '70%',
                        height: 2,
                        bottom: 0,
                        left: 0,
                        bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                        opacity: 0.7,
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                </motion.div>
                
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                </motion.div>
                
                {/* Achievements */}
                {item.achievements && (
                  <Box sx={{ mt: 2 }}>
                    {item.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 1.5,
                            padding: 1.5,
                            borderRadius: 2,
                            bgcolor: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.05)' 
                              : 'rgba(0,0,0,0.03)',
                            '&:hover': {
                              bgcolor: theme.palette.mode === 'dark' 
                                ? 'rgba(255,255,255,0.08)' 
                                : 'rgba(0,0,0,0.05)',
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                              mt: 1,
                              mr: 1.5,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2">
                            {achievement}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                )}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

const About = () => {
  const theme = useTheme();
  
  const timelineItems = [
    {
      year: '2024',
      title: 'Jr. Software Developer at Codetek Software Solutions',
      description: 'Working as a Junior Software Developer, contributing to various software development projects.',
      achievements: [
        'Developing and maintaining software applications',
        'Collaborating with team members on project development',
        'Implementing best practices in software development',
      ],
    },
    {
      year: '2021',
      title: 'B.Tech in Electrical and Electronics Engineering',
      description: 'Completed B.Tech from Bomma Institute of Technology and Science, Allipuram, Khammam, Telangana.',
      achievements: [
        'Graduated with 62% aggregate',
        'Specialized in Electrical and Electronics Engineering',
        'Completed major projects in electrical systems and automation',
      ],
    },
    {
      year: '2017',
      title: 'Diploma in Electrical and Electronics Engineering',
      description: 'Completed Diploma from Khammam Institute of Technology and Science, Khammam, Telangana.',
      achievements: [
        'Graduated with 62% aggregate',
        'Specialized in Electrical and Electronics Engineering',
        'Gained practical knowledge in electrical systems and circuits',
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.background.default,
       
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 1,
              color: theme.palette.text.primary,
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
            About Me
          </Typography>
        </motion.div>

        {/* About Content */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: '100%',
                    bgcolor: 'primary.main',
                  }
                }}
              >
                <Typography variant="body1" sx={{ ml: 2, mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Hello! I'm Vinod Kumar Mallidi, a passionate Frontend Developer with a year of experience
                  in creating beautiful and functional web experiences. My journey in web development
                  started with a deep curiosity for creating user-friendly interfaces and has evolved
                  into a professional career where I blend creativity with technical expertise.
                </Typography>
                <Typography variant="body1" sx={{ ml: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  I specialize in modern JavaScript frameworks, particularly React.js, and have a keen
                  eye for design and user experience. I believe in writing clean, maintainable code
                  and creating interfaces that not only look great but also provide seamless user
                  interactions.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
          
        </Grid>
        
        {/* Timeline heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px', marginTop: '70px', textAlign: 'center' }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              color: theme.palette.text.primary,
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '30%',
                height: 4,
                bottom: -10,
                left: '35%',
                borderRadius: 2,
                background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
              }
            }}
          >
            My Journey
          </Typography>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
