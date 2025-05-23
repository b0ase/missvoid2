import fs from 'fs';
import path from 'path';

// Function to get image files from a directory
export function getImagesFromDirectory(directoryPath: string): string[] {
  try {
    // Extract the path relative to public for URL construction
    const relativePath = directoryPath.replace(/^public/, '');
    
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
    
    // Return paths as URLs relative to the public directory (for Next.js Image component)
    return imageFiles.map(file => `${relativePath}/${file}`);
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
  return Object.values(folderToPathMap).map(pathStr => {
    // Get the first image in the directory to use as a cover
    const dirPath = path.join(process.cwd(), 'public', 'images', pathStr);
    let coverImage = `/images/${pathStr}/cover.jpg`;
    
    try {
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        const imageFiles = files.filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        });
        
        if (imageFiles.length > 0) {
          coverImage = `/images/${pathStr}/${imageFiles[0]}`;
        }
      }
    } catch (error) {
      console.error('Error getting cover image:', error);
    }
    
    // Convert path back to display name
    const name = Object.entries(folderToPathMap).find(([_, p]) => p === pathStr)?.[0] || pathStr;
    
    return {
      name,
      path: `/gallery/${pathStr}`,
      coverImage,
    };
  });
} 