import Link from 'next/link';
import { useEffect } from 'react';

export default function AccreditationInfo() {
  // Optional: Animation on scroll effect can be added here with libraries like AOS (Animate on Scroll)

  return (
    <section className="py-16 bg-white text-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">
          Why Roadworthy Accreditation is Important
        </h2>

        {/* Why It's Important Flexbox */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 border-l-4 border-red-600 pl-4 transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-red-600 mb-4 animate-fadeInDown">Why Accreditation is Important</h3>
            <p className="text-gray-700">
              Roadworthy accreditation ensures that your vehicle meets safety standards, making the roads safer for
              everyone. It protects you from accidents caused by vehicle defects, ensures your car is legally compliant,
              and can save you from hefty fines.
            </p>
          </div>
          <div className="flex-1 border-l-4 border-red-600 pl-4 transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-red-600 mb-4 animate-fadeInDown">Why We Are the Best in Durban</h3>
            <p className="text-gray-700">
              We are the top choice for roadworthy testing in Durban, with years of experience and accreditations from
              SABS, SASSETA, and RMI. Our certified experts ensure fast, reliable, and trustworthy inspections, offering
              exceptional customer service and quick results.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 animate-bounceIn">Steps to Getting Accredited</h2>

        {/* Timeline for Steps */}
        <div className="relative border-l-4 border-red-600 mb-16">
          {/* Step 1 */}
          <div className="mb-10 ml-6 transition-all duration-500 hover:scale-105">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <h3 className="text-lg font-semibold text-white animate-fadeInUp">Step 1: Book an Appointment</h3>
            <p className="text-gray-700 mt-2">
              Schedule your roadworthy test at our accredited center in Westville, Durban.
            </p>
          </div>

          {/* Step 2 */}
          <div className="mb-10 ml-6 transition-all duration-500 hover:scale-105">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <h3 className="text-lg font-semibold text-white animate-fadeInUp">Step 2: Vehicle Inspection</h3>
            <p className="text-gray-700 mt-2">
              Bring your vehicle to our center for a thorough inspection by our certified technicians.
            </p>
          </div>

          {/* Step 3 */}
          <div className="mb-10 ml-6 transition-all duration-500 hover:scale-105">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <h3 className="text-lg font-semibold text-white animate-fadeInUp">Step 3: Pass or Fail</h3>
            <p className="text-gray-700 mt-2">
              If your vehicle passes the test, you will receive your accreditation. If it fails, we will provide you with
              a detailed report.
            </p>
          </div>

          {/* Step 4 */}
          <div className="mb-10 ml-6 transition-all duration-500 hover:scale-105">
            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <h3 className="text-lg font-semibold text-white animate-fadeInUp">Step 4: Accreditation</h3>
            <p className="text-gray-700 mt-2">
              Upon passing, you will be issued your roadworthy accreditation certificate.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp">Our Location</h2>

        {/* Google Map */}
        <div className="flex justify-center">
  <iframe
    className="w-full md:w-3/4 h-96 rounded-lg border-4 border-red-600 transition-all duration-500 hover:scale-105"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.401776478053!2d30.9765865!3d-29.9148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa1125f3e229%3A0x2a1d5fa1d9eec991!2sUnit%2029%20Jacobs%20Industrial%20Park%2C%20166%20Bluff%20Rd%2C%20Jacobs%2C%20Durban%2C%204052!5e0!3m2!1sen!2sza!4v1695826101837!5m2!1sen!2sza"
    allowFullScreen={true}
    loading="lazy"
    title="Unit 29 Jacobs Industrial Park"
  ></iframe>
</div>

      </div>
    </section>
  );
}
