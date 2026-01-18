'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/event-1.jpg',
    title: 'College Campus',
    description: 'Our beautiful campus with modern infrastructure and green surroundings',
    category: 'Campus',
  },
  {
    src: '/gallery/entrance-gate.jpeg',
    title: 'College Entrance Gate',
    description: 'Traditional architectural gateway to our institution',
    category: 'Campus',
  },
  {
    src: '/gallery/awareness-rally-2.jpg',
    title: 'Voter Awareness Rally',
    description: 'Students participating in voter awareness campaign',
    category: 'Events',
  },
  {
    src: '/gallery/awareness-rally-3.jpg',
    title: 'Community Engagement',
    description: 'Students engaged in social awareness initiatives',
    category: 'Events',
  },
  {
    src: '/gallery/awareness-rally-1.jpg',
    title: 'Student Activities',
    description: 'Students participating in community programs',
    category: 'Events',
  },
  {
    src: '/gallery/college-event.jpg',
    title: 'College Event',
    description: 'Academic and cultural events at our college',
    category: 'Events',
  },
];

export default function GalleryPage(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleImageClick = (image: GalleryImage): void => {
    setSelectedImage(image);
  };

  const handleClose = (): void => {
    setSelectedImage(null);
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
              Campus Gallery
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
              Explore our campus life, facilities, and community activities
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(183, 28, 28, 0.2)',
                      borderColor: 'primary.main',
                    },
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '75%', // 4:3 aspect ratio
                      backgroundColor: 'grey.200',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.title}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                        }
                      }}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'grey.300',
                        flexDirection: 'column',
                        p: 2,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                        {image.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled', mt: 1 }}>
                        (Image placeholder)
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 0.5,
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.5,
                        mb: 1,
                      }}
                    >
                      {image.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      {image.category}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '100%' : 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: isMobile ? 2 : 4,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: isMobile ? 8 : 16,
              right: isMobile ? 8 : 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '900px',
                  aspectRatio: '4/3',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'grey.800',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', px: 4 }}>
                    {selectedImage.title}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {selectedImage.description}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
}
