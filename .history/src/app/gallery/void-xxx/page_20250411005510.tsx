import GalleryPage from '../../components/GalleryPage';

export default function VoidXxxGallery() {
  // Use static numbered image paths for now, until actual images are available
  const images = Array.from({ length: 20 }, (_, i) => `/images/void-xxx/IMG_${i + 1}.JPG`);
  
  return (
    <GalleryPage
      title="VOID XXX"
      images={images}
    />
  );
} 