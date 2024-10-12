'use client';

import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from '@splidejs/react-splide';

const services = [
  {
    image: '/roadworthy-testing.png',
    title: 'Roadworthy Testing',
    description: 'Required annually for heavy motor vehicles exceeding 3500 kgs.',
  },
  {
    image: '/multi-pointcheck.png',
    title: 'Multi-Point Check',
    description: 'Included additional checks to the roadworthy test.',
  },
  {
    image: '/pre-purchase-condition-report.png',
    title: 'Pre-Condition Report',
    description: 'Detailed condition assessment with electronic diagnostics report.',
  },
  {
    image: '/electronic-diagnostic.png',
    title: 'Electronic Diagnostics',
    description: 'We provide a detailed report on all systems and malfunctioning.',
  },
  {
    image: '/brake-suspension-test.png',
    title: 'Brake and Suspension Test',
    description: 'Included additional checks and brake test report.',
  },
  {
    image: '/preloading-inspection.png',
    title: 'Preloading Inspection',
    description: 'Photographs of defects and brake test report included.',
  },
  {
    image: '/change-ownership.png',
    title: 'Registration Services',
    description: 'We offer change of ownership and license renewal services.',
  },
  {
    image: '/number-plates.png',
    title: 'Number Plates',
    description: 'Perspex and aluminium number plates available.',
  },
  {
    image: '/free-safety-test.png',
    title: 'Free Safety Test',
    description: 'Offered before the festive season, 10 most critical safety items assessed.',
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
            perPage: 3,
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            gap: '1rem',
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
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
