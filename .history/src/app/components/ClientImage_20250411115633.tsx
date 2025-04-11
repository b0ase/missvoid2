"use client";

import { useState } from 'react';
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
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

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
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          } else {
            setIsError(true);
          }
        }}
      />
    </div>
  );
} 