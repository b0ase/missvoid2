'use client';

import GalleryPage from '@/app/components/GalleryPage';

const images = [
  '/images/void-xxx/image-1.jpg',
  '/images/void-xxx/image-2.jpg',
  '/images/void-xxx/image-3.jpg',
  '/images/void-xxx/image-4.jpg',
  '/images/void-xxx/image-5.jpg',
];

export default function VoidXxxGallery() {
  return <GalleryPage images={images} title="VOID XXX" />;
} 