"use client";

import Image from 'next/image';
import Link from 'next/link';

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
              MISS VOID is a conceptual fashion franchise system where designers can create and distribute their own branded 
              items under the MISS VOID aesthetic umbrella. The platform represents a vision of fashion that challenges 
              conventional boundaries through a decentralized approach to luxury design.
            </p>
            <p className="mb-4">
              Conceived as a digital-first fashion ecosystem, MISS VOID enables franchise designers to create and 
              manufacture items that embrace both the dark elegance of fetish culture and the precision of architectural design.
            </p>
            <p>
              Each franchise designer maintains creative control over their specific MISS VOID designs while benefiting 
              from the brand's established aesthetic and manufacturing capabilities.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Franchise Philosophy</h2>
          <p className="mb-4">
            The MISS VOID concept is built on the belief that fashion is a powerful form of self-expression that 
            should not be limited to a single creative voice. Our franchise system allows multiple designers to 
            contribute to and benefit from the MISS VOID brand while maintaining their individual identities.
          </p>
          <p className="mb-4">
            Drawing inspiration from BDSM culture, architectural forms, and historical costume, the MISS VOID aesthetic provides 
            a cohesive framework within which franchise designers can explore unique expressions while remaining part of the 
            larger MISS VOID identity.
          </p>
          <p>
            This approach creates a dynamic ecosystem where different outlets can carry competing MISS VOID designs, 
            each created by different franchise designers but unified by the core MISS VOID aesthetic principles.
          </p>
        </div>

        <div className="mb-12 bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">The MISS VOID Franchise System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">For Designers</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5">
                <li>Create your own MISS VOID designs using our AI-powered design system</li>
                <li>Manufacture and distribute your designs through the MISS VOID production network</li>
                <li>Retain creative control while benefiting from established brand aesthetics</li>
                <li>Build your own presence as a MISS VOID franchise designer</li>
              </ul>
            </div>
            
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">For Retailers</h3>
              <ul className="text-gray-300 space-y-2 list-disc pl-5">
                <li>Access a diverse range of MISS VOID designs from multiple franchise designers</li>
                <li>Stock competing MISS VOID collections that appeal to different market segments</li>
                <li>Benefit from the consistent MISS VOID aesthetic while offering variety</li>
                <li>Participate in a distributed luxury fashion ecosystem</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <Link href="/contact" className="inline-block bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition w-full md:w-2/3 mx-auto font-medium text-lg">
                Become a Franchise Retailer
              </Link>
            </div>
            
            <Link href="/design" className="inline-block bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition mt-6 w-full md:w-2/3 mx-auto font-medium text-lg">
              Become a Franchise Designer
            </Link>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 mb-2 opacity-80">
              <span className="text-gray-500 text-xs uppercase tracking-wide">Additional partnerships:</span>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="text-xs inline-block bg-transparent border border-gray-800 text-gray-400 py-1 px-3 rounded hover:bg-gray-900 hover:text-gray-300 transition">
                  Manufacturer
                </Link>
                <Link href="/contact" className="text-xs inline-block bg-transparent border border-gray-800 text-gray-400 py-1 px-3 rounded hover:bg-gray-900 hover:text-gray-300 transition">
                  Distributor
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Digital Atelier</h2>
          <p className="mb-4">
            While MISS VOID presents itself as London-based, it exists primarily in the digital realm as a distributed design system. 
            The concept explores how a global luxury brand might operate through multiple franchise designers, with AI-generated 
            designs that push the boundaries of what's possible in fashion.
          </p>
          <p className="mb-4">
            The MISS VOID portfolio showcases designs from various franchise designers that could be featured in international 
            fashion publications, worn by celebrities, or displayed in exhibitions celebrating the intersection of fashion and art.
          </p>
          <p>
            Though conceptual in nature, the MISS VOID franchise system remains committed to core values that would be essential 
            in a real-world brand: exceptional craftsmanship, ethical production concepts, and designs that honor individuality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">1. Design</h3>
              <p className="text-gray-300">
                Use our AI-powered design system to create your unique MISS VOID pieces that align with the brand's 
                aesthetic principles while reflecting your personal creative vision.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">2. Manufacture</h3>
              <p className="text-gray-300">
                Once your designs are finalized, they can be manufactured through the MISS VOID production network, 
                ensuring consistent quality while allowing for your specific design requirements.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">3. Distribute</h3>
              <p className="text-gray-300">
                Distribute your MISS VOID designs to your chosen outlets, creating competition between different 
                MISS VOID franchise collections in the marketplace.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">4. Present</h3>
              <p className="text-gray-300">
                Showcase your designs through your own modeling profile or utilize our digital models to present 
                your creations to the world.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/design" className="inline-block bg-white text-black py-2 px-8 rounded hover:bg-gray-200 transition">
              Start Creating
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 