"use client";

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Conceptual Services</h1>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Bespoke Couture Concept</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Our signature conceptual service would offer completely custom, made-to-measure garments designed exclusively for individual clients. This process would begin with an in-depth consultation to understand vision, preferences, and specific requirements.
            </p>
            <p className="mb-4">
              In this theoretical atelier, each piece would be meticulously hand-crafted in London, utilizing premium materials such as Italian leather, Japanese latex, French lace, and custom hardware. Multiple fittings would ensure perfect fit and comfort.
            </p>
            <p className="mb-4 font-medium">
              The bespoke journey would include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Initial design consultation (in-person or virtual)</li>
              <li>Mood board and concept development</li>
              <li>Material selection and sampling</li>
              <li>Detailed measurements and body mapping</li>
              <li>Multiple fittings throughout the process</li>
              <li>Handcrafted production by expert artisans</li>
              <li>Final fitting and adjustments</li>
              <li>Aftercare advice and maintenance instructions</li>
            </ul>
            <p>
              In this concept, turnaround time for bespoke pieces would typically range from 8-12 weeks depending on complexity. The fictional brand could arrange fittings in fashion capitals such as Paris, New York, Dubai, and Shanghai during scheduled visits.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Ready-to-Wear Collection Concept</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              For those who would desire the MISS VOID aesthetic with a shorter wait time, our conceptual brand would offer a carefully curated ready-to-wear collection that embodies the distinctive style. These pieces would be available in standard sizing but maintain the same impeccable quality and attention to detail as bespoke creations.
            </p>
            <p className="mb-4">
              In this concept, each season would feature a limited collection exploring new concepts and materials while remaining true to the core aesthetic. Ready-to-wear pieces could be purchased through a London showroom or via private appointment.
            </p>
            <p>
              Many ready-to-wear items could theoretically be modified with minor customizations to enhance fit and personal expression, with a typical turnaround of 2-3 weeks for these adjustments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Specialty Service Concepts</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Performance & Theatrical Costume</h3>
              <p>
                A concept for creating striking performance pieces for artists, musicians, dancers, and theatrical productions. These garments would be designed to make a visual impact while accommodating the practical needs of performance, including movement requirements, quick-change capabilities, and durability under stage lighting.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Alternative Bridal Concept</h3>
              <p>
                For couples seeking non-traditional ceremonial attire, our theoretical service would offer bespoke alternatives that celebrate individuality while honoring the significance of the occasion. These unconventional bridal and formal wear would incorporate elements of fetish fashion into elegant, sophisticated designs suitable for momentous occasions.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Restoration & Reimagination Concept</h3>
              <p>
                The conceptual brand would provide expert restoration services for vintage leather, latex, and fetish wear items. Additionally, the service could reimagine and transform existing pieces, breathing new life into cherished garments while honoring their original character and craftsmanship.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Theoretical Workshops</h3>
              <p>
                For those interested in the craft behind these creations, the concept includes exclusive workshops covering techniques such as leather working, pattern cutting for fetish wear, and hardware application. These intimate sessions would provide hands-on experience under the guidance of skilled artisans.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Conceptual Consultation Options</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              In this brand concept, several consultation formats would accommodate a global clientele:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">In-Person (London Atelier):</span> The most comprehensive option, allowing for immediate measurements, material viewing, and direct collaboration with the design team.
              </li>
              <li>
                <span className="font-medium">International Appointments:</span> Regular consultations in fashion capitals during scheduled visits.
              </li>
              <li>
                <span className="font-medium">Virtual Consultation:</span> High-definition video appointments with the design team, ideal for initial concepts and preliminary discussions.
              </li>
              <li>
                <span className="font-medium">Private Home Visits:</span> Available for established clients or by special arrangement.
              </li>
            </ul>
          </div>
        </section>

        <div className="pt-6 text-center">
          <p className="text-gray-600 italic mb-4">Note: MISS VOID is a conceptual design brand and does not currently offer these services in reality.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
          >
            Explore the Concept Further
          </Link>
        </div>
      </div>
    </div>
  );
} 