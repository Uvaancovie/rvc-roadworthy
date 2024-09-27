import React from 'react';
import Navbar from '../../components/Navbar'; // Ensure this path points to your Navbar component

export default function ContactPage() {
  return (
    <>
      <Navbar /> {/* Adds the Navbar to the contact page */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

          {/* Contact Form and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                    rows={5}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">Feel free to reach out to us via phone, email, or visit our office:</p>
              <ul className="text-gray-300 space-y-3">
                <li>
                  <strong>Address:</strong> 123 Roadworthy St, Durban, South Africa
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:info@rvcroadworthy.com" className="text-red-600 hover:text-red-700">info@rvcroadworthy.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> +27 123 456 7890
                </li>
                <li>
                  <strong>Operating Hours:</strong> Mon-Fri: 9am - 5pm
                </li>
              </ul>

              {/* Optional: Google Map */}
              <div className="mt-8">
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.401776478053!2d30.952634715114237!3d-29.821215981955284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eaa130caa802233%3A0x355992a935c4db8b!2sWestville%2C%20Durban!5e0!3m2!1sen!2sza!4v1638860740584!5m2!1sen!2sza"
                  allowFullScreen={true}
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
