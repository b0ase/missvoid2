import GalleryPage from '../../components/GalleryPage';

export default function SelfExpressionGallery() {
  // Get images based on the category folder pattern
  const images = Array.from({ length: 50 }, (_, i) => `/images/self-expression/IMG_${i + 1}.JPG`);
  
  return (
    <GalleryPage
      title="SELF EXPRESSION"
      images={images}
    />
  );
} 