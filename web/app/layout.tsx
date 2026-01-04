import type { Metadata } from 'next';
import { Poppins, Mona_Sans } from 'next/font/google';
import './globals.css';

// Primary Font: Poppins
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Secondary Font: Mona Sans
const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LandGit',
  description: 'LandGit - Your Git Landing Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tertiary Font: Monaspace (GitHub's code font) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fontsource/monaspace-neon@5.0.0/index.css"
        />
      </head>
      <body className={`${poppins.variable} ${monaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
