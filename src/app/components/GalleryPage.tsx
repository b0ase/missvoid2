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
              <div className="w-full h-full bg-gray-200 relative">
                {/* Placeholder div until actual images are available */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm">Image {index + 1}</span>
                </div>
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
          <div className="relative max-w-4xl w-full max-h-screen">
            <button
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              {/* Placeholder for actual image */}
              <span className="text-gray-800">Image preview</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 