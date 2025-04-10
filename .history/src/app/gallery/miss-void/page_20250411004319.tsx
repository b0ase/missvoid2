import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function MissVoidGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('miss-void');
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images}
    />
  );
} 