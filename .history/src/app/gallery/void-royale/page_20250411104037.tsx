'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Use existing images from void-chic directory
const images = [
  '/images/void-chic/IMG_8348.JPG',
  '/images/void-chic/IMG_8347.JPG',
  '/images/void-chic/IMG_8346.JPG',
  '/images/void-chic/IMG_8345.JPG',
  '/images/void-chic/IMG_8344.JPG',
  '/images/void-chic/IMG_8343.JPG',
  '/images/void-chic/IMG_8342.JPG',
  '/images/void-chic/IMG_8341.JPG',
  '/images/void-chic/IMG_8340.JPG',
  '/images/void-chic/IMG_8339.JPG',
];

export default function VoidRoyaleGallery() {
  return <GalleryPage images={images} title="VOID ROYALE" />;
} 