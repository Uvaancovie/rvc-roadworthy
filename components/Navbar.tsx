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
    <nav className="bg-white text-black p-4 shadow-lg"> {/* Navbar background white, text black */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logos Section */}
        <Link href="/">
          <div className="flex items-center space-x-4"> {/* Flexbox to place logos next to each other */}
            <Image 
              src="/1.jpg"  // Path to the first logo in the public folder
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
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700">
            About
          </Link>
          <Link href="/services" className="text-black hover:text-gray-700">
            Services
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
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
        <div className="md:hidden bg-white text-black">
          <Link href="/" className="block py-2 px-4 hover:bg-gray-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-gray-200">
            About
          </Link>
          <Link href="/services" className="block py-2 px-4 hover:bg-gray-200">
            Services
          </Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-gray-200">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
