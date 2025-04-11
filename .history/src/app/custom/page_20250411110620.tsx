"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function CustomOrders() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Custom Orders</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            At Miss Void, each custom creation begins with your vision and culminates in a piece uniquely yours.
            Our bespoke process ensures that every detail is thoughtfully considered and precisely executed.
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">The Bespoke Journey</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Initial Consultation</h3>
                </div>
                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                  <p className="mb-3">
                    Your journey begins with an in-depth consultation with our design team, either in-person at our London atelier or virtually for international clients.
                  </p>
                  <p className="mb-3">
                    We discuss your vision, preferences, intended use, and any specific requirements. During this conversation, we explore inspirations, design elements, materials, and the practical considerations that will inform the creation process.
                  </p>
                  <p>
                    For complex commissions, we may recommend booking a longer session to fully explore possibilities and ensure perfect alignment of vision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Design Development</h3>
                </div>
                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                  <p className="mb-3">
                    Following your consultation, our design team creates detailed sketches and mood boards that capture the essence of your commission.
                  </p>
                  <p className="mb-3">
                    We source material samples tailored to your design, allowing you to experience textures, colors, and finishes before making final decisions.
                  </p>
                  <p>
                    This stage involves close collaboration and may require several iterations to perfect the concept. We provide a detailed quote and timeline based on the finalized design.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Measurements & Pattern Making</h3>
                </div>
                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                  <p className="mb-3">
                    Precision is paramount. We take comprehensive measurements to ensure your piece fits perfectly. For local clients, this happens in our London studio; for international clients, we can either schedule measurements during our global visits or provide detailed guidance for self-measurement.
                  </p>
                  <p>
                    Our pattern makers then create custom patterns specifically for your body and design, laying the foundation for the construction process.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Crafting & Construction</h3>
                </div>
                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                  <p className="mb-3">
                    This is where your piece comes to life. Our skilled artisans meticulously cut, assemble, and finish each element with extraordinary attention to detail.
                  </p>
                  <p className="mb-3">
                    Depending on the complexity, this phase typically takes 4-8 weeks. For pieces involving specialized techniques or materials, we may create a toile (prototype) to confirm fit and design elements before working with the final materials.
                  </p>
                  <p>
                    Throughout this process, we provide updates and may request intermediate fittings for complex pieces.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Final Fitting & Completion</h3>
                </div>
                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                  <p className="mb-3">
                    The culmination of the process is the final fitting, where you experience your custom creation for the first time. We assess fit, comfort, movement, and overall effect, making any necessary adjustments.
                  </p>
                  <p className="mb-3">
                    Once perfect, your piece receives its finishing touches—hardware is secured, edges are perfected, and each element is inspected to ensure it meets our exacting standards.
                  </p>
                  <p>
                    We provide comprehensive care instructions specific to your garment's materials, ensuring its longevity and continued beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Investment & Timing</h2>
            <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <p className="mb-4">
                Each Miss Void creation is unique, with pricing reflecting the complexity of design, materials selected, and time required for construction. As a general guide:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Bespoke accessories begin at £500</li>
                <li>Custom garments begin at £2,000</li>
                <li>Complete ensembles begin at £5,000</li>
                <li>Complex ceremonial or performance pieces begin at £8,000</li>
              </ul>
              <p className="mb-4">
                A 50% deposit is required to begin the creation process, with the balance due before final delivery.
              </p>
              <p>
                Typical timelines range from 8-12 weeks for most pieces, though complex creations may require longer. Rush services are available for certain items with a premium fee, subject to our current production schedule.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
            >
              Begin Your Custom Journey
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 