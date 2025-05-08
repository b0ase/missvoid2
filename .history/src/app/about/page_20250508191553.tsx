"use client";

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About MISS VOID</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 relative aspect-square">
            <Image 
              src="/images/miss-void/cover.jpg" 
              alt="MISS VOID concept image" 
              fill 
              className="object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">The Concept</h2>
            <p className="mb-4">
              MISS VOID is a conceptual fashion brand exploring the intersection of avant-garde design and fetish aesthetics. The brand represents a vision of fashion that challenges conventional boundaries and celebrates the beauty of alternative expression.
            </p>
            <p className="mb-4">
              Conceived as a digital-first fashion concept, MISS VOID showcases what an alternative luxury brand might look like if it embraced both the dark elegance of fetish culture and the precision of architectural design.
            </p>
            <p>
              Each piece in the MISS VOID collection is a digital creation that embodies meticulous attention to detail, innovative material concepts, and a strong design philosophy centered around empowerment through aesthetic expression.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Philosophy & Approach</h2>
          <p className="mb-4">
            The MISS VOID concept is built on the belief that fashion is a powerful form of self-expression. Our designs exist at the intersection of fashion, art, and identity, challenging mainstream conventions while presenting a vision of what high-quality alternative fashion could be.
          </p>
          <p className="mb-4">
            Drawing inspiration from BDSM culture, architectural forms, and historical costume, the MISS VOID aesthetic celebrates the beauty of contrast—strength and vulnerability, restriction and freedom, darkness and light.
          </p>
          <p>
            Each conceptual garment is designed with intention, imagined to transform not just how the wearer might appear, but how they could feel and move through the world.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Digital Atelier</h2>
          <p className="mb-4">
            While MISS VOID is presented as London-based, it exists primarily in the digital realm. The concept explores how a global luxury brand might operate, with virtual showrooms and AI-generated designs that push the boundaries of what's possible in fashion.
          </p>
          <p className="mb-4">
            The MISS VOID portfolio includes designs that could theoretically be featured in international fashion publications, worn by celebrities, or showcased in exhibitions celebrating the intersection of fashion and art.
          </p>
          <p>
            Though conceptual in nature, MISS VOID remains committed to core values that would be essential in a real-world counterpart: exceptional craftsmanship, ethical production concepts, and designs that honor individuality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Conceptual Origins</h2>
          <p className="mb-4">
            The MISS VOID concept imagines a brand founded by a visionary designer with a background in fashion design, who developed a distinctive aesthetic merging traditional tailoring with unconventional materials and fetish-inspired elements.
          </p>
          <p className="mb-4">
            This fictional narrative extends to include collaborators with backgrounds in fine art and specialized craftsmanship, bringing technical expertise in leather, metal, and other materials to the conceptual designs.
          </p>
          <p>
            As a design exercise, MISS VOID demonstrates how a conceptual brand could build respect in both mainstream fashion circles and alternative communities, while pushing boundaries of conventional design.
          </p>
        </div>
      </div>
    </div>
  );
} 