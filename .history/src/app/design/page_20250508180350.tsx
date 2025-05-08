"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ThreeDModelViewer from '../components/ThreeDModelViewer';

// Stability AI API endpoint
const STABILITY_API_ENDPOINT = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

// MISS VOID style elements for prompt enhancement
const STYLE_ELEMENTS = [
  "architectural silhouette",
  "dark minimal aesthetic",
  "sleek black leather",
  "brutalist design",
  "sharp contrasting lines",
  "industrial hardware accents",
  "sculptural form",
  "geometric patterns",
  "dramatic shadows",
  "high fashion couture",
  "avant-garde",
  "structured tailoring",
  "gothic elements",
  "monochromatic palette",
  "striking black textures"
];

// Miss Void aesthetic descriptions
const AESTHETIC_DESCRIPTORS = [
  "Miss Void signature style",
  "high-end fashion design",
  "luxury avant-garde piece",
  "architectural fashion",
  "premium quality craftsmanship",
  "bold statement piece",
  "structured silhouette",
  "dramatic dark aesthetic",
  "elegant yet edgy design",
  "sculptural silhouette"
];

// Product types and their specific descriptors
const PRODUCT_DESCRIPTORS: Record<string, string[]> = {
  "corset": [
    "structured boning", 
    "waist cinching", 
    "laced back closure", 
    "precision tailoring", 
    "fitted panels"
  ],
  "harness": [
    "adjustable straps", 
    "body-contouring", 
    "hardware accents", 
    "leather strapping", 
    "architectural design"
  ],
  "dress": [
    "flowing silhouette", 
    "structured bodice", 
    "dramatic draping", 
    "architectural cut", 
    "statement piece"
  ],
  "bodysuit": [
    "second-skin fit", 
    "sleek silhouette", 
    "precise tailoring", 
    "hardware details", 
    "sculptural cutouts"
  ],
  "mask": [
    "face-framing", 
    "architectural design", 
    "striking silhouette", 
    "avant-garde accessory", 
    "sculptural form"
  ],
  "skirt": [
    "structured panels", 
    "architectural pleating", 
    "dramatic silhouette", 
    "geometric design", 
    "precision tailoring"
  ],
  "jacket": [
    "structured shoulders",
    "architectural silhouette",
    "precision cut panels",
    "hardware closures",
    "leather craftsmanship"
  ],
  "blazer": [
    "tailored fit",
    "sharp lapels",
    "structured shoulders",
    "minimalist design",
    "architectural shape"
  ],
  "gloves": [
    "form-fitting design",
    "wrist hardware details",
    "textured leather",
    "precision seaming",
    "elegant elongation"
  ],
  "leggings": [
    "second-skin fit",
    "high-waisted design",
    "seam details",
    "ankle zippers",
    "textured panels"
  ],
  "top": [
    "architectural cutting",
    "hardware accents",
    "structured silhouette",
    "minimalist design",
    "leather panel details"
  ],
  "bustier": [
    "structured design",
    "shaped cups",
    "precision boning",
    "architectural shaping",
    "contouring fit"
  ],
  "collar": [
    "high-neck design",
    "hardware detailing",
    "structural silhouette",
    "architectural shape",
    "boned structure"
  ],
  "choker": [
    "architectural hardware",
    "structured design",
    "neck-framing",
    "leather craftsmanship",
    "minimalist accent"
  ],
  "boots": [
    "knee-high silhouette",
    "structured shaft",
    "architectural heel",
    "hardware detailing",
    "precision craftsmanship"
  ],
  "belt": [
    "wide silhouette",
    "hardware closure",
    "waist defining",
    "architectural buckle",
    "structured shape"
  ],
  "cape": [
    "dramatic draping",
    "architectural silhouette",
    "hardware closures",
    "structured shoulders",
    "flowing movement"
  ],
  "catsuit": [
    "second-skin fit",
    "full-body silhouette",
    "zipper details",
    "paneled construction",
    "architectural seaming"
  ],
  "gown": [
    "floor-length silhouette",
    "architectural structure",
    "dramatic design",
    "sculpted bodice",
    "statement presence"
  ],
  "jumpsuit": [
    "tailored silhouette",
    "structured bodice",
    "hardware details",
    "precision fit",
    "architectural cut"
  ],
  "shorts": [
    "high-waisted design",
    "structured panels",
    "hardware details",
    "precision tailoring",
    "architectural shape"
  ],
  "coat": [
    "dramatic silhouette",
    "structured shoulders",
    "architectural lapels",
    "minimalist closure",
    "tailored precision"
  ],
  "lingerie": [
    "architectural strapping",
    "minimal coverage",
    "hardware details",
    "structured design",
    "body framing"
  ],
  "bra": [
    "structured cups",
    "architectural strapping",
    "minimalist design",
    "hardware accents",
    "precision fit"
  ],
  "suspenders": [
    "body-framing straps",
    "hardware attachments",
    "geometric design",
    "architectural layout",
    "minimalist aesthetic"
  ],
  "headpiece": [
    "sculptural design",
    "face-framing structure",
    "architectural elements",
    "statement presence",
    "avant-garde silhouette"
  ]
};

// Add product name generators
const PRODUCT_NAME_ADJECTIVES = [
  "Void", "Shadow", "Eclipse", "Raven", "Obsidian", "Onyx", "Midnight", "Noir", 
  "Chimera", "Phantom", "Specter", "Gothic", "Slate", "Ebony", "Wraith", "Tenebrous",
  "Abyssal", "Eternal", "Sublime", "Arcane", "Ethereal", "Enigma", "Vortex", "Silhouette"
];

const PRODUCT_NAME_NOUNS = [
  "Silhouette", "Archetype", "Vector", "Construct", "Apex", "Eclipse", "Monolith", 
  "Horizon", "Lineage", "Fissure", "Relic", "Genesis", "Stratum", "Oracle", "Valkyrie",
  "Chamber", "Cipher", "Vertex", "Axiom", "Nexus", "Meridian", "Rift", "Labyrinth", "Ascension"
];

const PRODUCT_NAME_MODIFIERS = [
  "I", "II", "III", "IV", "V", "X", "Zero", "Prime", "Alpha", "Omega", "Ultra", 
  "Noir", "Zero", "Infinite", "Apex", "Core", "1.0", "2.0", "Flux", "Neo", "Shadow"
];

// Generate a creative product name
const generateProductName = (productType: string): string => {
  const adjective = PRODUCT_NAME_ADJECTIVES[Math.floor(Math.random() * PRODUCT_NAME_ADJECTIVES.length)];
  const noun = PRODUCT_NAME_NOUNS[Math.floor(Math.random() * PRODUCT_NAME_NOUNS.length)];
  const modifier = PRODUCT_NAME_MODIFIERS[Math.floor(Math.random() * PRODUCT_NAME_MODIFIERS.length)];
  
  // Different name patterns
  const patterns = [
    `${adjective} ${modifier}`,
    `${noun} ${modifier}`,
    `${adjective} ${noun}`,
    `${productType.charAt(0).toUpperCase() + productType.slice(1)} ${modifier}`,
    `${adjective} ${productType.charAt(0).toUpperCase() + productType.slice(1)}`,
    `${noun} ${productType.charAt(0).toUpperCase() + productType.slice(1)}`
  ];
  
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return pattern;
};

// Enhanced descriptive elements for more creative generation
const DESIGN_CONCEPTS = [
  "architectural brutalism translated into wearable form",
  "post-apocalyptic elegance with industrial undertones",
  "techno-gothic sensibilities merged with high fashion",
  "biomechanical structures adapted for the human form",
  "deconstructed classicism with avant-garde sensibility",
  "neo-noir aesthetic with cyberpunk influences",
  "dystopian luxury reimagined for modern rebels",
  "sculptural minimalism with aggressive detailing",
  "engineered silhouettes that challenge conventional form",
  "mathematical precision meeting raw emotional expression",
  "brutal romanticism through structured materiality",
  "anti-fashion statements elevated to couture status",
  "monolithic shapes that redefine the body's architecture",
  "fetishistic utility transformed into high concept design",
  "analog futurism expressed through tactical elegance"
];

const MATERIAL_DESCRIPTIONS = [
  "premium black leather with a subtle matte finish that absorbs light like a void",
  "specially treated leather with a slight grain that catches light along its edges",
  "high-grade leather with architectural paneling and precision stitching",
  "smooth obsidian leather contrasted with textured matte sections",
  "ethically sourced leather treated for extreme durability and suppleness",
  "technical leather composite with reinforced stress points and seamless joins",
  "leather sections heat-bonded rather than stitched for a monolithic appearance",
  "shadow-toned leather panels with varying degrees of reflectivity",
  "military-grade leather with resilient yet flexible properties",
  "museum-quality leatherwork with painstaking attention to detail",
  "leather engineered to hold its form while adapting to movement",
  "hand-selected leather with natural variations preserved for depth",
  "custom-developed leather with unique tension and structural properties",
  "laser-cut leather pieces assembled with mathematical precision",
  "proprietary leather treatment creating an almost liquid appearance in motion"
];

const CONSTRUCTION_METHODS = [
  "architectural darting and structured panels create a form that both honors and challenges the body beneath",
  "geometric precision in the cutting speaks to architectural influences while maintaining wearability",
  "engineered with multiple layers of reinforcement at stress points for a lifetime of structural integrity",
  "built using proprietary construction methods that eliminate traditional seaming for a cleaner silhouette",
  "constructed with a hidden internal structure that maintains its form independent of the wearer",
  "made with a modular approach allowing for subtle adjustments to achieve a perfect anatomical fit",
  "features tensioned panels that create compression in specific areas to enhance the silhouette",
  "crafted using ancient leatherworking techniques combined with modern architectural principles",
  "incorporates technical zoning for mobility while maintaining its sculptural intention",
  "utilizes military-inspired construction adapted for maximum visual impact and durability",
  "assembled with a mathematical approach to pattern cutting for precise body contouring",
  "created through vacuum forming techniques typically reserved for industrial applications",
  "constructed without visible hardware, using hidden tensioning systems for a cleaner aesthetic",
  "designed around a geometric mapping of the body's movement patterns for ergonomic comfort",
  "built with integrated structural elements that echo architectural load-bearing principles"
];

