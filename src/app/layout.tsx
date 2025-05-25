import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/common/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Charley Blog',
  description: 'Charley Blog',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 py-12 max-w-4xl">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
