"use client";

import { useState, useEffect } from 'react';

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ClientImage({ src, alt, className, fallbackSrc = '/images/void-chic/IMG_8354.JPG' }: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset state when src changes
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    console.error(`Image error for: ${imgSrc}`);
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      // If even the fallback fails, just show error state
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (isLoading && !hasError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-600 text-sm">Loading...</span>
      </div>
    );
  }

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
      onLoad={handleLoad}
    />
  );
} 