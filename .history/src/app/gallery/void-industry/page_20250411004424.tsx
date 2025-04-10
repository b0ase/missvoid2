import GalleryPage from '../../components/GalleryPage';
import { getMockImagesForCategory } from '../../utils/images';

export default function VoidIndustryGallery() {
  // Use mock images instead of filesystem access
  const images = getMockImagesForCategory('void-industry');
  
  return (
    <GalleryPage
      title="VOID INDUSTRY"
      images={images}
    />
  );
} 