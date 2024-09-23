import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts using the `next/font/local`
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "RVC Roadworthy Accreditation",
  description: "Get your vehicle accredited with trusted, reliable roadworthy certification services.",
  applicationName: "RVC Roadworthy",
  generator: "Next.js",
  keywords: ["vehicle accreditation", "roadworthy certification", "RVC Roadworthy", "car inspection", "certification renewal"],
  authors: [{ name: "RVC Roadworthy", url: "https://www.rvc-roadworthy.com" }],
  creator: "RVC Roadworthy Team",
  openGraph: {
    title: "RVC Roadworthy Accreditation",
    description: "Offering trusted, reliable roadworthy certification services for all types of vehicles.",
    url: "https://www.rvc-roadworthy.com",
    siteName: "RVC Roadworthy",
    images: [
      {
        url: "/public/images/roadworthy-og-image.jpg", // Add an Open Graph image for social sharing
        width: 1200,
        height: 630,
        alt: "RVC Roadworthy Vehicle Accreditation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rvcroadworthy", // Replace with your actual Twitter handle
    title: "RVC Roadworthy Accreditation",
    description: "Reliable roadworthy certification services for your vehicle.",
    images: "/public/images/roadworthy-og-image.jpg",
  },
};

// Separate viewport configuration
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
