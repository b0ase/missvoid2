import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Core Collection
    createGalleryItem(
      '/images/miss-void/IMG_6556.JPG',
      'Shadow Harness',
      'harness',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6565.JPG',
      'Void Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6570.JPG',
      'Eclipse Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6571.JPG',
      'Phantom Gloves',
      'gloves',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6572.JPG',
      'Noir Collar',
      'collar',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6574.JPG',
      'Void Mask',
      'mask',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6576.JPG',
      'Shadow Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6577.JPG',
      'Eclipse Skirt',
      'skirt',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6578.JPG',
      'Phantom Top',
      'top',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6579.JPG',
      'Noir Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6580.JPG',
      'Void Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6581.JPG',
      'Shadow Bralette',
      'bralette',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6582.JPG',
      'Eclipse Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6585.JPG',
      'Phantom Leggings',
      'leggings',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Extended Collection
    createGalleryItem(
      '/images/miss-void/IMG_6586.JPG',
      'Noir Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6588.JPG',
      'Void Accessory',
      'accessory',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6589.JPG',
      'Shadow Coat',
      'coat',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6591.JPG',
      'Eclipse Jumpsuit',
      'jumpsuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6594.JPG',
      'Phantom Harness',
      'harness',
      { style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6596.JPG',
      'Noir Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6600.JPG',
      'Void Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6609.JPG',
      'Shadow Gloves',
      'gloves',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6612.JPG',
      'Eclipse Collar',
      'collar',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6613.JPG',
      'Phantom Mask',
      'mask',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/miss-void/IMG_6668.JPG',
      'Noir Cuffs',
      'cuffs',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6683.JPG',
      'Void Skirt',
      'skirt',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6685.JPG',
      'Shadow Top',
      'top',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6687.JPG',
      'Eclipse Hood',
      'hood',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6696.JPG',
      'Phantom Gown',
      'gown',
      { style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6953.JPG',
      'Noir Bralette',
      'bralette',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6954.JPG',
      'Void Sleeves',
      'sleeves',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/miss-void/IMG_7721.JPG',
      'Shadow Leggings',
      'leggings',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7722.JPG',
      'Eclipse Dress',
      'dress',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7723.JPG',
      'Phantom Accessory',
      'accessory',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7724.WEBP',
      'Noir Coat',
      'coat',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7725.JPG',
      'Void Jumpsuit',
      'jumpsuit',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7726.JPG',
      'Shadow Harness',
      'harness',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7735.JPG',
      'Eclipse Corset',
      'corset',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7740.JPG',
      'Phantom Bodysuit',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7742.WEBP',
      'Noir Gloves',
      'gloves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7743.JPG',
      'Void Collar',
      'collar',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7745.JPG',
      'Shadow Mask',
      'mask',
      { style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7746.JPG',
      'Eclipse Cuffs',
      'cuffs',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/miss-void/IMG_7757.JPG',
      'Phantom Skirt',
      'skirt',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7768.JPG',
      'Noir Top',
      'top',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7772.JPG',
      'Void Hood',
      'hood',
      { style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7773.WEBP',
      'Shadow Gown',
      'gown',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7776.JPG',
      'Eclipse Bralette',
      'bralette',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7781.JPG',
      'Phantom Sleeves',
      'sleeves',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7801.JPG',
      'Noir Leggings',
      'leggings',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7803.WEBP',
      'Void Dress',
      'dress',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7804.JPG',
      'Shadow Accessory',
      'accessory',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7805.JPG',
      'Eclipse Coat',
      'coat',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7806.JPG',
      'Phantom Jumpsuit',
      'jumpsuit',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7807.JPG',
      'Noir Harness',
      'harness',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7809.JPG',
      'Void Corset',
      'corset',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7815 (1).JPG',
      'Shadow Bodysuit',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7823.JPG',
      'Eclipse Gloves',
      'gloves',
      { style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7827.JPG',
      'Phantom Collar',
      'collar',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7831.JPG',
      'Noir Mask',
      'mask',
      { style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    )
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
    />
  );
} 