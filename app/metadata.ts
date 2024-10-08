// app/metadata.ts

export const metadata = {
    title: 'RVC Roadworthy Accreditation',
    description: 'Get your vehicle accredited with trusted, reliable roadworthy certification services.',
    applicationName: 'RVC Roadworthy',
    keywords: ['vehicle accreditation', 'roadworthy certification', 'RVC Roadworthy', 'car inspection', 'certification renewal'],
    authors: [{ name: 'RVC Roadworthy', url: 'https://www.rvc-roadworthy.com' }],
    openGraph: {
      title: 'RVC Roadworthy Accreditation',
      description: 'Offering trusted, reliable roadworthy certification services for all types of vehicles.',
      url: 'https://www.rvc-roadworthy.com',
      siteName: 'RVC Roadworthy',
      images: [
        {
          url: '/public/images/roadworthy-og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'RVC Roadworthy Vehicle Accreditation',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rvcroadworthy',
      title: 'RVC Roadworthy Accreditation',
      description: 'Reliable roadworthy certification services for your vehicle.',
      images: '/public/images/roadworthy-og-image.jpg',
    },
  };
  
  export const viewport = {
    width: 'device-width',
    initialScale: 1,
  };
  