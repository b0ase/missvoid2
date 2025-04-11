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

    // Sovereign Collection
    ...Array.from({ length: 15 }, (_, i) => {
      const imgNum = 6972 + i;
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 3) % categories.length];
      const adjective = adjectives[Math.floor(i / 2) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 3 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }),

    // Imperial Collection
    ...Array.from({ length: 15 }, (_, i) => {
      const imgNum = 6987 + i;
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[(i + 2) % styles.length];
      const category = categories[Math.floor((i + 1) / 3) % categories.length];
      const adjective = adjectives[Math.floor((i + 2) / 2) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 3 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }),

    // Noble Collection
    ...Array.from({ length: 15 }, (_, i) => {
      const imgNum = 7002 + i;
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[(i + 1) % styles.length];
      const category = categories[Math.floor((i + 2) / 3) % categories.length];
      const adjective = adjectives[Math.floor((i + 1) / 2) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 3 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }),

    // Crown Collection
    ...Array.from({ length: 15 }, (_, i) => {
      const imgNum = 7017 + i;
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[(i + 3) % styles.length];
      const category = categories[Math.floor((i + 3) / 3) % categories.length];
      const adjective = adjectives[Math.floor((i + 3) / 2) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 3 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }),

    // Regal Collection
    ...Array.from({ length: 15 }, (_, i) => {
      const imgNum = 7032 + i;
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[(i + 4) % styles.length];
      const category = categories[Math.floor((i + 4) / 3) % categories.length];
      const adjective = adjectives[Math.floor((i + 4) / 2) % adjectives.length];
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 3 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    })
  ].filter(item => item !== null);

  return (
    <GalleryPage
      title="VOID ROYALE"
      images={items}
      description="Welcome to VOID ROYALE, our most opulent collection that redefines luxury through architectural fashion. Each piece is a testament to regal aesthetics, combining classic nobility with avant-garde design. From elaborate corsets to flowing gowns, every garment is crafted to bestow a sense of majesty upon the wearer. This extensive collection features pieces that range from intimate apparel to dramatic outerwear, all unified by our commitment to transformative design and uncompromising quality."
    />
  );
} 