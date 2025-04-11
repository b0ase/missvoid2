import GalleryPage from '../../components/GalleryPage';

export default function VoidNoireGallery() {
  // Combine both the original placeholder images and the black and white images
  const images = [
    // Original images
    ...Array.from({ length: 20 }, (_, i) => `/images/void-noire/image-${i + 1}.jpg`),
    
    // Black and white images from other galleries
    '/images/void-noire/bw_void-chic_IMG_8357.WEBP',
    '/images/void-noire/bw_void-chic_IMG_8359.WEBP',
    '/images/void-noire/bw_void-boudoir_IMG_8109.WEBP',
    '/images/void-noire/bw_void-ink_IMG_8490.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8273.WEBP'
  ];
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={images}
    />
  );
} 