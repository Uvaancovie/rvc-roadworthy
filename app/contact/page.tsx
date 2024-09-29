import React from 'react';
import Navbar from '../../components/Navbar'; // Ensure this path points to your Navbar component

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

          {/* Contact Form and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Message</label>
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

              {/* Contact for VRC Mobeni */}
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>
                  <strong>Work Number:</strong> 0314611069
                </li>
                <li>
                  <strong>Business Email:</strong> <a href="mailto:vrcmobeni@gmail.com" className="text-red-600 hover:text-red-700">vrcmobeni@gmail.com</a>, <a href="mailto:Roadworthymobeni@gmail.com" className="text-red-600 hover:text-red-700">Roadworthymobeni@gmail.com</a>
                </li>
                <li>
                  <strong>Address:</strong> 84 Lansdowne Road, Mobeni, 4026
                </li>
              </ul>

              {/* Contact for KwaZulu Test Centre */}
              <h2 className="text-xl font-bold text-red-600 mb-4">KwaZulu Test Centre</h2>
              <ul className="text-gray-300 space-y-3">
                <li>
                  <strong>Phone Number:</strong> 0314673608
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:Kwazulutc@gmail.com" className="text-red-600 hover:text-red-700">Kwazulutc@gmail.com</a>
                </li>
                <li>
                  <strong>Address:</strong> Unit 29 Jacobs Industrial Park, 166 Bluff Road, Jacobs, 4052
                </li>
              </ul>

              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.401776478053!2d30.9765865!3d-29.9148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa1125f3e229%3A0x2a1d5fa1d9eec991!2sUnit%2029%20Jacobs%20Industrial%20Park%2C%20166%20Bluff%20Rd%2C%20Jacobs%2C%20Durban%2C%204052!5e0!3m2!1sen!2sza!4v1695826101837!5m2!1sen!2sza"
                  allowFullScreen={true}
                  loading="lazy"
                  title="KwaZulu Test Centre Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
