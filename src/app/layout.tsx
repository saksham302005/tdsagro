import type { Metadata, Viewport } from 'next';
import './globals.css';
import { COMPANY_INFO } from '@/data/company';

export const viewport: Viewport = {
  themeColor: '#072418',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'TDS AGRO | Import, Export & Solar-Based Business Solutions',
  description:
    'TDS AGRO (TDS Agro Producer Company Limited) delivers import, export and solar-based business solutions focused on sustainable growth, quality products and reliable services across Uttar Pradesh.',
  keywords: [
    'TDS AGRO',
    'TDS Agro Producer Company Limited',
    'tdsagro',
    'tdsagro.in',
    'Solar energy company in Uttar Pradesh',
    'Rooftop solar installation',
    'PM Surya Ghar subsidy Uttar Pradesh',
    'Residential solar system Fatehpur',
    'Commercial solar power plants UP',
    'On-grid solar installation',
    'Net metering solar Uttar Pradesh',
  ],
  authors: [{ name: 'TDS AGRO' }],
  creator: 'TDS AGRO',
  publisher: 'TDS AGRO PRODUCER COMPANY LIMITED',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tdsagro.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TDS AGRO | Sustainable Energy & Solar Solutions',
    description:
      'Import, export and solar-based business solutions focused on sustainable growth, quality products and reliable services.',
    url: 'https://tdsagro.in',
    siteName: 'TDS AGRO',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/rooftop_solar.jpg',
        width: 1200,
        height: 630,
        alt: 'TDS AGRO Solar Energy Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS AGRO | Clean Solar Power',
    description:
      'Smart rooftop solar installations with PM Surya Ghar subsidies and DISCOM net metering.',
    images: ['/rooftop_solar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TDS AGRO',
    alternateName: 'TDS AGRO PRODUCER COMPANY LIMITED',
    image: '/rooftop_solar.jpg',
    '@id': 'https://tdsagro.in',
    url: 'https://tdsagro.in',
    telephone: COMPANY_INFO.phone,
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.9262,
      longitude: 80.8131,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-solar-gold selection:text-forest-950 font-sans">
        {children}
      </body>
    </html>
  );
}
