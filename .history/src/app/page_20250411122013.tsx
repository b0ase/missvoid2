"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isClientSide, setIsClientSide] = useState(false);

  // Wait for client-side rendering
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  // Featured gallery
  const featuredGallery = {
    name: 'MISS VOID',
    path: '/gallery/miss-void',
    imageSrc: '/images/miss-void/cover.jpg',
    description: 'The signature collection that embodies the core aesthetic of our brand.'
  };

  // Define other gallery items
  const otherGalleries = [
    {
      name: 'VOID ROYALE',
      path: '/gallery/void-royale',
      imageSrc: '/images/void-royale/cover.jpg'
    },
    {
      name: 'VOID XXX',
      path: '/gallery/void-xxx',
      imageSrc: '/images/void-xxx/cover.jpg'
    },
    {
      name: 'VOID CHIC',
      path: '/gallery/void-chic',
      imageSrc: '/images/void-chic/cover.jpg'
    },
    {
      name: 'VOID NOIRE',
      path: '/gallery/void-noire',
      imageSrc: '/images/void-noire/cover.jpg'
    },
    {
      name: 'VOID BOUDOIR',
      path: '/gallery/void-boudoir',
      imageSrc: '/images/void-boudoir/cover.jpg'
    },
    {
      name: 'VOID INDUSTRY',
      path: '/gallery/void-industry',
      imageSrc: '/images/void-industry/cover.jpg'
    }
  ];

  if (!isClientSide) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold">MISS VOID</div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/custom" className="hover:text-gray-300 transition">Custom Orders</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">MISS VOID</h1>
        <p className="text-center mb-12">London-based fetish and BDSM-inspired fashion for over two decades.</p>
        
        {/* Featured Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Collection</h2>
          <Link 
            href={featuredGallery.path}
            className="group block max-w-5xl mx-auto"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={featuredGallery.imageSrc}
                  alt={`${featuredGallery.name} gallery cover`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white drop-shadow-lg mb-2">{featuredGallery.name}</span>
                  <p className="text-white text-center max-w-lg px-4">{featuredGallery.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Other Galleries */}
        <h2 className="text-2xl font-bold mb-6 text-center">Other Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherGalleries.map((gallery) => (
            <Link 
              href={gallery.path} 
              key={gallery.name}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={gallery.imageSrc}
                    alt={`${gallery.name} gallery cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white drop-shadow-lg">{gallery.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
