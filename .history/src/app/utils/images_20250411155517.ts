// Map folder names to URL-friendly paths
export const folderToPathMap = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID BOOTS': 'void-boots',
  'VOID INDUSTRY': 'void-industry',
  'VOID INK': 'void-ink',
  'VOID XXX': 'void-xxx',
  'VOID NOIRE': 'void-noire',
  'VOID ROYALE': 'void-royale'
};

// Define featured gallery
export const featuredGallery = 'MISS VOID';

// Get all categories with their image paths
export function getAllCategories() {
  return Object.entries(folderToPathMap).map(([name, pathStr]) => {
    return {
      name,
      path: `/gallery/${pathStr}`,
      coverImage: `/images/${pathStr}/cover.jpg`,
      isFeatured: name === featuredGallery
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