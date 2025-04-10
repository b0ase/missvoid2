import fs from 'fs';
import path from 'path';

// Function to get image files from a directory
export function getImagesFromDirectory(directoryPath: string): string[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(directoryPath)) {
      console.warn(`Directory not found: ${directoryPath}`);
      return [];
    }
    
    // Get all files from directory
    const files = fs.readdirSync(directoryPath);
    
    // Filter for image files (common image extensions)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    // Return paths to images relative to the public directory
    return imageFiles.map(file => path.join(directoryPath, file).replace(/^public/, ''));
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

// Map folder names to URL-friendly paths
export const folderToPathMap = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID FOOTWEAR': 'void-footwear',
  'VOID INDUSTRY': 'void-industry',
  'VOID INK': 'void-ink',
  'VOID MUSCLES': 'void-muscles',
  'VOID XXX': 'void-xxx'
};

// Get all categories with their image paths
export function getAllCategories() {
  return Object.entries(folderToPathMap).map(([name, path]) => ({
    name,
    path: `/gallery/${path}`,
    // We'll use a placeholder image until actual cover images are available
    coverImage: `/images/${path}/cover.jpg`,
  }));
} 