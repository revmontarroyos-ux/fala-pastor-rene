import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { ScrollProgress } from '@/components/ScrollProgress';
import { AnalyticsScripts } from '@/components/AnalyticsScripts';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ebook cristão',
    'estudo bíblico',
    'Sodoma e Gomorra',
    'santidade',
    'família cristã',
    'EBD',
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080706',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
