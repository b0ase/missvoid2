"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">MISS VOID</Link>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/custom" className="hover:text-gray-300 transition">Custom Orders</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Miss Void</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 relative aspect-square">
              <Image 
                src="/images/miss-void/cover.jpg" 
                alt="Miss Void portrait" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                For over two decades, Miss Void has been at the forefront of avant-garde fashion, blending the worlds of high fashion and fetish wear into distinctive pieces that challenge conventional boundaries.
              </p>
              <p className="mb-4">
                Founded in London in 2003 by designer Miss Void and her husband, our atelier has grown from a small workshop in East London to an internationally recognized brand catering to discerning clients across the globe.
              </p>
              <p>
                Each piece is meticulously crafted, combining traditional techniques with innovative materials to create wearable art that empowers the wearer and celebrates the beauty of alternative aesthetics.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Philosophy & Approach</h2>
            <p className="mb-4">
              At Miss Void, we believe that fashion is a powerful form of self-expression. Our designs exist at the intersection of fashion, art, and identity, challenging mainstream conventions while maintaining the highest standards of craftsmanship.
            </p>
            <p className="mb-4">
              We draw inspiration from BDSM culture, architectural forms, and historical costume, creating pieces that are both provocative and refined. Our work celebrates the beauty of contrast—strength and vulnerability, restriction and freedom, darkness and light.
            </p>
            <p>
              Every garment is created with intention, designed to transform not just how the wearer appears, but how they feel and move through the world.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
            <p className="mb-4">
              While we are proudly London-based, our clientele spans the globe. Miss Void regularly conducts fittings and consultations in Paris, New York, Dubai, and Shanghai, bringing our unique aesthetic to fashion-forward individuals worldwide.
            </p>
            <p className="mb-4">
              Our pieces have been featured in international fashion publications, worn by celebrities and performers, and showcased in exhibitions celebrating the intersection of fashion and art.
            </p>
            <p>
              Despite our growth, we remain committed to our core values: exceptional craftsmanship, ethical production, and designs that honor the individuality of each client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">The Founders</h2>
            <p className="mb-4">
              Miss Void began her career studying fashion design at Central Saint Martins, where she developed her distinctive aesthetic merging traditional tailoring with unconventional materials and fetish-inspired elements.
            </p>
            <p className="mb-4">
              Her husband, with a background in fine art and leather craftsmanship, joined the venture in 2005, bringing technical expertise in working with leather, metal, and other specialized materials.
            </p>
            <p>
              Together, they have built Miss Void into a respected name in both mainstream fashion circles and alternative communities, known for pushing boundaries while maintaining impeccable quality and fit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 