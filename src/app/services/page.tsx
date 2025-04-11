"use client";

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Bespoke Couture</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Our signature service offers completely custom, made-to-measure garments designed exclusively for you. The process begins with an in-depth consultation to understand your vision, preferences, and specific requirements.
            </p>
            <p className="mb-4">
              Each piece is meticulously hand-crafted in our London atelier, utilizing premium materials such as Italian leather, Japanese latex, French lace, and custom hardware. Multiple fittings ensure perfect fit and comfort.
            </p>
            <p className="mb-4 font-medium">
              The bespoke journey includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Initial design consultation (in-person or virtual)</li>
              <li>Mood board and concept development</li>
              <li>Material selection and sampling</li>
              <li>Detailed measurements and body mapping</li>
              <li>Multiple fittings throughout the process</li>
              <li>Handcrafted production by our expert artisans</li>
              <li>Final fitting and adjustments</li>
              <li>Aftercare advice and maintenance instructions</li>
            </ul>
            <p>
              Turnaround time for bespoke pieces typically ranges from 8-12 weeks depending on complexity. For clients outside London, we can arrange fittings in Paris, New York, Dubai, or Shanghai during our scheduled visits.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Ready-to-Wear Collection</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              For those who desire the Miss Void aesthetic with a shorter wait time, we offer a carefully curated ready-to-wear collection that embodies our distinctive style. These pieces are available in standard sizing but maintain the same impeccable quality and attention to detail as our bespoke creations.
            </p>
            <p className="mb-4">
              Each season, we release a limited collection exploring new concepts and materials while remaining true to our core aesthetic. Ready-to-wear pieces can be purchased directly through our London showroom or via private appointment.
            </p>
            <p>
              Many ready-to-wear items can be modified with minor customizations to enhance fit and personal expression, with a typical turnaround of 2-3 weeks for these adjustments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Specialty Services</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Performance & Theatrical Costume</h3>
              <p>
                We create striking performance pieces for artists, musicians, dancers, and theatrical productions. These garments are designed to make a visual impact while accommodating the practical needs of performance, including movement requirements, quick-change capabilities, and durability under stage lighting.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Bridal Alternative</h3>
              <p>
                For couples seeking non-traditional ceremonial attire, we offer bespoke alternatives that celebrate individuality while honoring the significance of the occasion. Our unconventional bridal and formal wear incorporates elements of fetish fashion into elegant, sophisticated designs suitable for momentous occasions.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Restoration & Reimagination</h3>
              <p>
                We provide expert restoration services for vintage leather, latex, and fetish wear items. Additionally, we can reimagine and transform existing pieces, breathing new life into cherished garments while honoring their original character and craftsmanship.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Private Workshops</h3>
              <p>
                For those interested in the craft behind our creations, we offer exclusive workshops covering techniques such as leather working, pattern cutting for fetish wear, and hardware application. These intimate sessions provide hands-on experience under the guidance of our skilled artisans.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Consultation Options</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <p className="mb-4">
              We offer several consultation formats to accommodate our global clientele:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">In-Person (London Atelier):</span> Our most comprehensive option, allowing for immediate measurements, material viewing, and direct collaboration with our design team.
              </li>
              <li>
                <span className="font-medium">International Appointments:</span> Regular consultations in Paris, New York, Dubai, and Shanghai during our scheduled visits. Please contact us for upcoming dates.
              </li>
              <li>
                <span className="font-medium">Virtual Consultation:</span> High-definition video appointments with our design team, ideal for initial concepts and preliminary discussions.
              </li>
              <li>
                <span className="font-medium">Private Home Visits:</span> Available for established clients or by special arrangement.
              </li>
            </ul>
          </div>
        </section>

        <div className="pt-6 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 