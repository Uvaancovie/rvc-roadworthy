'use client';

import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/Footer'; // Import the Footer (make sure you've created this component)
import './globals.css';
import { Analytics } from "@vercel/analytics/react" 
import { SpeedInsights } from "@vercel/speed-insights/next"// Import global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800"> {/* Change to white background and grey text */}
        <Navbar /> {/* Navbar included for all pages */}
        
        <main>
        {children}
        <SpeedInsights />
        <Analytics />
        
        
        </main> {/* This renders the content of each page */}
        
        <Footer /> {/* Footer included for all pages */}
      </body>
    </html>
  );
}
