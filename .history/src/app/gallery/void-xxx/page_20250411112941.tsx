'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Gallery items with detailed descriptions but using simple paths
const galleryItems = [
  {
    src: '/images/void-chic/IMG_8350.JPG', // Using existing images to ensure they load
    title: 'Dominance Harness',
    description: 'A statement piece that frames and enhances the natural musculature with precision-cut leather straps. The geometric design creates visual tension while maintaining full mobility.',
    materials: 'Bull hide leather, stainless steel hardware, adjustable fastening system',
    price: 'From £1,250'
  },
  {
    src: '/images/void-chic/IMG_8351.JPG',
    title: 'Constraint Cuffs',
    description: 'Wrist restraints engineered for both aesthetic appeal and functional strength. The doubled leather construction ensures durability while the contoured shape offers comfortable extended wear.',
    materials: 'Double-layer leather, reinforced stitching, custom locking mechanism',
    price: 'From £580 per pair'
  },
  {
    src: '/images/void-chic/IMG_8352.JPG',
    title: 'Tension Belt',
    description: 'A waist-defining belt that combines traditional leather craft with contemporary hardware elements. The graduated width accentuates the torso while providing substantial support.',
    materials: 'Vegetable-tanned leather, brass hardware, precision buckle system',
    price: 'From £760'
  },
  {
    src: '/images/void-chic/IMG_8353.JPG',
    title: 'Power Collar',
    description: 'A substantial neck piece designed to enhance posture and presence. The layered construction creates a commanding silhouette while internal padding ensures comfort.',
    materials: 'Structured leather, padded lining, polished steel fixtures',
    price: 'From £890'
  },
  {
    src: '/images/void-chic/IMG_8354.JPG',
    title: 'Discipline Restraint System',
    description: 'A comprehensive restraint system that can be configured multiple ways. Each component is designed to work independently or as part of the integrated system.',
    materials: 'Heavy-duty leather, steel connecting elements, secure locking points',
    price: 'From £1,750 for complete set'
  }
];

// Add a few more images from existing files
const additionalItems = [
  {
    src: '/images/void-chic/IMG_8355.JPG',
    title: 'XXX Item 6',
    description: 'A custom leather piece from our exclusive XXX collection.',
    materials: 'Premium leather, metal hardware',
    price: 'Price on request'
  },
  {
    src: '/images/void-chic/IMG_8356.JPG',
    title: 'XXX Item 7',
    description: 'A custom leather piece from our exclusive XXX collection.',
    materials: 'Premium leather, metal hardware',
    price: 'Price on request'
  },
  {
    src: '/images/void-chic/IMG_8357.WEBP',
    title: 'XXX Item 8',
    description: 'A custom leather piece from our exclusive XXX collection.',
    materials: 'Premium leather, metal hardware',
    price: 'Price on request'
  },
  {
    src: '/images/void-chic/IMG_8358.JPG',
    title: 'XXX Item 9',
    description: 'A custom leather piece from our exclusive XXX collection.',
    materials: 'Premium leather, metal hardware',
    price: 'Price on request'
  }
];

export default function VoidXxxGallery() {
  return (
    <GalleryPage 
      title="VOID XXX" 
      images={[...galleryItems, ...additionalItems]}
      description="The VOID XXX collection explores the intersection of power dynamics, physicality, and restraint. Each piece is engineered to accentuate the body's natural form while providing functional performance. These works embody the primal aesthetic that defines Miss Void's most intimate creations."
    />
  );
} 