'use client';

import About from '@/components/About/About';
import { Box, Container, Typography } from '@mui/material';

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* Page Header */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 10, md: 12 },
          mt: 8,
          background: 'linear-gradient(135deg, rgba(183, 28, 28, 0.03) 0%, rgba(183, 28, 28, 0.08) 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(183, 28, 28, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box
              sx={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #b71c1c 0%, #d32f2f 100%)',
                mb: 3,
                borderRadius: '2px',
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'primary.main',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                letterSpacing: '-0.02em',
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: '700px',
                lineHeight: 1.6,
              }}
            >
              Discover our journey, vision, and commitment to excellence in education
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* About Content */}
      <About />
    </>
  );
}
