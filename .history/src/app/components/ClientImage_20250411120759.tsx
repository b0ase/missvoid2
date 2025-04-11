"use client";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ClientImage({ 
  src, 
  alt, 
  className
}: ClientImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
} 