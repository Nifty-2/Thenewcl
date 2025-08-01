'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Page9() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="text-xl font-bold text-blue-600">
              <Link href="/">MyBrand</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-500">Services</Link>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col items-start px-4 py-2 space-y-2">
              <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Optional: Page content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Task 9: Responsive Navbar</h1>
        <p className="mt-2 text-gray-600">Resize the window or open in mobile view to test responsiveness.</p>
      </main>
    </div>
  );
}