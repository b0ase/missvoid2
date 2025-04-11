"use client";

import Link from 'next/link';
import { getAllCategories, type GalleryCategory } from '../utils/images';
import { useState } from 'react';

// Get categories from our utility
const allCategories = getAllCategories();
const featuredCategory = allCategories.find(category => category.isFeatured);
const fashionCategories = allCategories.filter(category => !category.isFeatured && category.type === 'fashion');
const photographyCategories = allCategories.filter(category => category.type === 'photography');

export default function Gallery() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    console.log(`Image error for gallery: ${name}`);
    setImageError({
      ...imageError,
      [name]: true
    });
  };

  const GalleryCard = ({ category }: { category: GalleryCategory }) => (
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
  );

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
      
      {/* Fashion Galleries */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Fashion Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fashionCategories.map((category) => (
            <GalleryCard key={category.name} category={category} />
          ))}
        </div>
      </div>

      {/* Photography Galleries */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {photographyCategories.map((category) => (
            <div key={category.name} className="text-center">
              <GalleryCard category={category} />
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <Link 
                  href="/studio" 
                  className="inline-block mt-2 text-sm text-gray-500 hover:text-black transition-colors"
                >
                  View in Studio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 