"use client";

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          MISS VOID offers a range of specialized services, from ready-to-wear collections to bespoke 
          commissions. Each service reflects our commitment to exceptional craftsmanship and 
          distinctive aesthetic.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready-to-Wear Collections</h2>
            <p className="mb-4">
              Our seasonal collections offer signature MISS VOID pieces in standard sizing, 
              available for immediate purchase. These collections showcase our current 
              design direction while maintaining our core aesthetic.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Multiple sizes available</li>
              <li>Core pieces from each collection</li>
              <li>Signature hardware and finishes</li>
              <li>Available online and through select retailers</li>
            </ul>
            <p className="font-semibold">
              Price Range: £800-£3,500
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Bespoke Commissions</h2>
            <p className="mb-4">
              For the ultimate MISS VOID experience, our bespoke service offers 
              fully customized pieces designed in collaboration with the client. 
              Each commission begins with a personal consultation and culminates in 
              a one-of-a-kind creation.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Personal measurements and fitting</li>
              <li>Material selection and customization</li>
              <li>Design adaptations and unique elements</li>
              <li>Multiple fittings throughout the process</li>
            </ul>
            <p className="font-semibold">
              Price Range: From £5,000
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Collaborative Projects</h2>
            <p className="mb-4">
              MISS VOID regularly collaborates with performers, photographers, and artists 
              on special projects. These collaborations may include stage costumes, 
              editorial pieces, or exhibition works.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Artistic and performance wear</li>
              <li>Editorial and photographic styling</li>
              <li>Exhibition and installation pieces</li>
              <li>Industry consultation</li>
            </ul>
            <p className="font-semibold">
              Contact for pricing and availability
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Consultations & Fittings</h2>
            <p className="mb-4">
              Our London atelier welcomes clients for private consultations and fittings. 
              We also conduct international fitting tours throughout the year, visiting 
              major cities to meet with clients globally.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>London atelier appointments</li>
              <li>International fitting tours</li>
              <li>Virtual consultations</li>
              <li>After-purchase adjustments and care</li>
            </ul>
            <p className="font-semibold">
              By appointment only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 