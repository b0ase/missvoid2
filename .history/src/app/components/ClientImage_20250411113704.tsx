"use client";

import { useState } from 'react';

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ClientImage({ src, alt, className, fallbackSrc = '/images/void-chic/IMG_8354.JPG' }: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.log(`Image error for: ${src}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <span className="text-gray-600 text-sm">Image Unavailable</span>
      </div>
    );
  }

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className} 
      onError={handleError}
    />
  );
} 