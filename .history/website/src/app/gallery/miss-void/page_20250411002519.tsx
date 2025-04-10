import GalleryPage from '../../components/GalleryPage';
import { getImagesFromDirectory } from '../../utils/images';
import path from 'path';

export default function MissVoidGallery() {
  // Get images from the directory - this will run at build time in production
  const images = getImagesFromDirectory(path.join(process.cwd(), 'public/images/miss-void'));
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images.length > 0 ? images : Array.from({ length: 12 }, (_, i) => `/images/miss-void/image-${i + 1}.jpg`)}
    />
  );
} 