import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidInkGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-ink/IMG_8474.JPG',
      'Ink Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8475.JPG',
      'Ink Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8476.JPG',
      'Ink Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8477.JPG',
      'Ink Collar',
      'collar',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8478.JPG',
      'Ink Gloves',
      'gloves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8479.JPG',
      'Ink Mask',
      'mask',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8480.JPG',
      'Ink Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8481.JPG',
      'Ink Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8482.JPG',
      'Ink Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8483.JPG',
      'Ink Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8484.JPG',
      'Ink Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8485.JPG',
      'Ink Top',
      'top',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8486.JPG',
      'Ink Bralette',
      'bralette',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8487.JPG',
      'Ink Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8488.JPG',
      'Ink Heels',
      'heels',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8489.JPG',
      'Ink Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID INK"
      images={items}
      description="The Ink collection is inspired by the fluidity and permanence of ink. Each piece is designed to flow with the body, creating dynamic silhouettes that capture the essence of movement and expression. Perfect for performance, these designs offer a bold aesthetic with a focus on form and function."
    />
  );
} 