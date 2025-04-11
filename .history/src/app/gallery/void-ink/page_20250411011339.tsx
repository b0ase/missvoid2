import GalleryPage from '../../components/GalleryPage';

export default function VoidInkGallery() {
  // Use the actual image files (IMG_8474.JPG to IMG_8498.JPG)
  const images = Array.from({ length: 25 }, (_, i) => {
    const imageNum = 8474 + i;
    
    // Special handling for images that use WEBP format
    const webpImages = [8490];
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    
    return `/images/void-ink/IMG_${imageNum}${extension}`;
  });
  
  return (
    <GalleryPage
      title="VOID INK"
      images={images}
    />
  );
} 