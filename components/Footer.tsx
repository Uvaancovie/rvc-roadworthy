import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons for social media

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          
          {/* Column 1: About Us and Kwazulu Test Centre */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              RVC Roadworthy provides trusted vehicle accreditation services approved by SABS, SASSETA, and RMI. We ensure that your vehicle meets all legal and safety standards.
            </p>
            <p className="text-gray-400 mt-4">
              <strong>Kwazulu Test Centre</strong><br />
              Telephone: 0314673608<br />
              Email: <a href="mailto:Kwazulutc@gmail.com" className="text-red-600 hover:text-red-700">Kwazulutc@gmail.com</a><br />
              Address: Unit 29 Jacobs Industrial Park, 166 Bluff Road, Jacobs, 4052
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#contact" className="hover:text-red-600">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:text-red-600">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms-of-service" className="hover:text-red-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Mobeni Test Centre and Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mobeni Test Centre</h3>
            <p className="text-gray-400">
              Telephone: 0314611069<br />
              Email: <a href="mailto:vrcmobeni@gmail.com" className="text-red-600 hover:text-red-700">vrcmobeni@gmail.com</a><br />
              Email: <a href="mailto:Roadworthymobeni@gmail.com" className="text-red-600 hover:text-red-700">Roadworthymobeni@gmail.com</a><br />
              Address: 84 Lansdowne Road, Mobeni, 4026
            </p>

            {/* Social Media */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} RVC Roadworthy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
