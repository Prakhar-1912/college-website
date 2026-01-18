'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 2,
            }}
          >
            About Our College
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Kedarnath Ramswaroop Mahavidyalaya is a premier educational institution
            located in Chitrakoot, Uttar Pradesh
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(183, 28, 28, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mr: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(183, 28, 28, 0.08)',
                    display: 'flex',
                  }}
                >
                  <VisibilityIcon sx={{ fontSize: 36 }} />
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  Our Vision
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                To be a center of excellence in higher education, fostering intellectual
                growth, moral values, and social responsibility. We aspire to create
                leaders who contribute positively to society while maintaining the rich
                cultural heritage of Chitrakoot.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(183, 28, 28, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mr: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(183, 28, 28, 0.08)',
                    display: 'flex',
                  }}
                >
                  <TrackChangesIcon sx={{ fontSize: 36 }} />
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                To provide accessible, affordable, and quality education to students from
                all backgrounds. We are committed to holistic development through
                academic excellence, character building, and skill enhancement, preparing
                students for successful careers and meaningful lives.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: 'rgba(183, 28, 28, 0.03)',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              mb: 3,
            }}
          >
            About the Institution
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Kedarnath Ramswaroop Mahavidyalaya, established in the holy city of
            Chitrakoot, is affiliated with Bundelkhand University, Jhansi. We are
            dedicated to providing quality education in Arts, Science, and Commerce
            streams at both undergraduate and postgraduate levels.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Our campus is equipped with modern facilities including well-equipped
            laboratories, a comprehensive library, sports facilities, and spacious
            classrooms. We believe in nurturing not just academic excellence but also the
            overall personality development of our students.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            Located in Karwi Pahadi Road, Khatwara, Majra, Chitrakoot, we serve the
            educational needs of the region while maintaining high standards of teaching
            and learning. Our experienced faculty members are committed to guiding
            students towards achieving their academic and career goals.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
