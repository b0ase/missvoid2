import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Create a mapping of image numbers to their correct extensions
  const imageExtensions: Record<number, string> = {
    7773: 'WEBP',
    7786: 'JPG', // Doesn't seem to exist in directory
    7803: 'WEBP',
    7816: 'JPG', // Doesn't seem to exist in directory
    7819: 'WEBP',
    7848: 'WEBP',
    7869: 'WEBP',
    7883: 'WEBP'
  };

  // Generate the image paths with appropriate extensions
  const images = Array.from({ length: 207 }, (_, i) => {
    const imgNumber = 7748 + i;
    // Use the mapping if available, otherwise default to JPG
    const extension = imageExtensions[imgNumber] || 'JPG';
    return `/images/miss-void/IMG_${imgNumber}.${extension}`;
  });
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={images}
    />
  );
} 