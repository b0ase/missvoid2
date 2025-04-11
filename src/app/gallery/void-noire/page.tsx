import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidNoireGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-noire/bw_void-chic_IMG_8357.WEBP',
      'Monochrome Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-chic_IMG_8359.WEBP',
      'Noir Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-chic_IMG_8362.JPG',
      'Shadow Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8109.WEBP',
      'Monochrome Collar',
      'collar',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8117.JPG',
      'Noir Gloves',
      'gloves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8120.JPG',
      'Shadow Mask',
      'mask',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8138.JPG',
      'Monochrome Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8152.JPG',
      'Noir Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8166.JPG',
      'Shadow Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8167.JPG',
      'Monochrome Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8181.WEBP',
      'Noir Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-ink_IMG_8485.JPG',
      'Shadow Top',
      'top',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-ink_IMG_8490.WEBP',
      'Monochrome Bralette',
      'bralette',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-footwear_IMG_7989.WEBP',
      'Noir Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-footwear_IMG_8004.WEBP',
      'Shadow Heels',
      'heels',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7869.WEBP',
      'Monochrome Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={items}
      description="Our Noir collection celebrates the dramatic power of monochrome. Each piece is designed with sharp contrasts and refined silhouettes that create bold, photographic impact. These pieces are especially selected for their striking visual presence in black and white, emphasizing form, texture, and the interplay of light and shadow."
    />
  );
} 