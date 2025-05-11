import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateCursorType);
    };
  }, [position.x, position.y]);

  return (
    <>
      <Box
        component={motion.div}
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        sx={{
          width: '10px',
          height: '10px',
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.75,
          mixBlendMode: 'difference',
        }}
      />
      <Box
        component={motion.div}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        sx={{
          width: '40px',
          height: '40px',
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.5,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;
