'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 600 }}>
          KRM College
        </Typography>
      </Link>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} passHref legacyBehavior>
              <ListItemButton
                component="a"
                sx={{
                  textAlign: 'center',
                  backgroundColor: isActive(item.href) ? 'rgba(183, 28, 28, 0.08)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(183, 28, 28, 0.12)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: isActive(item.href) ? 'primary.main' : 'text.primary',
                    fontWeight: isActive(item.href) ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'white' : 'rgba(255, 255, 255, 0.95)',
          transition: 'all 0.3s',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: 50,
                    height: 50,
                    mr: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/logo.jpg"
                    alt="College Logo"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: { xs: '0.9rem', sm: '1.1rem' },
                    }}
                  >
                    Kedarnath Ramswaroop Mahavidyalaya
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.65rem', sm: '0.75rem' },
                    }}
                  >
                    Affiliated to Bundelkhand University, Jhansi
                  </Typography>
                </Box>
              </Box>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} passHref legacyBehavior>
                  <Button
                    component="a"
                    sx={{
                      color: isActive(item.href) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(item.href) ? 600 : 400,
                      borderBottom: isActive(item.href) ? '2px solid' : 'none',
                      borderBottomColor: 'primary.main',
                      borderRadius: 0,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(183, 28, 28, 0.04)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
