"use client";

import Link from 'next/link';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <>
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">MISS VOID</Link>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/custom" className="hover:text-gray-300 transition">Custom Orders</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </nav>
      <Gallery />
    </>
  );
}
