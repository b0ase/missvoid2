"use client";

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function CustomOrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Custom Orders</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          MISS VOID's custom order service offers a collaborative design experience, resulting in 
          one-of-a-kind pieces tailored precisely to your vision and requirements.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The Custom Order Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-3">1</div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p>
                Begin with an in-depth consultation to discuss your vision, requirements, and preferences. 
                We'll explore design concepts, materials, and practical considerations.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-3">2</div>
              <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
              <p>
                Our team creates detailed sketches and specifications based on your consultation. 
                We'll select materials, develop patterns, and prepare for the fitting stage.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-3">3</div>
              <h3 className="text-xl font-semibold mb-3">Creation & Delivery</h3>
              <p>
                Following approval of the design, our artisans craft your piece with meticulous attention 
                to detail. After final fittings and adjustments, your custom creation is complete.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Custom Order Categories</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Bespoke Garments</h3>
              <p className="mb-4">
                From signature bodysuits and corsets to complete ensembles, our bespoke garments 
                are crafted to your exact measurements and specifications. Each piece is designed 
                to enhance your form while reflecting your personal aesthetic.
              </p>
              <p className="text-sm italic">
                Typical lead time: 8-12 weeks
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Performance & Stage Wear</h3>
              <p className="mb-4">
                Designed for artists, performers, and productions, our stage wear combines 
                visual impact with practical functionality. We consider movement requirements, 
                quick-change needs, and durability under performance conditions.
              </p>
              <p className="text-sm italic">
                Typical lead time: 10-14 weeks
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ceremonial & Special Occasion</h3>
              <p className="mb-4">
                For those seeking alternative formal wear for significant occasions, we create 
                distinctive pieces that honor the moment while expressing individuality. Our 
                non-traditional approach celebrates personal style without compromising elegance.
              </p>
              <p className="text-sm italic">
                Typical lead time: 12-16 weeks
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Begin Your Custom Order Journey</h2>
          <p className="mb-6">
            To discuss your custom order requirements and schedule a consultation, 
            please contact us through our dedicated inquiry form.
          </p>
          <a 
            href="/contact?type=custom" 
            className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 