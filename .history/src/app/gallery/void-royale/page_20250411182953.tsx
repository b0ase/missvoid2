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

    // Royal Collection
    createGalleryItem(
      '/images/void-royale/IMG_8367.JPG',
      'Royal Gown',
      'gown',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8368.WEBP',
      'Imperial Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8369.JPG',
      'Noble Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8370.jpeg',
      'Sovereign Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8372.JPG',
      'Regal Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8373.JPG',
      'Majestic Coat',
      'coat',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),

    // Crown Collection
    createGalleryItem(
      '/images/void-royale/IMG_8426.WEBP',
      'Crown Gown',
      'gown',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8428.WEBP',
      'Monarch Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8439.WEBP',
      'Imperial Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Sovereign Collection
    createGalleryItem(
      '/images/void-royale/IMG_8453.JPG',
      'Sovereign Gown',
      'gown',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8454.JPG',
      'Royal Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8455.JPG',
      'Noble Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8456.JPG',
      'Regal Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8457.JPG',
      'Majestic Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8458.JPG',
      'Crown Coat',
      'coat',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8459.JPG',
      'Monarch Accessory',
      'accessory',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),

    // Imperial Collection
    createGalleryItem(
      '/images/void-royale/IMG_8467.JPG',
      'Imperial Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8468.JPG',
      'Sovereign Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8469.JPG',
      'Royal Dress',
      'dress',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8470.JPG',
      'Noble Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8471.JPG',
      'Regal Coat',
      'coat',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8472.JPG',
      'Majestic Bodysuit',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8473.JPG',
      'Crown Accessory',
      'accessory',
      { style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'evening' }
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