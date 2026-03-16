import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur border-t border-white/10 text-gray-400 py-12 mt-16">

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Movie<span className="text-red-500">Hub</span>
          </h1>

          <p className="mt-3 text-sm leading-relaxed">
            Watch the latest movies, discover trending shows and explore
            unlimited entertainment with MovieHub.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-white font-semibold mb-4">Navigation</h2>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Movies</li>
            <li className="hover:text-white transition cursor-pointer">TV Shows</li>
            <li className="hover:text-white transition cursor-pointer">Trending</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white font-semibold mb-4">Categories</h2>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Action</li>
            <li className="hover:text-white transition cursor-pointer">Comedy</li>
            <li className="hover:text-white transition cursor-pointer">Drama</li>
            <li className="hover:text-white transition cursor-pointer">Horror</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-5 text-xl">

            <FaFacebook className="hover:text-blue-500 hover:scale-110 transition cursor-pointer" />

            <FaInstagram className="hover:text-pink-500 hover:scale-110 transition cursor-pointer" />

            <FaTwitter className="hover:text-sky-400 hover:scale-110 transition cursor-pointer" />

            <FaYoutube className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MovieHub. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;