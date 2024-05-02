"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-white shadow'>
      <div className='max-w-8xl mx-auto px-8 sm:px-8 lg:px-12'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link href='/'>
                <Image src="/thuistekoop-logo.png" alt="thuis te koop logo" width={130} height={50} />
            </Link>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-4'>
            {['Home', 'Aanbod', 'Over ons', 'Contact'].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                <button className='px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-900'>{item}</button>
              </Link>
            ))}
          </div>
          <div className="flex space-x-2">
            <Link href="/login">
              <button className="px-4 py-2 text-sm font-medium text-white bg-navy rounded-md hover:bg-navy-dark transition duration-300">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-coolGray-200 rounded-md hover:bg-coolGray-100 transition duration-300">
                Registreer
              </button>
            </Link>
          </div>
          <button className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white fixed top-0 right-0 bottom-0 w-5/6 max-w-sm shadow-lg animate-slideIn">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-5 pt-16 pb-3 space-y-1">
              {['Home', 'Aanbod', 'Over ons', 'Contact'].map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className='block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50' onClick={() => setIsMobileMenuOpen(false)}>{item}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
