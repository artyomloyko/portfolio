import '@fontsource/mukta';
import '@/tailwind.css';

import Analytics from '@/components/analytics/analytics';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import LenisProvider from '@/components/providers/LenisProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { siteMetadata } from '@/constants/metadata';

export const metadata: Metadata = {
  title: siteMetadata.title.default,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.baseUrl),
  openGraph: {
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    locale: siteMetadata.locale,
    siteName: siteMetadata.title.default,
    type: 'website',
    url: './',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': '/api/rss',
    },
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col bg-white text-black antialiased dark:bg-black dark:text-white relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <span
            className="absolute bg-primary-500/10 rounded-full -z-10"
            style={{ width: '100vw', height: '100vw', top: '-30vw', right: '-50vw' }}
          />
          <Header />
          <LenisProvider>
            <div className="grow">{children}</div>
          </LenisProvider>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
