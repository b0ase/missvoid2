import { getImagesForCategory } from '@/app/utils/images';
import GalleryPage from '@/app/components/GalleryPage';

export default function VoidCoutureGallery() {
  const images = getImagesForCategory('VOID COUTURE');
  
  return (
    <GalleryPage 
      title="VOID COUTURE" 
      description="Our AI-generated haute couture collection showcasing next-generation designs. These pieces represent the future of fashion through computational design, blending algorithmic creativity with MISS VOID's distinctive aesthetic principles."
      images={images}
      galleryName="VOID COUTURE"
    />
  );
} 