const HARDWARE_DETAILS = [
  "matte black custom hardware cast in solid metal with a signature tooth-edge detail",
  "architectural hardware elements that serve as both functional components and visual anchors",
  "industrial-grade matte black fixings that reference mechanical engineering",
  "precision-milled metal components that rotate smoothly with satisfying mechanical feedback",
  "custom-developed fastening systems that disappear into the design when engaged",
  "technical hardware with subtle branding elements visible only at certain angles",
  "overbuilt metalwork with a heft and presence that speaks to quality engineering",
  "bespoke hardware developed exclusively for MISS VOID with proprietary locking mechanisms",
  "military-specification fixings adapted for aesthetic purposes without compromising function",
  "intersecting metal components that create geometric shadows across the leather surface",
  "articulated joint systems inspired by industrial robotics and high-end watchmaking",
  "hardware elements with purposeful asymmetry that draws the eye across the design",
  "technical findings with a satisfying acoustic signature when manipulated",
  "specially coated metal elements resistant to wear that maintain their matte appearance",
  "structural hardware components that distribute tension evenly across the garment"
];

const UNIQUE_FEATURES = [
  "signature asymmetrical collar detail that frames the neck in a display of structured elegance",
  "unexpected cutout details that reveal glimpses of skin through architectural negative spaces",
  "adjustable paneling that allows the wearer to modify the silhouette for different styling options",
  "geometric harness elements that overlay the main structure for added visual complexity",
  "integrated pocket systems that maintain the clean lines without disrupting the form",
  "articulated joint sections that move with the body while maintaining structural integrity",
  "stepped hem detail creating a cascading effect that plays with proportion and shadow",
  "precision-cut ventilation channels that serve both functional and aesthetic purposes",
  "hidden closure systems that maintain the clean visual silhouette when fully secured",
  "angular shoulder construction that elongates the torso and commands attention",
  "sculptural collar elements that frame the face with architectural intention",
  "technical cuff details with adjustable tensioning for a personalized fit",
  "strategic paneling that creates optical illusions of shadow and depth",
  "interlocking systems allowing for modular attachment of additional MISS VOID pieces",
  "weighted hem construction that creates perpetual movement and dramatic drape"
];

const STYLING_CONTEXTS = [
  "destined for high-concept editorial shoots where its architectural qualities can be dramatically lit",
  "designed for movement, creating dramatic silhouettes that transform with the wearer's motion",
  "perfect for avant-garde performances where striking visuals amplify emotional impact",
  "equally suited to gallery openings and underground techno spaces where distinction matters",
  "created for those who approach personal aesthetics as a form of living sculpture",
  "ideal for juxtaposition against raw urban environments where its refined darkness stands in relief",
  "conceived for nocturnal contexts where strategic lighting reveals its complex detailing",
  "developed for individuals who use clothing as a means of nonverbal communication",
  "suitable for those special occasions demanding a statement of uncompromising aesthetic values",
  "designed to photograph dramatically from multiple angles, revealing new details with each perspective",
  "made for those who appreciate the psychological impact of architecturally considered clothing",
  "perfect for creating memorable silhouettes against both industrial and minimalist backdrops",
  "created to command space, physically and psychologically, in any environment",
  "built for longevity, destined to become an archival piece in a carefully curated wardrobe",
  "intended for those who understand that true luxury lies in conceptual integrity, not conspicuous branding"
];

const PHILOSOPHICAL_CONTEXTS = [
  "embodying MISS VOID's ongoing exploration of absence as presence, of shadow as substance",
  "continuing the brand's meditation on brutalist principles applied to the intimacy of worn objects",
  "part of the atelier's investigation into post-human silhouettes and future archeology",
  "representing the confluence of architectural theory and the poetry of adorned bodies",
  "manifesting the studio's interest in the psychological impact of structured garments",
  "exemplifying the brand's commitment to creating modern artifacts of material significance",
  "expressing the tension between protection and vulnerability that underpins the MISS VOID ethos",
  "furthering the designer's examination of power dynamics through sculptural wearables",
  "reflecting on notions of containment and release central to the label's conceptual foundation",
  "negotiating the boundary between fashion object and functional sculpture with intellectual rigor",
  "questioning conventional notions of luxury through material research and technical innovation",
  "exploring the relationship between the technological sublime and corporeal limitation",
  "considering clothing as a form of embodied architecture with philosophical implications",
  "engaging with ideas of permanence and impermanence through objects of enduring design",
  "challenging the disposability of contemporary fashion with pieces worthy of archival consideration"
];

// Function to generate a detailed technical description with factual information
const generateTechnicalDescription = (productType: string): string => {
  // Get random element from array
  const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];
  
  // Get product-specific descriptors
  const specificDescriptors = PRODUCT_DESCRIPTORS[productType] || [
    "architectural design",
    "premium materials",
    "structural elements",
    "minimalist aesthetic",
    "hardware detailing"
  ];
  
  // Technical construction details
  const materialDetails = [
    "Full-grain black leather with 1.5mm thickness",
    "Premium cowhide with matte finish",
    "Heavy-duty 2mm leather with water-resistant treatment",
    "Italian calfskin leather with reinforced seams",
    "Military-grade leather with heat-sealed edges"
  ];
  
  const constructionSpecs = [
    "Double-stitched seams with nylon thread, 5 stitches per cm",
    "Reinforced stress points using rivets and bar tacks",
    "Bound edges with 1cm leather binding",
    "French seam construction, fully enclosed edges",
    "Machine-stitched with #69 nylon thread in a 3mm stitch pattern"
  ];
  
  const hardwareSpecs = [
    "Solid brass hardware with black oxide finish",
    "Marine-grade stainless steel hardware with matte black PVD coating",
    "Nickel-free zinc alloy buckles and D-rings",
    "Aircraft-grade aluminum hardware elements, anodized black",
    "Solid brass fittings with 2mm thickness, scratch-resistant coating"
  ];
  
  const measurements = [
    "Standard adjustable fit for sizes S-XL",
    "Panels constructed to fit waist circumference 60-85cm",
    "Panel dimensions: 15cm width × 30cm height",
    "Adjustable straps with 5cm width, 15-30cm length range",
    "Total garment weight: approximately 450-700g"
  ];
  
  // Product-specific technical sections
  const technicalSections: {[key: string]: string[]} = {
    "corset": [
      `${specificDescriptors.length > 0 ? specificDescriptors[0] : "Structured boning"} with ${getRandomElement(["12", "16", "8"])} steel bones`,
      `${getRandomElement(["5", "6", "7"])}-panel construction with ${getRandomElement(["front busk", "back lacing", "side zip"])} closure`,
      `Waist reduction capability: ${getRandomElement(["2-4", "3-5", "4-6"])}cm`,
      `${getRandomElement(["Cotton", "Silk", "Mesh"])} lining for comfort and durability`
    ],
    "harness": [
      `${getRandomElement(["O-ring", "D-ring", "Square"])} hardware connectors at junction points`,
      `Strap width: ${getRandomElement(["2cm", "2.5cm", "3cm"])}`,
      `${getRandomElement(["5", "7", "9"])} adjustable points for custom fit`,
      `Weight-bearing capacity: up to ${getRandomElement(["10kg", "15kg", "8kg"])}`
    ],
    "dress": [
      `Hem length: ${getRandomElement(["midi (75cm)", "maxi (120cm)", "knee-length (60cm)"])}`,
      `${getRandomElement(["Princess", "Empire", "A-line"])} seam construction`,
      `${getRandomElement(["Invisible", "Exposed", "Decorative"])} zipper closure`,
      `${getRandomElement(["Unlined", "Fully lined", "Partially lined"])} interior construction`
    ]
  };
  
  // Get product-specific technical details
  const productTechDetails = technicalSections[productType] || [];
  
  // Compose technical specification
  const technicalParts = [
    `PRODUCT TYPE: ${productType.toUpperCase()}`,
    `MATERIALS: ${getRandomElement(materialDetails)}`,
    `CONSTRUCTION: ${getRandomElement(constructionSpecs)}`,
    `HARDWARE: ${getRandomElement(hardwareSpecs)}`,
    `DIMENSIONS: ${getRandomElement(measurements)}`
  ];
  
  // Add product-specific technical details if available
  if (productTechDetails.length > 0) {
    technicalParts.push(`PRODUCT-SPECIFIC DETAILS:`);
    productTechDetails.forEach(detail => {
      technicalParts.push(`- ${detail}`);
    });
  }
  
  // Add care instructions
  technicalParts.push(
    "CARE INSTRUCTIONS:",
    "- Spot clean with damp cloth and leather cleaner",
    "- Condition with leather balm every 3-6 months",
    "- Store in dust bag away from direct sunlight",
    "- Avoid prolonged exposure to moisture"
  );
  
  return technicalParts.join("\n");
};

