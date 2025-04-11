"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type GalleryCategory = {
  name: string;
  path: string;
  coverImage: string;
  isFeatured: boolean;
};

type ClientGalleryWrapperProps = {
  featuredCategory: GalleryCategory | undefined;
  regularCategories: GalleryCategory[];
};

export default function ClientGalleryWrapper({ 
  featuredCategory, 
  regularCategories 
}: ClientGalleryWrapperProps) {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">MISS VOID</h1>
      
      {/* Featured Gallery */}
      {featuredCategory && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Gallery</h2>
          <Link 
            href={featuredCategory.path} 
            key={featuredCategory.name}
            className="group block max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <div className="relative w-full h-full bg-gray-200">
                  {!imageError[featuredCategory.name] ? (
                    <Image 
                      src={featuredCategory.coverImage}
                      alt={`${featuredCategory.name} gallery cover`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 70vw"
                      onError={() => setImageError({...imageError, [featuredCategory.name]: true})}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <span className="text-lg text-gray-600">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white drop-shadow-lg">{featuredCategory.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
      
      <h2 className="text-2xl font-bold mb-6 text-center">All Galleries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {regularCategories.map((category) => (
          <Link 
            href={category.path} 
            key={category.name}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <div className="relative w-full h-full bg-gray-200">
                  {!imageError[category.name] ? (
                    <Image 
                      src={category.coverImage}
                      alt={`${category.name} gallery cover`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      onError={() => setImageError({...imageError, [category.name]: true})}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <span className="text-lg text-gray-600">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-semibold text-white drop-shadow-lg">{category.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 