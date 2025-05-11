import { createTheme } from '@mui/material';

const commonProperties = {
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '0.7rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: '-100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'all 0.5s ease',
          },
          '&:hover::after': {
            left: '100%',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00BCD4, #7C4DFF)',
          '&:hover': {
            background: 'linear-gradient(45deg, #00ACC1, #6C3FEF)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  ...commonProperties,
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BCD4',
      light: '#4DD0E1',
      dark: '#0097A7',
    },
    secondary: {
      main: '#7C4DFF',
      light: '#B388FF',
      dark: '#651FFF',
    },
    background: {
      default: '#0A1929',
      paper: 'rgba(10, 25, 41, 0.8)',
    },
    custom: {
      gradientText: 'linear-gradient(45deg, #00BCD4, #7C4DFF)',
      cardGlow: '0 0 15px rgba(0, 188, 212, 0.3)',
    },
  },
});

export const lightTheme = createTheme({
  ...commonProperties,
  palette: {
    mode: 'light',
    primary: {
      main: '#00838F',
      light: '#4FB3BF',
      dark: '#006064',
    },
    secondary: {
      main: '#5E35B1',
      light: '#9575CD',
      dark: '#4527A0',
    },
    background: {
      default: '#F8FAFF',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    custom: {
      gradientText: 'linear-gradient(45deg, #00838F, #5E35B1)',
      cardGlow: '0 0 15px rgba(94, 53, 177, 0.1)',
    },
  },
});
