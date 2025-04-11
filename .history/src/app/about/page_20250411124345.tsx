"use client";

import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About MISS VOID</h1>
      
      <div className="max-w-3xl mx-auto prose prose-lg">
        <p>
          MISS VOID is a London-based fashion house specializing in fetish and BDSM-inspired designs. 
          With over two decades of experience, we have established ourselves as pioneers in the 
          intersection of haute couture and alternative fashion.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
        <p>
          At MISS VOID, we believe in the transformative power of clothing. Our pieces are designed 
          to empower, to challenge conventional boundaries, and to celebrate the beauty of 
          restriction and release. Each garment is meticulously crafted to provide both aesthetic 
          impact and comfortable wearability.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Craft</h2>
        <p>
          We work with only the finest materials, sourced globally from ethical suppliers. 
          Every piece is hand-crafted in our London atelier by skilled artisans who share our 
          passion for precision and detail. From pattern-cutting to the final stitch, we maintain 
          exacting standards throughout the process.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Legacy</h2>
        <p>
          Founded in the early 2000s, MISS VOID has grown from a small experimental studio into 
          an influential name in alternative fashion. Our designs have appeared in major publications, 
          on stages worldwide, and in private collections of discerning clients who value both 
          our artistic vision and uncompromising quality.
        </p>
      </div>
    </div>
  );
} 