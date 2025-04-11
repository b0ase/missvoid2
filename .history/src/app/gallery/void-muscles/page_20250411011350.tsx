import GalleryPage from '../../components/GalleryPage';

export default function VoidMusclesGallery() {
  // Use the actual image files in two ranges: IMG_8086.JPG to IMG_8094.WEBP and IMG_8195.JPG to IMG_8284.JPG
  const images = [
    // First range of images (IMG_8086.JPG to IMG_8094.WEBP)
    ...Array.from({ length: 9 }, (_, i) => {
      const imageNum = 8086 + i;
      const webpImages = [8088, 8089, 8091, 8094];
      const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
      return `/images/void-muscles/IMG_${imageNum}${extension}`;
    }),
    
    // Second range of images (IMG_8195.JPG to IMG_8284.JPG)
    ...Array.from({ length: 90 }, (_, i) => {
      const imageNum = 8195 + i;
      const webpImages = [8209, 8222, 8230, 8250, 8255, 8269, 8273];
      const extension = webpImages.includes(imageNum) ? '.WEBP' : '.JPG';
      return `/images/void-muscles/IMG_${imageNum}${extension}`;
    })
  ];
  
  return (
    <GalleryPage
      title="VOID MUSCLES"
      images={images}
    />
  );
} 