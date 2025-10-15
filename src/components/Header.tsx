// src/components/Header.tsx
"use client";

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery, Switch } from '@mui/material';
import { ThemeContext } from './ThemeRegistry';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navItems = [
  { name: 'För Studenter', href: '#studenter' },
  { name: 'För Kårer & Föreningar', href: '#korer' },
  { name: 'För Arbetsgivare', href: '#arbetsgivare' },
  { name: 'Hjälp', href: '#' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { mode, toggle } = useContext(ThemeContext);
  // Använd MUI för att upptäcka mobil storlek (standard brytpunkt är 'md' = 900px, men 768px är närmare din CSS)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: theme.palette.text.primary, fontWeight: 800 }}>
        StudentHubben
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#" sx={{ textAlign: 'center' }}>
            <Button variant="contained" endIcon={<LoginIcon />} sx={{ 
              borderRadius: '999px', 
              fontWeight: 700,
              padding: '10px 16px',
              width: '100%',
            }}>
              Logga In / Registrera
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mt: 2 }}>
            {mode === 'dark' ? (
              <Brightness2Icon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
            ) : (
              <Brightness7Icon sx={{ color: theme.palette.warning?.main || '#fbbf24', mr: 1 }} />
            )}
            <Switch
              checked={mode === 'dark'}
              onChange={toggle}
              color="default"
              inputProps={{ 'aria-label': 'toggle theme' }}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
  <AppBar component="header" position="sticky" 
    sx={{ 
      backgroundColor: 'rgba(255,255,255,0.8)',
      color: theme.palette.text.primary,
      backdropFilter: 'saturate(180%) blur(10px)',
      borderBottom: '1px solid rgba(15,23,42,0.08)'
    }}>
      <Container maxWidth="lg" component={Toolbar} sx={{ justifyContent: 'space-between', padding: 0 }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 3, color: theme.palette.text.primary }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Link
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: mode === 'dark' ? '#222831' : theme.palette.text.primary,
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '1.5rem',
            flexGrow: isMobile ? 1 : 0,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Image src="/studenthubben-logga.png" alt="StudentHubben" width={32} height={32} priority />
          <span style={{ color: mode === 'dark' ? '#222831' : theme.palette.text.primary }}>StudentHubben</span>
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component="a"
              href={item.href}
              sx={{ 
                color: mode === 'dark' ? '#222831' : theme.palette.text.primary,
                textTransform: 'none', 
                padding: '8px 12px', 
                borderRadius: '999px',
                '&:hover': { backgroundColor: 'rgba(15,23,42,0.06)' }
              }}
            >
              {item.name}
            </Button>
          ))}
          <Button
            component="a"
            href="#"
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 16px',
              fontWeight: 700,
            }}
          >
            Logga In / Registrera
          </Button>
          <Switch
            checked={mode === 'dark'}
            onChange={toggle}
            color="default"
            inputProps={{ 'aria-label': 'toggle theme' }}
            sx={{ ml: 2 }}
          />
        </Box>
      </Container>

      {/* Mobilmeny Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // För bättre prestanda på mobilen
        }}
        sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, pl: 2 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}