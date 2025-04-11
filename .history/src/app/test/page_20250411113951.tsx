"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function TestPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});

  const testImages = [
    '/images/void-chic/IMG_8350.JPG',
    '/images/void-chic/IMG_8352.JPG',
    '/images/void-chic/IMG_8354.JPG',
    '/images/miss-void/cover.jpg',
    '/images/void-xxx/cover.jpg',
    '/images/void-royale/cover.jpg'
  ];

  const handleImageLoad = (src: string) => {
    console.log(`Image loaded: ${src}`);
    setLoadedImages(prev => ({
      ...prev,
      [src]: true
    }));
  };

  const handleImageError = (src: string) => {
    console.error(`Image error: ${src}`);
    setErrorImages(prev => ({
      ...prev,
      [src]: true
    }));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Image Loading Test</h1>
      <Link href="/" className="text-blue-600 hover:underline mb-6 block">Back to home</Link>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {testImages.map((src, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Test Image {index + 1}</h2>
            <p className="text-sm mb-2 break-all">{src}</p>
            <div className="aspect-square relative bg-gray-100 rounded overflow-hidden mb-2">
              <img 
                src={src}
                alt={`Test image ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(src)}
                onError={() => handleImageError(src)}
              />
            </div>
            <div className="text-sm">
              Status: {loadedImages[src] ? 
                <span className="text-green-600">Loaded</span> : 
                errorImages[src] ? 
                  <span className="text-red-600">Failed</span> : 
                  <span className="text-yellow-600">Loading...</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold mb-4">Direct Image Links</h2>
        <div className="space-y-2">
          {testImages.map((src, index) => (
            <div key={index}>
              <a 
                href={src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {src}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 