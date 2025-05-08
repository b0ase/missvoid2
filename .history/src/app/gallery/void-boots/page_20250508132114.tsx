import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBootsGallery() {
  const items = [
    // Thigh-High Collection
    createGalleryItem(
      '/images/void-boots/IMG_8049.JPG',
      'Noir Thigh-High Platform',
      'boots',
      { description: 'Architectural thigh-high platform boots with a commanding silhouette and premium construction.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8047.JPG',
      'Serpentine Lace-Up Thigh-High',
      'boots',
      { description: 'Sculptural lace-up thigh-high boots with intricate detailing and dramatic height.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Platform Collection
    createGalleryItem(
      '/images/void-boots/IMG_8048.JPG',
      'Eclipse Platform Boot',
      'boots',
      { description: 'Minimalist platform boots with clean lines and elevated structure for evening wear.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8046.JPG',
      'Shadow Platform Boot',
      'boots',
      { description: 'Architectural platform boots with bold geometric elements and premium materials.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Ankle Boots
    createGalleryItem(
      '/images/void-boots/IMG_7995.JPG',
      'Midnight Ankle Boot',
      'boots',
      { description: 'Minimalist ankle boots designed for everyday wear with refined details.', style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7996.JPG',
      'Void Lace-Up Ankle Boot',
      'boots',
      { description: 'Architectural lace-up ankle boots with structured elements for everyday sophistication.', style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),

    // Statement Pieces
    createGalleryItem(
      '/images/void-boots/IMG_7999.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Sculptural avant-garde platform boots designed as statement pieces for special occasions.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7997.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Architectural gothic platform boots with dramatic elements for special occasions.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/void-boots/IMG_8003.JPG',
      'Signature Platform Boot',
      'boots',
      { description: 'Minimalist signature platform boots featuring our distinctive design aesthetic.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8002.JPG',
      'Void Signature Heel',
      'boots',
      { description: 'Architectural signature heeled boots with our distinctive design elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Architectural Design
    createGalleryItem(
      '/images/void-boots/IMG_8040.JPG',
      'Architectural Platform',
      'boots',
      { description: 'Bold architectural platform boots with structural design elements for evening wear.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8027.JPG',
      'Architectural Platform Boot',
      'boots',
      { description: 'Premium architectural platform boots with structural elements for special occasions.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    
    // Minimalist Collection
    createGalleryItem(
      '/images/void-boots/IMG_8042.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Clean-lined minimalist platform boots with elegant proportions for evening wear.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8030.JPG',
      'Minimalist Platform',
      'boots',
      { description: 'Refined minimalist platform boots with essential design elements for evening events.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Sculptural Design
    createGalleryItem(
      '/images/void-boots/IMG_8045.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Dramatic sculptural platform boots with artistic elements for special occasions.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7988.JPG',
      'Sculptural Thigh-High',
      'boots',
      { description: 'Artistically sculpted thigh-high boots with dramatic proportions for evening wear.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    )
  ];

  return (
    <GalleryPage
      title="VOID BOOTS"
      description="Explore our signature collection of avant-garde boots. Each pair is a masterpiece of architectural design, featuring bold platforms, striking silhouettes, and premium materials. From statement thigh-highs to sculptural platforms, these boots embody the essence of MISS VOID's distinctive aesthetic."
      images={items}
      galleryName="VOID BOOTS"
    />
  );
} 