"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import DevModeToggle from './DevModeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <Link href="/" className="text-xl font-bold">MISS VOID</Link>
          <span className="text-xs text-gray-400">AI-First Fashion</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/about" 
            className={`hover:text-gray-300 transition ${pathname === '/about' ? 'text-gray-300 underline' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/studio" 
            className={`hover:text-gray-300 transition ${pathname === '/studio' ? 'text-gray-300 underline' : ''}`}
          >
            Studio
          </Link>
          <Link 
            href="/gallery" 
            className={`hover:text-gray-300 transition ${pathname === '/gallery' ? 'text-gray-300 underline' : ''}`}
          >
            Galleries
          </Link>
          <Link 
            href="/models" 
            className={`hover:text-gray-300 transition ${pathname === '/models' ? 'text-gray-300 underline' : ''}`}
          >
            Models
          </Link>
          <Link 
            href="/services" 
            className={`hover:text-gray-300 transition ${pathname === '/services' ? 'text-gray-300 underline' : ''}`}
          >
            Concepts
          </Link>
          <Link 
            href="/design" 
            className={`hover:text-gray-300 transition ${pathname === '/design' ? 'text-gray-300 underline' : ''}`}
          >
            Design
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-gray-300 transition ${pathname === '/contact' ? 'text-gray-300 underline' : ''}`}
          >
            Contact
          </Link>
          <Link 
            href="/void" 
            className={`hover:text-gray-300 transition font-medium ${pathname === '/void' ? 'text-gray-300 underline' : ''}`}
          >
            $VOID
          </Link>
          <Link 
            href="https://uk.pinterest.com/MissVoid_Couture/" 
            className="hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src="/images/Pinterest-logo.png" 
              alt="Pinterest" 
              width={24} 
              height={24} 
              className="inline-block"
            />
          </Link>
          <DevModeToggle />
        </div>
        
        {/* Mobile Menu Button and Dev Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <DevModeToggle />
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 flex flex-col space-y-2 animate-fadeIn">
          <Link 
            href="/about" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/about' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/studio" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/studio' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Studio
          </Link>
          <Link 
            href="/gallery" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/gallery' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Galleries
          </Link>
          <Link 
            href="/models" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/models' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Models
          </Link>
          <Link 
            href="/services" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/services' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Concepts
          </Link>
          <Link 
            href="/design" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/design' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Design
          </Link>
          <Link 
            href="/contact" 
            className={`py-2 hover:text-gray-300 transition ${pathname === '/contact' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/void" 
            className={`py-2 hover:text-gray-300 transition font-medium ${pathname === '/void' ? 'text-gray-300 underline' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            $VOID
          </Link>
          <Link 
            href="https://uk.pinterest.com/MissVoid_Couture/" 
            className="py-2 hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image 
              src="/images/Pinterest-logo.png" 
              alt="Pinterest" 
              width={24} 
              height={24} 
              className="inline-block"
            />
          </Link>
        </div>
      )}
    </nav>
  );
} 