'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Gallery items with detailed descriptions
const galleryItems = [
  {
    src: '/images/void-xxx/cover.jpg',
    title: 'Dominance Harness',
    description: 'A statement piece that frames and enhances the natural musculature with precision-cut leather straps. The geometric design creates visual tension while maintaining full mobility.',
    materials: 'Bull hide leather, stainless steel hardware, adjustable fastening system',
    price: 'From £1,250'
  },
  {
    src: '/images/void-xxx/IMG_8086.JPG',
    title: 'Constraint Cuffs',
    description: 'Wrist restraints engineered for both aesthetic appeal and functional strength. The doubled leather construction ensures durability while the contoured shape offers comfortable extended wear.',
    materials: 'Double-layer leather, reinforced stitching, custom locking mechanism',
    price: 'From £580 per pair'
  },
  {
    src: '/images/void-xxx/IMG_8195.JPG',
    title: 'Tension Belt',
    description: 'A waist-defining belt that combines traditional leather craft with contemporary hardware elements. The graduated width accentuates the torso while providing substantial support.',
    materials: 'Vegetable-tanned leather, brass hardware, precision buckle system',
    price: 'From £760'
  },
  {
    src: '/images/void-xxx/IMG_8230.WEBP',
    title: 'Power Collar',
    description: 'A substantial neck piece designed to enhance posture and presence. The layered construction creates a commanding silhouette while internal padding ensures comfort.',
    materials: 'Structured leather, padded lining, polished steel fixtures',
    price: 'From £890'
  },
  {
    src: '/images/void-xxx/IMG_8250.WEBP',
    title: 'Discipline Restraint System',
    description: 'A comprehensive restraint system that can be configured multiple ways. Each component is designed to work independently or as part of the integrated system.',
    materials: 'Heavy-duty leather, steel connecting elements, secure locking points',
    price: 'From £1,750 for complete set'
  }
];

// The original void-muscles images for reference
const additionalImages = [
  // First range of images (IMG_8086.JPG to IMG_8094.WEBP)
  ...Array.from({ length: 9 }, (_, i) => {
    const imageNum = 8086 + i;
    const webpImages = [8088, 8089, 8091, 8094];
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    return {
      src: `/images/void-xxx/IMG_${imageNum}${extension}`
    };
  }),
  
  // Second range of images (IMG_8195.JPG to IMG_8284.JPG)
  ...Array.from({ length: 90 }, (_, i) => {
    const imageNum = 8195 + i;
    const webpImages = [8209, 8222, 8230, 8250, 8255, 8269, 8273];
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    return {
      src: `/images/void-xxx/IMG_${imageNum}${extension}`
    };
  })
];

// Filter out any images already in galleryItems
const allImages = [
  ...galleryItems,
  ...additionalImages.filter(item => 
    !galleryItems.some(galleryItem => galleryItem.src === item.src)
  )
];

export default function VoidXxxGallery() {
  return (
    <GalleryPage 
      title="VOID XXX" 
      images={allImages}
      description="The VOID XXX collection explores the intersection of power dynamics, physicality, and restraint. Each piece is engineered to accentuate the body's natural form while providing functional performance. These works embody the primal aesthetic that defines Miss Void's most intimate creations."
    />
  );
} 