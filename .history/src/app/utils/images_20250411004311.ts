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

// Get all categories with their image paths - hardcoded for client-side usage
export function getAllCategories() {
  return Object.entries(folderToPathMap).map(([name, pathStr]) => {
    return {
      name,
      path: `/gallery/${pathStr}`,
      coverImage: `/images/${pathStr}/cover.jpg`,
    };
  });
}

// Mock image list for each category
export function getMockImagesForCategory(category: string): string[] {
  // Generate 20 mock image paths for each category
  return Array.from({ length: 20 }, (_, i) => `/images/${category}/image-${i + 1}.jpg`);
} 