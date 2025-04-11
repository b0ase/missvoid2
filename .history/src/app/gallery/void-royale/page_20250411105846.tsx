'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Use images from void-royale directory
const images = [
  '/images/void-royale/image-1.jpg',
  '/images/void-royale/image-2.jpg',
  '/images/void-royale/image-3.jpg',
  '/images/void-royale/image-4.jpg',
  '/images/void-royale/image-5.jpg',
];

export default function VoidRoyaleGallery() {
  return <GalleryPage images={images} title="VOID ROYALE" />;
} 