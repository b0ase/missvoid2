'use client';

import GalleryPage from '@/app/components/GalleryPage';

// Gallery items with detailed descriptions but using placeholder images
const galleryItems = [
  {
    src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Monarch+Harness',
    title: 'Monarch Harness',
    description: 'An architectural chest harness featuring precision-cut Italian leather overlays that create a regal silhouette. The graduated panels frame the torso while maintaining mobility and comfort.',
    materials: 'Italian calfskin leather, nickel-free hardware, adjustable buckle closures',
    price: 'From £1,450'
  },
  {
    src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Sovereign+Corset',
    title: 'Sovereign Corset',
    description: 'A structured corset designed with dramatic lines that elongate the torso. Featuring a combination of traditional corsetry techniques and modern leather craftsmanship for a commanding presence.',
    materials: 'Vegetable-tanned leather, steel boning, satin lining, back lacing system',
    price: 'From £2,200'
  },
  {
    src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Imperial+Collar',
    title: 'Imperial Collar',
    description: 'A statement posture collar with architectural detailing that frames the face and neck. The extended shoulder elements create a commanding silhouette inspired by royal regalia.',
    materials: 'Premium cowhide, internal padding, custom brass hardware, adjustable fit system',
    price: 'From £980'
  },
  {
    src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Noble+Restraints',
    title: 'Noble Restraints',
    description: 'Elegant wrist cuffs featuring detailed embossing and edge work that references historical royal motifs. Designed for both aesthetic impact and comfortable extended wear.',
    materials: 'Hand-embossed leather, custom-made locking mechanisms, velvet lining',
    price: 'From £680 per pair'
  },
  {
    src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Regal+Mask',
    title: 'Regal Mask',
    description: 'A sculpted half-face mask that combines elements of traditional masquerade with contemporary dominance aesthetics. The sweeping lines create a transformative presence.',
    materials: 'Molded leather, hand-stitched detailing, adjustable velvet-lined straps',
    price: 'From £850'
  }
];

export default function VoidRoyaleGallery() {
  return (
    <GalleryPage 
      title="VOID ROYALE" 
      images={galleryItems}
      description="The Void Royale collection represents our most prestigious and commanding pieces, drawing inspiration from historical royal regalia reimagined through a contemporary fetish lens. Each item is handcrafted to embody authority, sophistication, and unyielding presence. These signature pieces are designed for those who understand the intimate connection between power exchange and regal bearing."
    />
  );
} 