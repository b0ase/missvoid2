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
    // First sequence (8473-8467)
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
    // Second sequence (8459-8367)
    createGalleryItem(
      '/images/void-royale/IMG_8459.JPG',
      'Majestic Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    ...Array.from({ length: 92 }, (_, i) => {
      const imgNum = 8458 - i;
      
      // Skip any numbers that don't exist in the sequence
      if (imgNum < 8367 || imgNum > 8458) return null;
      
      // Skip duplicate images (those with "(1)" in the name)
      if ([8409, 8389, 8384].includes(imgNum)) return null;
      
      // Skip any numbers that don't have corresponding files
      if (![8458, 8457, 8456, 8455, 8454, 8453, 8450, 8449, 8448, 8447, 8446, 
           8445, 8444, 8443, 8442, 8441, 8440, 8439, 8438, 8437, 8436, 8435, 
           8434, 8433, 8432, 8431, 8430, 8429, 8428, 8427, 8426, 8425, 8424, 
           8423, 8422, 8421, 8420, 8419, 8418, 8417, 8416, 8415, 8414, 8413, 
           8412, 8411, 8409, 8408, 8407, 8406, 8405, 8404, 8403, 8402, 8401, 
           8400, 8399, 8398, 8397, 8396, 8395, 8394, 8393, 8392, 8391, 8389, 
           8388, 8387, 8386, 8384, 8383, 8382, 8381, 8380, 8379, 8378, 8377, 
           8376, 8375, 8374, 8373, 8372, 8370, 8369, 8368, 8367].includes(imgNum)) {
        return null;
      }
      
      const styles = ['minimal', 'architectural', 'sculptural', 'flowing', 'elaborate'] as const;
      const categories = ['bodysuit', 'dress', 'top', 'skirt', 'harness', 'corset', 'accessory', 'coat'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 9) % categories.length];
      const adjective = adjectives[Math.floor(i / 10) % adjectives.length];
      
      // Handle special file extensions
      const extension = [8439, 8428, 8426, 8368].includes(imgNum) ? 'WEBP' : 
                       imgNum === 8370 ? 'jpeg' : 'JPG';
      
      return createGalleryItem(
        `/images/void-royale/IMG_${imgNum}.${extension}`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 5 === 0 ? 'bespoke' : 'premium',
          useCase: i % 3 === 0 ? 'special occasion' : i % 3 === 1 ? 'evening' : 'performance'
        }
      );
    }).filter((item): item is GalleryItem => item !== null),
    
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