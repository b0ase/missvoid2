import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidFootwearGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-footwear/IMG_7966.JPG',
      'Dominion Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7970.JPG',
      'Void Stilettos',
      'heels',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7975.JPG',
      'Eclipse Boots',
      'boots',
      { style: 'elaborate', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7980.JPG',
      'Phantom Heels',
      'heels',
      { style: 'sculptural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7985.JPG',
      'Abyss Platform Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7989.WEBP',
      'Void Thigh Boots',
      'boots',
      { style: 'minimal', luxuryLevel: 'bespoke' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_7995.JPG',
      'Shadow Ankle Boots',
      'boots',
      { style: 'sculptural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8000.JPG',
      'Eclipse Platforms',
      'heels',
      { style: 'elaborate', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8004.WEBP',
      'Void Stiletto Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8008.WEBP',
      'Phantom Lace-up Boots',
      'boots',
      { style: 'elaborate', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8015.JPG',
      'Abyss Wedge Heels',
      'heels',
      { style: 'sculptural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8020.JPG',
      'Void Ankle Boots',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8025.JPG',
      'Eclipse Heels',
      'heels',
      { style: 'flowing', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8030.JPG',
      'Shadow Platform Heels',
      'heels',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8035.JPG',
      'Void Combat Boots',
      'boots',
      { style: 'elaborate', luxuryLevel: 'bespoke' }
    ),
    createGalleryItem(
      '/images/void-footwear/IMG_8040.JPG',
      'Phantom Over-knee Boots',
      'boots',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID FOOTWEAR"
      images={items}
      description="Our footwear collection combines architectural design with ergonomic comfort. Each piece is engineered to transform the wearer's silhouette and stance while providing stability and support. From dramatic platforms to sleek stilettos, these designs balance aesthetic impact with structural integrity."
    />
  );
} 