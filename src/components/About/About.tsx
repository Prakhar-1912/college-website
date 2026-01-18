'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import PhoneIcon from '@mui/icons-material/Phone';

interface Administrator {
  name: string;
  subtitle?: string;
  designation: string;
  mobile: string;
  image: string;
}

interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  mobile: string;
}

interface Committee {
  title: string;
  members: CommitteeMember[];
}

const administrators: Administrator[] = [
  {
    name: 'Mr. Anand Kumar Mishra',
    designation: 'Managing Trustee',
    mobile: '6388593834',
    image: '/gallery/managing truste.jpeg',
  },
  {
    name: 'Mr. Ashok Kumar Dubey',
    subtitle: '(Senior Advocate, Prayagraj High Court)',
    designation: 'President',
    mobile: '9838777751',
    image: '/gallery/president.jpeg',
  },
  {
    name: 'Dr. Manisha Mishra',
    designation: 'Treasurer',
    mobile: '8299011446',
    image: '/gallery/treasurer.jpeg',
  },
  {
    name: 'Dr. L K Mishra',
    designation: 'Principal',
    mobile: '9452872317',
    image: '/gallery/principle.jpeg',
  },
];

const committees: Committee[] = [
  {
    title: 'Anti Ragging Committee',
    members: [
      { sno: 1, name: 'Dr. L.K Mishra', designation: 'Chairman', mobile: '9452872317' },
      { sno: 2, name: 'Dr. Ganesh Shankar', designation: 'Member', mobile: '7398705464' },
      { sno: 3, name: 'Dr. Brijesh Shukla', designation: 'Member', mobile: '9956900650' },
      { sno: 4, name: 'Dr. Dependra Gautam', designation: 'Member', mobile: '9198342902' },
      { sno: 5, name: 'Smt. Pratibha Sharma', designation: 'Member', mobile: '9984763086' },
    ],
  },
  {
    title: 'Internal Quality Assurance Committee',
    members: [
      { sno: 1, name: 'Dr. Ganesh Shankar', designation: 'Chairman', mobile: '7398705464' },
      { sno: 2, name: 'Mr. Manish Diwedi', designation: 'Member', mobile: '9696554061' },
      { sno: 3, name: 'Dr. Brijesh Shukla', designation: 'Member', mobile: '9956900650' },
      { sno: 4, name: 'Dr. Dependra Gautam', designation: 'Member', mobile: '9198342902' },
      { sno: 5, name: 'Mr. Dharmendra Singh', designation: 'Member', mobile: '6307090494' },
    ],
  },
  {
    title: 'Internal Complaints Committee',
    members: [
      { sno: 1, name: 'Mr. Manish Diwedi', designation: 'Chairman', mobile: '9696554061' },
      { sno: 2, name: 'Dr. Ganesh Shankar', designation: 'Member', mobile: '7398705464' },
      { sno: 3, name: 'Dr. Brijesh Shukla', designation: 'Member', mobile: '9956900650' },
      { sno: 4, name: 'Dr. Dependra Gautam', designation: 'Member', mobile: '9198342902' },
      { sno: 5, name: 'Smt. Pratibha Sharma', designation: 'Member', mobile: '9984763086' },
    ],
  },
  {
    title: 'College Development Committee',
    members: [
      { sno: 1, name: 'Dr. Manisha Mishra', designation: 'Chairwoman', mobile: '8299011446' },
      { sno: 2, name: 'Mr. Manish Diwedi', designation: 'Member', mobile: '9696554061' },
      { sno: 3, name: 'Dr. Brijesh Shukla', designation: 'Member', mobile: '9956900650' },
      { sno: 4, name: 'Mr. Pradyumn Tripathi', designation: 'Member', mobile: '7800869507' },
      { sno: 5, name: 'Mr. Dharmendra Singh', designation: 'Member', mobile: '6307090494' },
    ],
  },
  {
    title: 'Students Grievance Redressal Committee',
    members: [
      { sno: 1, name: 'Dr. L.K Mishra', designation: 'Chairman', mobile: '9452872317' },
    ],
  },
];

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
            mb: 8,
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

        {/* Administration Section */}
        <Box sx={{ mb: 8 }}>
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
              Administration
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Meet our distinguished leadership team
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {administrators.map((admin, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
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
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      src={admin.image}
                      alt={admin.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 12px rgba(183, 28, 28, 0.2)',
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: admin.subtitle ? 0 : 0.5,
                      }}
                    >
                      {admin.name}
                    </Typography>
                    {admin.subtitle && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          display: 'block',
                          mb: 0.5,
                          fontStyle: 'italic',
                        }}
                      >
                        {admin.subtitle}
                      </Typography>
                    )}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {admin.designation}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'text.secondary',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="body2">{admin.mobile}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Committees Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                }}
              >
                Committees
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Various committees ensuring smooth functioning of the institution
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {committees.map((committee, index) => (
              <Accordion
                key={index}
                elevation={0}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                  sx={{
                    backgroundColor: 'rgba(183, 28, 28, 0.03)',
                    '&:hover': {
                      backgroundColor: 'rgba(183, 28, 28, 0.06)',
                    },
                    '& .MuiAccordionSummary-content': {
                      my: 2,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {committee.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(183, 28, 28, 0.05)' }}>
                          <TableCell sx={{ fontWeight: 700, width: '10%' }}>S.No.</TableCell>
                          <TableCell sx={{ fontWeight: 700, width: '35%' }}>Name</TableCell>
                          <TableCell sx={{ fontWeight: 700, width: '25%' }}>Designation</TableCell>
                          <TableCell sx={{ fontWeight: 700, width: '30%' }}>Contact</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {committee.members.map((member) => (
                          <TableRow
                            key={member.sno}
                            sx={{
                              '&:nth-of-type(odd)': {
                                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                              },
                            }}
                          >
                            <TableCell>{member.sno}</TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{member.name}</TableCell>
                            <TableCell>
                              <Box
                                component="span"
                                sx={{
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: '0.85rem',
                                  fontWeight: 500,
                                  backgroundColor:
                                    member.designation === 'Chairman' || member.designation === 'Chairwoman'
                                      ? 'rgba(183, 28, 28, 0.1)'
                                      : 'rgba(0, 0, 0, 0.05)',
                                  color:
                                    member.designation === 'Chairman' || member.designation === 'Chairwoman'
                                      ? 'primary.main'
                                      : 'text.secondary',
                                }}
                              >
                                {member.designation}
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                                <Typography variant="body2">{member.mobile}</Typography>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
