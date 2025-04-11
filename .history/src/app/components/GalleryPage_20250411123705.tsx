"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

type GalleryPageProps = {
  title: string;
  images: string[];
};

export default function GalleryPage({ title, images }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [swiping, setSwiping] = useState<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleImageError = (imagePath: string) => {
    setImageErrors({
      ...imageErrors,
      [imagePath]: true
    });
  };

  // Filter out images that failed to load
  const validImages = images.filter(image => !imageErrors[image]);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (currentIndex < validImages.length - 1) {
      setSwipeDirection('left');
      setSwiping(true);
      
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedImage(validImages[currentIndex + 1]);
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
        setSelectedImage(validImages[currentIndex - 1]);
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          !imageErrors[image] && (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden group"
              onClick={() => handleImageClick(image, index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => handleImageError(image)}
              />
            </div>
          )
        ))}
      </div>

      {/* Image Modal with Tinder-style swipe */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
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
              className={`relative w-full h-full max-w-4xl max-h-[90vh] transition-transform duration-300 ease-out
                ${swiping && swipeDirection === 'left' ? 'translate-x-[-100%] rotate-[-5deg] opacity-0' : ''}
                ${swiping && swipeDirection === 'right' ? 'translate-x-[100%] rotate-[5deg] opacity-0' : ''}
              `}
            >
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-full object-contain"
                onError={() => handleImageError(selectedImage)}
              />
              
              {/* Swipe indicators */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-8 opacity-70">
                <div className="bg-white text-black rounded-full p-2 shadow-lg transform -translate-x-4 opacity-0 transition-opacity duration-200 ease-in-out
                  group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="bg-white text-black rounded-full p-2 shadow-lg transform translate-x-4 opacity-0 transition-opacity duration-200 ease-in-out
                  group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Swipe instruction hint */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm opacity-70">
                Swipe left or right to navigate
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