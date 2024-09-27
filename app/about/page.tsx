'use client'; // Client-side rendering for interactivity

import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path to your Navbar component

export default function AboutPage() {
  return (
    <>
      <Navbar /> {/* Include the Navbar on the About page */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Welcome to Vehicle Roadworthy Centre</h1>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Leading the Roadworthy Industry in KwaZulu-Natal
            </h2>
            <p className="text-gray-300 mb-6">
              For more than 30 years, Vehicle Roadworthy Centre has been leading the way in the roadworthy industry in
              KwaZulu-Natal. Accredited by AA, Vehicle Roadworthy Centre has 2 branches situated in Durban, which offer
              quality and professional roadworthy testing and related services for all types of motor vehicles.
            </p>
            <p className="text-gray-300 mb-6">
              We provide top-notch vehicle roadworthy inspections, ensuring that vehicles on the road meet the highest safety
              standards. Our goal is to offer reliable and efficient testing services for every customer, giving them peace of
              mind while on the road.
            </p>
            <p className="text-gray-300">
              The Vehicle Roadworthy Centre looks forward to being of service to you! Whether you're a commercial fleet owner,
              or an individual vehicle owner, we're here to assist with all your roadworthy needs.
            </p>
          </div>

          {/* Image or Visual Element */}
          <div className="mt-12 flex justify-center">
            <img
              src="/public/images/roadworthy-about.jpg" // Ensure this path is correct
              alt="Vehicle Roadworthy Centre"
              className="rounded-lg shadow-lg w-full md:w-3/4 border-4 border-red-600"
            />
          </div>
        </div>
      </section>
    </>
  );
}
