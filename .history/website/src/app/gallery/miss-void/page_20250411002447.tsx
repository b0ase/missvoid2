import GalleryPage from '../../components/GalleryPage';

// This would typically come from a database or API
const dummyImages = Array.from({ length: 12 }, (_, i) => `/images/miss-void/image-${i + 1}.jpg`);

export default function MissVoidGallery() {
  return (
    <GalleryPage
      title="MISS VOID"
      images={dummyImages}
    />
  );
} 