// Function to generate a genuinely creative description with variation
const generateCreativeDescription = (productType: string): string => {
  // Randomly select elements from each descriptive category
  const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];
  
  // Get product-specific descriptors
  const specificDescriptors = PRODUCT_DESCRIPTORS[productType] || [
    "architectural design",
    "premium materials",
    "structural elements",
    "minimalist aesthetic",
    "hardware detailing"
  ];
  
  // Randomly select 2-3 product-specific descriptors
  const selectedSpecificDescriptors = [...specificDescriptors]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2 + Math.floor(Math.random() * 2));
  
  // Create a more varied and detailed product opening
  const openings = [
    `This ${productType} represents a paradigm shift in ${getRandomElement(DESIGN_CONCEPTS)}.`,
    `A revolutionary take on the classic ${productType}, reimagined through the lens of ${getRandomElement(DESIGN_CONCEPTS)}.`,
    `Presenting a visionary ${productType} that embodies ${getRandomElement(DESIGN_CONCEPTS)}.`,
    `An exceptional exploration of form and function, this ${productType} demonstrates ${getRandomElement(DESIGN_CONCEPTS)}.`,
    `Defying conventional categorization, this boundary-pushing ${productType} manifests ${getRandomElement(DESIGN_CONCEPTS)}.`
  ];
  
  // Create detailed material descriptions
  const materialDescriptions = [
    `Crafted from ${getRandomElement(MATERIAL_DESCRIPTIONS)}, this piece honors materiality as a core design element.`,
    `The foundation of this design is ${getRandomElement(MATERIAL_DESCRIPTIONS)}, allowing for structural integrity without compromise.`,
    `Utilizing ${getRandomElement(MATERIAL_DESCRIPTIONS)} as its primary medium, the piece achieves both visual and tactile sophistication.`,
    `The material story begins with ${getRandomElement(MATERIAL_DESCRIPTIONS)}, setting the stage for a complex sensory experience.`,
    `At its core, ${getRandomElement(MATERIAL_DESCRIPTIONS)} provides both the conceptual and physical backbone of this creation.`
  ];
  
  // Create construction narratives
  const constructionNarratives = [
    `The construction methodology is uncompromising: ${getRandomElement(CONSTRUCTION_METHODS)}.`,
    `In terms of execution, ${getRandomElement(CONSTRUCTION_METHODS)}, showcasing the atelier's technical prowess.`,
    `What distinguishes this piece is how ${getRandomElement(CONSTRUCTION_METHODS)}, challenging production conventions.`,
    `The technical narrative revolves around how ${getRandomElement(CONSTRUCTION_METHODS)}, merging form with intention.`,
    `Structurally speaking, ${getRandomElement(CONSTRUCTION_METHODS)}, resulting in a garment that holds its own architectural presence.`
  ];
  
  // Create hardware descriptions
  const hardwareDescriptions = [
    `The hardware elements deserve special mention: ${getRandomElement(HARDWARE_DETAILS)}.`,
    `Functional components become design features through ${getRandomElement(HARDWARE_DETAILS)}.`,
    `The tactile experience is enhanced by ${getRandomElement(HARDWARE_DETAILS)}.`,
    `Interaction points are considered with equal care: ${getRandomElement(HARDWARE_DETAILS)}.`,
    `The conversation between body and garment is mediated by ${getRandomElement(HARDWARE_DETAILS)}.`
  ];
  
  // Create unique feature highlights
  const featureHighlights = [
    `Among its notable features is ${getRandomElement(UNIQUE_FEATURES)}.`,
    `Particularly worthy of attention is ${getRandomElement(UNIQUE_FEATURES)}.`,
    `The design is distinguished by ${getRandomElement(UNIQUE_FEATURES)}.`,
    `A signature element emerges in ${getRandomElement(UNIQUE_FEATURES)}.`,
    `The eye is drawn to ${getRandomElement(UNIQUE_FEATURES)}.`
  ];
  
  // Create contextual placement
  const contextualPlacements = [
    `This piece is ${getRandomElement(STYLING_CONTEXTS)}.`,
    `Consider this ${productType} ${getRandomElement(STYLING_CONTEXTS)}.`,
    `The designer envisions this ${getRandomElement(STYLING_CONTEXTS)}.`,
    `Contextually, this creation is ${getRandomElement(STYLING_CONTEXTS)}.`,
    `The intended environment for this piece is one where ${getRandomElement(STYLING_CONTEXTS)}.`
  ];
  
  // Create philosophical framings
  const philosophicalFramings = [
    `Conceptually, this piece is ${getRandomElement(PHILOSOPHICAL_CONTEXTS)}.`,
    `The intellectual framework of this design is rooted in ${getRandomElement(PHILOSOPHICAL_CONTEXTS)}.`,
    `More than mere clothing, this object ${getRandomElement(PHILOSOPHICAL_CONTEXTS)}.`,
    `In the broader MISS VOID narrative, this ${productType} ${getRandomElement(PHILOSOPHICAL_CONTEXTS)}.`,
    `This creation exists at the intersection of wearability and concept, ${getRandomElement(PHILOSOPHICAL_CONTEXTS)}.`
  ];
  
  // Mix and match all these elements to create a truely unique, verbose description
  const sections = [
    getRandomElement(openings),
    getRandomElement(materialDescriptions),
    getRandomElement(constructionNarratives),
    Math.random() > 0.3 ? getRandomElement(hardwareDescriptions) : "",
    getRandomElement(featureHighlights),
    Math.random() > 0.4 ? getRandomElement(contextualPlacements) : "",
    Math.random() > 0.5 ? getRandomElement(philosophicalFramings) : ""
  ].filter(Boolean); // Remove any empty strings
  
  return sections.join(" ");
};

// Function to extract key details from a verbose description for structured data
const extractStructuredData = (description: string, productType: string): any => {
  // Default structured data with some fallbacks
  const structuredData = {
    primaryMaterial: "premium black leather",
    secondaryMaterial: "",
    hardware: "hardware details",
    silhouette: "architectural silhouette",
    tailoring: "structured tailoring",
    photography: "studio lighting, high contrast"
  };
  
  // Extract material information
  if (description.includes("leather")) {
    // Find sentences containing leather descriptions
    const materialSentences = description.split(/\.|\,/).filter(s => 
      s.toLowerCase().includes("leather") || 
      s.toLowerCase().includes("material")
    );
    
    if (materialSentences.length > 0) {
      structuredData.primaryMaterial = materialSentences[0].trim().replace(/^[a-z]/, c => c.toUpperCase());
      if (materialSentences.length > 1) {
        structuredData.secondaryMaterial = materialSentences[1].trim().replace(/^[a-z]/, c => c.toUpperCase());
      }
    }
  }
  
  // Extract hardware details
  if (description.includes("hardware")) {
    const hardwareSentences = description.split(/\.|\,/).filter(s => 
      s.toLowerCase().includes("hardware") || 
      s.toLowerCase().includes("metal") ||
      s.toLowerCase().includes("component")
    );
    
    if (hardwareSentences.length > 0) {
      structuredData.hardware = hardwareSentences[0].trim().replace(/^[a-z]/, c => c.toUpperCase());
    }
  }
  
  // Extract silhouette information
  if (description.includes("silhouette")) {
    const silhouetteSentences = description.split(/\.|\,/).filter(s => 
      s.toLowerCase().includes("silhouette") || 
      s.toLowerCase().includes("shape") ||
      s.toLowerCase().includes("form")
    );
    
    if (silhouetteSentences.length > 0) {
      structuredData.silhouette = silhouetteSentences[0].trim().replace(/^[a-z]/, c => c.toUpperCase());
    }
  }
  
  // Extract tailoring information
  if (description.includes("constru") || description.includes("craft")) {
    const tailoringSentences = description.split(/\.|\,/).filter(s => 
      s.toLowerCase().includes("constru") || 
      s.toLowerCase().includes("craft") ||
      s.toLowerCase().includes("tailor") ||
      s.toLowerCase().includes("assembl")
    );
    
    if (tailoringSentences.length > 0) {
      structuredData.tailoring = tailoringSentences[0].trim().replace(/^[a-z]/, c => c.toUpperCase());
    }
  }
  
  return structuredData;
};

