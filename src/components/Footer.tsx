// src/components/Footer.tsx
'use client';

import { Container, Box, Typography, Link, List, ListItem, Grid, useTheme } from '@mui/material';

export function Footer() {
    const theme = useTheme();

    const footerColumns = [
        {
            title: 'StudentHubben',
            links: [
                { name: 'Om Oss', href: '#' },
                { name: 'Kontakta Oss', href: '#' },
                { name: 'Press & Media', href: '#' },
                { name: 'Karriär på Hubben', href: '#' },
            ],
        },
        {
            title: 'Tjänster',
            links: [
                { name: 'Studentprofil', href: '#studenter' },
                { name: 'Kårverktyg', href: '#korer' },
                { name: 'Arbetsgivareportalen', href: '#arbetsgivare' },
                { name: 'Utbildningssamarbeten', href: '#' },
            ],
        },
        {
            title: 'Juridiskt',
            links: [
                { name: 'Användarvillkor', href: '#' },
                { name: 'Integritetspolicy', href: '#' },
                { name: 'Cookie-inställningar', href: '#' },
                { name: 'Rapportera Missbruk', href: '#' },
            ],
        },
    ];

    return (
        <Box 
            component="footer" 
            sx={{ 
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderTop: `1px solid ${theme.palette.divider}`,
                paddingY: '40px', 
                marginTop: 'auto',
                backdropFilter: 'saturate(180%) blur(8px)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 3 }}>
                    {/* Skapa kolumnerna med Grid-komponenten */}
                    {footerColumns.map((column) => (
                        <Grid component="div" key={column.title} sx={{ width: { xs: '100%', sm: '50%', md: '33.3333%' } }}>
                            <Typography variant="h4" component="h4" sx={{ color: theme.palette.text.primary, mb: 1.5, fontWeight: 700 }}>
                                {column.title}
                            </Typography>
                            <List disablePadding>
                                {column.links.map((link) => (
                                    <ListItem disablePadding key={link.name} sx={{ paddingY: 0.5 }}>
                                        <Link 
                                            href={link.href} 
                                            color="text.secondary" 
                                            underline="hover" 
                                            sx={{ 
                                                display: 'block', 
                                                transition: 'color .2s ease',
                                                '&:hover': { color: 'text.primary' } 
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    ))}
                </Grid>

                {/* Nedre delen av footern */}
                <Box sx={{ 
                    borderTop: `1px solid ${theme.palette.divider}`,
                    paddingTop: '20px', 
                    marginTop: '20px', 
                    textAlign: 'center', 
                    color: theme.palette.text.secondary, 
                    fontSize: '0.9em' 
                }}>
                    <Typography component="p" variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        © 2025 StudentHubben. Byggt för studentvärlden.
                    </Typography>
                    <Typography component="p" variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                        Kod och design av <Link href="https://kodochdesign.se" color={theme.palette.text.secondary} underline="hover">Josefine Eriksson</Link>.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}