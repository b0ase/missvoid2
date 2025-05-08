"use client";

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">MISS VOID Franchise Services</h1>
      <h2 className="text-xl italic mb-8 text-center text-gray-500">Design, Manufacture, Distribute</h2>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Franchise Design System</h2>
          <p className="text-gray-300 mb-4">
            The MISS VOID platform enables designers to create, manufacture, and distribute their own branded items
            within the MISS VOID aesthetic framework. As a franchise designer, you retain creative control while
            benefiting from the established MISS VOID brand identity and production capabilities.
          </p>
          <p className="text-gray-300">
            This creates a unique ecosystem where different outlets can carry competing MISS VOID collections,
            each created by different franchise designers but unified by the core MISS VOID aesthetic.
          </p>
        </div>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Design Franchise Concept</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              As a MISS VOID franchise designer, you would have access to our AI-powered design system to create completely custom, 
              branded items that align with the MISS VOID aesthetic while reflecting your unique creative vision.
            </p>
            <p className="mb-4">
              Each design would be manufactured through our production network, utilizing premium materials while 
              maintaining the trademark MISS VOID quality and attention to detail that defines the brand.
            </p>
            <p className="mb-4 font-medium">
              The franchise design process includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to the MISS VOID AI design system to create your unique pieces</li>
              <li>Brand alignment guidance to ensure your designs reflect the MISS VOID aesthetic</li>
              <li>Material selection and sampling from our curated supplier network</li>
              <li>Pattern development and technical specifications</li>
              <li>Production sampling and quality control</li>
              <li>Manufacturing through our established production partners</li>
              <li>Distribution to your specified retail outlets</li>
              <li>Marketing support within the MISS VOID ecosystem</li>
            </ul>
            <p>
              As a conceptual franchise, you would control which outlets receive your specific MISS VOID designs, 
              potentially creating competition between retailers carrying different MISS VOID collections from various franchise designers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Manufacturing Network</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              The MISS VOID manufacturing concept would provide franchise designers with access to a network of production facilities 
              capable of producing items to the exacting standards required for the MISS VOID brand. This would ensure consistency in 
              quality while allowing each designer to express their unique creative vision.
            </p>
            <p className="mb-4">
              In this concept, production runs could range from limited exclusive pieces to larger collections, with the manufacturing 
              process scaled according to the designer's specifications and distribution needs.
            </p>
            <p>
              The platform would support various pricing tiers based on production volume, enabling both exclusive high-end 
              designs and more accessible collections, all maintaining the essential MISS VOID aesthetic and quality standards.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Distribution Services</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Retail Distribution</h3>
              <p>
                The MISS VOID franchise concept would allow designers to distribute their creations to their chosen retailers, 
                creating a dynamic ecosystem where different stores might carry competing MISS VOID collections from different 
                designers. This creates a unique brand diversity within a cohesive aesthetic framework.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Direct-to-Consumer</h3>
              <p>
                Franchise designers could also opt for direct-to-consumer distribution through the MISS VOID platform, 
                with each designer maintaining their own presence within the larger brand ecosystem. This would allow for 
                personalized customer experiences while benefiting from collective brand recognition.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Global Logistics</h3>
              <p>
                The platform would conceptually provide logistics support for worldwide distribution, enabling franchise 
                designers to reach global markets without establishing their own shipping networks. This creates a distributed 
                fashion system with centralized operational support.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Marketplace Integration</h3>
              <p>
                Franchise designs could be integrated with various marketplaces and e-commerce platforms, expanding the 
                reach of each designer's collection while maintaining their distinct identity within the MISS VOID framework.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Presentation Options</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              As a MISS VOID franchise designer, you would have multiple options for presenting your creations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Digital Models:</span> Utilize our AI-generated digital personas to showcase your designs with professional consistency.
              </li>
              <li>
                <span className="font-medium">Personal Modeling:</span> Create your own model profile to personally showcase your designs within the MISS VOID ecosystem.
              </li>
              <li>
                <span className="font-medium">Community Models:</span> Collaborate with other community members who model MISS VOID designs.
              </li>
              <li>
                <span className="font-medium">Custom Presentation:</span> Develop unique presentation approaches that align with your specific design vision.
              </li>
            </ul>
          </div>
        </section>

        <div className="pt-6 text-center">
          <p className="text-gray-600 italic mb-4">Note: MISS VOID is a conceptual design franchise system and does not currently offer these services in reality.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              href="/design" 
              className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
            >
              Try the Design Studio
            </Link>
            <Link 
              href="/models" 
              className="inline-block bg-gray-800 text-white py-3 px-8 rounded hover:bg-gray-700 transition"
            >
              Explore Models Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 