"use client";

import Link from 'next/link';
import { getAllCategories } from '../utils/images';
import { useState } from 'react';
import Image from 'next/image';

type GalleryCategory = {
  name: string;
  path: string;
  coverImage: string;
  isFeatured: boolean;
};

// Get categories from our utility
const categories: GalleryCategory[] = getAllCategories();
const featuredCategory = categories.find(category => category.isFeatured);
const regularCategories = categories.filter(category => !category.isFeatured);

export default function Gallery() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    console.log(`Image error for gallery: ${name}`);
    setImageError({
      ...imageError,
      [name]: true
    });
  };

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
                    <img 
                      src={featuredCategory.coverImage}
                      alt={`${featuredCategory.name} gallery cover`}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(featuredCategory.name)}
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
                    <img 
                      src={category.coverImage}
                      alt={`${category.name} gallery cover`}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(category.name)}
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