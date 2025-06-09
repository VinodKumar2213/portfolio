import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, useTheme, IconButton, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';

const Hero = () => {
  const theme = useTheme();
  // Removed scroll-based effects for better visibility
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const roles = [
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
  ];

  useEffect(() => {
    let currentText = roles[currentTextIndex];
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
  
    const typingInterval = setInterval(() => {
      if (!isDeleting && currentChar <= currentText.length) {
        setTypingText(currentText.substring(0, currentChar));
        currentChar++;
        typingSpeed = 100;
      } else if (isDeleting && currentChar >= 0) {
        setTypingText(currentText.substring(0, currentChar));
        currentChar--;
        typingSpeed = 50;
      }
  
      if (!isDeleting && currentChar > currentText.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        const nextIndex = (currentTextIndex + 1) % roles.length;
        setCurrentTextIndex(nextIndex);
        currentText = roles[nextIndex];
      }
    }, typingSpeed);
  
    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);
  

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1 + i * 0.2,
        duration: 0.5,
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <ParallaxBackground />
      
      <Container maxWidth="lg">
        <motion.div>
          <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 'bold',
                    mb: 2,
                    background: theme.palette.custom.gradientText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Vinod Kumar Mallidi
                </Typography>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={subtitleVariants}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2.5rem' },
                      color: 'primary.main',
                    }}
                  >
                    I am a{' '}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2.5rem' },
                      ml: 1,
                      color: 'secondary.main',
                      borderRight: '3px solid',
                      borderColor: 'secondary.main',
                      pr: 1,
                    }}
                  >
                    {typingText}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                    maxWidth: '600px',
                    color: 'text.secondary',
                  }}
                >
                  Crafting beautiful and functional web experiences with modern technologies.
                  Let's build something amazing together!
                </Typography>
              </motion.div>

              <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    href="#contact"
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
                    }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    href="#projects"
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {[
                  { icon: <GitHubIcon />, href: 'https://github.com/VinodKumar2213' },
                  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/vinod-kumar-mallidi-2564a2248/' },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <IconButton
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Box>
            
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Vinod Kumar Mallidi"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
                }}
              />
            </motion.div> */}
          </Box>
        </motion.div>
      </Container>

      <motion.div
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          href="#about"
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Hero;
