import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const HexSkill = ({ skill, index }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: index * 0.05 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      style={{ 
        position: 'relative',
        margin: '15px',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <Box
        sx={{
          width: '120px',
          height: '138px',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          bgcolor: isDark ? 'rgba(30, 30, 35, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 10px',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          boxShadow: `0 10px 20px rgba(0,0,0,0.1), 
                     inset 0 0 0 1px ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.5)'}`,
          backdropFilter: 'blur(5px)',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
              ${skill.level > 80 ? '#FF3CAC' : '#4158D0'} 0%, 
              ${skill.level > 80 ? '#784BA0' : '#C850C0'} 50%, 
              ${skill.level > 80 ? '#2B86C5' : '#FFCC70'} 100%)`,
            opacity: 0.15,
            clipPath: 'inherit',
            zIndex: -1,
          },
          '&:hover': {
            transform: 'translateZ(20px)',
            boxShadow: `0 15px 30px rgba(0,0,0,0.2), 
                       inset 0 0 0 1px ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)'}`,
          }
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: `conic-gradient(${theme.palette.primary.main} ${skill.level}%, transparent 0)`,
            boxShadow: `0 0 10px ${theme.palette.primary.main}40`,
            transform: 'rotate(-90deg)',
            '&:after': {
              content: '""',
              position: 'absolute',
              top: '5px',
              left: '5px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: isDark ? 'rgba(30, 30, 35, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            }
          }}
        />
        <Typography 
          variant="body2" 
          sx={{ 
            fontWeight: 600,
            fontSize: '0.9rem',
            textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : 'none',
            mb: 0.5
          }}
        >
          {skill.name}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.7rem' 
          }}
        >
          {skill.level}%
        </Typography>
      </Box>
    </motion.div>
  );
};

const TechStack = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Combined all skills into one flat array for the hexagonal grid
  const allSkills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Material UI', level: 65, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Express.js', level: 70, category: 'Backend' },
    { name: 'REST APIs', level: 60, category: 'Backend' },
    { name: 'MongoDB', level: 65, category: 'Backend' },
    { name: 'Redux', level: 70, category: 'Frontend' },
    { name: 'Firebase', level: 60, category: 'Backend' },
  ];

  // Sort by level descending to show strongest skills first
  const sortedSkills = [...allSkills].sort((a, b) => b.level - a.level);

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isDark 
          ? '#0A1929' 
          : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(240, 240, 245, 0.4) 100%)',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${isDark ? '%23ffffff' : '%23000000'}' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 8,
              textAlign: 'center',
              fontWeight: 700,
              color: 'white',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 3,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 10,
              }
            }}
          >
            Tech Stack
          </Typography>

          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 auto',
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(50px)',
                zIndex: -1,
              }
            }}
          >
            {sortedSkills.map((skill, index) => (
              <HexSkill key={skill.name} skill={skill} index={index} />
            ))}
          </Box>

          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(90deg, #FF3CAC, #784BA0)',
                    mr: 1 
                  }} 
                />
                <Typography variant="caption">Frontend</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    width: 12, 
                    height: 12, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(90deg, #4158D0, #C850C0)',
                    mr: 1 
                  }} 
                />
                <Typography variant="caption">Backend</Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              A comprehensive technology stack specializing in modern web development,
              with expertise across frontend frameworks and backend integration
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TechStack;
