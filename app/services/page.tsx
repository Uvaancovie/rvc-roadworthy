'use client';

import React from 'react';
import { FaCar, FaTools, FaClipboardCheck, FaKey, FaCogs, FaWrench, FaBatteryFull, FaShieldAlt } from 'react-icons/fa'; // Importing icons
import { IconType } from 'react-icons'; // Importing IconType from 'react-icons'

// Define the types for the service props
interface ServiceCardProps {
  title: string;
  items: string[];
  Icon: IconType; // IconType from react-icons provides typing for icons
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, Icon }) => (
  <div className="border border-gray-300 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-red-500 group">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-red-600 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
    </div>
    <ul className="mt-4 text-gray-700 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-red-600 mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Define the type for the services array
interface Service {
  title: string;
  items: string[];
  Icon: IconType;
}

const services: Service[] = [
  {
    title: "Number Plates",
    items: ["Perspex and aluminium number plates on other vehicles"],
    Icon: FaCar,
  },
  {
    title: "Registration Services",
    items: ["Change of ownership and license renewal available"],
    Icon: FaKey,
  },
  {
    title: "Pre-Loading Inspection",
    items: [
      "Detailed assessment of the vehicle",
      "Photographs of all defects",
      "Additional checks to the roadworthy test",
      "Brake test report included",
    ],
    Icon: FaClipboardCheck,
  },
  {
    title: "Brake and Suspension Testing",
    items: [
      "Included additional testing to the roadworthy checks",
      "Included brake test report",
      "Visual brake inspection",
      "Indicate wear on suspension and steering components",
    ],
    Icon: FaCogs,
  },
  {
    title: "Electrical Diagnostics",
    items: ["Report information on all systems and any malfunctioning of any electronic system"],
    Icon: FaBatteryFull,
  },
  {
    title: "Free Safety Test",
    items: [
      "Offered before the festive season",
      "10 most critical safety items will be assessed",
    ],
    Icon: FaShieldAlt,
  },
  {
    title: "Roadworthy Testing",
    items: [
      "Required annually for heavy motor vehicles exceeding 3500 kgs",
      "Required for change of ownership",
      "Taxis annually, buses every six months",
    ],
    Icon: FaTools,
  },
  {
    title: "Multi-Point Check",
    items: [
      "Included additional checks to the roadworthy test",
      "Recommended on private purchase",
      "Required for private to private finance",
    ],
    Icon: FaWrench,
  },
  {
    title: "Pre-Purchase Condition Report",
    items: [
      "Detailed condition assessment to the roadworthy test",
      "Photographs of all defects",
      "Included electronic diagnostics report",
    ],
    Icon: FaClipboardCheck,
  }
];

export default function ServicesPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-12 animate-fade-in">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
