'use client';

import Navbar from '../components/Navbar';
import './globals.css'; // Import the global styles here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
         {/* Navbar included for all pages */}
        <main>{children}</main> {/* This renders the content of each page */}
      </body>
    </html>
  );
}
