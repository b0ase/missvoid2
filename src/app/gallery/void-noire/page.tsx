import GalleryPage from '../../components/GalleryPage';

export default function VoidNoireGallery() {
  // Use image paths that match what the app is requesting
  const images = Array.from({ length: 20 }, (_, i) => `/images/void-noire/image-${i + 1}.jpg`);
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={images}
    />
  );
} 