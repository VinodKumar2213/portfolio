import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box
        component={motion.div}
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #00BCD4, #7C4DFF)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />
      {isVisible && !isMobile && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: (theme) => theme.palette.custom.cardGlow,
            '&::before': {
              content: '""',
              width: '12px',
              height: '12px',
              borderLeft: '2px solid',
              borderTop: '2px solid',
              borderColor: 'primary.main',
              transform: 'rotate(45deg) translate(2px, 2px)',
            },
          }}
        />
      )}
    </>
  );
};

export default ScrollProgress;
