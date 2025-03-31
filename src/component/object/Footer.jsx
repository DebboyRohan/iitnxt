import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { logo } from "../../assets/asset.js";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 border-none">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between md:items-end items-center">
        {/* Address Section */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <p className="text-white">Contact : +918500980384</p>
          {/* <p className="text-white">City, State - 56789</p> */}
          <p className="text-white">Email: goiitnxt@gmail.com</p>
        </div>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Company Logo" className="h-40" />
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://www.facebook.com/share/p/17x6NGKZyk/"
            className="hover:text-blue-400"
          >
            <IconBrandFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com/iit_nxt/"
            className="hover:text-pink-400"
          >
            <IconBrandInstagram size={28} />
          </a>
          <a
            href="http://www.linkedin.com/in/iit-nxt-7404a3359"
            className="hover:text-blue-300"
          >
            <IconBrandLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} IITNxt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
