'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import PhoneIcon from '@mui/icons-material/Phone';

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

const Committee: React.FC = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
};

export default Committee;
