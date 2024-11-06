'use client'

import { useState } from 'react';

const FaqAccordion = () => {
  // State to track which question is active
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Questions and Answers data
  const faqData = [
    {
      question: 'Why is roadworthy accreditation important?',
      answer: 'Roadworthy accreditation ensures that your vehicle meets safety standards, making the roads safer for everyone. It protects you from accidents caused by vehicle defects, ensures your car is legally compliant, and can save you from hefty fines.',
    },
    {
      question: 'What are the benefits of choosing VRC ?',
      answer: 'We are the top choice for roadworthy testing in Durban, with years of experience and accreditations from SABS, Proudly South African, Department of Transport, AA , and RMI. Our certified experts ensure fast, reliable, and trustworthy inspections, offering exceptional customer service and quick results.',
    },
    {
      question: 'How do I get roadworthy accredited?',
      answer: 'The process is simple. First, book an appointment with us. Next, bring your vehicle to our center for inspection. Upon passing the test, you will receive your accreditation.',
    },
  ];

  // Toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle current accordion
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion FAQ */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 bg-black text-white font-bold hover:bg-black-600 transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl text-red-600">{item.question}</span>
                  <span>
                    {activeIndex === index ? '-' : '+'} {/* Toggle icon */}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-black text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
