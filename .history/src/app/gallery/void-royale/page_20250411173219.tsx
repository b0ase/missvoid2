'use client';

import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem, GalleryItem } from '../../utils/galleryDescriptions';

export default function VoidRoyaleGallery() {
  const items: GalleryItem[] = [
    // Cover image
    createGalleryItem(
      '/images/void-royale/cover.jpg',
      'VOID ROYALE Collection',
      'portrait',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    // Add the final image
    createGalleryItem(
      '/images/void-royale/IMG_7100.JPG',
      'Royal Legacy',
      'dress',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    )
  ];

  return (
    <GalleryPage
      title="VOID ROYALE"
      images={items}
      description="Welcome to VOID ROYALE, our most opulent collection that redefines luxury through architectural fashion. Each piece is a testament to regal aesthetics, combining classic nobility with avant-garde design. From elaborate corsets to flowing gowns, every garment is crafted to bestow a sense of majesty upon the wearer. This extensive collection features pieces that range from intimate apparel to dramatic outerwear, all unified by our commitment to transformative design and uncompromising quality."
    />
  );
} 