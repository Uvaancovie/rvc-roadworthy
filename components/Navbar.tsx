'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logos Section */}
        <Link href="/">
          <div className="flex items-center space-x-4"> {/* Flexbox to place logos next to each other */}
            <Image 
              src="/1.png"  // Path to the first logo in the public folder
              alt="Logo 1"
              width={50}  // Adjust width and height as necessary
              height={50}
              className="h-auto w-auto"
            />
            <Image 
              src="/2.png"  // Path to the second logo in the public folder
              alt="Logo 2"
              width={50}
              height={50}
              className="h-auto w-auto"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <Link href="/" className="block py-2 px-4 hover:bg-red-600">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-red-600">
            About
          </Link>
          <Link href="/services" className="block py-2 px-4 hover:bg-red-600">
            Services
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-red-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
