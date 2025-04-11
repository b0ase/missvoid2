import GalleryPage from '../../components/GalleryPage';

export default function VoidIndustryGallery() {
  // Use the actual image files (IMG_8367.JPG to IMG_8473.JPG)
  const images = Array.from({ length: 107 }, (_, i) => {
    const imageNum = 8367 + i;
    
    // Special handling for images that use WEBP format and special cases
    const webpImages = [8368, 8426, 8428, 8439];
    
    // Skip the video file
    if (imageNum === 8371) {
      return null;
    }
    
    // Handle special jpeg case
    if (imageNum === 8370) {
      return `/images/void-industry/IMG_${imageNum}.jpeg`;
    }
    
    const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
    return `/images/void-industry/IMG_${imageNum}${extension}`;
  }).filter(Boolean) as string[]; // Remove null entries and cast as string[]
  
  return (
    <GalleryPage
      title="VOID INDUSTRY"
      images={images}
      description="The VOID INDUSTRY collection explores the intersection of industrial aesthetics and body adornment. Each piece is crafted from robust materials, featuring mechanical elements and hardware details that transform the wearer into a living embodiment of industrial design."
    />
  );
} 