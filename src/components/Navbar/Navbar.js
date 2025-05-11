import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Person as PersonIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  Mail as MailIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Custom hook to track active section
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['about', 'skills', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    // Handle home section visibility
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

const Navbar = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const activeSection = useActiveSection();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = [
    { label: 'Home', icon: <HomeIcon />, id: 'home' },
    { label: 'About', icon: <PersonIcon />, id: 'about' },
    { label: 'Skills', icon: <CodeIcon />, id: 'skills' },
    { label: 'Projects', icon: <WorkIcon />, id: 'projects' },
    { label: 'Contact', icon: <MailIcon />, id: 'contact' },
  ];

  const handleNavClick = (item) => {
    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleNavClick(navItems[newValue]);
  };

  // Update value when activeSection changes
  useEffect(() => {
    const index = navItems.findIndex(item => item.id === activeSection);
    if (index !== -1) {
      setValue(index);
    }
  }, [activeSection]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 800,
                fontSize: { xs: '1.5rem', sm: '1.8rem' },
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              VK
            </Typography>
          </motion.div>
          <Box sx={{ flexGrow: 1 }} />
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 5, marginRight: 4 }}>
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={motion.button}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    position: 'relative',
                    fontWeight: 600,
                    padding: '8px 16px',
                    color: activeSection === item.id ? 'primary.main' : 'inherit',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: 0,
                      background: (theme) => theme.palette.primary.main,
                      transition: 'width 0.3s ease-in-out',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(32, 32, 32, 0.95) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)',
            backdropFilter: 'blur(10px)',
            borderTop: (theme) =>
              `1px solid ${
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)'
              }`,
          }}
          elevation={3}
        >
          <BottomNavigation
            value={value}
            onChange={handleChange}
            sx={{
              height: 56,
              '& .MuiBottomNavigationAction-root': {
                minWidth: 'auto',
                padding: '6px 12px',
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {navItems.map((item, index) => (
              <BottomNavigationAction
                key={item.label}
                label={item.label}
                icon={item.icon}
                sx={{
                  '& .MuiBottomNavigationAction-label': {
                    fontSize: '0.75rem',
                    '&.Mui-selected': {
                      fontSize: '0.75rem',
                    },
                  },
                }}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
};

export default Navbar;
