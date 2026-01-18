'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Kedarnath Ramswaroop Mahavidyalaya
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Committed to providing quality education in the heart of Chitrakoot,
              affiliated with Bundelkhand University, Jhansi.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Courses', 'Contact'].map((item) => (
                <MuiLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ mr: 1, fontSize: 20, opacity: 0.9 }} />
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Karwi Pahadi Road, Khatwara, Rajapur, Chitrakoot, U.P - 210207
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 20, opacity: 0.9, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    +91-7379620547
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    +91-7897133714
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    +91-9452872317
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20, opacity: 0.9 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  krd.chitrakoot@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Kedarnath Ramswaroop Mahavidyalaya. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
