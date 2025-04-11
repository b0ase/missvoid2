'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Use existing images from void-chic directory
const images = [
  '/images/void-chic/IMG_8358.JPG',
  '/images/void-chic/IMG_8357.WEBP',
  '/images/void-chic/IMG_8356.JPG',
  '/images/void-chic/IMG_8355.JPG',
  '/images/void-chic/IMG_8354.JPG',
  '/images/void-chic/IMG_8353.JPG',
  '/images/void-chic/IMG_8352.JPG',
  '/images/void-chic/IMG_8351.JPG',
  '/images/void-chic/IMG_8350.JPG',
  '/images/void-chic/IMG_8349.JPG',
];

export default function VoidXxxGallery() {
  return <GalleryPage images={images} title="VOID XXX" />;
} 