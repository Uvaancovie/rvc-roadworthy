import Link from 'next/link';
import { CalendarDaysIcon, InformationCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Updated for Heroicons v2

export default function Welcome() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Welcome to VRC Roadworthy
        </h2>
        <p className="text-gray-300 mb-6">
   For more than 30 years, Vehicle Roadworthy Centre has been leading the way in the roadworthy industry in KwaZulu-Natal. Accredited by AA, Vehicle Roadworthy Centre has 2 branches situated in Durban, which offer quality and professional roadworthy testing and related services for all types of motor vehicles.
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Booking Card */}
          <div className="bg-black border-2 border-red-600 p-8 shadow-lg rounded-lg" style={{ borderRadius: '5px' }}>
            <CalendarDaysIcon className="w-12 h-12 text-red-600 mx-auto mb-4" /> {/* Booking Icon */}
            <h3 className="text-2xl font-bold text-white mb-4">
              Book Your Appointment
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule your vehicle roadworthy check today and ensure that your vehicle is safe for the road. Our team of professionals will assist you through every step of the process to guarantee your vehicle meets all required standards.
            </p>
            <Link href="/booking" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full">
              Book Now
            </Link>
          </div>

          {/* About Us Card */}
          <div className="bg-black border-2 border-red-600 p-8 shadow-lg rounded-lg" style={{ borderRadius: '5px' }}>
            <InformationCircleIcon className="w-12 h-12 text-red-600 mx-auto mb-4" /> {/* About Us Icon */}
            <h3 className="text-2xl font-bold text-white mb-4">
              About Us
            </h3>
            <p className="text-gray-300 mb-6">
              RVC Roadworthy has been providing reliable vehicle certification services for over a decade. Our mission is to help keep you safe on the road with our trusted and efficient certification process.
              Learn more about our story, values, and dedication to vehicle safety.
            </p>
            <Link href="/about" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full">
              Learn More
            </Link>
          </div>

          {/* Services Card */}
          <div className="bg-black border-2 border-red-600 p-8 shadow-lg rounded-lg" style={{ borderRadius: '5px' }}>
            <Cog6ToothIcon className="w-12 h-12 text-red-600 mx-auto mb-4" /> {/* Services Icon */}
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Services
            </h3>
            <p className="text-gray-300 mb-6">
              We provide a range of services including roadworthy certifications, vehicle inspections, and certification renewals. Our expert team is dedicated to making sure your vehicle meets all necessary safety and legal standards.
              Explore all the services we offer to help keep your vehicle compliant and safe.
            </p>
            <Link href="/services" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
