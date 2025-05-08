import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { description: 'A striking portrait showcasing the essence of MISS VOID design philosophy.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Core Collection
    createGalleryItem(
      '/images/miss-void/IMG_6556.JPG',
      'Shadow Harness',
      'harness',
      { description: 'The Shadow Harness features architectural lines and precise craftsmanship, creating a bold statement piece.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6565.JPG',
      'Void Corset',
      'corset',
      { description: 'A sculptural corset with meticulous boning and luxurious materials, creating a dramatic silhouette.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6570.JPG',
      'Eclipse Bodysuit',
      'bodysuit',
      { description: 'A minimalist bodysuit with clean lines and premium construction, perfect for evening events.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6574.JPG',
      'Void Mask',
      'mask',
      { description: 'A sculptural mask designed for performance, featuring bold geometric shapes.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6577.JPG',
      'Eclipse Skirt',
      'skirt',
      { description: 'A flowing skirt with dramatic movement, crafted for special occasions.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6580.JPG',
      'Void Gown',
      'gown',
      { description: 'A bespoke flowing gown that transforms the silhouette, designed for the most special occasions.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),

    // Extended Collection
    createGalleryItem(
      '/images/miss-void/IMG_6586.JPG',
      'Noir Dress',
      'dress',
      { description: 'A flowing premium dress with elegant draping and sophisticated details.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6589.JPG',
      'Shadow Coat',
      'coat',
      { description: 'A bespoke architectural coat with striking structural elements and premium craftsmanship.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6594.JPG',
      'Phantom Harness',
      'harness',
      { description: 'An elaborate harness with intricate detailing and premium hardware elements.', style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/miss-void/IMG_6696.JPG',
      'Phantom Gown',
      'gown',
      { description: 'A bespoke elaborate gown with intricate detailing and luxurious materials for evening wear.', style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6954.JPG',
      'Void Sleeves',
      'sleeves',
      { description: 'Sculptural detached sleeves with dramatic shaping and premium construction.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/miss-void/IMG_7722.JPG',
      'Eclipse Dress',
      'dress',
      { description: 'An architectural dress with structural elements, designed for elegant evening events.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7735.JPG',
      'Eclipse Corset',
      'corset',
      { description: 'A sculptural corset featuring premium materials and meticulous construction.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/miss-void/IMG_7768.JPG',
      'Noir Top',
      'top',
      { description: 'A minimalist top with clean lines and performance-oriented design.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7809.JPG',
      'Void Corset',
      'corset',
      { description: 'An architectural corset with structural elements and premium construction.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7831.JPG',
      'Noir Mask',
      'mask',
      { description: 'A bespoke architectural mask designed for performance, with dramatic shaping.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    )
  ];

  // Filter out deleted images
  const deletedImages = [
    "/images/miss-void/IMG_6556.JPG",
    "/images/miss-void/IMG_7831.JPG", 
    "/images/miss-void/IMG_6954.JPG", 
    "/images/miss-void/IMG_6589.JPG", 
    "/images/miss-void/IMG_6574.JPG"
  ];
  const filteredItems = items.filter(item => !deletedImages.includes(item.src));

  return (
    <GalleryPage
      title="MISS VOID"
      images={filteredItems}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
      galleryName="MISS VOID"
    />
  );
} 