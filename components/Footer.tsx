import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons for social media

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          
          {/* Column 1: About Us */}
         {/* Column 3: Mobeni Test Centre */}
         <div>
            <h3 className="text-xl font-semibold mb-4"><strong>Mobeni Test Centre</strong></h3>
            <p className="text-gray-400 mb-4">
              <strong>Telephone Number:</strong> 0314611069
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Email Address:</strong> <a href="mailto:vrcmobeni@gmail.com" className="text-red-600 hover:text-red-700">vrcmobeni@gmail.com</a> <br />
              <a href="mailto:Roadworthymobeni@gmail.com" className="text-red-600 hover:text-red-700">Roadworthymobeni@gmail.com</a>
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Address:</strong> 84 Lansdowne Road, Mobeni, 4026
            </p>
          </div>
        </div>

          {/* Column 2: Kwazulu Test Centre */}
          <div>
            <h3 className="text-xl font-semibold mb-4"><strong>Kwazulu Test Centre</strong></h3>
            <p className="text-gray-400 mb-4">
              <strong>Telephone Number:</strong> 0314673608
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Email Address:</strong> <a href="mailto:Kwazulutc@gmail.com" className="text-red-600 hover:text-red-700">Kwazulutc@gmail.com</a>
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Address:</strong> Unit 29 Jacobs Industrial Park, 166 Bluff Road, Jacobs, 4052
            </p>
          </div>

          

        {/* Social Media */}
        <div className="text-center text-gray-500 mb-8">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
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

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} VRC Roadworthy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
