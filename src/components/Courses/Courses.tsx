'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

interface FeeStructure {
  semester: string;
  fee: string;
}

interface Course {
  title: string;
  degree: string;
  duration: string;
  description: string;
  fees: FeeStructure[];
}

const courses: Course[] = [
  {
    title: 'Bachelor of Arts',
    degree: 'B.A.',
    duration: '3 Years',
    description:
      'Comprehensive undergraduate program in arts and humanities with multiple subject combinations.',
    fees: [
      { semester: 'Semester 1', fee: '₹1,000/-' },
      { semester: 'Semester 2', fee: '₹1,000/-' },
      { semester: 'Semester 3', fee: '₹1,500/-' },
      { semester: 'Semester 4', fee: '₹1,500/-' },
      { semester: 'Semester 5', fee: '₹1,500/-' },
      { semester: 'Semester 6', fee: '₹1,500/-' },
    ],
  },
  {
    title: 'Bachelor of Commerce',
    degree: 'B.Com.',
    duration: '3 Years',
    description:
      'Commerce program focusing on accounting, finance, and business management.',
    fees: [
      { semester: 'Semester 1', fee: '₹1,000/-' },
      { semester: 'Semester 2', fee: '₹1,000/-' },
      { semester: 'Semester 3', fee: '₹1,500/-' },
      { semester: 'Semester 4', fee: '₹1,500/-' },
      { semester: 'Semester 5', fee: '₹1,500/-' },
      { semester: 'Semester 6', fee: '₹1,500/-' },
    ],
  },
  {
    title: 'Diploma in Elementary Education',
    degree: 'D.El.Ed.',
    duration: '2 Years',
    description:
      'Diploma program for aspiring elementary school teachers focusing on teaching methodologies and child psychology.',
    fees: [
      { semester: 'Semester 1', fee: '₹20,500/-' },
      { semester: 'Semester 2', fee: '₹20,500/-' },
      { semester: 'Semester 3', fee: '₹20,500/-' },
      { semester: 'Semester 4', fee: '₹20,500/-' },
    ],
  },
  {
    title: 'Bachelor of Education',
    degree: 'B.Ed.',
    duration: '2 Years',
    description:
      'Professional degree program for those pursuing a career in teaching, focusing on pedagogy and educational practices.',
    fees: [
      { semester: '1st Year', fee: '₹51,250/-' },
      { semester: '2nd Year', fee: '₹30,000/-' },
    ],
  },
];

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (course: Course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCourse(null);
  };

  const calculateTotalFee = (fees: FeeStructure[]): string => {
    const total = fees.reduce((sum, fee) => {
      const numericFee = parseInt(fee.fee.replace(/[₹,/-]/g, '').trim());
      return sum + numericFee;
    }, 0);
    return `₹${total.toLocaleString('en-IN')}/-`;
  };

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
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                      flexGrow: 1,
                    }}
                  >
                    {course.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<InfoOutlinedIcon />}
                    onClick={() => handleOpenDialog(course)}
                    sx={{
                      mt: 'auto',
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                    }}
                  >
                    View Fee Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Fee Structure Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
          },
        }}
      >
        {selectedCourse && (
          <>
            <DialogTitle
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                px: 3,
              }}
            >
              <Box>
                <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                  {selectedCourse.degree}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                  Fee Structure - {selectedCourse.duration}
                </Typography>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: 'rgba(183, 28, 28, 0.05)' }}>
                      <TableCell
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: '0.95rem',
                        }}
                      >
                        {selectedCourse.degree === 'B.Ed.' ? 'Year' : 'Semester'}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          fontSize: '0.95rem',
                        }}
                      >
                        Fee Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedCourse.fees.map((fee, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:nth-of-type(odd)': {
                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                          },
                          '&:last-child td, &:last-child th': {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell sx={{ py: 2 }}>{fee.semester}</TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            py: 2,
                            fontWeight: 600,
                            color: 'primary.main',
                          }}
                        >
                          {fee.fee}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      sx={{
                        backgroundColor: 'rgba(183, 28, 28, 0.08)',
                      }}
                    >
                      <TableCell
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                        }}
                      >
                        Total Fee
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          py: 2,
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'primary.main',
                        }}
                      >
                        {calculateTotalFee(selectedCourse.fees)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <Typography
                  variant="caption"
                  sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                >
                  * Fees are subject to change. Please contact the college office for the latest fee structure.
                </Typography>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Courses;
