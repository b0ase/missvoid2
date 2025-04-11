"use client";

import Image from 'next/image';

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ClientImage({ 
  src, 
  alt, 
  className,
  width = 500,
  height = 500,
  priority = false
}: ClientImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
    />
  );
} 