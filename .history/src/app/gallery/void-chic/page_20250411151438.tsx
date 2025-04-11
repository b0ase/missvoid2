import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidChicGallery() {
  const items = [
    // Cover and Featured Items
    createGalleryItem(
      '/images/void-chic/IMG_8285.JPG',
      'Serpentine Bodysuit',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8286.JPG',
      'Midnight Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    
    // Bodysuits
    createGalleryItem(
      '/images/void-chic/IMG_8287.JPG',
      'Eclipse Full Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8288.JPG',
      'Void Lace Bodysuit',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Corsets
    createGalleryItem(
      '/images/void-chic/IMG_8289.JPG',
      'Serpentine Back Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8290.JPG',
      'Noir Mesh Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Harnesses
    createGalleryItem(
      '/images/void-chic/IMG_8291.JPG',
      'Back Chain Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8292.JPG',
      'Spine Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Dresses and Gowns
    createGalleryItem(
      '/images/void-chic/IMG_8293.JPG',
      'Open Back Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8294.JPG',
      'Backless Evening Dress',
      'gown',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Tops
    createGalleryItem(
      '/images/void-chic/IMG_8295.JPG',
      'Strapped Back Top',
      'top',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8296.JPG',
      'Mesh Back Blouse',
      'top',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Skirts
    createGalleryItem(
      '/images/void-chic/IMG_8297.JPG',
      'High-Slit Back Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8298.JPG',
      'Draped Back Skirt',
      'skirt',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Catsuits
    createGalleryItem(
      '/images/void-chic/IMG_8299.JPG',
      'Full Back Catsuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8300.JPG',
      'Sheer Panel Catsuit',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Generate additional variations
    ...Array.from({ length: 16 }, (_, i) => {
      const styles = ['minimal', 'architectural', 'flowing', 'sculptural', 'elaborate'];
      const types = ['bodysuit', 'corset', 'harness', 'gown', 'top', 'skirt'];
      const details = ['Lace', 'Mesh', 'Leather', 'Silk', 'Velvet'];
      const features = ['Open', 'Strapped', 'Draped', 'Structured', 'Layered'];
      
      const style = styles[i % styles.length];
      const type = types[Math.floor(i / 3) % types.length];
      const detail = details[Math.floor(i / 4) % details.length];
      const feature = features[Math.floor(i / 3) % features.length];
      
      return createGalleryItem(
        `/images/void-chic/IMG_${8301 + i}.JPG`,
        `${feature} ${detail} Back ${type.charAt(0).toUpperCase() + type.slice(1)}`,
        type as any,
        { 
          style: style as any, 
          luxuryLevel: i % 4 === 0 ? 'bespoke' : 'premium', 
          useCase: 'special occasion' 
        }
      );
    })
  ];
  
  return (
    <GalleryPage
      title="VOID CHIC"
      images={items}
      description="The Void Chic collection celebrates the elegance of form from a new perspective. Each piece is meticulously designed to create striking silhouettes and dramatic back views, embodying our signature blend of sophistication and avant-garde aesthetics."
    />
  );
} 