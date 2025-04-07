import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">
              Contact Us
            </h3>
            <div className="flex items-center space-x-3">
              <IconPhone className="text-indigo-400" size={20} />
              <a
                href="tel:+918500980384"
                className="hover:text-indigo-300 transition-colors"
              >
                +91 85009 80384
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <IconMail className="text-indigo-400" size={20} />
              <a
                href="mailto:goiitnxt@gmail.com"
                className="hover:text-indigo-300 transition-colors"
              >
                goiitnxt@gmail.com
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/iitnxtlogo.png"
              alt="IITNXT Logo"
              className="h-32 w-auto object-contain hover:scale-105 transition-transform"
            />
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-xl font-semibold text-indigo-300">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/share/18u3BLnuBN/"
                className="bg-gray-700 hover:bg-indigo-600 p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={22} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/iit_nxt/"
                className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={22} className="text-white" />
              </a>
              <a
                href="http://www.linkedin.com/in/iit-nxt-7404a3359"
                className="bg-gray-700 hover:bg-blue-500 p-2 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} IITNXT. All rights reserved.</p>
          <p className="mt-1">Empowering the next generation of innovators</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
