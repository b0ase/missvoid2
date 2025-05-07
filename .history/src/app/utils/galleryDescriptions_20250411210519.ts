// Helper functions to create consistent gallery descriptions across all galleries

export type ItemCategory = 
  | 'bodysuit' 
  | 'corset' 
  | 'harness' 
  | 'collar' 
  | 'gloves' 
  | 'boots' 
  | 'heels' 
  | 'mask' 
  | 'cuffs' 
  | 'skirt'
  | 'top'
  | 'hood'
  | 'gown'
  | 'bralette'
  | 'sleeves'
  | 'leggings'
  | 'portrait'  // Cover image category
  | 'dress'     // Additional categories
  | 'accessory'
  | 'coat'
  | 'jumpsuit';

interface DescriptionOptions {
  description?: string;
  luxuryLevel?: 'standard' | 'premium' | 'bespoke';
  style?: 'minimal' | 'elaborate' | 'architectural' | 'sculptural' | 'flowing';
  useCase?: 'everyday' | 'evening' | 'special occasion' | 'performance';
}

export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  materials: string;
  price: string;
}

/**
 * Generates a detailed item description based on category and options
 */
export function generateDescription(category: ItemCategory, options: DescriptionOptions = {}): string {
  const { luxuryLevel = 'premium', style = 'architectural', useCase = 'special occasion' } = options;
  
  const baseDescriptions: Record<ItemCategory, string> = {
    bodysuit: 'A form-fitting bodysuit that accentuates the natural contours of the body while providing a sleek silhouette.',
    corset: 'A structured corset offering dramatic waist definition and torso support, engineered for both aesthetics and comfort.',
    harness: 'A sophisticated body harness that traces the lines of the form, creating visual interest through strategic placement and tension.',
    collar: 'A statement neck piece that combines imposing presence with ergonomic wearability.',
    gloves: 'Expertly tailored gloves with precise fit and strategic seam placement for optimal movement and tactile experience.',
    boots: 'Commanding boots with architectural details and a balanced stance, designed for both impact and enduring comfort.',
    heels: 'Elevated footwear with an assertive silhouette and considered balance, crafted to transform the wearer\'s posture and presence.',
    mask: 'A face covering that obscures while accentuating, playing with revelation and concealment through careful structure.',
    cuffs: 'Wrist restraints that combine decorative elements with functional design, featuring secure closure systems and comfortable fit.',
    skirt: 'A structured lower garment with dramatic lines and thoughtful proportions, designed to create striking silhouettes in motion.',
    top: 'An upper body garment with innovative cut and structural elements that redefine conventional shapes and expectations.',
    hood: 'A head covering that transforms the silhouette through sculptural form and precise fit, balancing presence with comfort.',
    gown: 'A full-length garment with dramatic flow and strategic structure, designed to command attention while enabling movement.',
    bralette: 'A supportive upper body piece with considered strap placement and cup design, merging functionality with striking aesthetics.',
    sleeves: 'Arm coverings with architectural detailing and controlled compression, designed to enhance the limb\'s natural lines.',
    leggings: 'Lower body coverings with strategic paneling and considered compression, highlighting the natural form while providing support.',
    portrait: 'A visual narrative that captures the essence of MISS VOID through composition, lighting, and form.',
    dress: 'A complete garment that redefines the silhouette through innovative cut and structural elements.',
    accessory: 'A complementary piece that adds architectural detail and visual interest to any ensemble.',
    coat: 'An outer layer that combines protection with dramatic presence, featuring bold lines and considered proportions.',
    jumpsuit: 'A full-body garment that creates a continuous line from shoulder to ankle, emphasizing unity of form.'
  };
  
  const luxuryDescriptions = {
    standard: 'Crafted with attention to detail and quality materials.',
    premium: 'Meticulously crafted from exceptional materials with precise attention to finishing details and fit.',
    bespoke: 'Custom-created to exacting specifications with rare, hand-selected materials and proprietary construction techniques.'
  };
  
  const styleDescriptions = {
    minimal: 'Clean lines and essential forms define this piece, allowing the materials and craftsmanship to speak for themselves.',
    elaborate: 'Complex detailing and layered elements create a rich visual experience that rewards close examination.',
    architectural: 'Structured and geometric elements create a bold statement through form and negative space.',
    sculptural: 'Organic forms and flowing lines create a piece that seems to have been carved rather than constructed.',
    flowing: 'Dynamic movement and transitional elements ensure the piece transforms with the wearer\'s motion.'
  };
  
  const useCaseDescriptions = {
    everyday: 'Designed with practicality in mind, this piece transitions seamlessly from day to evening contexts.',
    evening: 'Created for after-dark encounters, this piece commands attention in low-light settings.',
    'special occasion': 'Intended for significant moments, this piece creates a memorable impression and photographic legacy.',
    performance: 'Engineered for movement and visibility, this piece maintains integrity while enabling expressive motion.'
  };
  
  return `${baseDescriptions[category]} ${styleDescriptions[style]} ${luxuryDescriptions[luxuryLevel]} ${useCaseDescriptions[useCase]}`;
}

