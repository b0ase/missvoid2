import GalleryPage from '../../components/GalleryPage';

export default function VoidChicGallery() {
  // Get images based on the category folder pattern
  const images = Array.from({ length: 100 }, (_, i) => `/images/void-chic/IMG_${i + 1}.JPG`);
  
  return (
    <GalleryPage
      title="VOID CHIC"
      images={images}
    />
  );
} 