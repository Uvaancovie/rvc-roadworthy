// components/Testimonials.js
export default function Testimonials() {
    const testimonials = [
      {
        name: 'John Doe',
        feedback: 'The service was excellent! I got my vehicle certified in no time.',
        designation: 'Car Owner',
      },
      {
        name: 'Jane Smith',
        feedback: 'Very professional and thorough with the inspection process.',
        designation: 'Fleet Manager',
      },
      {
        name: 'Michael Brown',
        feedback: 'Highly recommend their services for quick and easy certification.',
        designation: 'Business Owner',
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg text-center">
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.feedback}"</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  