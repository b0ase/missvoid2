'use client';

import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidRoyaleGallery() {
  const items = [
    // Cover image
    createGalleryItem(
      '/images/void-royale/cover.jpg',
      'VOID ROYALE Collection',
      'portrait',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),

    // Royal Couture Collection
    createGalleryItem(
      '/images/void-royale/IMG_6961.JPG',
      'Royal Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6962.JPG',
      'Imperial Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6964.JPG',
      'Noble Dress',
      'dress',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6965.JPG',
      'Sovereign Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6966.JPG',
      'Regal Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Majestic Collection
    createGalleryItem(
      '/images/void-royale/IMG_6967.JPG',
      'Majestic Gown',
      'gown',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6968.JPG',
      'Crown Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6969.JPG',
      'Monarch Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6970.JPG',
      'Imperial Bodysuit',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6971.JPG',
      'Noble Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Sovereign Collection Highlights
    createGalleryItem(
      '/images/void-royale/IMG_6972.JPG',
      'Sovereign Gown',
      'gown',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6975.JPG',
      'Royal Corset Elite',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Imperial Collection Highlights
    createGalleryItem(
      '/images/void-royale/IMG_6987.JPG',
      'Imperial Dress Supreme',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6990.JPG',
      'Crown Bodysuit Elegance',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_6994.JPG',
      'Regal Harness Signature',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    )
  ];

  return (
    <GalleryPage
      title="VOID ROYALE"
      images={items}
      description="Welcome to VOID ROYALE, our most opulent collection that redefines luxury through architectural fashion. Each piece is a testament to regal aesthetics, combining classic nobility with avant-garde design. From elaborate corsets to flowing gowns, every garment is crafted to bestow a sense of majesty upon the wearer. This extensive collection features pieces that range from intimate apparel to dramatic outerwear, all unified by our commitment to transformative design and uncompromising quality."
      galleryName="VOID ROYALE"
    />
  );
} 