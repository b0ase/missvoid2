"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

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
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [swiping, setSwiping] = useState<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Process images to ensure they're in the right format
  const processedImages: GalleryItem[] = images.map(img => {
    if (typeof img === 'string') {
      return { src: img };
    }
    return img as GalleryItem;
  });

  const handleImageError = (imagePath: string) => {
    setImageErrors({
      ...imageErrors,
      [imagePath]: true
    });
  };

  // Filter out images that failed to load
  const validImages = processedImages.filter(item => !imageErrors[item.src]);

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
      setSwipeDirection('left');
      setSwiping(true);
      
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        const nextItem = validImages[currentIndex + 1];
        setSelectedImage(nextItem.src);
        setSelectedItem(nextItem);
        setSwiping(false);
        setSwipeDirection(null);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSwipeDirection('right');
      setSwiping(true);
      
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        const prevItem = validImages[currentIndex - 1];
        setSelectedImage(prevItem.src);
        setSelectedItem(prevItem);
        setSwiping(false);
        setSwipeDirection(null);
      }, 300);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    onSwiping: (eventData) => {
      if (imageRef.current) {
        const xOffset = eventData.deltaX;
        imageRef.current.style.transform = `translateX(${xOffset}px) rotate(${xOffset * 0.05}deg)`;
        imageRef.current.style.opacity = `${1 - Math.abs(xOffset) / 1000}`;
      }
    },
    onSwiped: () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translateX(0) rotate(0)';
        imageRef.current.style.opacity = '1';
      }
    },
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
  }, [selectedImage, currentIndex, validImages]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
        &larr; Back to galleries
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      
      {description && (
        <div className="mb-8 max-w-3xl">
          <p className="text-lg">{description}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {validImages.map((item, index) => (
          <div 
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden group"
            onClick={() => handleImageClick(item, index)}
          >
            <div className="w-full h-full relative">
              <img
                src={item.src}
                alt={item.title || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={() => handleImageError(item.src)}
              />
              {item.title && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-lg px-4 text-center">
                    {item.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal with Tinder-style swipe */}
      {selectedImage && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 gallery-modal">
          <div className="relative w-full h-full flex items-center justify-center" {...swipeHandlers}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-20"
            >
              ✕
            </button>
            
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
              disabled={currentIndex === 0}
            >
              ←
            </button>

            <div 
              ref={imageRef}
              className={`relative w-full h-full max-w-6xl max-h-[90vh] transition-transform duration-300 ease-out fade-in flex flex-col md:flex-row items-center
                ${swiping && swipeDirection === 'left' ? 'swipe-left' : ''}
                ${swiping && swipeDirection === 'right' ? 'swipe-right' : ''}
              `}
            >
              <div className="flex-1 relative w-full h-full md:max-h-[90vh] flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={selectedItem.title || "Selected gallery image"}
                  className="max-w-full max-h-full object-contain"
                  onError={() => handleImageError(selectedImage)}
                />
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
              
              {/* Swipe indicators */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-8">
                <div className="swipe-indicator bg-white text-black rounded-full p-2 shadow-lg transform -translate-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="swipe-indicator bg-white text-black rounded-full p-2 shadow-lg transform translate-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
              disabled={currentIndex === validImages.length - 1}
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {currentIndex + 1} / {validImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 