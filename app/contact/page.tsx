'use client';

import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';  // Ensure correct import

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        { name, email, message },
      ]);

      if (error) throw error;

      setSuccess('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Send us a message</h2>

            {/* Display Success or Error Message */}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-white">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Mobeni Test Centre Details */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Mobeni Test Centre</h2>
            <p className="text-gray-300 mb-4">You can also reach our Mobeni location for vehicle testing services:</p>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Telephone Number:</strong> 0314611069
              </li>
              <li>
                <strong>Email Address:</strong> <a href="mailto:vrcmobeni@gmail.com" className="text-red-600 hover:text-red-700">vrcmobeni@gmail.com</a> <br />
                <a href="mailto:Roadworthymobeni@gmail.com" className="text-red-600 hover:text-red-700">Roadworthymobeni@gmail.com</a>
              </li>
              <li>
                <strong>Address:</strong> 84 Lansdowne Road, Mobeni, 4026
              </li>
            </ul>

            {/* Google Map for Mobeni Test Centre */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg border-4 border-red-600 transition-all duration-500 hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.888924105435!2d30.99300431511403!3d-29.879092981958284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eaa160ca5e9a42f%3A0x35ad199f2cfa0d6b!2s84%20Lansdowne%20Rd%2C%20Mobeni%2C%20Durban%2C%204026%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1638860836092!5m2!1sen!2sza"
                allowFullScreen={true}
                loading="lazy"
                title="Mobeni Test Centre Location"
              ></iframe>
            </div>
          </div>

          {/* Kwazulu Test Centre Details */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Kwazulu Test Centre</h2>
            <p className="text-gray-300 mb-4">Feel free to reach out to us via phone, email, or visit our office:</p>
            <ul className="text-gray-300 space-y-3">
              <li>
                <strong>Telephone Number:</strong> 0314673608
              </li>
              <li>
                <strong>Email Address:</strong> <a href="mailto:Kwazulutc@gmail.com" className="text-red-600 hover:text-red-700">Kwazulutc@gmail.com</a>
              </li>
              <li>
                <strong>Address:</strong> Unit 29 Jacobs Industrial Park, 166 Bluff Road, Jacobs, 4052
              </li>
            </ul>

            {/* Google Map for Kwazulu Test Centre */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg border-4 border-red-600 transition-all duration-500 hover:scale-105"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.401776478053!2d30.9765865!3d-29.9148564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa1125f3e229%3A0x2a1d5fa1d9eec991!2sUnit%2029%20Jacobs%20Industrial%20Park%2C%20166%20Bluff%20Rd%2C%20Jacobs%2C%20Durban%2C%204052!5e0!3m2!1sen!2sza!4v1695826101837!5m2!1sen!2sza"
                allowFullScreen={true}
                loading="lazy"
                title="Unit 29 Jacobs Industrial Park"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
