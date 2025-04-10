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
  return Object.entries(folderToPathMap).map(([name, pathStr]) => {
    return {
      name,
      path: `/gallery/${pathStr}`,
      coverImage: `/images/${pathStr}/cover.jpg`,
    };
  });
}

// Get images for a specific category - statically defined paths
export function getMockImagesForCategory(category: string): string[] {
  // List of standard image extensions to check for each index
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  
  // Create an array of 20 possible image files
  return Array.from({ length: 20 }, (_, i) => {
    // Try each extension format
    for (const ext of extensions) {
      // Patterns to try
      const patterns = [
        `/images/${category}/image-${i + 1}${ext}`,
        `/images/${category}/IMG_${7000 + i}${ext}`,
        `/images/${category}/IMG_${8000 + i}${ext}`
      ];
      
      // Return the first pattern
      return patterns[0];
    }
    
    // Fallback pattern if none match
    return `/images/${category}/image-${i + 1}.jpg`;
  });
} 