import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidFootwearGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-footwear');
  
  return (
    <GalleryPage
      title="VOID FOOTWEAR"
      images={images}
    />
  );
} 