"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export default function ClientImage({ 
  src, 
  alt, 
  className, 
  fallbackSrc = '/images/void-chic/IMG_8354.JPG',
  objectFit = 'cover'
}: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isError, setIsError] = useState<boolean>(false);

  // Use useEffect to handle image source switching and error states
  useEffect(() => {
    // Reset state when src changes
    setImgSrc(src);
    setIsError(false);

    // Create an image element to test loading
    const img = new window.Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsError(false);
    };
    
    img.onerror = () => {
      // Try fallback if main image fails
      if (src !== fallbackSrc) {
        const fallbackImg = new window.Image();
        fallbackImg.src = fallbackSrc;
        
        fallbackImg.onload = () => {
          setImgSrc(fallbackSrc);
          setIsError(false);
        };
        
        fallbackImg.onerror = () => {
          setIsError(true);
        };
      } else {
        setIsError(true);
      }
    };
    
    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  if (isError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-600 text-sm">Image Unavailable</span>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        style={{ objectFit }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2hFj9AQAAAABJRU5ErkJggg=="
      />
    </div>
  );
} 