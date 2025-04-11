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

    // First series (6961-7100)
    ...Array.from({ length: 140 }, (_, i) => {
      const imgNum = 6961 + i;
      // Skip IMG_7000 as it doesn't exist in the list
      if (imgNum === 7000) return null;
      
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness', 'coat', 'accessory'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 20) % categories.length];
      const adjective = adjectives[Math.floor(i / 17) % adjectives.length];
      
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
    }).filter((item): item is GalleryItem => item !== null),

    // Second series (8367-8473)
    ...Array.from({ length: 107 }, (_, i) => {
      const imgNum = 8367 + i;
      
      // Skip any numbers that don't exist in the sequence
      if (![8367, 8368, 8369, 8370, 8372, 8373, 8374, 8375, 8376, 8377, 8378, 8379, 
           8380, 8381, 8382, 8383, 8384, 8386, 8387, 8388, 8389, 8391, 8392, 8393, 
           8394, 8395, 8396, 8397, 8398, 8399, 8400, 8401, 8402, 8403, 8404, 8405, 
           8406, 8407, 8408, 8409, 8411, 8412, 8413, 8414, 8415, 8416, 8417, 8418, 
           8419, 8420, 8421, 8422, 8423, 8424, 8425, 8426, 8427, 8428, 8429, 8430, 
           8431, 8432, 8433, 8434, 8435, 8436, 8437, 8438, 8439, 8440, 8441, 8442, 
           8443, 8444, 8445, 8446, 8447, 8448, 8449, 8450, 8453, 8454, 8455, 8456, 
           8457, 8458, 8459, 8467, 8468, 8469, 8470, 8471, 8472, 8473].includes(imgNum)) {
        return null;
      }
      
      // Skip duplicate images (those with "(1)" in the name)
      if ([8384, 8389, 8409].includes(imgNum)) return null;
      
      const styles = ['architectural', 'elaborate', 'flowing', 'sculptural', 'minimal'] as const;
      const categories = ['gown', 'corset', 'dress', 'bodysuit', 'harness', 'coat', 'accessory'] as const;
      const adjectives = ['Royal', 'Imperial', 'Noble', 'Sovereign', 'Regal', 'Majestic', 'Crown', 'Monarch'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 15) % categories.length];
      const adjective = adjectives[Math.floor(i / 13) % adjectives.length];
      
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
    }).filter((item): item is GalleryItem => item !== null)
  ];

  return (
    <GalleryPage
      title="VOID ROYALE"
      images={items}
      description="Welcome to VOID ROYALE, our most opulent collection that redefines luxury through architectural fashion. Each piece is a testament to regal aesthetics, combining classic nobility with avant-garde design. From elaborate corsets to flowing gowns, every garment is crafted to bestow a sense of majesty upon the wearer. This extensive collection features pieces that range from intimate apparel to dramatic outerwear, all unified by our commitment to transformative design and uncompromising quality."
    />
  );
} 