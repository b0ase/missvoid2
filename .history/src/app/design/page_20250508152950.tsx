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

export default function DesignPage() {
  const [promptText, setPromptText] = useState('');
  const [structuredPrompt, setStructuredPrompt] = useState({
    name: '',
    description: '',
    primaryMaterial: '',
    secondaryMaterial: '',
    influence: '',
    hardware: '',
    silhouette: '',
    tailoring: '',
    photography: '',
    serialNumber: '#001'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [designImage, setDesignImage] = useState('');
  const [designStage, setDesignStage] = useState('initial'); // initial, 2d, 3d, pattern, manufacturing
  const [activeTab, setActiveTab] = useState('conceptDesign'); // conceptDesign, 3dVisualization, patternCutter, manufacturing
  const [savedDesigns, setSavedDesigns] = useState<Array<{imageUrl: string, productType: string, prompt: string}>>([]);
  const [selectedDesignIndex, setSelectedDesignIndex] = useState<number | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [productType, setProductType] = useState('corset');
  const [promptCounter, setPromptCounter] = useState(1); // Counter for prompt serial number
  
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
  
  // Function to generate a detailed MISS VOID style prompt
  const generateDetailedPrompt = () => {
    // Common elements for all MISS VOID designs
    const commonElements = [
      "premium black leather",
      "architectural silhouette",
      "hardware details",
      "high contrast",
      "dramatic shadows",
      "minimalist aesthetic",
      "luxury craftsmanship",
      "avant-garde design",
      "structural elements"
    ];
    
    // Select 3-4 random common elements
    const selectedCommon = [...commonElements]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 + Math.floor(Math.random() * 2))
      .join(", ");
    
    // Get product-specific descriptors
    const descriptors = PRODUCT_DESCRIPTORS[productType] || [
      "architectural design",
      "premium materials",
      "structural elements",
      "minimalist aesthetic",
      "hardware detailing"
    ];
    
    // Select 3-4 random descriptors
    const specificDetails = [...descriptors]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 + Math.floor(Math.random() * 2))
      .join(", ");
    
    // Photography and composition elements
    const photographyElements = [
      "studio lighting",
      "high-end fashion photography",
      "editorial composition",
      "dramatic shadows",
      "minimalist background",
      "professional lighting setup",
      "high contrast",
      "clean lines"
    ].sort(() => 0.5 - Math.random()).slice(0, 3).join(", ");
    
    // Designer influences
    const designerInfluences = [
      "inspired by Alexander McQueen",
      "reminiscent of Rick Owens",
      "taking cues from Gareth Pugh",
      "with Iris van Herpen influences",
      "in the tradition of Thierry Mugler",
      "with nods to Yohji Yamamoto",
      "influenced by Azzedine Alaïa",
      "with Comme des Garçons sensibilities"
    ].sort(() => 0.5 - Math.random()).slice(0, 1).join(", ");
    
    // Generate serial number salt
    const salt = `#${String(promptCounter).padStart(3, '0')}`;
    setPromptCounter(prev => prev + 1);
    
    // Construct the detailed prompt
    const detailedPrompt = {
      name: `A meticulously crafted MISS VOID ${productType} featuring ${specificDetails}.`,
      description: `The design incorporates ${selectedCommon}, showcasing the brand's signature brutalist aesthetic. ${designerInfluences}, this piece exemplifies high-end alternative fashion. Photograph presents ${photographyElements}. ${salt}`,
      primaryMaterial: "premium black leather",
      secondaryMaterial: "",
      influence: designerInfluences,
      hardware: "hardware details",
      silhouette: "architectural silhouette",
      tailoring: "structured tailoring",
      photography: photographyElements,
      serialNumber: salt
    };
    
    return detailedPrompt;
  };

  // Function to handle generating a structured prompt
  const handleGeneratePrompt = () => {
    const generatedPrompt = generateDetailedPrompt();
    setStructuredPrompt(generatedPrompt);
    
    // Also update the text version for compatibility with the API
    const textPrompt = `${generatedPrompt.name} ${generatedPrompt.description}`;
    setPromptText(textPrompt);
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
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate image");
      }
      
      const data = await response.json();
      
      // Set the generated image
      setDesignImage(data.imageUrl);
      setDesignStage('2d');
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
    if (selectedDesignIndex !== null || designImage) {
      setDesignStage('3d');
      setActiveTab('3dVisualization');
    }
  };
  
  const handleProceedToPattern = () => {
    setActiveTab('patternCutter');
    setPatternType(productType);
  };
  
  const handleProceedToManufacturing = () => {
    setActiveTab('manufacturing');
  };
  
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">MISS VOID DESIGN STUDIO</h1>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Create your own MISS VOID designs using our AI-powered design system. Generate unique pieces, visualize them in 3D,
          customize cutting patterns, and bring them to life with our manufacturing partners.
        </p>
        
        {/* Design Tool Tabs */}
        <div className="mb-6 border-b border-gray-700">
          <ul className="flex flex-wrap -mb-px">
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
          </ul>
        </div>
        
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
                    onClick={handleGeneratePrompt}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Auto Generate Description
                  </button>
                </div>
                
                {/* Structured Form Interface */}
                {structuredPrompt.name ? (
                  <div className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-700">
                    <h3 className="text-white text-sm font-semibold mb-3">Detailed Specifications</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Name</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                          value={structuredPrompt.name}
                          onChange={(e) => setStructuredPrompt({...structuredPrompt, name: e.target.value})}
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
                    </div>
                    
                    <div className="mt-3">
                      <label className="block text-xs text-gray-400 mb-1">Photography Style</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                        value={structuredPrompt.photography}
                        onChange={(e) => setStructuredPrompt({...structuredPrompt, photography: e.target.value})}
                      />
                    </div>
                    
                    <div className="mt-3">
                      <label className="block text-xs text-gray-400 mb-1">Additional Description</label>
                      <textarea 
                        className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white text-sm"
                        rows={2}
                        value={structuredPrompt.description}
                        onChange={(e) => setStructuredPrompt({...structuredPrompt, description: e.target.value})}
                      />
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <button 
                        className="bg-gray-700 text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-600 transition text-sm"
                        onClick={() => {
                          // Combine all fields into a coherent prompt
                          const combinedPrompt = `${structuredPrompt.name} 
The design incorporates ${structuredPrompt.primaryMaterial}${structuredPrompt.secondaryMaterial ? ', ' + structuredPrompt.secondaryMaterial : ''}, ${structuredPrompt.silhouette}, ${structuredPrompt.tailoring}${structuredPrompt.hardware ? ', with ' + structuredPrompt.hardware : ''}, showcasing the brand's signature brutalist aesthetic.
${structuredPrompt.influence}, this piece exemplifies high-end alternative fashion.
Photograph presents ${structuredPrompt.photography}. ${structuredPrompt.serialNumber}`;
                          setPromptText(combinedPrompt);
                        }}
                      >
                        Update Prompt
                      </button>
                    </div>
                  </div>
                ) : null}
                
                <textarea
                  id="designPrompt"
                  rows={structuredPrompt.name ? 6 : 4}
                  className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
        )}
        
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
      </div>
    </div>
  );
} 