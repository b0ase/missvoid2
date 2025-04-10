import GalleryPage from '../../components/GalleryPage';

export default function HumanEmbodimentGallery() {
  // Get images based on the category folder pattern
  const images = Array.from({ length: 50 }, (_, i) => `/images/human-embodiment/IMG_${i + 1}.JPG`);
  
  return (
    <GalleryPage
      title="HUMAN EMBODIMENT"
      images={images}
    />
  );
} 