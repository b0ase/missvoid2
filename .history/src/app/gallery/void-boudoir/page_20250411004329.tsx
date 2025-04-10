import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidBoudoirGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-boudoir');
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={images}
    />
  );
} 