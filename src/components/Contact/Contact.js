import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Snackbar,
  Alert,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#0A1929' : 'rgba(0, 0, 0, 0.02)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
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
              Let's Connect
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} sm={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(0,0,0,0.1)',
                  }}
                >
                

                  <Box>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                      }}
                    >
                      Contact Information
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontSize: '1.1rem',
                        mb: 4,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8
                      }}
                    >
                      Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={7}>
                        <Box sx={{ mb: 4 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 2,
                            }}
                          >
                            <IconButton
                              component="a"
                              href="mailto:vinodchowdary8584@gmail.com"
                              color="primary"
                              sx={{
                                mr: 2,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                '&:hover': {
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
                                }
                              }}
                              aria-label="Send email"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Email />
                            </IconButton>

                            <Typography
                              component="a"
                              href="mailto:vinodchowdary8584@gmail.com"
                              variant="body1"
                              sx={{
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                                maxWidth: { xs: '200px', sm: '100%' },
                                fontWeight: 500,
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:hover': {
                                  textDecoration: 'underline',
                                  color: theme.palette.primary.main
                                },
                                cursor: 'pointer'
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              vinodchowdary8584@gmail.com
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 2,
                            }}
                          >
                            <IconButton
                              component="a"
                              href="tel:+918142747441"
                              color="primary"
                              sx={{
                                mr: 2,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                '&:hover': {
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
                                }
                              }}
                              aria-label="Call phone number"
                              rel="noopener"
                            >
                              <Phone />
                            </IconButton>
                            <Typography
                              component="a"
                              href="tel:+918142747441"
                              variant="body1"
                              sx={{
                                fontWeight: 500,
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:hover': {
                                  textDecoration: 'underline',
                                  color: theme.palette.primary.main
                                },
                                cursor: 'pointer'
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              +91 8142747441
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 2,
                            }}
                          >
                            <IconButton
                              color="primary"
                              sx={{
                                mr: 2,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                '&:hover': {
                                  background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
                                }
                              }}
                            >
                              <LocationOn />
                            </IconButton>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 500 }}
                            >
                              Hyderabad, Telangana
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Button
                            variant="outlined"
                            size="large"
                            startIcon={<LinkedIn />}
                            href="https://www.linkedin.com/in/vinod-kumar-mallidi-2564a2248/"
                            target="_blank"
                            sx={{ mr: 2, mb: 2 }}
                          >
                            LinkedIn
                          </Button>
                          <Button
                            variant="outlined"
                            size="large"
                            startIcon={<GitHub />}
                            href="https://github.com/VinodKumar2213"
                            target="_blank"
                            sx={{ mb: 2 }}
                          >
                            GitHub
                          </Button>
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={5}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          style={{ marginLeft: '20px' }}
                        >
                          <Box
                            sx={{
                              height: '300px',
                              width: '100%',
                              borderRadius: 2,
                              overflow: 'hidden',
                              position: 'relative',
                              marginLeft: { md: '30px' },
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                                zIndex: 1,
                              }
                            }}
                          >
                            <img
                              src="https://st.depositphotos.com/1029541/54587/i/450/depositphotos_545877714-stock-photo-contact-illustration-icons-abstract-network.jpg"
                              alt="Contact"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                maxHeight: '300px',
                              }}
                            />
                          </Box>
                        </motion.div>
                      </Grid>
                    </Grid>

                    {/* <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.8 }}>
                      "The only way to do great work is to love what you do." <br />- Steve Jobs
                    </Typography> */}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>


          </Grid>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
