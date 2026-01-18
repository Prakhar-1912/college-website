'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

const Hero: React.FC = () => {
  const handleExploreClick = (): void => {
    const element = document.querySelector('#courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (): void => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: '600px', md: '700px' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'primary.main',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/gallery/hero.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(183, 28, 28, 0.75) 0%, rgba(183, 28, 28, 0.4) 50%, transparent 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '60%' },
            color: 'white',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              lineHeight: 1.2,
            }}
          >
            Kedarnath Ramswaroop Mahavidyalaya
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Affiliated to Bundelkhand University, Jhansi (U.P.)
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 2,
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            Empowering students through quality education, moral values, and holistic
            development in the heart of Chitrakoot.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              lineHeight: 1.8,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            We are committed to nurturing future leaders with academic excellence and
            strong ethical foundations.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleExploreClick}
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s',
              }}
            >
              Explore Courses
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={handleContactClick}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
