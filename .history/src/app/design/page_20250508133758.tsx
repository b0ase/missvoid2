"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function DesignPage() {
  const [promptText, setPromptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [designImage, setDesignImage] = useState('');
  const [designStage, setDesignStage] = useState('initial'); // initial, 2d, 3d, manufacturing
  
  const handleGenerate = () => {
    // Placeholder for AI generation functionality
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setDesignImage('/images/miss-void/cover.jpg'); // Placeholder image
      setDesignStage('2d');
      setIsGenerating(false);
    }, 2000);
  };
  
  const handleConvertTo3D = () => {
    setIsGenerating(true);
    
    // Simulate 3D conversion delay
    setTimeout(() => {
      // Here we would integrate with Blender, MCP, Hyper3D
      setDesignStage('3d');
      setIsGenerating(false);
    }, 3000);
  };
  
  const handleManufacture = () => {
    setDesignStage('manufacturing');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">MISS VOID DESIGN STUDIO</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8 text-center">
          Create your own MISS VOID designs using our AI-powered design system. Generate unique pieces, visualize them in 3D,
          and bring them to life with our manufacturing partners.
        </p>
        
        <div className="bg-black p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Design Generator</h2>
          
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
          </div>
          
          <button
            className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
            onClick={handleGenerate}
            disabled={isGenerating || !promptText}
          >
            {isGenerating ? 'Generating...' : 'Generate Design'}
          </button>
        </div>
        
        {designStage !== 'initial' && (
          <div className="bg-black p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Design</h2>
            
            <div className="mb-6 flex justify-center">
              {designImage && (
                <div className="relative h-96 w-full">
                  <Image 
                    src={designImage}
                    alt="Generated design"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded"
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
                <button
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
                  onClick={handleManufacture}
                >
                  Manufacture Design
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
        
        <div className="bg-black p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">About MISS VOID Design Studio</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              The MISS VOID Design Studio combines cutting-edge AI technology with our distinctive aesthetic to give you the power to create your own MISS VOID pieces.
            </p>
            
            <p>
              Each design is exclusively branded with the MISS VOID name, while you retain ownership of your unique creation. Our system seamlessly converts your design concept into a 3D model, which is then manufactured to our exacting standards.
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