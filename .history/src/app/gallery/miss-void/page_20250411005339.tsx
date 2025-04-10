import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Get images based on the category folder pattern
  const images = Array.from({ length: 200 }, (_, i) => `/images/miss-void/IMG_${i + 6980}.JPG`);
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images}
    />
  );
} 