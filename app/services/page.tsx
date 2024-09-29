import React from 'react';
import Navbar from '../../components/Navbar'; // Ensure the correct path to your Navbar component

export default function ServicesPage() {
  return (
    <>
      <Navbar /> {/* This ensures the Navbar shows on the services page */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Comprehensive Vehicle Testing</h2>
            <p className="text-gray-300">
              We provide a range of services including roadworthy certifications, vehicle inspections, and brake and suspension testing.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-6 transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Registration Services</h2>
            <p className="text-gray-300">
              Change of ownership, license renewal, and more.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-6 transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Pre-Loading Inspection</h2>
            <p className="text-gray-300">
              Detailed vehicle assessment including brake tests and suspension checks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
