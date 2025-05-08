import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBoudoirGallery() {
  const items = [
    // Signature Pieces
    createGalleryItem(
      '/images/void-boudoir/IMG_8187.WEBP',
      'Velvet Dreams Bodysuit',
      'bodysuit',
      { 
        description: 'A flowing premium bodysuit crafted from luxurious velvet, perfect for evening wear.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8186.WEBP',
      'Silk Shadow Brief',
      'bodysuit',
      { 
        description: 'A minimal premium brief made of the finest silk with elegant details.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8185.WEBP',
      'Lace Embrace Thong',
      'bodysuit',
      { 
        description: 'A flowing premium thong with intricate lace detailing for evening elegance.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8184.JPG',
      'Noir Nights G-String',
      'bodysuit',
      { 
        description: 'A minimal premium g-string in noir tones for sophisticated evening wear.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8183.JPG',
      'Whisper Lace Brief',
      'bodysuit',
      { 
        description: 'A flowing bespoke brief featuring delicate lace with whisper-light comfort.',
        style: 'flowing', 
        luxuryLevel: 'bespoke', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8182.JPG',
      'Midnight Mesh Thong',
      'bodysuit',
      { 
        description: 'A minimal premium thong with midnight mesh elements for elegant evenings.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8181.WEBP',
      'Velvet Touch Brief',
      'bodysuit',
      { 
        description: 'A flowing premium brief with luxurious velvet touch for evening sophistication.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8180.JPG',
      'Shadow Play G-String',
      'bodysuit',
      { 
        description: 'A minimal premium g-string with shadow-inspired design elements.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8179.JPG',
      'Silk Secrets Thong',
      'bodysuit',
      { 
        description: 'A flowing premium thong crafted from the finest silk for evening luxury.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8170.JPG',
      'Noir Elegance Brief',
      'bodysuit',
      { 
        description: 'A minimal bespoke brief with noir tones and elegant construction.',
        style: 'minimal', 
        luxuryLevel: 'bespoke', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8167.JPG',
      'Lace Whispers G-String',
      'bodysuit',
      { 
        description: 'A flowing premium g-string with whisper-light lace detailing.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8166.JPG',
      'Midnight Romance Thong',
      'bodysuit',
      { 
        description: 'A minimal premium thong designed for romantic midnight occasions.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8164.JPG',
      'Velvet Dreams Brief',
      'bodysuit',
      { 
        description: 'A flowing premium brief made from luxurious velvet for dreamy comfort.',
        style: 'flowing', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8163.JPG',
      'Shadow Lace G-String',
      'bodysuit',
      { 
        description: 'A minimal premium g-string with shadow lace elements for evening allure.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8159.JPG',
      'Silk Embrace Brief',
      'bodysuit',
      { 
        description: 'A flowing bespoke brief crafted from embracing silk with luxurious comfort.',
        style: 'flowing', 
        luxuryLevel: 'bespoke', 
        useCase: 'evening' 
      }
    ),
    createGalleryItem(
      '/images/void-boudoir/IMG_8158.JPG',
      'Noir Mesh G-String',
      'bodysuit',
      { 
        description: 'A minimal premium g-string with noir mesh elements for evening sophistication.',
        style: 'minimal', 
        luxuryLevel: 'premium', 
        useCase: 'evening' 
      }
    )
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