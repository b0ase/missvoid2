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

// Generate a placeholder image URL with the category name
function generatePlaceholderUrl(category: string, index: number = 0): string {
  // Convert category to a URL-safe string
  const safeCategory = encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'));
  const seed = `${safeCategory}-${index}`;
  
  // Return an external placeholder service URL
  return `https://picsum.photos/seed/${seed}/800/800`;
}

// Get all categories with their image paths - using placeholder service
export function getAllCategories() {
  return Object.entries(folderToPathMap).map(([name, pathStr]) => {
    return {
      name,
      path: `/gallery/${pathStr}`,
      coverImage: generatePlaceholderUrl(name),
    };
  });
}

// Mock image list for each category - using placeholder service
export function getMockImagesForCategory(category: string): string[] {
  // Generate 20 mock image paths using a placeholder service
  return Array.from({ length: 20 }, (_, i) => generatePlaceholderUrl(category, i));
} 