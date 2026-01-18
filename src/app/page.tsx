'use client';

import Hero from '@/components/Hero/Hero';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const stats = [
    { icon: <SchoolIcon sx={{ fontSize: 48 }} />, value: '4+', label: 'Programs Offered' },
    { icon: <GroupsIcon sx={{ fontSize: 48 }} />, value: '500+', label: 'Students Enrolled' },
    { icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />, value: '15+', label: 'Years of Excellence' },
  ];

  return (
    <>
      <Hero />
      <WhyChooseUs />
      
      {/* Quick Stats Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(183, 28, 28, 0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{stat.icon}</Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quick Links Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Explore Our Campus
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Discover what makes us the preferred choice for quality education
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(183, 28, 28, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      About Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Learn about our history and mission
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Link href="/courses" style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(183, 28, 28, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      Courses
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Explore our academic programs
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Link href="/gallery" style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(183, 28, 28, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      Gallery
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      View our campus and activities
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(183, 28, 28, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1,
                      }}
                    >
                      Contact
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Get in touch with us
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
