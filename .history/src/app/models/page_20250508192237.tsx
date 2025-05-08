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
};

// Fictional model data
const modelData: ModelData[] = [
  {
    id: "void-01",
    name: "Cipher",
    image: "/images/miss-void/cipher.jpg",
    specialty: "Architectural Silhouettes",
    description: "Cipher embodies the structural precision central to the MISS VOID aesthetic. With sharp features and a commanding presence, this digital persona specializes in showcasing architectural garments with mathematical precision.",
    conceptDetails: "Created as a 3D model using parametric design principles, Cipher represents the intersection of human form and brutalist architecture."
  },
  {
    id: "void-02",
    name: "Umbra",
    image: "/images/miss-void/umbra.jpg",
    specialty: "Shadow Play & Movement",
    description: "Umbra brings fluidity to rigid structures, demonstrating how MISS VOID pieces interact with motion and light. This digital entity conveys ethereal darkness through every pose and gesture.",
    conceptDetails: "Developed using advanced shadow physics simulations, Umbra examines how light interacts with textile surfaces in motion."
  },
  {
    id: "void-03",
    name: "Vertex",
    image: "/images/miss-void/vertex.jpg",
    specialty: "Hardware Integration",
    description: "Vertex showcases the technical hardware elements of MISS VOID designs. With an emphasis on connection points and mechanical details, this conceptual model highlights the industrial aspects of the collection.",
    conceptDetails: "Rendered with specific focus on metal reflectivity and material tension, Vertex explores the relationship between body and adornment."
  },
  {
    id: "void-04",
    name: "Null",
    image: "/images/miss-void/null.jpg",
    specialty: "Negative Space",
    description: "Null specializes in articulating absence as presence - the spaces between and around MISS VOID garments. This conceptual entity demonstrates how negative space becomes an integral design element.",
    conceptDetails: "Created using void modeling techniques, Null represents the philosophical underpinnings of absence as a design principle."
  },
  {
    id: "void-05",
    name: "Echo",
    image: "/images/miss-void/echo.jpg",
    specialty: "Textile Dynamics",
    description: "Echo embodies the material qualities of MISS VOID designs. This digital persona focuses on texture, drape, and the tactile aspects of conceptual garments, highlighting the contrast between rigid and flexible elements.",
    conceptDetails: "Modeled with advanced fabric simulation algorithms, Echo explores the boundaries between structure and movement."
  },
  {
    id: "void-06",
    name: "Axiom",
    image: "/images/miss-void/axiom.jpg",
    specialty: "Conceptual Presentation",
    description: "Axiom represents the philosophical foundations of MISS VOID aesthetics. Through stark poses and confrontational presentation, this conceptual entity challenges conventional notions of fashion and identity.",
    conceptDetails: "Generated using philosophical parameters translated into visual form, Axiom exists as the embodiment of design theory."
  }
];

export default function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState<ModelData | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">MISS VOID MODELS</h1>
      <h2 className="text-xl italic mb-8 text-center text-gray-500">Conceptual Digital Personas</h2>
      
      <div className="mb-12 max-w-3xl mx-auto bg-gray-900 p-4 rounded-lg border border-gray-800 text-gray-300 text-center">
        <p>
          The MISS VOID Models are digital conceptual entities created to embody and showcase the brand's aesthetic principles. 
          These are not real individuals but artistic representations of the MISS VOID vision.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {modelData.map((model) => (
          <div 
            key={model.id} 
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelectedModel(model)}
          >
            <div className="aspect-[3/4] relative">
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all z-10"></div>
              <div className="w-full h-full bg-gray-800">
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
                  {model.name}
                </div>
                {/* Image with error handling */}
                <img 
                  src={model.image} 
                  alt={`${model.name} - MISS VOID conceptual model`}
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
                  <div className="w-full h-full bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
                      {selectedModel.name}
                    </div>
                    <img 
                      src={selectedModel.image} 
                      alt={`${selectedModel.name} - MISS VOID conceptual model`}
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
                  <h4 className="text-md font-semibold text-white mb-2">Conceptual Profile</h4>
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
                  <p className="text-gray-500 text-xs italic">
                    Note: All MISS VOID models are conceptual digital entities created to showcase the brand aesthetic. 
                    These are not real individuals or endorsements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Conceptual Approach</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800">
          <p className="text-gray-300 mb-4">
            The MISS VOID Models collection represents a post-human approach to fashion presentation. 
            Rather than using conventional models, we've created digital entities that each embody specific design principles 
            central to the MISS VOID aesthetic.
          </p>
          <p className="text-gray-300 mb-4">
            Each conceptual model is designed to showcase particular aspects of the MISS VOID design philosophy - 
            from structural precision and material innovation to the interplay of light and shadow. These digital personas 
            allow us to present garments in their ideal conceptual state.
          </p>
          <p className="text-gray-300">
            This approach aligns with our vision of fashion as architectural form, where the body becomes both canvas and structure, 
            and conventional notions of representation are challenged through digital abstraction.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Link
          href="/studio"
          className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
        >
          Explore Studio Concept
        </Link>
      </div>
    </div>
  );
} 