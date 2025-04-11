import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidChicGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-chic/IMG_8285.JPG',
      'Chic Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8286.JPG',
      'Chic Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8287.JPG',
      'Chic Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8288.JPG',
      'Chic Collar',
      'collar',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8289.JPG',
      'Chic Gloves',
      'gloves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8290.JPG',
      'Chic Mask',
      'mask',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8291.JPG',
      'Chic Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8292.JPG',
      'Chic Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8293.JPG',
      'Chic Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8294.JPG',
      'Chic Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8295.JPG',
      'Chic Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8296.JPG',
      'Chic Top',
      'top',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8297.JPG',
      'Chic Bralette',
      'bralette',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8298.JPG',
      'Chic Boots',
      'boots',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8299.JPG',
      'Chic Heels',
      'heels',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-chic/IMG_8300.JPG',
      'Chic Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID CHIC"
      images={items}
      description="The Chic collection embodies elegance and sophistication with a modern twist. Each piece is designed to make a statement, combining classic silhouettes with contemporary details. Perfect for special occasions, these designs offer a refined aesthetic with a touch of avant-garde flair."
    />
  );
} 