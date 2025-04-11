import GalleryPage from '../../components/GalleryPage';

export default function VoidNoireGallery() {
  // Use a large collection of black and white images from various galleries
  const images = [
    // void-chic
    '/images/void-noire/bw_void-chic_IMG_8357.WEBP',
    '/images/void-noire/bw_void-chic_IMG_8359.WEBP',
    '/images/void-noire/bw_void-chic_IMG_8362.JPG',
    
    // void-boudoir
    '/images/void-noire/bw_void-boudoir_IMG_8109.WEBP',
    '/images/void-noire/bw_void-boudoir_IMG_8117.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8120.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8138.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8152.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8166.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8167.JPG',
    '/images/void-noire/bw_void-boudoir_IMG_8181.WEBP',
    
    // void-ink
    '/images/void-noire/bw_void-ink_IMG_8485.JPG',
    '/images/void-noire/bw_void-ink_IMG_8490.WEBP',
    '/images/void-noire/bw_void-ink_IMG_8491.JPG',
    
    // void-muscles
    '/images/void-noire/bw_void-muscles_IMG_8209.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8222.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8255.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8269.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8273.WEBP',
    
    // void-industry
    '/images/void-noire/bw_void-industry_IMG_8426.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8428.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8439.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8440.JPG',
    '/images/void-noire/bw_void-industry_IMG_8441.JPG',
    
    // void-footwear
    '/images/void-noire/bw_void-footwear_IMG_7989.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8004.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8008.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8025.JPG',
    '/images/void-noire/bw_void-footwear_IMG_8028.JPG',
    
    // miss-void
    '/images/void-noire/bw_miss-void_IMG_7803.WEBP',
    '/images/void-noire/bw_miss-void_IMG_7869.WEBP',
    '/images/void-noire/bw_miss-void_IMG_7885.JPG',
    '/images/void-noire/bw_miss-void_IMG_7919.JPG',
    '/images/void-noire/bw_miss-void_IMG_7921.JPG'
  ];
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={images}
    />
  );
} 