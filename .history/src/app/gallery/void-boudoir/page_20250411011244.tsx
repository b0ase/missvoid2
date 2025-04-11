import GalleryPage from '../../components/GalleryPage';

export default function VoidBoudoirGallery() {
  // Use the actual image files (IMG_8096.JPG to IMG_8194.JPG)
  const images = Array.from({ length: 99 }, (_, i) => {
    const imageNum = 8096 + i;
    
    // Special handling for images that use WEBP format
    const webpImages = [8098, 8102, 8109, 8136, 8139, 8142, 8150, 8161, 8165, 8176, 8181, 8185, 8186, 8187];
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    
    return `/images/void-boudoir/IMG_${imageNum}${extension}`;
  });
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={images}
    />
  );
} 