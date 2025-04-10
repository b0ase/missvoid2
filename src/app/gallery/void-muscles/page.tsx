import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidMusclesGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-muscles');
  
  return (
    <GalleryPage
      title="VOID MUSCLES"
      images={images}
    />
  );
} 