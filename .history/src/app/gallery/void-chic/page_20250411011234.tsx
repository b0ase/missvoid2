import GalleryPage from '../../components/GalleryPage';

export default function VoidChicGallery() {
  // Use the actual image files (IMG_8285.JPG to IMG_8366.WEBP)
  const images = Array.from({ length: 82 }, (_, i) => `/images/void-chic/IMG_${8285 + i}${i % 8 === 0 ? '.WEBP' : '.JPG'}`);
  
  return (
    <GalleryPage
      title="VOID CHIC"
      images={images}
    />
  );
} 