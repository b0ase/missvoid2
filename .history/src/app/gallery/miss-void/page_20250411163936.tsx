import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem, type ItemCategory } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Core Collection
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7832.JPG',
      'Void Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7830.JPG',
      'Ethereal Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Accessories Collection
    createGalleryItem(
      '/images/miss-void/IMG_7820.JPG',
      'Phantom Gloves',
      'gloves',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7840.JPG',
      'Void Collar',
      'collar',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Face Collection
    createGalleryItem(
      '/images/miss-void/IMG_7841.JPG',
      'Oblivion Mask',
      'mask',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7842.JPG',
      'Void Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Signature Pieces
    createGalleryItem(
      '/images/miss-void/IMG_7834.JPG',
      'Noir Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7835.JPG',
      'Void Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7836.JPG',
      'Abyss Bralette',
      'bralette',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Headwear Collection
    createGalleryItem(
      '/images/miss-void/IMG_7837.JPG',
      'Eclipse Hood',
      'hood',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),

    // Evening Wear
    createGalleryItem(
      '/images/miss-void/IMG_7838.JPG',
      'Void Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7839.JPG',
      'Shadow Top',
      'top',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Performance Wear
    createGalleryItem(
      '/images/miss-void/IMG_7843.JPG',
      'Void Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7844.JPG',
      'Specter Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7845.JPG',
      'Phantom Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Generate additional pieces with unique descriptions
    ...Array.from({ length: 45 }, (_, i) => {
      const styles = ['minimal', 'architectural', 'sculptural', 'flowing', 'elaborate'] as const;
      const categories = ['bodysuit', 'dress', 'top', 'skirt', 'harness', 'corset', 'accessory', 'coat', 'jumpsuit'] as const;
      const adjectives = ['Noir', 'Shadow', 'Void', 'Dark', 'Eclipse', 'Phantom', 'Ethereal', 'Spectral', 'Midnight'];
      const useCases = ['evening', 'special occasion', 'performance'] as const;
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 5) % categories.length] as ItemCategory;
      const adjective = adjectives[Math.floor(i / 4) % adjectives.length];
      const useCase = useCases[Math.floor(i / 3) % useCases.length];
      
      return createGalleryItem(
        `/images/miss-void/IMG_${7846 + i}.JPG`,
        `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`,
        category,
        { 
          style,
          luxuryLevel: i % 7 === 0 ? 'bespoke' : 'premium',
          useCase
        }
      );
    })
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
    />
  );
} 