import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBoudoirGallery() {
  const items = [
    // Signature Pieces
    createGalleryItem(
      '/images/void-boudoir/IMG_8187.WEBP',
      'Velvet Dreams Bodysuit',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8186.WEBP',
      'Silk Shadow Brief',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8185.WEBP',
      'Lace Embrace Thong',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8184.JPG',
      'Noir Nights G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8183.JPG',
      'Whisper Lace Brief',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8182.JPG',
      'Midnight Mesh Thong',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8181.WEBP',
      'Velvet Touch Brief',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8180.JPG',
      'Shadow Play G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8179.JPG',
      'Silk Secrets Thong',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8170.JPG',
      'Noir Elegance Brief',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8167.JPG',
      'Lace Whispers G-String',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8166.JPG',
      'Midnight Romance Thong',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8164.JPG',
      'Velvet Dreams Brief',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8163.JPG',
      'Shadow Lace G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Continue with remaining images...
    createGalleryItem(
      '/images/void-boudoir/IMG_8159.JPG',
      'Silk Embrace Brief',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8158.JPG',
      'Noir Mesh G-String',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8157.JPG',
      'Whisper Touch Thong',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8156.JPG',
      'Midnight Lace Brief',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8151.JPG',
      'Shadow Silk G-String',
      'bodysuit',
      { style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Add all remaining images with unique descriptions
    ...Array.from({ length: 30 }, (_, i) => {
      const styles = ['minimal', 'flowing', 'elaborate'];
      const types = ['Thong', 'G-String', 'Brief', 'Brazilian'];
      const materials = ['Lace', 'Silk', 'Velvet', 'Mesh', 'Satin'];
      const collections = ['Midnight', 'Shadow', 'Noir', 'Whisper', 'Dark'];
      
      const style = styles[i % styles.length];
      const type = types[i % types.length];
      const material = materials[Math.floor(i / 6) % materials.length];
      const collection = collections[Math.floor(i / 5) % collections.length];
      
      const imageNumber = 8150 - i;
      const extension = i % 3 === 0 ? 'WEBP' : 'JPG';
      
      return createGalleryItem(
        `/images/void-boudoir/IMG_${imageNumber}.${extension}`,
        `${collection} ${material} ${type}`,
        'bodysuit',
        { 
          style: style as any, 
          luxuryLevel: i % 5 === 0 ? 'bespoke' : 'premium', 
          useCase: 'evening' 
        }
      );
    })
  ];
  
  // Filter out deleted images
  const deletedImages = [
    "/images/void-boudoir/IMG_8127.JPG", 
    "/images/void-boudoir/IMG_8187.WEBP", 
    "/images/void-boudoir/IMG_8186.WEBP", 
    "/images/void-boudoir/IMG_8185.WEBP", 
    "/images/void-boudoir/IMG_8184.JPG", 
    "/images/void-boudoir/IMG_8183.JPG", 
    "/images/void-boudoir/IMG_8180.JPG", 
    "/images/void-boudoir/IMG_8179.JPG", 
    "/images/void-boudoir/IMG_8166.JPG", 
    "/images/void-boudoir/IMG_8163.JPG", 
    "/images/void-boudoir/IMG_8159.JPG", 
    "/images/void-boudoir/IMG_8131.JPG", 
    "/images/void-boudoir/IMG_8146.JPG"
  ];
  const filteredItems = items.filter(item => !deletedImages.includes(item.src));
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={filteredItems}
      description="Our Boudoir collection celebrates intimate elegance through a curated selection of luxurious undergarments. Each piece is crafted with meticulous attention to detail, combining comfort with our signature dark aesthetic. From delicate lace to sumptuous silk, these pieces embody sophisticated sensuality."
      galleryName="VOID BOUDOIR"
    />
  );
} 