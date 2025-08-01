'use client';
import Link from 'next/link';

export default function Page9() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Brand */}
          <div className="text-2xl font-bold text-blue-600 mb-2 sm:mb-0">
            <Link href="/">MyBrand</Link>
          </div>

          {/* Always-visible Nav Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-700 text-sm sm:text-base">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition">About</Link>
            <Link href="/services" className="hover:text-blue-500 transition">Services</Link>
            <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Task 9: Responsive Navbar</h1>
        <p className="text-gray-600">
          This navbar adapts its layout based on screen size but is always visible — no hamburger toggle.
        </p>
      </main>
    </div>
  );
}