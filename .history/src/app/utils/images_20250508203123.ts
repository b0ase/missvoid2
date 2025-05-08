// Map folder names to URL-friendly paths
export type GalleryName = 
  | 'MISS VOID'
  | 'VOID BOUDOIR'
  | 'VOID CHIC'
  | 'VOID BOOTS'
  | 'VOID ROYALE'
  | 'VOID INK'
  | 'VOID XXX'
  | 'VOID NOIRE'
  | 'VOID INDUSTRY'
  | 'VOID COUTURE';

export const folderToPathMap: Record<GalleryName, string> = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID BOOTS': 'void-boots',
  'VOID ROYALE': 'void-royale',
  'VOID INK': 'void-ink',
  'VOID XXX': 'void-xxx',
  'VOID NOIRE': 'void-noire',
  'VOID INDUSTRY': 'void-industry',
  'VOID COUTURE': 'generated-designs'
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
  },
  {
    name: 'VOID INDUSTRY',
    path: '/gallery/void-industry',
    coverImage: '/images/void-industry/cover.jpg',
    isFeatured: false,
    type: 'fashion',
    imageCount: 96,
    description: 'An avant-garde collection highlighting industrial aesthetics and utilitarian design. Features innovative materials and structural elements inspired by industrial architecture.'
  },
  {
    name: 'VOID COUTURE',
    path: '/gallery/void-couture',
    coverImage: '/images/generated-designs/corset_1746711094454.png',
    isFeatured: false,
    type: 'fashion',
    imageCount: 30,
    description: 'Our AI-generated haute couture collection showcasing next-generation designs. These pieces represent the future of fashion through computational design.'
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
export function getImagesForCategory(category: GalleryName): string[] {
  const categoryPath = folderToPathMap[category];
  if (!categoryPath) return [];
  
  const baseDir = `/images/${categoryPath}/`;
  const gallery = allCategories.find(cat => cat.name === category);
  if (!gallery) return [];

  // For VOID COUTURE (generated designs), we use a different pattern
  if (category === 'VOID COUTURE') {
    // We'll need to return actual filenames since they have varied naming patterns
    return [
      `${baseDir}blazer_1746715455289.png`,
      `${baseDir}blazer_1746715509784.png`,
      `${baseDir}bodysuit_1746718510195.png`,
      `${baseDir}bodysuit_1746719091037.png`,
      `${baseDir}bodysuit_1746721799217.png`,
      `${baseDir}bodysuit_1746722073777.png`,
      `${baseDir}boots_1746714447074.png`,
      `${baseDir}bustier_1746715859658.png`,
      `${baseDir}bustier_1746716018233.png`,
      `${baseDir}corset_1746709654235.png`,
      `${baseDir}corset_1746710028798.png`,
      `${baseDir}corset_1746711094454.png`,
      `${baseDir}corset_1746711560939.png`,
      `${baseDir}corset_1746716477827.png`,
      `${baseDir}corset_1746716860764.png`,
      `${baseDir}corset_1746723468645.png`,
      `${baseDir}corset_1746728689505.png`,
      `${baseDir}dress_1746717073800.png`,
      `${baseDir}dress_1746717188151.png`,
      `${baseDir}dress_1746717345834.png`,
      `${baseDir}dress_1746717459945.png`,
      `${baseDir}dress_1746717644511.png`,
      `${baseDir}dress_1746718094093.png`,
      `${baseDir}gloves_1746718738300.png`,
      `${baseDir}gloves_1746719626889.png`,
      `${baseDir}hat_1746720015711.png`,
      `${baseDir}jacket_1746722404478.png`,
      `${baseDir}jacket_1746723029539.png`,
      `${baseDir}skirt_1746724234211.png`,
      `${baseDir}skirt_1746725128952.png`
    ];
  }

  // VOID INDUSTRY uses sequential numbering
  if (category === 'VOID INDUSTRY') {
    return Array.from({ length: gallery.imageCount }, (_, i) => {
      // Skip some missing numbers in the sequence
      const img = i + 8367;
      // Skip specific gaps in the numbering sequence
      if (img >= 8460 && img <= 8466) {
        return `${baseDir}IMG_${img + 7}.JPG`;
      }
      // Account for file format differences
      if ([8368, 8426, 8428, 8439].includes(img)) {
        return `${baseDir}IMG_${img}.WEBP`;
      }
      if (img === 8370) {
        return `${baseDir}IMG_${img}.jpeg`;
      }
      return `${baseDir}IMG_${img}.JPG`;
    }).filter(path => path); // Filter out any undefined paths
  }

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