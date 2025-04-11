import GalleryPage from '../../components/GalleryPage';

export default function VoidFootwearGallery() {
  // Use the actual image files (IMG_7966.JPG to IMG_8049.JPG)
  const images = Array.from({ length: 84 }, (_, i) => {
    const imageNum = 7966 + i;
    
    // Special handling for images that use WEBP format
    const webpImages = [7989, 8004, 8008];
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    
    return `/images/void-footwear/IMG_${imageNum}${extension}`;
  });
  
  return (
    <GalleryPage
      title="VOID FOOTWEAR"
      images={images}
    />
  );
} 