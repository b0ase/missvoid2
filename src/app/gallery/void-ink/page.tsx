import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidInkGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-ink');
  
  return (
    <GalleryPage
      title="VOID INK"
      images={images}
    />
  );
} 