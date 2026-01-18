'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface Course {
  title: string;
  degree: string;
  duration: string;
  description: string;
  streams?: string[];
}

const courses: Course[] = [
  {
    title: 'Bachelor of Arts',
    degree: 'B.A.',
    duration: '3 Years',
    description:
      'Comprehensive undergraduate program in arts and humanities with multiple subject combinations.',
    streams: ['Hindi', 'Sanskrit', 'History', 'Political Science', 'Sociology'],
  },
  {
    title: 'Bachelor of Commerce',
    degree: 'B.Com.',
    duration: '3 Years',
    description:
      'Commerce program focusing on accounting, finance, and business management.',
    streams: ['Accounting', 'Finance', 'Business Studies'],
  },
  {
    title: 'Diploma in Elementary Education',
    degree: 'D.El.Ed.',
    duration: '2 Years',
    description:
      'Diploma program for aspiring elementary school teachers focusing on teaching methodologies and child psychology.',
    streams: ['Primary Education', 'Teaching Methods', 'Child Development'],
  },
  {
    title: 'Bachelor of Education',
    degree: 'B.Ed.',
    duration: '2 Years',
    description:
      'Professional degree program for those pursuing a career in teaching, focusing on pedagogy and educational practices.',
    streams: ['Educational Psychology', 'Teaching Practice', 'Curriculum Development'],
  },
];

const Courses: React.FC = () => {
  return (
    <Box
      id="courses"
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
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
            Courses Offered
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Choose from our wide range of undergraduate and postgraduate programs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(183, 28, 28, 0.15)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                      <MenuBookIcon sx={{ fontSize: 32 }} />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Chip
                        label={course.duration}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(183, 28, 28, 0.08)',
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {course.degree}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {course.description}
                  </Typography>

                  {course.streams && (
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Available Streams:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {course.streams.map((stream, idx) => (
                          <Chip
                            key={idx}
                            label={stream}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'text.secondary',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
