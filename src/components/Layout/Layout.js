import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../Navbar/Navbar';
import CustomCursor from '../CustomCursor/CustomCursor';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <ScrollProgress />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: theme.palette.background.default,
          overflow: 'hidden',
          cursor: 'none', // Hide default cursor
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            position: 'relative',
            '& > section': {
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: (theme) =>
                  `linear-gradient(to right, transparent, ${theme.palette.primary.main}40, transparent)`,
              },
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
