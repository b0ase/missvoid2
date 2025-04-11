import GalleryPage from '../../components/GalleryPage';
import fs from 'fs';
import path from 'path';

// This function runs at build time on the server
export function generateImagePaths() {
  try {
    // Base paths
    const basePath = process.cwd();
    const imagesDir = path.join(basePath, 'public', 'images', 'void-noire');
    
    // Check if directory exists
    if (!fs.existsSync(imagesDir)) {
      console.warn('Warning: void-noire directory not found!');
      return [];
    }
    
    // Get all image files from the directory
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.webp') && 
      file !== 'cover.jpg'
    );
    
    // Create paths for each image
    return imageFiles.map(file => `/images/void-noire/${file}`);
  } catch (error) {
    console.error('Error generating image paths:', error);
    return [];
  }
}

export default function VoidNoireGallery() {
  // Use static image paths when can't use server functions
  const staticImages = [
    // Black and white images handpicked from various galleries
    '/images/void-noire/bw_void-chic_IMG_8357.WEBP',
    '/images/void-noire/bw_void-chic_IMG_8359.WEBP',
    '/images/void-noire/bw_void-boudoir_IMG_8109.WEBP',
    '/images/void-noire/bw_void-ink_IMG_8490.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8273.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8269.WEBP',
    '/images/void-noire/bw_void-muscles_IMG_8255.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8439.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8426.WEBP',
    '/images/void-noire/bw_void-industry_IMG_8428.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_7989.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8004.WEBP',
    '/images/void-noire/bw_void-footwear_IMG_8008.WEBP',
    '/images/void-noire/bw_miss-void_IMG_7869.WEBP',
    '/images/void-noire/bw_miss-void_IMG_7803.WEBP'
  ];
  
  return (
    <GalleryPage
      title="VOID NOIRE"
      images={staticImages}
    />
  );
} 