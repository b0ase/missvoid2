"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllCategories, type GalleryCategory } from '../utils/images';
import { useDevMode } from '../context/DevModeContext';
import { deleteGallery, getDeletedGalleries } from '../services/galleryService';

// Get categories from our utility
const initialCategories = getAllCategories();
const initialFeaturedCategory = initialCategories.find(category => category.isFeatured);
const initialFashionCategories = initialCategories.filter(category => !category.isFeatured && category.type === 'fashion');
const initialPhotographyCategories = initialCategories.filter(category => category.type === 'photography');

export default function Gallery() {
  const { isDevMode } = useDevMode();
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [categories, setCategories] = useState<GalleryCategory[]>(initialCategories);
  const [deletedCategories, setDeletedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load deleted galleries from both localStorage and server on component mount
  useEffect(() => {
    const loadDeletedGalleries = async () => {
      try {
        setIsLoading(true);
        const deleted = await getDeletedGalleries();
        setDeletedCategories(deleted);
      } catch (error) {
        console.error("Failed to load deleted galleries:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDeletedGalleries();
  }, []);
  
  // Filtered categories based on deleted state
  const featuredCategory = categories.find(category => category.isFeatured && !deletedCategories.includes(category.name));
  const fashionCategories = categories.filter(category => !category.isFeatured && category.type === 'fashion' && !deletedCategories.includes(category.name));
  const photographyCategories = categories.filter(category => category.type === 'photography' && !deletedCategories.includes(category.name));

  const handleImageError = (name: string) => {
    console.log(`Image error for gallery: ${name}`);
    setImageError({
      ...imageError,
      [name]: true
    });
  };
  
  const handleDeleteCategory = async (categoryName: string) => {
    // Optimistically update UI
    setDeletedCategories(prev => [...prev, categoryName]);
    
    // Persist deletion to both localStorage and server
    try {
      await deleteGallery(categoryName);
    } catch (error) {
      console.error("Failed to delete gallery:", error);
      // Revert UI update on error
      setDeletedCategories(prev => prev.filter(name => name !== categoryName));
    }
  };

  const GalleryCard = ({ category }: { category: GalleryCategory }) => (
    <div className="relative group">
      <Link 
        href={category.path} 
        key={category.name}
        className="block"
      >
        <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
            <div className="relative w-full h-full bg-gray-200">
              {!imageError[category.name] ? (
                <img 
                  src={category.coverImage}
                  alt={`${category.name} concept gallery`}
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
      
      {/* Delete button shown only in dev mode */}
      {isDevMode && (
        <button
          onClick={() => handleDeleteCategory(category.name)}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Delete ${category.name}`}
          title={`Delete ${category.name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-2">Loading galleries...</p>
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">MISS VOID</h1>
      <h2 className="text-xl italic mb-8 text-center text-gray-500">A Conceptual Fashion Brand</h2>
      
      <div className="mb-12 max-w-3xl mx-auto bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300 text-center">
        <p>
          MISS VOID is a digital fashion concept that explores brutalist aesthetics and alternative fashion design. 
          This is a design study rather than an actual brand with physical products.
        </p>
      </div>
      
      {/* Dev Mode Indicator */}
      {isDevMode && (
        <div className="mb-4 p-2 bg-red-100 text-red-800 rounded-md text-center">
          <p className="font-bold">Dev Mode Active</p>
          <p className="text-sm">You can delete galleries by hovering over them and clicking the X icon.</p>
        </div>
      )}
      
      {/* Featured Gallery */}
      {featuredCategory && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Concept</h2>
          <div className="relative group max-w-4xl mx-auto">
            <Link 
              href={featuredCategory.path}
              className="block"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                  <div className="relative w-full h-full bg-gray-200">
                    {!imageError[featuredCategory.name] ? (
                      <img 
                        src={featuredCategory.coverImage}
                        alt={`${featuredCategory.name} concept gallery`}
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
            
            {/* Delete button shown only in dev mode */}
            {isDevMode && (
              <button
                onClick={() => handleDeleteCategory(featuredCategory.name)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Delete ${featuredCategory.name}`}
                title={`Delete ${featuredCategory.name}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Fashion Galleries */}
      {fashionCategories.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Conceptual Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashionCategories.map((category) => (
              <GalleryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      )}

      {/* Photography Galleries */}
      {photographyCategories.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Concept Photography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {photographyCategories.map((category) => (
              <div key={category.name} className="text-center relative group">
                <GalleryCard category={category} />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  <Link 
                    href="/studio" 
                    className="inline-block mt-2 text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    View in Studio Concept →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 