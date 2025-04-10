import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidChicGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-chic');
  
  return (
    <GalleryPage
      title="VOID CHIC"
      images={images}
    />
  );
} 