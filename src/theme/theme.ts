// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';

// Studentvänligt modernt färgtema
const PRIMARY = '#2563eb'; // blå 600
const PRIMARY_DARK = '#1e40af';
const SECONDARY = '#22c55e'; // grön 500
const BACKGROUND = '#f7f9fc';
const PAPER = '#ffffff';
const TEXT_PRIMARY = '#0f172a';
const TEXT_SECONDARY = '#475569';

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
      dark: PRIMARY_DARK,
      light: '#60a5fa',
      contrastText: common.white,
    },
    secondary: {
      main: SECONDARY,
      contrastText: common.white,
    },
    background: {
      default: BACKGROUND,
      paper: PAPER,
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
    divider: 'rgba(15,23,42,0.08)'
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      fontSize: '3rem',
      lineHeight: 1.1,
      '@media (max-width:900px)': { fontSize: '2.25rem' },
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.375rem',
      lineHeight: 1.3,
    },
    body1: { fontSize: '1.05rem', lineHeight: 1.7 },
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          margin: '0 auto',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.8)',
          backdropFilter: 'saturate(180%) blur(10px)',
          borderBottom: '1px solid rgba(15,23,42,0.08)'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          padding: '10px 18px',
          textTransform: 'none',
        },
        containedPrimary: {
          boxShadow: '0 6px 16px rgba(37,99,235,0.25)',
          '&:hover': {
            boxShadow: '0 10px 24px rgba(37,99,235,0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 6px 24px rgba(2,6,23,0.06)',
          transition: 'transform .25s ease, box-shadow .25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 36px rgba(2,6,23,0.12)'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: TEXT_SECONDARY,
          textDecorationColor: 'rgba(15,23,42,0.2)'
        }
      }
    }
  }
});

export default theme;