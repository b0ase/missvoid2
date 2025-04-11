import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBootsGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/void-boots/cover.jpg',
      'Signature Thigh-High Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Thigh-High Collection
    createGalleryItem(
      '/images/void-boots/IMG_8049.JPG',
      'Noir Thigh-High Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8047.JPG',
      'Serpentine Lace-Up Thigh-High',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Platform Collection
    createGalleryItem(
      '/images/void-boots/IMG_8048.JPG',
      'Eclipse Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8046.JPG',
      'Shadow Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Ankle Boots
    createGalleryItem(
      '/images/void-boots/IMG_7995.JPG',
      'Midnight Ankle Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7996.JPG',
      'Void Lace-Up Ankle Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),

    // Statement Pieces
    createGalleryItem(
      '/images/void-boots/IMG_7999.JPG',
      'Avant-Garde Platform',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7997.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/void-boots/IMG_8003.JPG',
      'Signature Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8002.JPG',
      'Void Signature Heel',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Additional items...
    createGalleryItem(
      '/images/void-boots/IMG_8005.JPG',
      'Structured Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8035.JPG',
      'Geometric Platform',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8036.JPG',
      'Avant-Garde Thigh-High',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8037.JPG',
      'Noir Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8041.JPG',
      'Gothic Lace-Up Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8038.JPG',
      'Structured Ankle Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8039.JPG',
      'Platform Statement Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8040.JPG',
      'Architectural Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8042.JPG',
      'Minimalist Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8043.JPG',
      'Gothic Platform Heel',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8045.JPG',
      'Sculptural Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8044.JPG',
      'Avant-Garde Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8024.JPG',
      'Structured Thigh-High',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8026.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Continue with remaining items...
    createGalleryItem(
      '/images/void-boots/IMG_8025.JPG',
      'Minimalist Thigh-High',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8027.JPG',
      'Architectural Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8028.JPG',
      'Statement Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8029.JPG',
      'Gothic Thigh-High Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8030.JPG',
      'Minimalist Platform',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8032.JPG',
      'Sculptural Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8033.JPG',
      'Architectural Ankle Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8034.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8006.JPG',
      'Minimalist Thigh-High',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8007.JPG',
      'Structured Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8009.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8010.JPG',
      'Avant-Garde Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8011.JPG',
      'Minimalist Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8012.JPG',
      'Sculptural Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8013.JPG',
      'Gothic Ankle Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8015.JPG',
      'Architectural Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8014.JPG',
      'Statement Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8019.JPG',
      'Minimalist Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7987.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7988.JPG',
      'Sculptural Thigh-High',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7990.JPG',
      'Avant-Garde Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7991.JPG',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7971.JPG',
      'Minimalist Platform Boot',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7973.JPG',
      'Sculptural Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7974.JPG',
      'Architectural Platform',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    // WEBP format images
    createGalleryItem(
      '/images/void-boots/IMG_8008.WEBP',
      'Gothic Platform Boot',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'statement' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7989.WEBP',
      'Sculptural Platform Boot',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    )
  ];

  return (
    <GalleryPage
      title="VOID BOOTS"
      description="Explore our signature collection of avant-garde boots. Each pair is a masterpiece of architectural design, featuring bold platforms, striking silhouettes, and premium materials. From statement thigh-highs to sculptural platforms, these boots embody the essence of MISS VOID's distinctive aesthetic."
      items={items}
    />
  );
} 