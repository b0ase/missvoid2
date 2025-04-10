import GalleryPage from '../../components/GalleryPage';
import { getImagesFromDirectory } from '../../utils/images';
import path from 'path';

export default function VoidBoudoirGallery() {
  // Get images from the directory - this will run at build time in production
  const images = getImagesFromDirectory(path.join(process.cwd(), 'public/images/void-boudoir'));
  
  return (
    <GalleryPage
      title="VOID BOUDOIR"
      images={images.length > 0 ? images : Array.from({ length: 12 }, (_, i) => `/images/void-boudoir/image-${i + 1}.jpg`)}
    />
  );
} 