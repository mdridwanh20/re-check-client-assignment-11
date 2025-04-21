import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold text-red-600">Query</h2>
            <p className="mt-2 text-sm">
              Discover and share the best product recommendations tailored to your needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-red-600">Home</a>
              </li>
              <li>
                <a href="/my-query" className="hover:text-red-600">My Queries</a>
              </li>
              <li>
                <a href="/my-recommendations" className="hover:text-red-600">My Recommendations</a>
              </li>
              <li>
                <a href="/queries" className="hover:text-red-600">All Queries</a>
              </li>
              <li>
                <a href="/recommendations_for_me" className="hover:text-red-600">Recommendations for Me</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-red-600">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Subscribe</h3>
            <p className="mt-4 text-sm">Get the latest product recommendations and updates.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-500 hover:text-red-600" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-red-600" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="text-gray-500 hover:text-red-600" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com" className="text-gray-500 hover:text-red-600" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Cosmet-iX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

