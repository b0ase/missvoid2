import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidChicGallery() {
  const items = [
    // Cover image
    createGalleryItem(
      '/images/void-chic/cover.JPG',
      'VOID CHIC Collection',
      'portrait',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Elegant Collection
    createGalleryItem(
      '/images/void-chic/IMG_8304.WEBP',
      'Chic Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8305.JPG',
      'Elegant Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8309.JPG',
      'Sophisticated Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8310.JPG',
      'Refined Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8311.JPG',
      'Luxe Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8312.JPG',
      'Couture Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/void-chic/IMG_8315.JPG',
      'Modern Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8317.JPG',
      'Avant-Garde Dress',
      'dress',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8319.JPG',
      'Minimalist Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8321.JPG',
      'Contemporary Bodysuit',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8322.JPG',
      'Sleek Dress',
      'dress',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8324.JPG',
      'Modern Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),

    // Luxe Collection
    createGalleryItem(
      '/images/void-chic/IMG_8325.JPG',
      'Luxury Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8327.JPG',
      'Haute Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8330.JPG',
      'Deluxe Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8332.JPG',
      'Premium Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8337.WEBP',
      'Elite Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8342.JPG',
      'Exclusive Gown',
      'gown',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/void-chic/IMG_8345.JPG',
      'Signature Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8349.JPG',
      'Classic Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8350.JPG',
      'Essential Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8353.JPG',
      'Timeless Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8354.JPG',
      'Heritage Gown',
      'gown',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8355.JPG',
      'Icon Bodysuit',
      'bodysuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/void-chic/IMG_8356.JPG',
      'Artisan Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8357.WEBP',
      'Experimental Dress',
      'dress',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8358.JPG',
      'Progressive Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8359.WEBP',
      'Innovative Bodysuit',
      'bodysuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8360.JPG',
      'Forward Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8363.JPG',
      'Visionary Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    )
  ];

  return (
    <GalleryPage
      title="VOID CHIC"
      images={items}
      description="Welcome to VOID CHIC, a collection that embodies sophisticated minimalism and contemporary elegance. Each piece showcases our commitment to refined aesthetics and architectural silhouettes. From sleek bodysuits to sculptural corsets, this collection represents the intersection of luxury and avant-garde design. Every garment is meticulously crafted to create a perfect balance between modern simplicity and bold statement pieces."
    />
  );
} 