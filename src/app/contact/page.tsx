'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <LocationOnIcon />,
    title: 'Address',
    content: 'Karwi Pahadi Road, Khatwara, Majra, Chitrakoot, U.P - 210207',
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    content: '+91-7379620547 / +91-7897133714 / +91-9452872317',
    link: 'tel:+917379620547',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'krd.chitrakoot@gmail.com',
    link: 'mailto:krd.chitrakoot@gmail.com',
  },
];

export default function ContactPage(): JSX.Element {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

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
              Contact Us
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
              Get in touch with us - we'd love to hear from you
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Content */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mr: 2,
                        mt: 0.5,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          component="a"
                          href={info.link}
                          sx={{
                            color: 'text.secondary',
                            textDecoration: 'none',
                            display: 'block',
                            lineHeight: 1.8,
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {info.content}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                          }}
                        >
                          {info.content}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: 'text.primary',
                  }}
                >
                  Send us a Message
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Full Name"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            disabled={submitStatus === 'loading'}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Email Address"
                            type="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            disabled={submitStatus === 'loading'}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="phone"
                        control={control}
                        rules={{
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Invalid phone number (10 digits required)',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Phone Number"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            disabled={submitStatus === 'loading'}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="subject"
                        control={control}
                        rules={{ required: 'Subject is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Subject"
                            error={!!errors.subject}
                            helperText={errors.subject?.message}
                            disabled={submitStatus === 'loading'}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controller
                        name="message"
                        control={control}
                        rules={{
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            disabled={submitStatus === 'loading'}
                          />
                        )}
                      />
                    </Grid>

                    {submitStatus === 'success' && (
                      <Grid item xs={12}>
                        <Alert severity="success">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </Alert>
                      </Grid>
                    )}

                    {submitStatus === 'error' && (
                      <Grid item xs={12}>
                        <Alert severity="error">
                          {errorMessage || 'Failed to send message. Please try again.'}
                        </Alert>
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={submitStatus === 'loading'}
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                        }}
                      >
                        {submitStatus === 'loading' ? (
                          <>
                            <CircularProgress size={24} sx={{ mr: 1 }} color="inherit" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>

          {/* Google Map */}
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Find Us on Map
            </Typography>
            <Paper
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                overflow: 'hidden',
                height: { xs: '300px', md: '450px' },
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.234567890123!2d80.8!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA4MMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              />
            </Paper>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontStyle: 'italic',
              }}
            >
              Karwi Pahadi Road, Khatwara, Majra, Chitrakoot, Uttar Pradesh - 210207
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
