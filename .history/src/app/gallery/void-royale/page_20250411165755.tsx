'use client';

import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidRoyaleGallery() {
  const items = [
    // Signature Pieces
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

    // Regal Accessories
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

    // Evening Wear
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

    // Generate additional pieces with appropriate royal themes
    ...Array.from({ length: 82 }, (_, i) => {
      const styles = ['minimal', 'architectural', 'sculptural', 'flowing', 'elaborate'] as const;
      const categories = ['bodysuit', 'dress', 'top', 'skirt', 'harness', 'corset', 'accessory', 'coat', 'jumpsuit'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      const elements = ['Velvet', 'Silk', 'Brocade', 'Leather', 'Lace', 'Satin', 'Crystal', 'Gold'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 9) % categories.length];
      const adjective = adjectives[Math.floor(i / 10) % adjectives.length];
      const element = elements[Math.floor(i / 7) % elements.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${8466 - i}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 5 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    })
  ];

  return (
    <GalleryPage
      title="VOID ROYALE"
      images={items}
      description="Welcome to VOID ROYALE, our most opulent collection that redefines luxury through architectural fashion. Each piece is a testament to regal aesthetics, combining classic nobility with avant-garde design. From elaborate corsets to flowing gowns, every garment is crafted to bestow a sense of majesty upon the wearer. This extensive collection features 89 pieces that range from intimate apparel to dramatic outerwear, all unified by our commitment to transformative design and uncompromising quality."
    />
  );
} 