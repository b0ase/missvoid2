"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type GalleryPageProps = {
  title: string;
  images: string[];
};

export default function GalleryPage({ title, images }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
        &larr; Back to galleries
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative w-full h-full">
                <Image 
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
            <div className="relative w-full h-full aspect-auto">
              <Image 
                src={selectedImage}
                alt={`${title} image fullscreen view`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="90vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 