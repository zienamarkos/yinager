// components/Navbar.js
"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div> <Image src="/images/ethiowayka.jpg" alt="ethiowayka" width={100} height={50} /> </div>
        
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black hover:text-gray-400">Home</a>
          <a href="#about" className="text-black hover:text-gray-400">About</a>
          <a href="#services" className="text-black hover:text-gray-400">Services</a>
          <a href="#contact" className="text-black hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <a href="#" className="block text-white hover:text-gray-400 py-2">Home</a>
          <a href="#about" className="block text-white hover:text-gray-400 py-2">About</a>
          <a href="#services" className="block text-white hover:text-gray-400 py-2">Services</a>
          <a href="#contact" className="block text-white hover:text-gray-400 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
