import GalleryPage from '../../components/GalleryPage';

export default function PerformativeSelfGallery() {
  // Get images based on the category folder pattern
  const images = Array.from({ length: 50 }, (_, i) => `/images/performative-self/IMG_${i + 1}.JPG`);
  
  return (
    <GalleryPage
      title="PERFORMATIVE SELF"
      images={images}
    />
  );
} 