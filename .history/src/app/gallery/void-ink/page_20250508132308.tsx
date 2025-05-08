import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidInkGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-ink/IMG_8474.JPG',
      'Ink Bodysuit',
      'bodysuit',
      { description: 'A minimal premium bodysuit featuring ink-inspired patterns, designed for performance with fluid movement.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8475.JPG',
      'Ink Corset',
      'corset',
      { description: 'An architectural premium corset with bold ink-like details, structured for performance wear.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8476.JPG',
      'Ink Harness',
      'harness',
      { description: 'A sculptural premium harness with flowing ink-inspired elements for performance pieces.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8477.JPG',
      'Ink Collar',
      'collar',
      { description: 'A minimal premium collar with sleek ink-inspired design for performance accessories.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8478.JPG',
      'Ink Gloves',
      'gloves',
      { description: 'Architectural premium gloves with structured elements inspired by the movement of ink.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8479.JPG',
      'Ink Mask',
      'mask',
      { description: 'A sculptural premium mask with dramatic ink-inspired details for performance wear.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8480.JPG',
      'Ink Cuffs',
      'cuffs',
      { description: 'Minimal premium cuffs with clean lines inspired by the precision of ink strokes.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8481.JPG',
      'Ink Skirt',
      'skirt',
      { description: 'A flowing premium skirt with ink-like movement and dramatic silhouette for performance.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8482.JPG',
      'Ink Sleeves',
      'sleeves',
      { description: 'Architectural premium sleeves with structured elements featuring ink-inspired patterns.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8483.JPG',
      'Ink Hood',
      'hood',
      { description: 'A sculptural premium hood with dramatic ink-inspired details for statement performance pieces.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8484.JPG',
      'Ink Gown',
      'gown',
      { description: 'A flowing bespoke gown with ink-inspired movement and dramatic draping for performance.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8485.JPG',
      'Ink Top',
      'top',
      { description: 'A minimal premium top with clean lines and ink-inspired details for performance wear.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8486.JPG',
      'Ink Bralette',
      'bralette',
      { description: 'An architectural premium bralette with structured elements featuring ink-inspired design.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8487.JPG',
      'Ink Boots',
      'boots',
      { description: 'Architectural premium boots with structured silhouettes inspired by ink patterns.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8488.JPG',
      'Ink Heels',
      'heels',
      { description: 'Sculptural premium heels with dramatic ink-inspired elements for statement performance footwear.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8489.JPG',
      'Ink Leggings',
      'leggings',
      { description: 'Minimal premium leggings with clean lines and ink-inspired patterns for performance wear.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
  ];
  
  // Filter out deleted images
  const deletedImages = [
    "/images/void-ink/IMG_8489.JPG",
    "/images/void-ink/IMG_8488.JPG",
    "/images/void-ink/IMG_8487.JPG",
  ];
  const filteredItems = items.filter(item => !deletedImages.includes(item.src));
  
  return (
    <GalleryPage
      title="VOID INK"
      images={filteredItems}
      description="The Ink collection is inspired by the fluidity and permanence of ink. Each piece is designed to flow with the body, creating dynamic silhouettes that capture the essence of movement and expression. Perfect for performance, these designs offer a bold aesthetic with a focus on form and function."
      galleryName="VOID INK"
    />
  );
} 