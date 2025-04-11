import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBoudoirGallery() {
  const items = [
    // Thongs
    createGalleryItem(
      '/images/void-boudoir/IMG_8096.JPG',
      'Midnight Thong',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8098.WEBP',
      'Shadow Lace Thong',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8102.WEBP',
      'Velvet Edge Thong',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    
    // G-Strings
    createGalleryItem(
      '/images/void-boudoir/IMG_8109.WEBP',
      'Noir G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8117.JPG',
      'Whisper G-String',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8120.JPG',
      'Midnight G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),

    // Knickers
    createGalleryItem(
      '/images/void-boudoir/IMG_8136.JPG',
      'Silk Brief',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8139.WEBP',
      'Lace Brief',
      'bodysuit',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8142.WEBP',
      'Satin Brief',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Hotpants
    createGalleryItem(
      '/images/void-boudoir/IMG_8150.WEBP',
      'Noir Hotpants',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8152.JPG',
      'Velvet Hotpants',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8161.WEBP',
      'Lace Hotpants',
      'bodysuit',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Crotchless Styles
    createGalleryItem(
      '/images/void-boudoir/IMG_8165.WEBP',
      'Open Brief',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8167.JPG',
      'Open Thong',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8176.WEBP',
      'Open G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),

    // Continue pattern for remaining items...
    // Adding more variations with different styles and materials
    ...Array.from({ length: 39 }, (_, i) => {
      const styles = ['minimal', 'flowing', 'elaborate', 'architectural', 'sculptural'];
      const types = ['Thong', 'G-String', 'Brief', 'Hotpants', 'Open Brief'];
      const materials = ['Lace', 'Silk', 'Velvet', 'Satin', 'Mesh'];
      
      const style = styles[i % styles.length];
      const type = types[Math.floor(i / 8) % types.length];
      const material = materials[Math.floor(i / 4) % materials.length];
      
      return createGalleryItem(
        `/images/void-boudoir/IMG_${8181 + i}.WEBP`,
        `${material} ${type} ${i + 16}`,
        'bodysuit',
        { 
          style: style as any, 
          luxuryLevel: i % 5 === 0 ? 'bespoke' : 'premium', 
          useCase: 'evening' 
        }
      );
    })
  ];
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={items}
      description="Our Boudoir collection explores intimacy through luxurious materials and meticulous attention to detail. Each piece is designed to enhance and accentuate while maintaining our signature aesthetic of dark elegance."
    />
  );
} 