'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          About Vehicle Roadworthy Centre
        </h1>

        {/* Flexbox layout for text and logos */}
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Text Section with Border */}
          <div className="md:w-2/3 border border-gray-300 rounded-lg p-6 shadow-md">
            <p className="text-gray-700 mb-4">
              Vehicle Roadworthy Centre is a privately owned vehicle testing business based in KwaZulu-Natal. Founded in 1992, it became well-known as a key player in the industry. Vehicle Roadworthy Centre has 2 branches which are situated with strategic positions in Durban and employ 20 members of staff.
            </p>
            <p className="text-gray-700 mb-4">
              Vehicle Roadworthy Centre is accredited by AA, RMI, SANS, and The Department of Transport. We operate as a proudly South African organization which has received numerous commendations for our services over the years.
            </p>
            <p className="text-gray-700 mb-4">
              From the time of inception to the current date, we continue to provide professional roadworthy testing, and added-value services for the convenience of the public.
            </p>
          </div>

          {/* Logos Section with Border */}
          <div className="flex flex-wrap justify-center md:w-1/3 space-x-4 space-y-4 border border-gray-300 rounded-lg p-6 shadow-md">
            <div className="w-1/2 md:w-auto">
              <Image
                src="/rmi-logo.png"  // Path to your logo in the public folder
                alt="RMI Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="w-1/2 md:w-auto">
              <Image
                src="/SABS_logo.png"  // Path to your logo in the public folder
                alt="SABS Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            
            <div className="w-1/2 md:w-auto">
              <Image
                src="/2.png"  // Path to your logo in the public folder
                alt="AA Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            <div className="w-1/2 md:w-auto">
              <Image
                src="/proudly-southafrica.png"  // Path to your logo in the public folder
                alt="AA Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            <div className="w-1/2 md:w-auto">
              <Image
                src="/department-transport.png"  // Path to your logo in the public folder
                alt="AA Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
