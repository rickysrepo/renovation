'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavItem } from '@/types';

const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-gray-100 shadow-lg' : 'bg-gray-100'
      }`}
    >
      <div className="w-full">
        <div className="header-container">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 w-full">
          <div className="flex-shrink-0 pl-6">
            <Image
              src="/images/branding/wave-logo.svg"
              alt="Wave Logo"
              width={120}
              height={40}
              className="h-8 w-auto lg:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`nav-button text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer ${
                  activeSection === item.href.substring(1) && item.href !== '#home'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : activeSection === item.href.substring(1) && item.href === '#home'
                    ? 'text-blue-600'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="border-t border-gray-200 bg-gray-100">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-button-mobile block w-full text-left text-gray-900 hover:text-blue-600 hover:bg-gray-200 transition-colors duration-300 cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}