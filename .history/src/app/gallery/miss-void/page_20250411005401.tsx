import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Get images based on the actual files in directory (IMG_7748.JPG to IMG_7954.JPG)
  const images = Array.from({ length: 207 }, (_, i) => `/images/miss-void/IMG_${7748 + i}.JPG`);
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images}
    />
  );
} 