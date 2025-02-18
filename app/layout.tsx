import '@fontsource/mukta';
import './tailwind.css';

// import Analytics from 'app/components/analytics/analytics';
import Footer from 'app/components/layouts/footer';
import Header from 'app/components/layouts/header';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { siteMetadata } from './components/metadata';

export const metadata: Metadata = {
  title: {
    template: '%s | Artyom Loiko',
    default: 'Artyom Loiko',
  },
  description: 'I build things for the web.',
  metadataBase: new URL(siteMetadata.baseUrl),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black antialiased dark:bg-black dark:text-white relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <span
            className="absolute bg-primary-500/15 rounded-full -z-10"
            style={{ width: '100vw', height: '100vw', top: '-30vw', right: '-50vw' }}
          />
          <Header />
          <LenisProvider>
            <div className="grow">{children}</div>
          </LenisProvider>
          <Footer />
          {/* {process.env.NODE_ENV === 'production' && <Analytics />} */}
        </ThemeProvider>
      </body>
    </html>
  );
}
