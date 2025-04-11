import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Create a mapping of image numbers to their correct extensions
  const imageExtensions: Record<number, string> = {
    7773: 'WEBP',
    7803: 'WEBP',
    7819: 'WEBP',
    7848: 'WEBP',
    7869: 'WEBP',
    7883: 'WEBP'
  };

  // List of image numbers that don't exist
  const missingImages = [7786, 7816];

  // Generate the image paths with appropriate extensions
  const images = Array.from({ length: 207 }, (_, i) => {
    const imgNumber = 7748 + i;
    
    // Skip missing images
    if (missingImages.includes(imgNumber)) {
      return null;
    }
    
    // Use the mapping if available, otherwise default to JPG
    const extension = imageExtensions[imgNumber] || 'JPG';
    return `/images/miss-void/IMG_${imgNumber}.${extension}`;
  }).filter(Boolean) as string[]; // Remove null values and cast to string[]
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images}
    />
  );
} 