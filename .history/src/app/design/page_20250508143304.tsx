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
  ]
};

export default function DesignPage() {
  const [promptText, setPromptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [designImage, setDesignImage] = useState('');
  const [designStage, setDesignStage] = useState('initial'); // initial, 2d, 3d, pattern, manufacturing
  const [activeTab, setActiveTab] = useState('generator'); // generator, patternCutter
  const [apiError, setApiError] = useState<string | null>(null);
  const [productType, setProductType] = useState('corset');
  
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
  
  const handleConvertTo3D = () => {
    setIsGenerating(true);
    setIs3DConverting(true);
    setAnimateTransition(true);
    
    // First step - fade out the 2D image
    setTimeout(() => {
      // Second step - show conversion complete and 3D model
      setDesignStage('3d');
      setAnimateTransition(false);
      setIsGenerating(false);
      setIs3DConverting(false);
      
      // Transfer product type to pattern cutter
      setPatternType(productType);
      
      // No longer automatically switch to pattern cutter tab
      // User can now view the 3D model and then choose to go to the pattern cutter
    }, 2000);
  };
  
  const handleCreatePattern = () => {
    setDesignStage('pattern');
    // Set pattern type based on product type
    setPatternType(productType);
  };
  
  const handleManufacture = () => {
    setDesignStage('manufacturing');
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
                  activeTab === 'generator' 
                    ? 'text-white border-white font-medium' 
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setActiveTab('generator')}
              >
                AI Design Generator
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
          </ul>
        </div>
        
        {activeTab === 'generator' && (
          <>
            <div className="bg-black p-6 rounded-lg mb-8 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-white">Design Generator</h2>
              
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
                </select>
                <p className="mt-2 text-sm text-gray-400">
                  Select the type of product you want to generate. This will optimize your design and ensure accurate pattern creation.
                </p>
              </div>
              
              <div className="mb-4">
                <label htmlFor="designPrompt" className="block mb-2 text-gray-300">
                  Describe your MISS VOID design
                </label>
                <textarea
                  id="designPrompt"
                  rows={4}
                  className="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
                  placeholder="E.g., A sculptural black leather corset with architectural elements, inspired by brutalist architecture"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                />
                <p className="mt-2 text-sm text-gray-400">
                  Add specific details about the garment type (corset, harness, dress, etc.), 
                  materials, and design features for best results.
                </p>
              </div>
              
              <button
                className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                onClick={handleGenerate}
                disabled={isGenerating || !promptText}
              >
                {isGenerating ? 'Generating...' : 'Generate Design'}
              </button>
              
              {apiError && (
                <div className="mt-4 p-3 bg-red-900 text-white rounded">
                  <p className="font-semibold">Error:</p>
                  <p>{apiError}</p>
                </div>
              )}
            </div>
            
            {designStage !== 'initial' && (
              <div className="bg-black p-6 rounded-lg mb-8 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4 text-white">Your Design</h2>
                
                <div className="mb-6 flex justify-center">
                  {designImage && designStage === '2d' && (
                    <div className={`relative h-96 w-full transition-opacity duration-1000 ${animateTransition ? 'opacity-30' : 'opacity-100'}`}>
                      <Image 
                        src={designImage}
                        alt="Generated design"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded"
                      />
                      {is3DConverting && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin"></div>
                          <p className="mt-4 text-white font-semibold">Converting to 3D...</p>
                          <p className="text-sm text-gray-400 mt-2">Generating mesh topology</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {designStage === '3d' && (
                    <div className="w-full">
                      <h3 className="text-lg font-semibold mb-2 text-white">3D Model Preview</h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Interactive 3D model of your {productType}. Drag to rotate, scroll to zoom.
                      </p>
                      <ThreeDModelViewer 
                        productType={productType} 
                        measurements={measurements}
                        designImage={designImage}
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  {designStage === '2d' && (
                    <button
                      className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                      onClick={handleConvertTo3D}
                      disabled={isGenerating}
                    >
                      {isGenerating ? 'Processing...' : 'Convert to 3D Model'}
                    </button>
                  )}
                  
                  {designStage === '3d' && (
                    <>
                      <button
                        className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                        onClick={handleCreatePattern}
                      >
                        Create Pattern
                      </button>
                      <button
                        className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                        onClick={handleManufacture}
                      >
                        Manufacture Directly
                      </button>
                    </>
                  )}
                  
                  {designStage === 'pattern' && (
                    <button
                      className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                      onClick={handleManufacture}
                    >
                      Proceed to Manufacturing
                    </button>
                  )}
                  
                  {designStage === 'manufacturing' && (
                    <div className="w-full text-center text-white">
                      <p className="mb-4">Your design is ready for manufacturing!</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="border border-gray-600 p-4 rounded">
                          <h3 className="font-semibold mb-2">Single Piece</h3>
                          <p className="mb-2">Manufacturing and shipping for one custom piece</p>
                          <p className="text-xl font-bold mb-4">$599</p>
                          <button className="bg-white text-black py-2 px-4 rounded w-full">Order Now</button>
                        </div>
                        
                        <div className="border border-gray-600 p-4 rounded bg-gray-900">
                          <h3 className="font-semibold mb-2">Small Batch (10 pieces)</h3>
                          <p className="mb-2">Perfect for boutique offerings</p>
                          <p className="text-xl font-bold mb-4">$2,999</p>
                          <button className="bg-white text-black py-2 px-4 rounded w-full">Order Now</button>
                        </div>
                        
                        <div className="border border-gray-600 p-4 rounded">
                          <h3 className="font-semibold mb-2">Production Run</h3>
                          <p className="mb-2">100+ pieces with wholesale pricing</p>
                          <p className="text-xl font-bold mb-4">Contact Sales</p>
                          <button className="bg-white text-black py-2 px-4 rounded w-full">Get Quote</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
        
        {activeTab === 'patternCutter' && (
          <div className="bg-black p-6 rounded-lg mb-8 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Pattern Cutter Studio</h2>
            
            {/* Display the generated design if available */}
            {designImage && designStage !== 'initial' ? (
              <div className="mb-6">
                <h3 className="font-semibold text-white mb-2">Your Generated Design</h3>
                <div className="bg-gray-900 p-2 rounded flex justify-center mb-4">
                  <div className="relative h-48 w-48">
                    <Image 
                      src={designImage}
                      alt="Generated design"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">Creating pattern for {productType} design</p>
              </div>
            ) : (
              <div className="mb-6 p-4 bg-gray-900 rounded border border-gray-700">
                <p className="text-gray-300">
                  No design has been generated yet. For best results, 
                  <button 
                    onClick={() => setActiveTab('generator')} 
                    className="text-white underline ml-1 hover:text-gray-300"
                  >
                    create a design
                  </button> first to get a pattern matched to your specific design.
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Controls Panel */}
              <div className="md:col-span-1 bg-gray-900 p-4 rounded border border-gray-700">
                <div className="mb-4">
                  <label className="block mb-2 text-gray-300">Pattern Type</label>
                  <select 
                    className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                    value={patternType}
                    onChange={(e) => setPatternType(e.target.value)}
                  >
                    <option value="corset">Corset</option>
                    <option value="harness">Harness</option>
                    <option value="bodysuit">Bodysuit</option>
                    <option value="mask">Mask</option>
                    <option value="top">Top</option>
                    <option value="skirt">Skirt</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-white mb-2">Measurements (cm)</h3>
                  
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm text-gray-300">Bust</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        value={measurements.bust}
                        onChange={(e) => handleMeasurementChange('bust', parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-300">Waist</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        value={measurements.waist}
                        onChange={(e) => handleMeasurementChange('waist', parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-300">Hips</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                        value={measurements.hips}
                        onChange={(e) => handleMeasurementChange('hips', parseInt(e.target.value))}
                      />
                    </div>
                    
                    {patternType === 'corset' && (
                      <>
                        <div>
                          <label className="block text-sm text-gray-300">Center Front Length</label>
                          <input 
                            type="number" 
                            className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                            value={measurements.centerFrontLength}
                            onChange={(e) => handleMeasurementChange('centerFrontLength', parseInt(e.target.value))}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-white mb-2">Customizations</h3>
                  
                  {patternType === 'corset' && (
                    <div className="space-y-2">
                      <div>
                        <label className="block text-sm text-gray-300">Boning</label>
                        <select 
                          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                          value={patternCustomizations.boning}
                          onChange={(e) => handleCustomizationChange('boning', e.target.value)}
                        >
                          <option value="minimal">Minimal</option>
                          <option value="standard">Standard</option>
                          <option value="heavy">Heavy</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-300">Cut Style</label>
                        <select 
                          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                          value={patternCustomizations.cutStyle}
                          onChange={(e) => handleCustomizationChange('cutStyle', e.target.value)}
                        >
                          <option value="classic">Classic</option>
                          <option value="underbust">Underbust</option>
                          <option value="overbust">Overbust</option>
                          <option value="cincher">Cincher</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-300">Panel Count</label>
                        <select 
                          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
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
                        <label className="block text-sm text-gray-300">Closure Type</label>
                        <select 
                          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                          value={patternCustomizations.closureType}
                          onChange={(e) => handleCustomizationChange('closureType', e.target.value)}
                        >
                          <option value="back">Back Lacing</option>
                          <option value="front">Front Busk</option>
                          <option value="side">Side Zip</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {patternType === 'harness' && (
                    <div className="space-y-2">
                      <div>
                        <label className="block text-sm text-gray-300">Strap Width</label>
                        <select 
                          className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
                          value={patternCustomizations.sweepWidth}
                          onChange={(e) => handleCustomizationChange('sweepWidth', e.target.value)}
                        >
                          <option value="narrow">Narrow (1.5 cm)</option>
                          <option value="standard">Standard (2.5 cm)</option>
                          <option value="wide">Wide (4 cm)</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Export buttons */}
                <div className="space-y-2 mt-8">
                  <button className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition">
                    Download PDF Pattern
                  </button>
                  <button 
                    className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                    onClick={handleManufacture}
                  >
                    Proceed to Manufacturing
                  </button>
                </div>
              </div>
              
              {/* Pattern Preview */}
              <div className="md:col-span-2 bg-white p-4 rounded">
                <h3 className="font-semibold text-black mb-4">Pattern Preview</h3>
                
                <div className="bg-gray-100 rounded flex justify-center items-center p-2 min-h-[500px] relative">
                  <canvas 
                    ref={canvasRef} 
                    width={800} 
                    height={600} 
                    className="border border-gray-300 bg-white shadow-sm"
                  ></canvas>
                </div>
                
                <div className="mt-4 text-sm text-gray-700">
                  <p>This is a digital pattern based on your measurements and customizations. The pattern includes seam allowances and notches for accurate cutting and assembly.</p>
                  <p className="mt-2">When manufactured, our expert pattern makers will refine this further based on material properties and construction techniques.</p>
                </div>
              </div>
            </div>
          </div>
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