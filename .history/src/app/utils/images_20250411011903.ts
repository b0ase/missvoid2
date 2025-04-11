// Map folder names to URL-friendly paths
export const folderToPathMap = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID FOOTWEAR': 'void-footwear',
  'VOID INDUSTRY': 'void-industry',
  'VOID INK': 'void-ink',
  'VOID MUSCLES': 'void-muscles',
  'VOID NOIRE': 'void-noire'
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
  // Create an array of 20 possible image files
  return Array.from({ length: 20 }, (_, i) => {
    return `/images/${category}/IMG_${i + 1}.JPG`;
  });
} 