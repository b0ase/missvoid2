"use client";

import Link from 'next/link';
import { useState } from 'react';
import ClientImage from '../components/ClientImage';

export default function TestPage2() {
  const testImages = [
    '/images/void-chic/IMG_8350.JPG',
    '/images/void-chic/IMG_8352.JPG',
    '/images/void-chic/IMG_8354.JPG',
    '/images/miss-void/cover.jpg',
    '/images/void-xxx/cover.jpg',
    '/images/void-royale/cover.jpg'
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">ClientImage Testing</h1>
      <Link href="/" className="text-blue-600 hover:underline mb-6 block">Back to home</Link>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {testImages.map((src, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">ClientImage Test {index + 1}</h2>
            <p className="text-sm mb-2 break-all">{src}</p>
            <div className="aspect-square relative bg-gray-100 rounded overflow-hidden mb-2">
              <ClientImage 
                src={src}
                alt={`Test image ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 