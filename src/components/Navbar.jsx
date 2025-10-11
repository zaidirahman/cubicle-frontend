import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <header className="bg-gradient-to-r from-emerald-600 to-emerald-900 shadow-md body-font text-white py-2">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link
            className="flex items-center font-medium text-white"
            to="/"
          >
            {/* 
            <img 
              src="/Logo.svg"
              alt="The Cubicle Logo" 
              className="h-8 w-auto"
            />
            */}
            <span className="text-2xl font-bold tracking-tight">The Cubicle</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
    
            <Link
              className="mx-2 px-3 py-2 font-medium text-lg hover:text-gray-700 rounded-md transition-all duration-200"
              to="/#About"
            >
              About Us
            </Link>
            <Link
              className="mx-2 px-3 py-2 font-medium text-lg hover:text-gray-700 rounded-md transition-all duration-200"
              to="/#Contact"
            >
              Contact
            </Link>
            <Link
              className="mx-2 px-3 py-2 font-medium text-lg hover:text-gray-700 rounded-md transition-all duration-200"
              to="/amenities"
            >
              Amenities
            </Link>
            <Link
              className="mx-2 px-3 py-2 font-medium text-lg hover:text-gray-700 rounded-md transition-all duration-200"
              to="/blog"
            >
              Blogs
            </Link>
            <Link
              className="mx-2 px-3 py-2 font-medium text-lg hover:text-gray-700 rounded-md transition-all duration-200"
              to="/careers"
            >
              Careers
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-emerald-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pt-2 pb-4 border-t border-emerald-400 md:hidden">
            <Link
              className="block py-2 px-4 text-lg font-medium hover:bg-emerald-500 rounded-md transition-all duration-200"
              to="/#About"
              onClick={toggleMenu}
            >
              About Us
              </Link> 
            <Link
              className="block py-2 px-4 text-lg font-medium hover:bg-emerald-500 rounded-md transition-all duration-200"
              to="/#Contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              className="block py-2 px-4 text-lg font-medium hover:bg-emerald-500 rounded-md transition-all duration-200"
              to="/amenities"
              onClick={toggleMenu}
            >
              Amenities
            </Link>
            <Link
              className="block py-2 px-4 text-lg font-medium hover:bg-emerald-500 rounded-md transition-all duration-200"
              to="/blog"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              className="block py-2 px-4 text-lg font-medium hover:bg-emerald-500 rounded-md transition-all duration-200"
              to="/careers"
              onClick={toggleMenu}
            >
              Careers
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;