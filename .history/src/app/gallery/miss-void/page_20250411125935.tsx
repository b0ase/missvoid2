import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  // Create 16 featured pieces with detailed descriptions using our utility
  const items = [
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Eclipse Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7832.JPG',
      'Void Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7830.JPG',
      'Ethereal Harness',
      'harness',
      { style: 'sculptural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7820.JPG',
      'Phantom Gloves',
      'gloves',
      { style: 'elaborate', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7840.JPG',
      'Void Collar',
      'collar',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7841.JPG',
      'Oblivion Mask',
      'mask',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7842.JPG',
      'Void Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7834.JPG',
      'Noir Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7835.JPG',
      'Void Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7836.JPG',
      'Abyss Bralette',
      'bralette',
      { style: 'sculptural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7837.JPG',
      'Eclipse Hood',
      'hood',
      { style: 'elaborate', luxuryLevel: 'bespoke' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7838.JPG',
      'Void Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7839.JPG',
      'Shadow Top',
      'top',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7843.JPG',
      'Void Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7844.JPG',
      'Specter Corset',
      'corset',
      { style: 'elaborate', luxuryLevel: 'bespoke' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7845.JPG',
      'Phantom Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium' }
    ),
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The signature collection that embodies the core aesthetic of our brand. These pieces represent the foundation of Miss Void's design philosophy—balancing restriction and freedom, darkness and illumination. Each item is meticulously crafted to transform the wearer's silhouette and experience of their own body."
    />
  );
} 