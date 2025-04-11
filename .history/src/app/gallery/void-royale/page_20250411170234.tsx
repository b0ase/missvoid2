'use client';

import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem, GalleryItem } from '../../utils/galleryDescriptions';

export default function VoidRoyaleGallery() {
  const items: GalleryItem[] = [
    // Start with IMG_8473 down to IMG_8367
    createGalleryItem(
      '/images/void-royale/IMG_8473.JPG',
      'Royal Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8472.JPG',
      'Sovereign Harness',
      'harness',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8471.JPG',
      'Imperial Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8470.JPG',
      'Crown Collar',
      'collar',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8469.JPG',
      'Monarch Mask',
      'mask',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8468.JPG',
      'Regal Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8467.JPG',
      'Noble Coat',
      'coat',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8459.JPG',
      'Majestic Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8458.JPG',
      'Royal Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8457.JPG',
      'Imperial Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8456.JPG',
      'Sovereign Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8455.JPG',
      'Noble Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8454.JPG',
      'Crown Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8453.JPG',
      'Regal Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-royale/IMG_8450.JPG',
      'Majestic Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    // Continue with all actual images in sequence...
    ...Array.from({ length: 74 }, (_, i): GalleryItem | null => {
      const imgNum = 8449 - i;
      // Skip any numbers that don't exist in the sequence
      if (imgNum === 8410 || imgNum === 8385 || imgNum === 8390 || imgNum === 8371) {
        return null;
      }
      
      const styles = ['minimal', 'architectural', 'sculptural', 'flowing', 'elaborate'] as const;
      const categories = ['bodysuit', 'dress', 'top', 'skirt', 'harness', 'corset', 'accessory', 'coat'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 9) % categories.length];
      const adjective = adjectives[Math.floor(i / 10) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 5 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }).filter((item): item is GalleryItem => item !== null), // Type guard to ensure non-null items
    
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