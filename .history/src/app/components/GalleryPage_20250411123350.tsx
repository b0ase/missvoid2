"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';
import Navigation from './Navigation';
import Image from 'next/image';

type GalleryItem = {
  src: string;
  title?: string;
  description?: string;
  materials?: string;
  price?: string;
};

type GalleryPageProps = {
  title: string;
  images: string[] | GalleryItem[];
  description?: string;
};

export default function GalleryPage({ title, images, description }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<GalleryItem[]>([]);
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
    
    // Convert string[] to GalleryItem[] if needed
    const itemsToProcess = images.map(item => 
      typeof item === 'string' ? { src: item } : item
    );
    
    setLoadedImages(itemsToProcess);
  }, [images]);

  // Filter out images that failed to load
  const validImages = loadedImages.length > 0 
    ? loadedImages 
    : (images as any[]).map(item => typeof item === 'string' ? { src: item } : item);

  const handleImageClick = (item: GalleryItem, index: number) => {
    setSelectedImage(item.src);
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedItem(null);
  };

  const handleNext = () => {
    if (currentIndex < validImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const nextItem = validImages[currentIndex + 1];
      setSelectedImage(nextItem.src);
      setSelectedItem(nextItem);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevItem = validImages[currentIndex - 1];
      setSelectedImage(prevItem.src);
      setSelectedItem(prevItem);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    trackMouse: true
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrevious();
        } else if (e.key === 'Escape') {
          handleCloseModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  if (!isClientSide) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-6 text-blue-400 hover:text-blue-300">
          &larr; Back to galleries
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{title}</h1>
        
        {description && (
          <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-3xl">{description}</p>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {validImages.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg bg-gray-900"
              onClick={() => handleImageClick(item, index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src={item.src}
                  alt={item.title || `${title} piece ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {item.title && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="w-full h-full max-w-6xl mx-auto flex flex-col md:flex-row items-center" {...swipeHandlers}>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-20"
              >
                ✕
              </button>
              
              <div className="flex-1 relative w-full h-full max-h-[70vh] md:max-h-[90vh] flex items-center justify-center">
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
                  disabled={currentIndex === 0}
                >
                  ←
                </button>

                <Image
                  src={selectedImage}
                  alt={selectedItem.title || "Selected gallery image"}
                  className="max-w-full max-h-full object-contain"
                  width={800}
                  height={600}
                />

                <button
                  onClick={handleNext}
                  className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
                  disabled={currentIndex === validImages.length - 1}
                >
                  →
                </button>
              </div>
              
              {(selectedItem.title || selectedItem.description || selectedItem.materials || selectedItem.price) && (
                <div className="md:w-1/3 p-6 text-white">
                  {selectedItem.title && (
                    <h3 className="text-xl font-bold mb-3">{selectedItem.title}</h3>
                  )}
                  
                  {selectedItem.description && (
                    <p className="mb-4">{selectedItem.description}</p>
                  )}
                  
                  {selectedItem.materials && (
                    <div className="mb-3">
                      <span className="font-semibold">Materials:</span> {selectedItem.materials}
                    </div>
                  )}
                  
                  {selectedItem.price && (
                    <div className="mb-4">
                      <span className="font-semibold">Price:</span> {selectedItem.price}
                    </div>
                  )}
                  
                  <Link 
                    href="/contact?interest=specific-piece" 
                    className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                  >
                    Inquire About This Piece
                  </Link>
                </div>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {validImages.length}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 