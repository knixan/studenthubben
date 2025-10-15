// src/app/layout.tsx
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'StudentHubben - Nätverket för Studenter, Kårer och Näringslivet',
  description: 'Sveriges Digitala Studentcommunity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}