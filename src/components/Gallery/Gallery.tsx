'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/campus-1.jpg',
    title: 'College Campus',
    description: 'Our beautiful campus with modern infrastructure',
  },
  {
    src: '/gallery/campus-2.jpg',
    title: 'Academic Building',
    description: 'State-of-the-art academic facilities',
  },
  {
    src: '/gallery/awareness-rally-1.jpg',
    title: 'Awareness Rally',
    description: 'Students participating in voter awareness campaign',
  },
  {
    src: '/gallery/awareness-rally-2.jpg',
    title: 'Community Engagement',
    description: 'College community engagement initiatives',
  },
  {
    src: '/gallery/awareness-rally-3.jpg',
    title: 'Student Activities',
    description: 'Students participating in social awareness programs',
  },
  {
    src: '/gallery/event-1.jpg',
    title: 'College Events',
    description: 'Various academic and cultural events',
  },
];

const Gallery: React.FC = () => {
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
    <Box
      id="gallery"
      sx={{
        py: 10,
        backgroundColor: 'grey.50',
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
            Campus Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Explore our campus life, facilities, and community engagement activities
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid',
                  borderColor: 'divider',
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
                    paddingTop: '66.67%', // 3:2 aspect ratio
                    backgroundColor: 'grey.200',
                    overflow: 'hidden',
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        textAlign: 'center',
                        px: 2,
                        fontWeight: 600,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      {image.title}
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
                    }}
                  >
                    {image.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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
                  aspectRatio: '3/2',
                  backgroundColor: 'grey.300',
                  backgroundImage: `url(${selectedImage.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  mb: 2,
                }}
              />
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
    </Box>
  );
};

export default Gallery;
