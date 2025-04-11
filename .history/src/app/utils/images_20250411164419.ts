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

export type GalleryCategory = {
  name: string;
  path: string;
  coverImage: string;
  isFeatured: boolean;
  description?: string;
  type: 'fashion' | 'photography';
};

const allCategories: GalleryCategory[] = [
  {
    name: 'MISS VOID',
    path: '/gallery/miss-void',
    coverImage: '/images/miss-void/cover.jpg',
    isFeatured: true,
    type: 'fashion',
    description: 'Our signature collection featuring architectural designs and bold silhouettes.'
  },
  {
    name: 'VOID BOOTS',
    path: '/gallery/void-boots',
    coverImage: '/images/void-boots/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    description: 'Commanding footwear that transforms posture and presence.'
  },
  {
    name: 'VOID BOUDOIR',
    path: '/gallery/void-boudoir',
    coverImage: '/images/void-boudoir/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    description: 'Intimate pieces that blend comfort with striking aesthetics.'
  },
  {
    name: 'VOID INDUSTRY',
    path: '/gallery/void-industry',
    coverImage: '/images/void-industry/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    description: 'Industrial-inspired pieces for the modern wardrobe.'
  },
  {
    name: 'VOID NOIRE',
    path: '/gallery/void-noire',
    coverImage: '/images/void-noire/cover.jpg',
    isFeatured: false,
    type: 'photography',
    description: 'Black and white photography exploring form and shadow.'
  },
  {
    name: 'VOID XXX',
    path: '/gallery/void-xxx',
    coverImage: '/images/void-xxx/cover.jpg',
    isFeatured: false,
    type: 'photography',
    description: 'Artistic exploration of form and movement.'
  },
  {
    name: 'VOID CHIC',
    path: '/gallery/void-chic',
    coverImage: '/images/void-chic/cover.jpg',
    isFeatured: false,
    type: 'photography',
    description: 'Fashion photography highlighting our signature aesthetic.'
  },
  {
    name: 'VOID INK',
    path: '/gallery/void-ink',
    coverImage: '/images/void-ink/cover.jpg',
    isFeatured: false,
    type: 'photography',
    description: 'High-contrast photography celebrating the interplay of light and dark.'
  }
];

export function getAllCategories(): GalleryCategory[] {
  return allCategories;
}

export function getFashionGalleries(): GalleryCategory[] {
  return allCategories.filter(cat => cat.type === 'fashion');
}

export function getStudioGalleries(): GalleryCategory[] {
  return allCategories.filter(cat => cat.type === 'photography');
}

// Get images for a specific category - statically defined paths
export function getMockImagesForCategory(category: string): string[] {
  // Create an array of 20 possible image files
  return Array.from({ length: 20 }, (_, i) => {
    return `/images/${category}/IMG_${i + 1}.JPG`;
  });
} 