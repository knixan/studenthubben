
'use client';

import React, { createContext, useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import baseTheme from '@/theme/theme';

const lightTheme = baseTheme;
const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa',
    },
    secondary: {
      main: '#4ade80',
    },
    background: {
      default: '#0a1120', 
      paper: '#16213a',  
    text: {
      primary: '#f8fafc', 
      secondary: '#b6c2d6',
    },
    divider: 'rgba(248,250,252,0.12)'
  },
  components: {
    ...baseTheme.components,
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10,17,32,0.98)', 
          color: '#f8fafc',
          backdropFilter: 'saturate(180%) blur(10px)',
          borderBottom: '1px solid rgba(248,250,252,0.12)'
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#16213a',
          color: '#f8fafc',
          boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
          transition: 'transform .25s ease, box-shadow .25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.3)'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#60a5fa',
          '&:hover': { color: '#f8fafc' }
        }
      }
    }
  }
});

export const ThemeContext = createContext({
  mode: 'light',
  toggle: () => {},
});
type Props = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: Props) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  const themeObj = mode === 'light' ? lightTheme : darkTheme;
  return (
    <AppRouterCacheProvider>
      <ThemeContext.Provider value={{ mode, toggle }}>
        <ThemeProvider theme={themeObj}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </AppRouterCacheProvider>
  );
}
