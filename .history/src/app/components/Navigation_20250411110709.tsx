"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">MISS VOID</Link>
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/about" 
            className={`hover:text-gray-300 transition ${pathname === '/about' ? 'text-gray-300 underline' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`hover:text-gray-300 transition ${pathname === '/services' ? 'text-gray-300 underline' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/custom" 
            className={`hover:text-gray-300 transition ${pathname === '/custom' ? 'text-gray-300 underline' : ''}`}
          >
            Custom Orders
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-gray-300 transition ${pathname === '/contact' ? 'text-gray-300 underline' : ''}`}
          >
            Contact
          </Link>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 