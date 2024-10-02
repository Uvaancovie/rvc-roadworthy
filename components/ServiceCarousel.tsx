'use client';

import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from '@splidejs/react-splide';
import multiPointCheck from '../public/multi-point-check.png';
const services = [
  {
    image: '/brake-suspension-test.png',
    title: 'Brake and Suspension Test',
    description: 'Included additional checks and brake test report.',
  },
  {
    image: '/change-ownership.png',
    title: 'Change of Ownership',
    description: 'We offer change of ownership and license renewal services.',
  },
  {
    image: '/electronic-diagnostic.png',
    title: 'Electronic Diagnostics',
    description: 'We provide a detailed report on all systems and malfunctioning.',
  },
  
  {
    image: '/number-plates.png',
    title: 'Number Plates',
    description: 'Perspex and aluminium number plates available.',
  },
  {
    image: '/pre-purchase-condition-report.png',
    title: 'Pre-Purchase Condition Report',
    description: 'Detailed condition assessment with electronic diagnostics report.',
  },
  {
    image: '/preloading-inspection.png',
    title: 'Preloading Inspection',
    description: 'Photographs of defects and brake test report included.',
  },
  {
    image: '/roadworthy-testing.png',
    title: 'Roadworthy Testing',
    description: 'Required annually for heavy motor vehicles exceeding 3500 kgs.',
  },
];

export default function ServiceCarousel() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Our Services</h2>

        {/* Splide Carousel */}
        <Splide
          options={{
            type: 'loop',
            perPage: 3, // Display 3 items at once
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            gap: '1rem',
            breakpoints: {
              1024: { perPage: 2 }, // For tablets
              640: { perPage: 1 },  // For mobile devices
            },
          }}
        >
          {services.map((service, index) => (
            <SplideSlide key={index}>
              <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-4 w-full h-64 object-cover rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
