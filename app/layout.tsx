import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://recomodeling.com'),
  title: 'Reco Modeling | Professional Model Management & Talent Representation',
  description:
    'Reco Modeling offers personalized model management, talent representation, portfolio development, and career guidance for aspiring and established models in fashion, editorial, and commercial media.',
  generator: 'v0.app',
  keywords: [
    'model management',
    'talent representation',
    'fashion models',
    'editorial modeling',
    'commercial bookings',
    'model agency',
    'Reco Modeling',
    'portfolio development',
    'model career',
  ],
  authors: [{ name: 'Reco Modeling', url: 'https://recomodeling.com' }],
  creator: 'Reco Modeling',
  publisher: 'Reco Modeling',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://recomodeling.com',
    siteName: 'Reco Modeling',
    title: 'Reco Modeling | Professional Model Management & Talent Representation',
    description:
      'Personalized model management and talent representation — helping models achieve their fullest potential in fashion, advertising, and global media.',
    images: [
      {
        url: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Reco Modeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@recomodeling',
    creator: '@recomodeling',
    title: 'Reco Modeling | Professional Model Management & Talent Representation',
    description:
      'Personalized model management and talent representation — helping models achieve their fullest potential in fashion, advertising, and global media.',
    images: [
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg',
    ],
  },
  alternates: {
    canonical: 'https://recomodeling.com',
  },
  icons: {
    icon: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png',
    apple: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Reco Modeling',
    description:
      'Professional model management and talent representation agency offering personalized career development for models in fashion, editorial, and commercial media.',
    url: 'https://recomodeling.com',
    image:
      'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Reco%20Modeling/1776765160255-logo_white.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'brow5187+reco@gmail.com',
      contactType: 'customer service',
    },
    sameAs: [],
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#121212" />
        <title>Reco Modeling | Professional Model Management & Talent Representation</title>
        <meta
          name="description"
          content="Reco Modeling offers personalized model management, talent representation, portfolio development, and career guidance for aspiring and established models in fashion, editorial, and commercial media."
        />
        <link rel="canonical" href="https://recomodeling.com" />
        <link
          rel="icon"
          href="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-uploads/uploads/favicon/varakit-favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://recomodeling.com" />
        <meta
          property="og:title"
          content="Reco Modeling | Professional Model Management & Talent Representation"
        />
        <meta
          property="og:description"
          content="Personalized model management and talent representation — helping models achieve their fullest potential in fashion, advertising, and global media."
        />
        <meta
          property="og:image"
          content="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reco Modeling | Professional Model Management & Talent Representation"
        />
        <meta
          name="twitter:description"
          content="Personalized model management and talent representation — helping models achieve their fullest potential in fashion, advertising, and global media."
        />
        <meta
          name="twitter:image"
          content="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Reco%20Modeling/1776765189289-4-1.jpg"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
