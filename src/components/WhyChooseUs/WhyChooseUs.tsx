'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    title: 'Quality Education',
    description:
      'Affiliated with Bundelkhand University, we provide top-tier education with experienced faculty and modern teaching methods.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50 }} />,
    title: 'Holistic Development',
    description:
      'We focus on overall personality development through academics, sports, cultural activities, and moral values.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 50 }} />,
    title: 'Experienced Faculty',
    description:
      'Our dedicated team of qualified professors ensures personalized attention and guidance to every student.',
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 50 }} />,
    title: 'Rich Heritage',
    description:
      'Located in the spiritual city of Chitrakoot, we blend traditional values with modern educational practices.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box
      id="why-us"
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
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Discover what makes Kedarnath Ramswaroop Mahavidyalaya the ideal choice for
            your academic journey
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(183, 28, 28, 0.15)',
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(183, 28, 28, 0.08)',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
