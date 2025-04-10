import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidXxxGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-xxx');
  
  return (
    <GalleryPage
      title="VOID XXX"
      images={images}
    />
  );
} 