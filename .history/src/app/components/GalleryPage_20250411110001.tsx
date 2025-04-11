"use client";

import { useState, useEffect } from 'react';
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
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    // Pre-check images when component mounts
    const preloadImages = async () => {
      const validImages = [];
      for (const image of images) {
        try {
          // Attempt to fetch the image to see if it exists
          const response = await fetch(image, { method: 'HEAD' });
          if (response.ok) {
            validImages.push(image);
          } else {
            setImageErrors(prev => ({ ...prev, [image]: true }));
          }
        } catch (error) {
          setImageErrors(prev => ({ ...prev, [image]: true }));
        }
      }
      setLoadedImages(validImages);
    };
    
    preloadImages();
  }, [images]);

  const handleImageError = (imagePath: string) => {
    setImageErrors({
      ...imageErrors,
      [imagePath]: true
    });
  };

  // Filter out images that failed to load
  const validImages = loadedImages.length > 0 
    ? loadedImages 
    : images.filter(image => !imageErrors[image]);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (currentIndex < validImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(validImages[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(validImages[currentIndex - 1]);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
        &larr; Back to galleries
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {validImages.map((image, index) => (
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
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center" {...swipeHandlers}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
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

            <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-full object-contain"
                onError={() => handleImageError(selectedImage)}
              />
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