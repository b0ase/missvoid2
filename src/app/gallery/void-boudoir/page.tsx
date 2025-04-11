import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBoudoirGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-boudoir/IMG_8096.JPG',
      'Midnight Bodysuit',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8098.WEBP',
      'Whisper Bralette',
      'bralette',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8102.WEBP',
      'Velvet Shadow Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8109.WEBP',
      'Noir Lace Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8117.JPG',
      'Intimate Collar',
      'collar',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8120.JPG',
      'Satin Touch Gloves',
      'gloves',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8136.JPG',
      'Boudoir Mask',
      'mask',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8139.WEBP',
      'Silk Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8142.WEBP',
      'Noir Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8150.WEBP',
      'Boudoir Sleeves',
      'sleeves',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8152.JPG',
      'Evening Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8161.WEBP',
      'Midnight Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8165.WEBP',
      'Intimate Top',
      'top',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8167.JPG',
      'Satin Leggings',
      'leggings',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8176.WEBP',
      'Velvet Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8181.WEBP',
      'Night Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={items}
      description="Our Boudoir collection explores intimacy and vulnerability through luxurious textures and delicate constructions. Each piece is designed to create a private atmosphere of sensuality while maintaining our signature structural integrity and attention to detail."
    />
  );
} 