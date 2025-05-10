import { getImagesForCategory } from '@/app/utils/images';
import GalleryPage from '@/app/components/GalleryPage';

export default function VoidBootsIIGallery() {
  const images = getImagesForCategory('VOID BOOTS II');
  
  return (
    <GalleryPage 
      title="VOID BOOTS II" 
      description="The second installment of our acclaimed footwear collection, featuring 30 additional statement pieces. These architectural designs showcase innovative materials and structural elements with a focus on avant-garde silhouettes."
      images={images}
      galleryName="VOID BOOTS II"
    />
  );
} 