export default function DesignPage() {
  const [promptText, setPromptText] = useState('');
  const [structuredPrompt, setStructuredPrompt] = useState({
    name: '',
    brand: 'MISS VOID',
    description: '',
    technicalSpecs: '',
    primaryMaterial: 'premium black leather',
    secondaryMaterial: '',
    influence: 'high-end alternative fashion',
    hardware: 'hardware details',
    silhouette: 'architectural silhouette',
    tailoring: 'structured tailoring',
    photography: 'studio lighting, high contrast',
    serialNumber: 'MV001',
    salt: '#001'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [designImage, setDesignImage] = useState('');
  const [designStage, setDesignStage] = useState('initial'); // initial, 2d, 3d, pattern, manufacturing
  const [activeTab, setActiveTab] = useState('conceptDesign'); // conceptDesign, 3dVisualization, patternCutter, manufacturing, distribution, payment
  const [savedDesigns, setSavedDesigns] = useState<Array<{imageUrl: string, productType: string, prompt: string}>>([]);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState<number | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [productType, setProductType] = useState('corset');
  const [promptCounter, setPromptCounter] = useState(1); // Counter for prompt serial number
  const [showStructuredForm, setShowStructuredForm] = useState(false);
  const [saltCounter, setSaltCounter] = useState(1); // Counter for incremental salt
  
  // Manufacturing state
  const [manufacturingDetails, setManufacturingDetails] = useState({
    quantity: "1",
    sizeRange: "single",
    productionSpeed: "standard",
    shippingMethod: "standard",
    marketplaceIntegration: "none"
  });
  const [orderTotal, setOrderTotal] = useState(175.00);
  
  // Pattern cutter state
  const [patternType, setPatternType] = useState('corset');
  const [measurements, setMeasurements] = useState({
    bust: 90,
    waist: 70,
    hips: 95,
    shoulderWidth: 38,
    centerBackLength: 40,
    centerFrontLength: 42,
    armLength: 58,
    thighCircumference: 55,
  });
  const [patternCanvas, setPatternCanvas] = useState('');
  const [patternCustomizations, setPatternCustomizations] = useState({
    boning: 'standard',
    cutStyle: 'classic',
    panelCount: 6,
    closureType: 'back',
    sweepWidth: 'standard',
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [is3DConverting, setIs3DConverting] = useState(false);
  const [animateTransition, setAnimateTransition] = useState(false);
  
  // Update measurements
  const handleMeasurementChange = (measurement: string, value: number) => {
    setMeasurements(prev => ({
      ...prev,
      [measurement]: value
    }));
  };
  
  // Update pattern customizations
  const handleCustomizationChange = (customization: string, value: string) => {
    setPatternCustomizations(prev => ({
      ...prev,
      [customization]: value
    }));
  };
  
  // Pattern canvas drawing function
  useEffect(() => {
    if (designStage === 'pattern' && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Draw pattern based on patternType and measurements
        drawPattern(ctx, patternType, measurements, patternCustomizations);
      }
    }
  }, [designStage, patternType, measurements, patternCustomizations]);
  
  // Add a new useEffect specifically for when the activeTab changes to patternCutter
  useEffect(() => {
    if (activeTab === 'patternCutter' && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Draw pattern based on patternType and measurements
        drawPattern(ctx, patternType, measurements, patternCustomizations);
      }
    }
  }, [activeTab, patternType, measurements, patternCustomizations]);
  
  // Draw pattern based on type and measurements
  const drawPattern = (
    ctx: CanvasRenderingContext2D, 
    type: string, 
    measurements: any, 
    customizations: any
  ) => {
    const { width, height } = ctx.canvas;
    
    console.log("Drawing pattern:", type, measurements, customizations);
    
    // Add a light background to show the canvas is active
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, width, height);
    
    // Add a border to see canvas boundaries
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.strokeRect(1, 1, width-2, height-2);
    
    // Set up drawing styles
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    
    // Center coordinates
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Scale factor to convert cm to pixels
    const scale = 4;
    
    // Draw title text
    ctx.fillStyle = 'black';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${type.toUpperCase()} PATTERN`, centerX, 30);
    
    if (type === 'corset') {
      // Draw front panel
      const waistWidth = measurements.waist / (customizations.panelCount * 2) * scale;
      const bustWidth = measurements.bust / (customizations.panelCount * 2) * scale;
      const hipWidth = measurements.hips / (customizations.panelCount * 2) * scale;
      const panelHeight = measurements.centerFrontLength * scale;
      
      // Panel shape coordinates
      const panel = [
        { x: centerX - bustWidth/2, y: centerY - panelHeight/2 }, // Top left
        { x: centerX + bustWidth/2, y: centerY - panelHeight/2 }, // Top right
        { x: centerX + waistWidth/2, y: centerY }, // Waist right
        { x: centerX + hipWidth/2, y: centerY + panelHeight/2 }, // Bottom right
        { x: centerX - hipWidth/2, y: centerY + panelHeight/2 }, // Bottom left
        { x: centerX - waistWidth/2, y: centerY }, // Waist left
      ];
      
      // Draw panel
      ctx.beginPath();
      ctx.moveTo(panel[0].x, panel[0].y);
      for (let i = 1; i < panel.length; i++) {
        ctx.lineTo(panel[i].x, panel[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(200, 200, 220, 0.3)';
      ctx.fill();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw boning lines
      if (customizations.boning === 'standard' || customizations.boning === 'heavy') {
        const boningCount = customizations.boning === 'standard' ? 3 : 5;
        const spacing = waistWidth / (boningCount + 1);
        
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1;
        
        for (let i = 1; i <= boningCount; i++) {
          const x = centerX - waistWidth/2 + spacing * i;
          ctx.beginPath();
          ctx.moveTo(x, centerY - panelHeight/2 + 10);
          ctx.lineTo(x, centerY + panelHeight/2 - 10);
          ctx.stroke();
        }
      }
      
      // Draw seam allowance (dashed lines)
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(panel[0].x - 10, panel[0].y - 10);
      ctx.lineTo(panel[1].x + 10, panel[1].y - 10);
      ctx.lineTo(panel[2].x + 10, panel[2].y);
      ctx.lineTo(panel[3].x + 10, panel[3].y + 10);
      ctx.lineTo(panel[4].x - 10, panel[4].y + 10);
      ctx.lineTo(panel[5].x - 10, panel[5].y);
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Draw measurements
      ctx.font = '12px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(`Bust: ${measurements.bust}cm`, 10, 20);
      ctx.fillText(`Waist: ${measurements.waist}cm`, 10, 40);
      ctx.fillText(`Hips: ${measurements.hips}cm`, 10, 60);
      ctx.fillText(`Panel Count: ${customizations.panelCount}`, 10, 80);
      ctx.fillText(`Boning: ${customizations.boning}`, 10, 100);
      
    } else if (type === 'harness') {
      // Draw harness pattern with similar approach but different shape
      const shoulderWidth = measurements.shoulderWidth * scale;
      const bustWidth = measurements.bust / 2 * scale;
      
      // Draw main chest strap
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, bustWidth/2, bustWidth/4, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw shoulder straps
      ctx.beginPath();
      ctx.moveTo(centerX - bustWidth/2, centerY);
      ctx.lineTo(centerX - shoulderWidth/2, centerY - bustWidth/2);
      ctx.lineTo(centerX + shoulderWidth/2, centerY - bustWidth/2);
      ctx.lineTo(centerX + bustWidth/2, centerY);
      ctx.stroke();
      
      // Draw under-bust strap
      ctx.beginPath();
      ctx.moveTo(centerX - bustWidth/2, centerY + 20);
      ctx.lineTo(centerX + bustWidth/2, centerY + 20);
      ctx.stroke();
    } else if (type === 'bodysuit') {
      // Draw bodysuit pattern (simplified)
      const torsoWidth = measurements.waist * scale / 6;
      const torsoHeight = measurements.centerBackLength * scale;
      
      // Torso
      ctx.beginPath();
      ctx.rect(centerX - torsoWidth, centerY - torsoHeight/2, torsoWidth * 2, torsoHeight);
      ctx.stroke();
      
      // Leg openings
      ctx.beginPath();
      ctx.arc(centerX - torsoWidth/2, centerY + torsoHeight/2, torsoWidth/2, 0, Math.PI);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + torsoWidth/2, centerY + torsoHeight/2, torsoWidth/2, 0, Math.PI);
      ctx.stroke();
    }
    
    // Save pattern image
    setPatternCanvas(ctx.canvas.toDataURL());
  };
  
  // Function to handle generating a structured prompt
  const handleGeneratePrompt = () => {
    // Generate a creative name
    const creativeProductName = generateProductName(productType);
    
    // Generate a serial number for this product
    const serialNumber = `MV${String(promptCounter).padStart(3, '0')}`;
    setPromptCounter(prev => prev + 1);
    
    // Generate a salt for this specific variation
    const salt = `#${String(saltCounter).padStart(3, '0')}`;
    setSaltCounter(prev => prev + 1);
    
    // Generate technical specs and marketing description
    const technicalSpecs = generateTechnicalDescription(productType);
    const marketingDescription = generateCreativeDescription(productType);
    
    // Set the creative description as the prompt text
    setPromptText(`MISS VOID ${productType} "${creativeProductName}"\n\nTECHNICAL SPECIFICATIONS:\n${technicalSpecs}\n\nMARKETING DESCRIPTION:\n${marketingDescription}\n\n${serialNumber} ${salt}`);
    
    // Update structured prompt fields
    const extractedData = extractStructuredData(marketingDescription, productType);
    setStructuredPrompt({
      name: creativeProductName,
      brand: 'MISS VOID',
      description: marketingDescription,
      technicalSpecs: technicalSpecs,
      primaryMaterial: extractedData.primaryMaterial,
      secondaryMaterial: extractedData.secondaryMaterial || '',
      influence: 'high-end alternative fashion',
      hardware: extractedData.hardware,
      silhouette: extractedData.silhouette,
      tailoring: extractedData.tailoring,
      photography: 'studio lighting, high contrast',
      serialNumber: serialNumber,
      salt: salt
    });
  };

  // Craft optimized prompt for Stability AI
  const craftOptimizedPrompt = (userPrompt: string): string => {
    // Use the selected product type instead of detecting it
    // (We keep the productType as is since it's already set by the dropdown)
    
    // Get random style elements (3-5)
    const styleCount = Math.floor(Math.random() * 3) + 3;
    const selectedStyles = [...STYLE_ELEMENTS].sort(() => 0.5 - Math.random()).slice(0, styleCount);
    
    // Get random aesthetic descriptors (2-3)
    const aestheticCount = Math.floor(Math.random() * 2) + 2;
    const selectedAesthetics = [...AESTHETIC_DESCRIPTORS].sort(() => 0.5 - Math.random()).slice(0, aestheticCount);
    
    // Get product-specific descriptors (2-3)
    const productDescriptors = PRODUCT_DESCRIPTORS[productType] || [];
    const descriptorCount = Math.min(Math.floor(Math.random() * 2) + 2, productDescriptors.length);
    const selectedDescriptors = [...productDescriptors].sort(() => 0.5 - Math.random()).slice(0, descriptorCount);
    
    // Combine everything into an optimized prompt
    const enhancedPrompt = [
      // Core user prompt
      userPrompt,
      
      // Product-specific details
      `${productType} design`,
      ...selectedDescriptors,
      
      // MISS VOID aesthetics
      ...selectedAesthetics,
      
      // Style elements
      ...selectedStyles,
      
      // Photography style for better image generation
      "studio photography, professional lighting, fashion editorial, high-end fashion photography",
      
      // Negative prompts to avoid
      "NOT colorful, NOT bright colors, NOT casual wear"
    ].join(", ");
    
    return enhancedPrompt;
  };
  
  const handleGenerate = async () => {
    setIsGenerating(true);
    setApiError(null);
    
    try {
      // Craft an optimized prompt for the API
      const enhancedPrompt = craftOptimizedPrompt(promptText);
      console.log("Enhanced prompt:", enhancedPrompt);
      
      // Make the API call to Stability
      console.log("Making API call to generate design...");
      const response = await fetch('/api/generate-design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: enhancedPrompt,
          productType
        })
      });
      
      console.log("API response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error response:", errorData);
        throw new Error(errorData.error || "Failed to generate image");
      }
      
      const data = await response.json();
      console.log("API success response:", data);
      
      // Set the generated image
      if (data.imageUrl) {
        console.log("Setting image URL:", data.imageUrl);
        setDesignImage(data.imageUrl);
        setDesignStage('2d');
      } else {
        throw new Error("No image URL in response");
      }
    } catch (error) {
      console.error("Error generating design:", error);
      setApiError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleSaveDesign = () => {
    // Save current design to the saved designs array
    if (designImage) {
      setSavedDesigns([
        ...savedDesigns, 
        { 
          imageUrl: designImage, 
          productType, 
          prompt: promptText 
        }
      ]);
      setSelectedDesignIndex(savedDesigns.length);
    }
  };
  
  const handleSelectDesign = (index: number) => {
    setSelectedDesignIndex(index);
    setDesignImage(savedDesigns[index].imageUrl);
    setProductType(savedDesigns[index].productType);
  };
  
  const handleProceedTo3D = () => {
    console.log("Proceed to 3D button clicked");
    console.log("Current designImage:", designImage);
    console.log("Current selectedDesignIndex:", selectedDesignIndex);
    
    // Set a brief loading state for visual feedback
    setIs3DConverting(true);
    setTimeout(() => setIs3DConverting(false), 1500);
    
    // Always proceed to 3D tab when button is clicked
    setDesignStage('3d');
    setActiveTab('3dVisualization');
  };
  
  const handleProceedToPattern = () => {
    setActiveTab('patternCutter');
    setPatternType(productType);
  };
  
  const handleProceedToManufacturing = () => {
    setActiveTab('manufacturing');
    // Reset calculation when entering manufacturing tab
    calculateOrderTotal(manufacturingDetails);
  };
  
  const handleProceedToDistribution = () => {
    setActiveTab('distribution');
  };
  
  const handleProceedToPayment = () => {
    setActiveTab('payment');
  };
  
  // Calculate order total based on selections
  const calculateOrderTotal = (details: any) => {
    // Base prices by quantity
    const pricesByQuantity: {[key: string]: number} = {
      "1": 150.00,
      "5": 120.00,
      "10": 90.00,
      "50": 70.00,
      "100": 55.00,
      "500": 45.00
    };
    
    // Get base price per unit
    const basePrice = pricesByQuantity[details.quantity] || 150.00;
    
    // Calculate quantity total (using actual quantity minimum for tier)
    const quantityMap: {[key: string]: number} = {
      "1": 1,
      "5": 5,
      "10": 10,
      "50": 50,
      "100": 100,
      "500": 500
    };
    const quantity = quantityMap[details.quantity] || 1;
    const subtotal = basePrice * quantity;
    
    // Apply production speed multiplier
    const productionMultiplier = details.productionSpeed === "express" ? 1.25 :
                                details.productionSpeed === "rush" ? 1.5 : 1;
    
    // Calculate shipping cost (simplified)
    const shippingCost = details.shippingMethod === "express" ? 45.00 :
                        details.shippingMethod === "priority" ? 75.00 : 25.00;
    
    // Calculate final total
    const calculatedTotal = (subtotal * productionMultiplier) + shippingCost;
    setOrderTotal(calculatedTotal);
    
    return calculatedTotal;
  };
  
  // Handle manufacturing detail changes
  const handleManufacturingChange = (field: string, value: string) => {
    const updatedDetails = { ...manufacturingDetails, [field]: value };
    setManufacturingDetails(updatedDetails);
    calculateOrderTotal(updatedDetails);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">MISS VOID DESIGN STUDIO</h1>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Create your own MISS VOID designs using our AI-powered design system. Generate unique pieces, visualize them in 3D,
          customize cutting patterns, and bring them to life with our manufacturing partners.
        </p>
        
        {apiError && (
          <div className="bg-red-900 border border-red-700 text-white p-4 mb-6 rounded">
            <p className="font-bold">Error generating image:</p>
            <p>{apiError}</p>
          </div>
        )}
        
        {/* Main Navigation Tabs */}
        <div className="mb-6 border-b border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'about' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'profile' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'portfolio' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'conceptDesign' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('conceptDesign')}
              >
                Concept Design
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === '3dVisualization' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('3dVisualization')}
              >
                3D Visualization
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'patternCutter' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('patternCutter')}
              >
                Pattern Cutter
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'manufacturing' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('manufacturing')}
              >
                Manufacturing
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'distribution' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('distribution')}
              >
                Distribution
              </button>
            </li>
            <li className="mr-2">
              <button 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === 'payment' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('payment')}
              >
                Payment
              </button>
            </li>
          </ul>
        </div>
        
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Profile</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 bg-gray-900 p-4 rounded-lg border border-gray-700">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-4 border-2 border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">Guest User</h3>
                  <p className="text-sm text-gray-400 mt-1">Member since May 2024</p>
                  
                  <button className="mt-4 w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition">
                    Edit Profile
                  </button>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Account Information</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Subscription</span>
                      <span className="text-white">Free Tier</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Designs Created</span>
                      <span className="text-white">{savedDesigns.length}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Designs Manufactured</span>
                      <span className="text-white">0</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-gray-900 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium text-white mb-4">Account Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Password</label>
                    <input 
                      type="password" 
                      className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
                      Save Changes
                    </button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-4">Subscription Plan</h4>
                  <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-white font-medium">Free Tier</h5>
                        <p className="text-sm text-gray-400">5 designs per month</p>
                      </div>
                      <button className="bg-white text-black py-1 px-4 rounded hover:bg-gray-200 transition text-sm">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">About MISS VOID Design Studio</h2>
            
            <div className="text-gray-300 space-y-4">
              <p>
                The MISS VOID Design Studio combines cutting-edge AI technology with our distinctive aesthetic to give you the power to create your own MISS VOID pieces.
              </p>
              
              <p>
                Each design is exclusively branded with the MISS VOID name, while you retain ownership of your unique creation. Our system seamlessly converts your design concept into a 3D model and precise cutting patterns, which are then manufactured to our exacting standards.
              </p>
              
              <p>
                From single pieces to large production runs, we offer flexible manufacturing options to meet your needs. All designs are manufactured by our trusted partners in China, with direct drop-shipping to your business or marketplace.
              </p>
              
              <div className="mt-6 font-semibold">
                <p>To access your existing designs or create an account, please sign in.</p>
                <button className="mt-2 bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
                  Sign In / Create Account
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Portfolio Tab (renamed from Gallery) */}
        {activeTab === 'portfolio' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Design Portfolio</h2>
            
            {savedDesigns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedDesigns.map((design, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gray-900 rounded-lg overflow-hidden border-2 ${selectedDesignIndex === index ? 'border-white' : 'border-gray-800'}`}
                    onClick={() => handleSelectDesign(index)}
                  >
                    <div className="aspect-square">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={design.imageUrl} 
                        alt={`MISS VOID ${design.productType} design`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-white">
                        {design.productType.charAt(0).toUpperCase() + design.productType.slice(1)}
                      </h3>
                      <p className="text-xs text-gray-400 truncate">
                        {design.prompt.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">Your portfolio is empty. Generate and save designs to display them here.</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create Your First Design
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Concept Design Tab */}
        {activeTab === 'conceptDesign' && (
          <>
            <div className="bg-black p-6 rounded-lg mb-8 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-white">Concept Design</h2>
              
              <div className="mb-4">
                <label htmlFor="productTypeSelect" className="block mb-2 text-gray-300">
                  Product Type
                </label>
                <select
                  id="productTypeSelect"
                  className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option value="corset">Corset</option>
                  <option value="harness">Harness</option>
                  <option value="bodysuit">Bodysuit</option>
                  <option value="dress">Dress</option>
                  <option value="mask">Mask</option>
                  <option value="skirt">Skirt</option>
                  <option value="jacket">Jacket</option>
                  <option value="blazer">Blazer</option>
                  <option value="gloves">Gloves</option>
                  <option value="leggings">Leggings</option>
                  <option value="top">Top</option>
                  <option value="bustier">Bustier</option>
                  <option value="collar">Collar</option>
                  <option value="choker">Choker</option>
                  <option value="boots">Boots</option>
                  <option value="belt">Belt</option>
                  <option value="cape">Cape</option>
                  <option value="catsuit">Catsuit</option>
                  <option value="gown">Gown</option>
                  <option value="jumpsuit">Jumpsuit</option>
                  <option value="shorts">Shorts</option>
                  <option value="coat">Coat</option>
                  <option value="lingerie">Lingerie</option>
                  <option value="bra">Bra</option>
                  <option value="suspenders">Suspenders</option>
                  <option value="headpiece">Headpiece</option>
                </select>
                <p className="mt-2 text-sm text-gray-400">
                  Select the type of product you want to generate. This will optimize your design and ensure accurate pattern creation.
                </p>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="designPrompt" className="text-gray-300">
                    Describe your MISS VOID design
                  </label>
                  <button 
                    className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-600 transition text-sm flex items-center"
                    onClick={() => {
                      // Generate a creative name
                      const creativeProductName = generateProductName(productType);
                      
                      // Generate a serial number for this product
                      const serialNumber = `MV${String(promptCounter).padStart(3, '0')}`;
                      setPromptCounter(prev => prev + 1);
                      
                      // Generate a salt for this specific variation
                      const salt = `#${String(saltCounter).padStart(3, '0')}`;
                      setSaltCounter(prev => prev + 1);
                      
                      // Generate a technical and marketing descriptions
                      const technicalSpecs = generateTechnicalDescription(productType);
                      const marketingDescription = generateCreativeDescription(productType);
                      
                      // Extract structured data from the marketing description
                      const extractedData = extractStructuredData(marketingDescription, productType);
                      
                      // Create a structured prompt
                      const generatedPrompt = `MISS VOID ${productType} "${creativeProductName}"\n\nTECHNICAL SPECIFICATIONS:\n${technicalSpecs}\n\nMARKETING DESCRIPTION:\n${marketingDescription}\n\n${serialNumber} ${salt}`;
                      
                      setPromptText(generatedPrompt);
                      
                      // Update structured prompt fields with extracted data
                      setStructuredPrompt({
                        name: creativeProductName,
                        brand: 'MISS VOID',
                        description: marketingDescription,
                        technicalSpecs: technicalSpecs,
                        primaryMaterial: extractedData.primaryMaterial,
                        secondaryMaterial: extractedData.secondaryMaterial || '',
                        influence: 'high-end alternative fashion',
                        hardware: extractedData.hardware,
                        silhouette: extractedData.silhouette,
                        tailoring: extractedData.tailoring,
                        photography: 'studio lighting, high contrast',
                        serialNumber: serialNumber,
                        salt: salt
                      });
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Auto Generate Description
                  </button>
                </div>
                
                <textarea
                  id="designPrompt"
                  rows={4}
                  className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
                  placeholder="E.g., A sculptural black leather corset with architectural elements, inspired by brutalist architecture"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                />
                
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-sm text-gray-400">
                    Add specific details and use the salt (e.g., #001) to create variations of the same design with tiny tweaks.
                  </p>
                  <button 
                    className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-600 transition text-sm"
                    onClick={() => setShowStructuredForm(!showStructuredForm)}
                  >
                    {showStructuredForm ? 'Hide Specs' : 'Show Detailed Specs'}
                  </button>
                </div>
                
                {/* Structured Specifications Form */}
                {showStructuredForm && (
                  <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                    <h3 className="text-white text-sm font-semibold mb-3">Detailed Specifications</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.name}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, name: e.target.value})}
                          placeholder="Product name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Brand</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-gray-300 text-sm cursor-not-allowed"
                          value={structuredPrompt.brand}
                          readOnly
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Serial Number</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.serialNumber}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, serialNumber: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Primary Material</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.primaryMaterial}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, primaryMaterial: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Secondary Material</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.secondaryMaterial}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, secondaryMaterial: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Designer Influence</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.influence}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, influence: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Hardware Details</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.hardware}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, hardware: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Silhouette</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.silhouette}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, silhouette: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Tailoring</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.tailoring}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, tailoring: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Photography Style</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.photography}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, photography: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Salt (for variations)</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.salt}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, salt: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <label className="block text-xs text-gray-400 mb-1">Technical Specifications</label>
                      <textarea 
                        className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm font-mono"
                        rows={6}
                        value={structuredPrompt.technicalSpecs}
                        onChange={(e) => setStructuredPrompt({...structuredPrompt, technicalSpecs: e.target.value})}
                      />
                    </div>
                    
                    <div className="mt-3">
                      <label className="block text-xs text-gray-400 mb-1">Marketing Description</label>
                      <textarea 
                        className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                        rows={4}
                        value={structuredPrompt.description}
                        onChange={(e) => setStructuredPrompt({...structuredPrompt, description: e.target.value})}
                      />
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <button 
                        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition text-sm"
                        onClick={() => {
                          // Combine all fields into a coherent prompt
                          const combinedPrompt = `MISS VOID ${productType} "${structuredPrompt.name}"\n\nTECHNICAL SPECIFICATIONS:\n${structuredPrompt.technicalSpecs}\n\nMARKETING DESCRIPTION:\n${structuredPrompt.description}\n\n${structuredPrompt.serialNumber} ${structuredPrompt.salt}`;
                          setPromptText(combinedPrompt);
                        }}
                      >
                        Update Prompt
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition w-full mb-2"
                onClick={handleGenerate}
                disabled={isGenerating || !promptText}
              >
                {isGenerating ? 'Generating...' : 'Generate Design Image'}
              </button>
              
              {designImage && (
                <div className="mt-4 flex items-center">
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition flex-1"
                    onClick={() => {
                      // Increment only the salt for a variation
                      const newSalt = `#${String(saltCounter).padStart(3, '0')}`;
                      setSaltCounter(prev => prev + 1);
                      
                      // Update the salt in structured prompt
                      setStructuredPrompt({...structuredPrompt, salt: newSalt});
                      
                      // Update the salt in the prompt text
                      const updatedPrompt = promptText.replace(structuredPrompt.salt, newSalt);
                      setPromptText(updatedPrompt);
                      
                      // Generate with the updated prompt
                      handleGenerate();
                    }}
                    disabled={isGenerating}
                  >
                    Generate Variation (+{saltCounter.toString().padStart(3, '0')})
                  </button>
                </div>
              )}
            </div>
            
            {/* Display design image if available */}
            {designImage && (
              <div className="mt-6 bg-gray-900 p-4 rounded border border-gray-700">
                <h3 className="text-white text-lg font-semibold mb-3">Generated Design</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md h-96 bg-black border border-gray-700 rounded overflow-hidden">
                    {/* Handle both URL and base64 images */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={designImage} 
                      alt={`MISS VOID ${productType} design`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        console.error("Image failed to load:", designImage);
                        e.currentTarget.src = "/images/image-error.png"; // Fallback image
                      }}
                      onLoad={() => console.log("Design image loaded successfully:", designImage.substring(0, 30) + '...')}
                    />
                  </div>
                </div>
                
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                    onClick={handleSaveDesign}
                  >
                    Save to Gallery
                  </button>
                  
                  <button
                    className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                    onClick={() => {
                      console.log("Proceeding to 3D view with image:", designImage);
                      handleProceedTo3D();
                    }}
                  >
                    Proceed to 3D Visualization
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        
        {/* 3D Visualization Tab */}
        {activeTab === '3dVisualization' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">3D Visualization</h2>
            
            {designImage ? (
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 mb-2">
                    Your 2D design has been converted to a 3D model. Interact with it below to view from different angles.
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    Debug info - Image URL: {designImage ? designImage.substring(0, 30) + '...' : 'none'}
                  </p>
                </div>
                
                <div className="aspect-square max-h-[600px] w-full bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                  {is3DConverting ? (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-12 h-12 border-t-4 border-white rounded-full animate-spin mb-4"></div>
                      <p className="text-white font-medium">Converting to 3D Model...</p>
                      <p className="text-gray-400 text-sm mt-2">Please wait while we process your design</p>
                    </div>
                  ) : (
                    <ThreeDModelViewer 
                      designImage={designImage}
                      productType={productType}
                      isLoading={is3DConverting}
                    />
                  )}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                    onClick={() => setActiveTab('conceptDesign')}
                  >
                    Back to Design
                  </button>
                  
                  <button
                    className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                    onClick={handleProceedToPattern}
                    disabled={is3DConverting}
                  >
                    Proceed to Pattern Cutter
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">You need to generate a design first before visualizing it in 3D.</p>
                <p className="text-sm text-gray-500 mb-4">Debug info - Design stage: {designStage}</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create a Design
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Pattern Cutter Tab */}
        {activeTab === 'patternCutter' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Pattern Cutter</h2>
            
            {designImage ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Measurements</h3>
                  <div className="bg-gray-900 p-4 rounded border border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Bust (cm)</label>
                        <input 
                          type="number" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={measurements.bust}
                          onChange={(e) => handleMeasurementChange('bust', parseFloat(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Waist (cm)</label>
                        <input 
                          type="number" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={measurements.waist}
                          onChange={(e) => handleMeasurementChange('waist', parseFloat(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Hips (cm)</label>
                        <input 
                          type="number" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={measurements.hips}
                          onChange={(e) => handleMeasurementChange('hips', parseFloat(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Shoulder Width (cm)</label>
                        <input 
                          type="number" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={measurements.shoulderWidth}
                          onChange={(e) => handleMeasurementChange('shoulderWidth', parseFloat(e.target.value))}
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-white text-sm font-medium mt-4 mb-2">Customizations</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Boning</label>
                        <select
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={patternCustomizations.boning}
                          onChange={(e) => handleCustomizationChange('boning', e.target.value)}
                        >
                          <option value="light">Light</option>
                          <option value="standard">Standard</option>
                          <option value="heavy">Heavy</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Cut Style</label>
                        <select
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={patternCustomizations.cutStyle}
                          onChange={(e) => handleCustomizationChange('cutStyle', e.target.value)}
                        >
                          <option value="classic">Classic</option>
                          <option value="modern">Modern</option>
                          <option value="extreme">Extreme</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Panel Count</label>
                        <select
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={patternCustomizations.panelCount}
                          onChange={(e) => handleCustomizationChange('panelCount', e.target.value)}
                        >
                          <option value="4">4 Panels</option>
                          <option value="6">6 Panels</option>
                          <option value="8">8 Panels</option>
                          <option value="10">10 Panels</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Closure Type</label>
                        <select
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                          value={patternCustomizations.closureType}
                          onChange={(e) => handleCustomizationChange('closureType', e.target.value)}
                        >
                          <option value="back">Back</option>
                          <option value="front">Front</option>
                          <option value="side">Side</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                      onClick={() => setActiveTab('3dVisualization')}
                    >
                      Back to 3D View
                    </button>
                    
                    <button
                      className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                      onClick={handleProceedToManufacturing}
                    >
                      Proceed to Manufacturing
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Pattern Preview</h3>
                  <div className="bg-gray-900 p-4 rounded border border-gray-700">
                    <div className="bg-white rounded">
                      <canvas 
                        ref={canvasRef} 
                        width={500} 
                        height={600} 
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition w-full">
                        Download Pattern PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">You need to generate a design first before creating a pattern.</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create a Design
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Manufacturing Tab */}
        {activeTab === 'manufacturing' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Manufacturing</h2>
            
            {designImage ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Order Details</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Quantity</label>
                          <select 
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            value={manufacturingDetails.quantity}
                            onChange={(e) => handleManufacturingChange('quantity', e.target.value)}
                          >
                            <option value="1">1 Piece (Premium Sample)</option>
                            <option value="5">5-9 Pieces</option>
                            <option value="10">10-49 Pieces</option>
                            <option value="50">50-99 Pieces</option>
                            <option value="100">100-499 Pieces</option>
                            <option value="500">500+ Pieces</option>
                          </select>
                          <p className="text-xs text-gray-500 mt-1">Pricing tiers apply based on quantity</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Size Range</label>
                          <select
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            value={manufacturingDetails.sizeRange}
                            onChange={(e) => handleManufacturingChange('sizeRange', e.target.value)}
                          >
                            <option value="single">Single Size (Based on Measurements)</option>
                            <option value="standard">Standard Size Range (XS-XL)</option>
                            <option value="extended">Extended Size Range (XS-3XL)</option>
                            <option value="custom">Custom Size Specification</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Production Speed</label>
                          <select
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            value={manufacturingDetails.productionSpeed}
                            onChange={(e) => handleManufacturingChange('productionSpeed', e.target.value)}
                          >
                            <option value="standard">Standard (4-6 weeks)</option>
                            <option value="express">Express (2-3 weeks, +25%)</option>
                            <option value="rush">Rush (7-10 days, +50%)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Shipping Method</label>
                          <select
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            value={manufacturingDetails.shippingMethod}
                            onChange={(e) => handleManufacturingChange('shippingMethod', e.target.value)}
                          >
                            <option value="standard">Standard International Shipping</option>
                            <option value="express">Express International Shipping</option>
                            <option value="priority">Priority International Shipping</option>
                            <option value="dropship">Direct to Customer Drop-shipping</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Marketplace Integration</label>
                          <select
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            value={manufacturingDetails.marketplaceIntegration}
                            onChange={(e) => handleManufacturingChange('marketplaceIntegration', e.target.value)}
                          >
                            <option value="none">No Integration (Ship to Me)</option>
                            <option value="alibaba">Alibaba Wholesale</option>
                            <option value="ebay">eBay Dropshipping</option>
                            <option value="etsy">Etsy Integration</option>
                            <option value="shopify">Shopify Store</option>
                            <option value="amazon">Amazon FBA</option>
                          </select>
                          <p className="text-xs text-gray-500 mt-1">Ship directly from Miss Void factory to your customers worldwide</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Volume Pricing</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-400">1 Piece (Premium)</span>
                          <span className="text-white font-medium">$150.00/unit</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-400">5-9 Pieces</span>
                          <span className="text-white font-medium">$120.00/unit</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-400">10-49 Pieces</span>
                          <span className="text-white font-medium">$90.00/unit</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-400">50-99 Pieces</span>
                          <span className="text-white font-medium">$70.00/unit</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-400">100-499 Pieces</span>
                          <span className="text-white font-medium">$55.00/unit</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-400">500+ Pieces</span>
                          <span className="text-white font-medium">$45.00/unit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Order Summary</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Product</span>
                          <span className="text-white">MISS VOID {productType}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Base Price (per item)</span>
                          <span className="text-white">${
                            manufacturingDetails.quantity === "1" ? "150.00" :
                            manufacturingDetails.quantity === "5" ? "120.00" :
                            manufacturingDetails.quantity === "10" ? "90.00" :
                            manufacturingDetails.quantity === "50" ? "70.00" :
                            manufacturingDetails.quantity === "100" ? "55.00" :
                            "45.00"
                          }</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Quantity</span>
                          <span className="text-white">{
                            manufacturingDetails.quantity === "1" ? "1" :
                            manufacturingDetails.quantity === "5" ? "5" :
                            manufacturingDetails.quantity === "10" ? "10" :
                            manufacturingDetails.quantity === "50" ? "50" :
                            manufacturingDetails.quantity === "100" ? "100" :
                            "500"
                          }</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Production</span>
                          <span className="text-white">{
                            manufacturingDetails.productionSpeed === "standard" ? "Standard" :
                            manufacturingDetails.productionSpeed === "express" ? "Express (+25%)" :
                            "Rush (+50%)"
                          }</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Shipping</span>
                          <span className="text-white">${
                            manufacturingDetails.shippingMethod === "standard" ? "25.00" :
                            manufacturingDetails.shippingMethod === "express" ? "45.00" :
                            manufacturingDetails.shippingMethod === "priority" ? "75.00" :
                            "25.00"
                          }</span>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-3 flex justify-between items-center font-semibold">
                          <span className="text-gray-300">Total</span>
                          <span className="text-white">${orderTotal.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition w-full">
                          Submit Production Request
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Global Marketplace Options</h4>
                      <div className="space-y-3">
                        <div className="flex items-center p-2 border border-gray-800 rounded hover:border-gray-600 transition cursor-pointer">
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-orange-500">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Alibaba Wholesale</p>
                            <p className="text-xs text-gray-400">Direct factory to global buyers</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-2 border border-gray-800 rounded hover:border-gray-600 transition cursor-pointer">
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-blue-500">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">eBay Integration</p>
                            <p className="text-xs text-gray-400">Dropship directly to customers</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-2 border border-gray-800 rounded hover:border-gray-600 transition cursor-pointer">
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-green-500">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Amazon FBA</p>
                            <p className="text-xs text-gray-400">Prime-eligible worldwide shipping</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-3">Production Notes</h3>
                  
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white"
                    placeholder="Add any special instructions or notes for production..."
                  />
                  
                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                      onClick={() => setActiveTab('patternCutter')}
                    >
                      Back to Pattern Cutter
                    </button>
                    
                    <button
                      className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                    >
                      Save Production Setup
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-3">Scale & Logistics</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <h4 className="text-white text-sm font-medium mb-2">Samples & Small Runs</h4>
                        <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                          <li>Premium materials & construction</li>
                          <li>Individual quality inspection</li>
                          <li>Perfect for high-end boutiques</li>
                          <li>Custom packaging options</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <h4 className="text-white text-sm font-medium mb-2">Medium Production</h4>
                        <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                          <li>Optimized production processes</li>
                          <li>Batch quality control</li>
                          <li>Ideal for independent labels</li>
                          <li>Worldwide logistics support</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <h4 className="text-white text-sm font-medium mb-2">Mass Production</h4>
                        <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                          <li>Maximized production efficiency</li>
                          <li>Dedicated QC team</li>
                          <li>Perfect for established brands</li>
                          <li>Global distribution services</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">Direct-to-Customer Model</h4>
                      <p className="text-xs text-gray-400 mb-2">
                        With MISS VOID's direct-to-customer model, we handle all aspects of fulfillment, allowing you to focus on your brand and customers.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-400">Worldwide shipping</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-400">Custom branding</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-400">Automated fulfillment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">You need to generate a design first before accessing manufacturing options.</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create a Design
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Distribution Tab */}
        {activeTab === 'distribution' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Global Distribution</h2>
            
            {designImage ? (
              <div>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">
                    Distribute your MISS VOID design directly to retailers, boutiques, and fashion franchises worldwide. 
                    Our global network ensures your designs reach the right audience without additional intermediaries.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Distribution Channels</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Distribution Region</label>
                          <select className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white">
                            <option value="global">Global Distribution</option>
                            <option value="europe">Europe</option>
                            <option value="northAmerica">North America</option>
                            <option value="asia">Asia Pacific</option>
                            <option value="middleEast">Middle East</option>
                            <option value="australia">Australia & New Zealand</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Retailer Type</label>
                          <select className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white">
                            <option value="luxury">Luxury Fashion Boutiques</option>
                            <option value="department">High-End Department Stores</option>
                            <option value="concept">Concept Stores</option>
                            <option value="multi">Multi-Brand Retailers</option>
                            <option value="ecommerce">Premium E-commerce Platforms</option>
                            <option value="popup">Pop-up Retail Experiences</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Distribution Rights</label>
                          <select className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white">
                            <option value="exclusive">Exclusive Distribution</option>
                            <option value="selective">Selective Distribution</option>
                            <option value="intensive">Intensive Distribution</option>
                            <option value="limited">Limited Edition Release</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Retail Price Point</label>
                          <select className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white">
                            <option value="luxury">Ultra Luxury (€1000+)</option>
                            <option value="premium">Premium (€500-1000)</option>
                            <option value="accessible">Accessible Luxury (€250-500)</option>
                            <option value="masstige">Masstige (€100-250)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Marketing Support</label>
                          <select className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white">
                            <option value="full">Full Marketing Package</option>
                            <option value="digital">Digital Marketing Assets</option>
                            <option value="visual">Visual Merchandising</option>
                            <option value="minimal">Minimal Support</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Current Distribution Network</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-300">Boutiques & Concept Stores</span>
                          <span className="text-white">148 Locations</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-300">Department Store Concessions</span>
                          <span className="text-white">57 Locations</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-300">Luxury E-commerce Platforms</span>
                          <span className="text-white">23 Partners</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-800">
                          <span className="text-gray-300">Fashion Week Showrooms</span>
                          <span className="text-white">12 Cities</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-300">Global Reach</span>
                          <span className="text-white">37 Countries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Strategic Partners</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      <div className="space-y-3">
                        {/* Premium Store Partners */}
                        <div className="bg-gray-800 p-3 rounded border border-gray-700">
                          <h4 className="text-white text-sm font-semibold mb-2">Premium Department Stores</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Selfridges (UK)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Le Bon Marché (FR)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Galeries Lafayette (FR)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">KaDeWe (DE)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Barneys (US)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Lane Crawford (HK)</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Luxury Boutiques */}
                        <div className="bg-gray-800 p-3 rounded border border-gray-700">
                          <h4 className="text-white text-sm font-semibold mb-2">Luxury Fashion Boutiques</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Dover Street Market</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">10 Corso Como</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">L'Eclaireur</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">The Broken Arm</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Machine-A</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">RESTIR</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* E-commerce Platforms */}
                        <div className="bg-gray-800 p-3 rounded border border-gray-700">
                          <h4 className="text-white text-sm font-semibold mb-2">Luxury E-commerce</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">SSENSE</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Farfetch</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Matches Fashion</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">Net-a-Porter</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">LN-CC</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                              <span className="text-xs text-gray-300">HBX</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition w-full">
                          Submit Distribution Request
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Distribution Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="flex flex-col items-center mr-3">
                            <div className="w-5 h-5 rounded-full bg-white"></div>
                            <div className="h-12 w-px bg-gray-700"></div>
                          </div>
                          <div>
                            <p className="text-xs text-white font-medium">Week 1-2</p>
                            <p className="text-xs text-gray-400">Partner selection and negotiations</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col items-center mr-3">
                            <div className="w-5 h-5 rounded-full bg-white opacity-75"></div>
                            <div className="h-12 w-px bg-gray-700"></div>
                          </div>
                          <div>
                            <p className="text-xs text-white font-medium">Week 3-4</p>
                            <p className="text-xs text-gray-400">Product catalog submission</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col items-center mr-3">
                            <div className="w-5 h-5 rounded-full bg-white opacity-50"></div>
                            <div className="h-12 w-px bg-gray-700"></div>
                          </div>
                          <div>
                            <p className="text-xs text-white font-medium">Week 5-6</p>
                            <p className="text-xs text-gray-400">Retailer onboarding and setup</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col items-center mr-3">
                            <div className="w-5 h-5 rounded-full bg-white opacity-25"></div>
                          </div>
                          <div>
                            <p className="text-xs text-white font-medium">Week 8-12</p>
                            <p className="text-xs text-gray-400">Global retail launch</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-3">Global Market Reach</h3>
                  
                  <div className="mb-4">
                    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="w-full h-full relative rounded-lg overflow-hidden">
                        {/* World map visualization - simplified with regions */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
                          Interactive World Map
                        </div>
                        
                        {/* Regions */}
                        <div className="absolute top-[25%] left-[25%] w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">NA</span>
                        </div>
                        <div className="absolute top-[20%] left-[45%] w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">EU</span>
                        </div>
                        <div className="absolute top-[30%] left-[65%] w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">AS</span>
                        </div>
                        <div className="absolute top-[60%] left-[40%] w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">AF</span>
                        </div>
                        <div className="absolute top-[65%] left-[85%] w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">AU</span>
                        </div>
                        
                        {/* Lines connecting regions */}
                        <div className="absolute inset-0 opacity-30">
                          <svg viewBox="0 0 400 200" width="100%" height="100%" className="text-gray-600">
                            <path d="M100 50 L180 40" stroke="currentColor" strokeWidth="1" />
                            <path d="M180 40 L260 60" stroke="currentColor" strokeWidth="1" />
                            <path d="M260 60 L160 120" stroke="currentColor" strokeWidth="1" />
                            <path d="M160 120 L340 130" stroke="currentColor" strokeWidth="1" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">Europe</h4>
                      <div className="text-xs text-gray-400">
                        Coverage: <span className="text-white">98% of luxury retailers</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Key Markets: <span className="text-white">UK, France, Italy, Germany</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">North America</h4>
                      <div className="text-xs text-gray-400">
                        Coverage: <span className="text-white">92% of luxury retailers</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Key Markets: <span className="text-white">USA, Canada</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">Asia Pacific</h4>
                      <div className="text-xs text-gray-400">
                        Coverage: <span className="text-white">87% of luxury retailers</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Key Markets: <span className="text-white">Japan, South Korea, Hong Kong</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">Revenue Share</h4>
                      <div className="h-32 relative">
                        {/* Simplified revenue chart */}
                        <div className="flex h-full items-end space-x-4 px-4">
                          <div className="w-10 bg-white bg-opacity-75 h-[45%] rounded-t"></div>
                          <div className="w-10 bg-white bg-opacity-75 h-[65%] rounded-t"></div>
                          <div className="w-10 bg-white bg-opacity-75 h-[30%] rounded-t"></div>
                          <div className="w-10 bg-white bg-opacity-75 h-[50%] rounded-t"></div>
                          <div className="w-10 bg-white bg-opacity-75 h-[25%] rounded-t"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-400">
                          <span>Q1</span>
                          <span>Q2</span>
                          <span>Q3</span>
                          <span>Q4</span>
                          <span>Q5</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-medium mb-2">Channel Mix</h4>
                      <div className="h-32 relative">
                        {/* Simplified pie chart for channel mix */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg height="100%" viewBox="0 0 100 100" width="100%">
                            <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="10"></circle>
                            <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" fill="rgba(255,255,255,0.7)"></path>
                            <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" fill="rgba(255,255,255,0.5)"></path>
                            <path d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" fill="rgba(255,255,255,0.3)"></path>
                            <path d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" fill="rgba(255,255,255,0.2)"></path>
                          </svg>
                        </div>
                        <div className="absolute bottom-0 right-0 text-xs">
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 bg-white opacity-70 mr-1"></div>
                            <span className="text-gray-400">Boutiques (45%)</span>
                          </div>
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 bg-white opacity-50 mr-1"></div>
                            <span className="text-gray-400">Department (25%)</span>
                          </div>
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 bg-white opacity-30 mr-1"></div>
                            <span className="text-gray-400">Online (20%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white opacity-20 mr-1"></div>
                            <span className="text-gray-400">Pop-up (10%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                      onClick={() => setActiveTab('manufacturing')}
                    >
                      Back to Manufacturing
                    </button>
                    
                    <button
                      className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                    >
                      Finalize Global Distribution
                    </button>
                  </div>
                </div>
                
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">You need to generate a design first before accessing distribution options.</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create a Design
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Payment Tab */}
        {activeTab === 'payment' && (
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Payment & Financing</h2>
            
            {designImage ? (
              <div>
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">
                    Complete your MISS VOID design journey with secure payment processing. Your payment covers manufacturing, 
                    distribution setup, and global retail partnerships. All transactions are encrypted and processed securely.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Payment Method</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      {/* Payment method selection */}
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="paymentMethod" className="h-4 w-4 accent-white" defaultChecked />
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-12 bg-white bg-opacity-20 rounded flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                            <span className="text-white">Credit Card</span>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="paymentMethod" className="h-4 w-4 accent-white" />
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-12 bg-white bg-opacity-20 rounded flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <span className="text-white">Wire Transfer</span>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="paymentMethod" className="h-4 w-4 accent-white" />
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-12 bg-white bg-opacity-20 rounded flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </div>
                            <span className="text-white">Cryptocurrency</span>
                          </div>
                        </label>
                      </div>
                      
                      {/* Credit Card Form */}
                      <div className="mt-6 space-y-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Cardholder Name</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            placeholder="Name as it appears on card"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Card Number</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                            placeholder="•••• •••• •••• ••••"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">Expiration Date</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">CVC</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                              placeholder="•••"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Billing Address</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white mb-2"
                            placeholder="Street Address"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                              placeholder="City"
                            />
                            <input 
                              type="text" 
                              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                              placeholder="Postal Code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Financing Options</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3 p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="financingOption" className="h-4 w-4 accent-white" defaultChecked />
                          <div>
                            <p className="text-white text-sm">Full Payment</p>
                            <p className="text-xs text-gray-400">Pay the entire amount upfront</p>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="financingOption" className="h-4 w-4 accent-white" />
                          <div>
                            <p className="text-white text-sm">Installment Plan</p>
                            <p className="text-xs text-gray-400">Split into 3 monthly payments</p>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-2 bg-gray-800 border border-gray-700 rounded cursor-pointer">
                          <input type="radio" name="financingOption" className="h-4 w-4 accent-white" />
                          <div>
                            <p className="text-white text-sm">Production Financing</p>
                            <p className="text-xs text-gray-400">Pay 30% now, 70% after production</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Order Summary</h3>
                    <div className="bg-gray-900 p-4 rounded border border-gray-700">
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-white font-medium">Design</span>
                          <span className="text-white">{productType.charAt(0).toUpperCase() + productType.slice(1)}</span>
                        </div>
                        
                        <div className="space-y-2 py-3 border-b border-gray-800">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Manufacturing (x1)</span>
                            <span className="text-white">$150.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Distribution Setup</span>
                            <span className="text-white">$350.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Retail Partnerships</span>
                            <span className="text-white">$500.00</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 py-3 border-b border-gray-800">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Subtotal</span>
                            <span className="text-white">$1,000.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Tax</span>
                            <span className="text-white">$90.00</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between pt-3">
                          <span className="text-white font-medium">Total</span>
                          <span className="text-white font-bold text-lg">$1,090.00</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 space-y-3">
                        <p className="text-xs text-gray-400">
                          By proceeding, you agree to the MISS VOID terms of service, manufacturing agreement, and distribution policies.
                        </p>
                        
                        <button className="bg-white text-black py-3 px-4 rounded hover:bg-gray-200 transition w-full font-medium">
                          Complete Payment
                        </button>
                        
                        <div className="flex items-center justify-center space-x-2 mt-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-xs text-gray-500">Secure Payment Processing</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-gray-900 p-4 rounded border border-gray-700">
                      <h4 className="text-white text-sm font-semibold mb-3">Revenue Projection</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Estimated Retail Price</span>
                          <span className="text-white">€650 per unit</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Projected Wholesale Orders</span>
                          <span className="text-white">60-120 units</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Designer Royalty</span>
                          <span className="text-white">15% of wholesale</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Projected Annual Revenue</span>
                          <span className="text-white font-medium">€35,000 - €70,000</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 rounded-lg bg-gray-800 p-3 border border-gray-700">
                        <p className="text-xs text-gray-300">
                          Your design will be produced and distributed under the MISS VOID brand. 
                          You retain creator credit and earn royalties on all sales, while we handle 
                          manufacturing, quality control, distribution, and retail relationships.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-3">Production & Distribution Timeline</h3>
                  
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>
                    
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border-2 border-white">
                          <span className="text-white font-medium">1</span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">Payment Processing</h4>
                          <p className="text-sm text-gray-400">48 hours for payment verification and order setup</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border border-white">
                          <span className="text-white font-medium">2</span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">Manufacturing</h4>
                          <p className="text-sm text-gray-400">4-6 weeks for production with quality control</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border border-white">
                          <span className="text-white font-medium">3</span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">Retail Distribution</h4>
                          <p className="text-sm text-gray-400">2-4 weeks for store onboarding and catalog integration</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full border border-white">
                          <span className="text-white font-medium">4</span>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">Global Availability</h4>
                          <p className="text-sm text-gray-400">Your design available in selected luxury retailers worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                      onClick={() => setActiveTab('distribution')}
                    >
                      Back to Distribution
                    </button>
                    
                    <button
                      className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition font-medium"
                    >
                      Complete MISS VOID Process
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-400 mb-4">You need to generate a design first before proceeding to payment.</p>
                <button 
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={() => setActiveTab('conceptDesign')}
                >
                  Create a Design
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 