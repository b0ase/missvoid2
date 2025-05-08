"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { useDevMode } from '../context/DevModeContext';
import { deleteImage, getDeletedImages, getUploadedImages } from '../services/galleryService';
import ImageUploader from './ImageUploader';

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
  galleryName: string; // Add gallery name for deletion reference
};

export default function GalleryPage({ title, images, description, galleryName }: GalleryPageProps) {
  const { isDevMode } = useDevMode();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [swiping, setSwiping] = useState<boolean>(false);
  const [displayedImages, setDisplayedImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);

  // Process images and filter out deleted ones, add uploaded ones
  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        
        // Get deleted images from localStorage and server
        const deletedImages = await getDeletedImages(galleryName);
        
        // Process images
        const processedImages: GalleryItem[] = images.map(img => {
          if (typeof img === 'string') {
            return { src: img };
          }
          return img as GalleryItem;
        });
        
        // Filter out deleted images
        const filteredImages = processedImages.filter(img => !deletedImages.includes(img.src));
        
        // Add uploaded images
        const uploadedImages = getUploadedImages(galleryName);
        const allImages = [...filteredImages, ...uploadedImages];
        
        setDisplayedImages(allImages);
      } catch (error) {
        console.error("Failed to load gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadImages();
  }, [images, galleryName]);

  const handleImageError = (imagePath: string) => {
    setImageErrors({
      ...imageErrors,
      [imagePath]: true
    });
  };

  // Handle newly uploaded images
  const handleUploadComplete = (newItem: GalleryItem) => {
    setDisplayedImages(prev => [...prev, newItem]);
  };

  // Filter out images that failed to load
  const validImages = displayedImages.filter(item => !imageErrors[item.src]);

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

  const handleDeleteImage = async (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the image modal
    
    // Optimistically update UI
    setDisplayedImages(displayedImages.filter(img => img.src !== imageSrc));
    
    try {
      // Store deletion in localStorage and server
      await deleteImage(galleryName, imageSrc);
    } catch (error) {
      console.error("Failed to delete image:", error);
      // Restore the image in case of error
      setDisplayedImages(prev => {
        if (!prev.some(img => img.src === imageSrc)) {
          return [...prev, displayedImages.find(img => img.src === imageSrc)!];
        }
        return prev;
      });
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

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
          &larr; Back to galleries
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        
        <div className="flex justify-center my-12">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
        &larr; Back to galleries
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      
      {/* Dev Mode Indicator and Tools */}
      {isDevMode && (
        <div className="mb-8">
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-md">
            <p className="font-bold text-lg">Dev Mode Active</p>
            <p>You can delete images by hovering over them and clicking the X icon.</p>
            <p>Use the uploader below to add new images to this gallery.</p>
          </div>
          
          {/* Image uploader */}
          <ImageUploader 
            galleryName={galleryName}
            onUploadComplete={handleUploadComplete}
          />
        </div>
      )}
      
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
              
              {/* Delete button shown only in dev mode */}
              {isDevMode && (
                <button
                  onClick={(e) => handleDeleteImage(item.src, e)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Delete image"
                  title="Delete image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal with Tinder-style swipe */}
      {selectedImage && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 gallery-modal">
          <div className="relative w-full h-full flex items-center justify-center overflow-y-auto" {...swipeHandlers}>
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
              className={`relative w-full h-full max-w-6xl py-12 px-4 flex flex-col md:flex-row items-center justify-center
                ${swiping && swipeDirection === 'left' ? 'swipe-left' : ''}
                ${swiping && swipeDirection === 'right' ? 'swipe-right' : ''}
              `}
            >
              <div className="flex-1 relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={selectedItem.title || "Selected gallery image"}
                  className="max-w-full max-h-full object-contain"
                  onError={() => handleImageError(selectedImage)}
                />
                
                {/* Delete button in modal (dev mode only) */}
                {isDevMode && (
                  <button
                    onClick={() => {
                      handleDeleteImage(selectedImage, new MouseEvent('click') as any);
                      handleCloseModal();
                    }}
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-20"
                    aria-label="Delete image"
                    title="Delete image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
              
              {(selectedItem.title || selectedItem.description || selectedItem.materials || selectedItem.price) && (
                <div className="md:w-1/3 p-6 text-white max-h-[40vh] md:max-h-[80vh] overflow-y-auto">
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