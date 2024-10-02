import React from 'react';

export default function Contact() {
  return (
    <section className="py-16 bg-white text-black" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Get In Touch</h2>
        <p className="text-gray-900 text-center mb-12">
          Have questions? Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                rows={5} // Correcting here: rows as a number
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Or reach us at: <br />
            Phone: <a href="tel:+1234567890" className="text-red-600">0314611069</a> <br />
            Email: <a href="mailto:info@rvcrvroadworthy.com" className="text-red-600">vrcmobeni@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
