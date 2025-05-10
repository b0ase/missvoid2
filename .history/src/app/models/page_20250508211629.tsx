"use client";

import { useState } from 'react';
import Link from 'next/link';

// Define a type for model data
type ModelData = {
  id: string;
  name: string;
  image: string;
  specialty: string;
  description: string;
  conceptDetails: string;
  isAI: boolean;
};

// Fictional model data
const modelData: ModelData[] = [
  {
    id: "void-01",
    name: "Cipher",
    image: "/images/miss-void/cipher.jpg",
    specialty: "Architectural Silhouettes",
    description: "Cipher embodies the structural precision central to the MISS VOID aesthetic. With sharp features and a commanding presence, this digital persona specializes in showcasing architectural garments with mathematical precision.",
    conceptDetails: "Created as a 3D model using parametric design principles, Cipher represents the intersection of human form and brutalist architecture.",
    isAI: true
  },
  {
    id: "void-02",
    name: "Umbra",
    image: "/images/miss-void/umbra.jpg",
    specialty: "Shadow Play & Movement",
    description: "Umbra brings fluidity to rigid structures, demonstrating how MISS VOID pieces interact with motion and light. This digital entity conveys ethereal darkness through every pose and gesture.",
    conceptDetails: "Developed using advanced shadow physics simulations, Umbra examines how light interacts with textile surfaces in motion.",
    isAI: true
  },
  {
    id: "void-03",
    name: "Vertex",
    image: "/images/miss-void/vertex.jpg",
    specialty: "Hardware Integration",
    description: "Vertex showcases the technical hardware elements of MISS VOID designs. With an emphasis on connection points and mechanical details, this conceptual model highlights the industrial aspects of the collection.",
    conceptDetails: "Rendered with specific focus on metal reflectivity and material tension, Vertex explores the relationship between body and adornment.",
    isAI: true
  },
  {
    id: "void-04",
    name: "Null",
    image: "/images/miss-void/null.jpg",
    specialty: "Negative Space",
    description: "Null specializes in articulating absence as presence - the spaces between and around MISS VOID garments. This conceptual entity demonstrates how negative space becomes an integral design element.",
    conceptDetails: "Created using void modeling techniques, Null represents the philosophical underpinnings of absence as a design principle.",
    isAI: true
  },
  {
    id: "void-05",
    name: "Echo",
    image: "/images/miss-void/echo.jpg",
    specialty: "Textile Dynamics",
    description: "Echo embodies the material qualities of MISS VOID designs. This digital persona focuses on texture, drape, and the tactile aspects of conceptual garments, highlighting the contrast between rigid and flexible elements.",
    conceptDetails: "Modeled with advanced fabric simulation algorithms, Echo explores the boundaries between structure and movement.",
    isAI: true
  },
  {
    id: "void-06",
    name: "Axiom",
    image: "/images/miss-void/axiom.jpg",
    specialty: "Conceptual Presentation",
    description: "Axiom represents the philosophical foundations of MISS VOID aesthetics. Through stark poses and confrontational presentation, this conceptual entity challenges conventional notions of fashion and identity.",
    conceptDetails: "Generated using philosophical parameters translated into visual form, Axiom exists as the embodiment of design theory.",
    isAI: true
  },
  {
    id: "void-07",
    name: "Corsia",
    image: "/images/generated-designs/corset_1746711094454.png",
    specialty: "Structured Elegance",
    description: "Corsia specializes in presenting structured garments with an emphasis on precise silhouettes. This digital model showcases the haute couture elements of MISS VOID with graceful formality.",
    conceptDetails: "Developed to highlight the interplay between rigid structure and organic form, Corsia brings architectural precision to life.",
    isAI: true
  },
  {
    id: "void-08",
    name: "Vesper",
    image: "/images/generated-designs/dress_1746717644511.png",
    specialty: "Avant-Garde Couture",
    description: "Vesper embodies the future of fashion with an emphasis on innovative garment construction. With a commanding presence, this digital model brings experimental designs to life with striking poise.",
    conceptDetails: "Created with advanced rendering techniques to showcase complex textures and unconventional materials within the MISS VOID aesthetic.",
    isAI: true
  },
  {
    id: "void-09",
    name: "Obsidian",
    image: "/images/generated-designs/jacket_1746723029539.png",
    specialty: "Tailored Architecture",
    description: "Obsidian represents the pinnacle of structured outerwear and tailored elements. This digital persona showcases the sharp lines and precise construction that define MISS VOID's architectural approach.",
    conceptDetails: "Engineered to highlight the interplay between bold structural elements and refined tailoring techniques in contemporary design.",
    isAI: true
  }
];

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState<ModelData | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'ai' | 'community'>('all');

  // Filter models based on selection
  const filteredModels = modelData.filter(model => {
    if (filterType === 'all') return true;
    if (filterType === 'ai') return model.isAI;
    if (filterType === 'community') return !model.isAI;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">MISS VOID MODELS</h1>
      <h2 className="text-xl italic mb-8 text-center text-gray-500">Digital Personas & Community Ambassadors</h2>
      
      <div className="mb-12 max-w-3xl mx-auto bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300 text-center">
        <p className="mb-3">
          The MISS VOID Models platform features both AI-generated conceptual personas and real community members 
          who model designs from their own MISS VOID franchise collections.
        </p>
        <p>
          As a MISS VOID design franchisee, you can showcase your creations through your own modeling profile or feature 
          your designs on our digital models.
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded ${filterType === 'all' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            All Models
          </button>
          <button 
            onClick={() => setFilterType('ai')}
            className={`px-4 py-2 rounded ${filterType === 'ai' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Digital Personas
          </button>
          <button 
            onClick={() => setFilterType('community')}
            className={`px-4 py-2 rounded ${filterType === 'community' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Community Models
          </button>
        </div>
        
        <button 
          onClick={() => setShowJoinModal(true)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Create Model Profile
        </button>
      </div>
      
      {filteredModels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredModels.map((model) => (
            <div 
              key={model.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedModel(model)}
            >
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all z-10"></div>
                {model.isAI && (
                  <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full z-20">
                    Digital
                  </div>
                )}
                <div className="w-full h-full bg-gray-800">
                  {/* Fallback if image doesn't load */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
                    {model.name}
                  </div>
                  {/* Image with error handling */}
                  <img 
                    src={model.image} 
                    alt={`${model.name} - MISS VOID ${model.isAI ? 'digital' : 'community'} model`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
                <p className="text-sm text-gray-400 mb-3">Specialty: {model.specialty}</p>
                <p className="text-sm text-gray-300 line-clamp-3">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-900 rounded-lg mb-16">
          <p className="text-gray-300 mb-4">No models found matching your filter.</p>
          <button 
            onClick={() => setFilterType('all')}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            View All Models
          </button>
        </div>
      )}
      
      {/* Model Detail Modal */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl relative">
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-10"
              onClick={() => setSelectedModel(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-black">
                <div className="aspect-[3/4] relative">
                  {selectedModel.isAI && (
                    <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-2 py-1 rounded-full z-20">
                      Digital Persona
                    </div>
                  )}
                  <div className="w-full h-full bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
                      {selectedModel.name}
                    </div>
                    <img 
                      src={selectedModel.image} 
                      alt={`${selectedModel.name} - MISS VOID ${selectedModel.isAI ? 'digital' : 'community'} model`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedModel.name}</h2>
                <h3 className="text-lg font-semibold text-gray-400 mb-4">Specialty: {selectedModel.specialty}</h3>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-white mb-2">{selectedModel.isAI ? 'Conceptual Profile' : 'Model Profile'}</h4>
                  <p className="text-gray-300 mb-4">{selectedModel.description}</p>
                  <p className="text-gray-400 text-sm italic">{selectedModel.conceptDetails}</p>
                </div>
                
                <div className="border-t border-gray-800 pt-6">
                  <h4 className="text-md font-semibold text-white mb-2">Related Collections</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm transition">
                      View in Portfolio
                    </Link>
                    <Link href="/design" className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm transition">
                      Design Studio
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800">
                  {selectedModel.isAI ? (
                    <p className="text-gray-500 text-xs italic">
                      This is a digital conceptual entity created to showcase the MISS VOID aesthetic.
                      You can use this digital model to showcase your MISS VOID franchise designs.
                    </p>
                  ) : (
                    <p className="text-gray-500 text-xs italic">
                      This is a community model showcasing their own MISS VOID franchise designs.
                      Models retain all rights to their photos while licensing them for display within the MISS VOID ecosystem.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Create Model Profile Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 max-w-xl w-full rounded-lg overflow-hidden shadow-2xl relative p-6">
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition z-10"
              onClick={() => setShowJoinModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-4">Join MISS VOID Models Platform</h2>
            <p className="text-gray-300 mb-6">
              Create your modeling profile to showcase your MISS VOID franchise designs. As a model and 
              designer, you'll be able to display your creations and build your presence within the MISS VOID ecosystem.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Name/Persona</label>
                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white" />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Design Specialty</label>
                <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white" />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Profile Description</label>
                <textarea className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white h-24"></textarea>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Profile Image</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-700 rounded hover:bg-gray-800 transition-all">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-500">Upload an image</p>
                    </div>
                    <input type="file" className="opacity-0" />
                  </label>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <button type="button" className="bg-white text-black py-2 px-8 rounded hover:bg-gray-200 transition">
                  Create Profile
                </button>
              </div>
              
              <p className="text-gray-500 text-xs text-center pt-4">
                By creating a profile, you agree to showcase your MISS VOID franchise designs and 
                allow your images to appear in the MISS VOID ecosystem while retaining your rights.
              </p>
            </form>
          </div>
        </div>
      )}
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">The MISS VOID Modeling Platform</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800">
          <p className="text-gray-300 mb-4">
            The MISS VOID Models platform represents a unique approach to fashion presentation, combining digital 
            conceptual entities with real community models who are also MISS VOID design franchisees.
          </p>
          <p className="text-gray-300 mb-4">
            As a franchisee, you can both create your own MISS VOID designs using our design system and model your 
            creations through your own profile. This allows each designer to build their own presence within the 
            MISS VOID ecosystem while maintaining the distinctive brand aesthetic.
          </p>
          <p className="text-gray-300 mb-4">
            Our digital personas are available for all franchisees to showcase their designs, providing a consistent 
            and professional presentation option for those who prefer not to model their own creations.
          </p>
          <p className="text-gray-300">
            This approach allows different outlets and designers to create and present competing MISS VOID items, 
            fostering a diverse ecosystem of designs within the unified MISS VOID aesthetic framework.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Link
          href="/design"
          className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
        >
          Start Designing Your Collection
        </Link>
      </div>
    </div>
  );
} 