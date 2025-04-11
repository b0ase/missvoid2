// Map folder names to URL-friendly paths
export const folderToPathMap = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID BOOTS': 'void-boots',
  'VOID ROYALE': 'void-royale',
  'VOID INK': 'void-ink',
  'VOID XXX': 'void-xxx',
  'VOID NOIRE': 'void-noire'
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
  imageCount: number;
};

const allCategories: GalleryCategory[] = [
  {
    name: 'MISS VOID',
    path: '/gallery/miss-void',
    coverImage: '/images/miss-void/cover.jpg',
    isFeatured: true,
    type: 'fashion',
    imageCount: 61,
    description: 'Our signature collection featuring architectural designs and bold silhouettes. A comprehensive showcase of 61 pieces that define the MISS VOID aesthetic.'
  },
  {
    name: 'VOID BOOTS',
    path: '/gallery/void-boots',
    coverImage: '/images/void-boots/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    imageCount: 51,
    description: 'An extensive collection of 51 commanding footwear pieces, each designed to transform posture and presence. From thigh-high platforms to architectural boots.'
  },
  {
    name: 'VOID BOUDOIR',
    path: '/gallery/void-boudoir',
    coverImage: '/images/void-boudoir/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    imageCount: 52,
    description: 'A sensual collection of 52 intimate pieces that blend comfort with striking aesthetics. Each design celebrates the form through architectural lingerie.'
  },
  {
    name: 'VOID ROYALE',
    path: '/gallery/void-royale',
    coverImage: '/images/void-royale/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    imageCount: 89,
    description: 'Our most extensive collection featuring 89 regal and luxurious pieces that embody power and sophistication. The pinnacle of architectural fashion.'
  },
  {
    name: 'VOID NOIRE',
    path: '/gallery/void-noire',
    coverImage: '/images/void-noire/cover.jpg',
    isFeatured: false,
    type: 'photography',
    imageCount: 47,
    description: 'A striking series of 47 black and white photographs exploring form and shadow. Features pieces from across all collections in monochromatic majesty.'
  },
  {
    name: 'VOID XXX',
    path: '/gallery/void-xxx',
    coverImage: '/images/void-xxx/cover.jpg',
    isFeatured: false,
    type: 'photography',
    imageCount: 91,
    description: 'An expansive artistic exploration of form and movement through 91 intimate photographs. Our most comprehensive photographic study.'
  },
  {
    name: 'VOID CHIC',
    path: '/gallery/void-chic',
    coverImage: '/images/void-chic/cover.jpg',
    isFeatured: false,
    type: 'photography',
    imageCount: 31,
    description: 'A curated collection of 31 fashion photographs highlighting our signature aesthetic. Editorial-style shots that capture the essence of MISS VOID.'
  },
  {
    name: 'VOID INK',
    path: '/gallery/void-ink',
    coverImage: '/images/void-ink/cover.jpg',
    isFeatured: false,
    type: 'photography',
    imageCount: 25,
    description: 'A focused series of 25 high-contrast photographs celebrating the interplay of light and dark. Each image is a study in dramatic composition.'
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

// Get images for a specific category
export function getImagesForCategory(category: string): string[] {
  const categoryPath = folderToPathMap[category];
  if (!categoryPath) return [];
  
  const baseDir = `/images/${categoryPath}/`;
  const gallery = allCategories.find(cat => cat.name === category);
  if (!gallery) return [];

  // Create an array of actual image paths based on the files we found
  return Array.from({ length: gallery.imageCount }, (_, i) => {
    // Special case for void-noire which uses a different naming convention
    if (category === 'VOID NOIRE') {
      return `${baseDir}bw_miss-void_IMG_${7800 + i}.JPG`;
    }
    
    // Each gallery has its own IMG numbering sequence
    const imgNum = category === 'MISS VOID' ? 6556 + i :
                   category === 'VOID BOOTS' ? 7971 + i :
                   category === 'VOID BOUDOIR' ? 8050 + i :
                   category === 'VOID ROYALE' ? 8370 + i :
                   category === 'VOID XXX' ? 8087 + i :
                   category === 'VOID CHIC' ? 8304 + i :
                   category === 'VOID INK' ? 8474 + i :
                   8000 + i;
    
    return `${baseDir}IMG_${imgNum}.JPG`;
  });
} 