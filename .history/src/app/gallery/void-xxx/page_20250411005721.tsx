import GalleryPage from '../../components/GalleryPage';

export default function VoidXxxGallery() {
  // Use image paths that match what the app is requesting
  const images = Array.from({ length: 20 }, (_, i) => `/images/void-xxx/image-${i + 1}.jpg`);
  
  return (
    <GalleryPage
      title="VOID XXX"
      images={images}
    />
  );
} 