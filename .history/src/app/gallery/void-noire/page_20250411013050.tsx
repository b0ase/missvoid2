import GalleryPage from '../../components/GalleryPage';

export default function VoidNoireGallery() {
  // Use only the black and white images, not the placeholder images
  const images = [
    // Black and white images from various galleries
    // void-chic
    '/images/void-noire/bw_void-chic_IMG_8357.WEBP',
    '/images/void-noire/bw_void-chic_IMG_8359.WEBP',
    
    // void-boudoir
    '/images/void-noire/bw_void-boudoir_IMG_8109.WEBP',
    
    // void-ink
    '/images/void-noire/bw_void-ink_IMG_8490.WEBP',
    
    // void-muscles
    '/images/void-noire/bw_void-muscles_IMG_8273.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8269.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8255.WEBP',
    
    // void-industry
    '/images/void-noire/bw_void-industry_IMG_8439.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8426.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8428.WEBP',
    
    // void-footwear
    '/images/void-noire/bw_void-footwear_IMG_7989.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8004.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8008.WEBP',
    
    // miss-void
    '/images/void-noire/bw_miss-void_IMG_7869.WEBP',
    '/images/void-noire/bw_miss-void_IMG_7803.WEBP'
  ];
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={images}
    />
  );
} 