/**
 * Generates materials description based on the item category
 */
export function generateMaterials(category: ItemCategory, isVegan: boolean = false): string {
  const leatherType = isVegan ? 'premium vegan leather alternative' : 'Italian full-grain leather';
  const latexType = 'Japanese technical latex';
  
  const materialsByCategory: Record<ItemCategory, string> = {
    bodysuit: `${latexType}, reinforced seams, custom zipper closure`,
    corset: `${leatherType} outer, cotton coutil strength layer, steel boning, satin lining`,
    harness: `${leatherType}, nickel-free hardware, hand-finished edges`,
    collar: `Structured ${leatherType}, padded interior, custom lock system`,
    gloves: `Stretch ${leatherType}, silk lining, decorative hardware elements`,
    boots: `${leatherType} upper, sculpted heel, Vibram sole, reinforced ankle support`,
    heels: `${leatherType} upper, metal heel structure, cushioned insole, non-slip outsole`,
    mask: `Molded ${leatherType}, breathable lining, adjustable fit system`,
    cuffs: `Double-layered ${leatherType}, padded interior, secure locking mechanism`,
    skirt: `${leatherType} panels, stretch fabric inserts, concealed closures`,
    top: `${leatherType} with ${latexType} accents, strategic boning, invisible closures`,
    hood: `Molded ${leatherType}, breathable construction, ergonomic shaping`,
    gown: `${leatherType} bodice, layered technical fabric skirt, concealed structure`,
    bralette: `${leatherType} outer panels, cotton lining, adjustable support structures`,
    sleeves: `${latexType} with ${leatherType} accents, ergonomic elbow articulation`,
    leggings: `${latexType}, reinforced knee panels, stretch zones for movement`,
    portrait: 'A visual narrative that captures the essence of MISS VOID through composition, lighting, and form.',
    dress: 'A complete garment that redefines the silhouette through innovative cut and structural elements.',
    accessory: 'A complementary piece that adds architectural detail and visual interest to any ensemble.',
    coat: 'An outer layer that combines protection with dramatic presence, featuring bold lines and considered proportions.',
    jumpsuit: 'A full-body garment that creates a continuous line from shoulder to ankle, emphasizing unity of form.'
  };
  
  return materialsByCategory[category];
}

/**
 * Generates price range based on category and luxury level
 */
export function generatePrice(category: ItemCategory, luxuryLevel: 'standard' | 'premium' | 'bespoke' = 'premium'): string {
  const basePrices: Record<ItemCategory, number> = {
    bodysuit: 1500,
    corset: 1800,
    harness: 850,
    collar: 650,
    gloves: 720,
    boots: 1950,
    heels: 1650,
    mask: 550,
    cuffs: 480,
    skirt: 980,
    top: 1200,
    hood: 780,
    gown: 2800,
    bralette: 890,
    sleeves: 650,
    leggings: 1100,
    portrait: 0,
    dress: 0,
    accessory: 0,
    coat: 0,
    jumpsuit: 0
  };
  
  const multipliers = {
    standard: 0.85,
    premium: 1,
    bespoke: 1.5
  };
  
  const basePrice = basePrices[category] * multipliers[luxuryLevel];
  
  if (luxuryLevel === 'bespoke') {
    return 'Starting at £' + Math.round(basePrice);
  }
  
  return 'From £' + Math.round(basePrice);
}

/**
 * Creates a complete item with consistent styling
 */
export function createGalleryItem(
  src: string, 
  title: string,
  category: ItemCategory,
  options: DescriptionOptions = {}
) {
  return {
    src,
    title,
    description: options.description || generateDescription(category, options),
    materials: generateMaterials(category, options.luxuryLevel === 'premium'),
    price: generatePrice(category, options.luxuryLevel)
  };
} 