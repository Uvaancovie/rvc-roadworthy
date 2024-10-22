import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/single-truck.png')" }} // Use the correct path for the image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Mobile-Only Image (2.png) */}
      <div className="absolute top-0 left-0 p-4 flex flex-col space-y-2 md:hidden"> 
        {/* Ensure the image appears only on mobile screens */}
        
       
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full text-white">
        {/* Heading with animation */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown text-stone-50">
          Roadworthy Testing & Inspection
        </h1>

        {/* Subheading with animation */}
        <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
          Trusted, reliable roadworthy certification services
        </p>

        {/* Call to Action Button */}
        <a
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl transition duration-300 animate-bounceIn"
        >
          Book Now 
        </a>
      </div>
    </section>
  );
}
