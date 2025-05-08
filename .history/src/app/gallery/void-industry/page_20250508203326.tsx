import { getImagesForCategory } from '@/app/utils/images';
import GalleryPage from '@/app/components/GalleryPage';

export default function VoidIndustryGallery() {
  const images = getImagesForCategory('VOID INDUSTRY');
  
  return (
    <GalleryPage 
      title="VOID INDUSTRY" 
      description="An avant-garde collection highlighting industrial aesthetics and utilitarian design. Features innovative materials and structural elements inspired by industrial architecture and urban environments."
      images={images}
      galleryName="VOID INDUSTRY"
    />
  );
} 