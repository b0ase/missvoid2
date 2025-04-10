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