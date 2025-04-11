import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold">MISS VOID</div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
            <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
            <Link href="/custom" className="hover:text-gray-300 transition">Custom Orders</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">MISS VOID</h1>
        <p className="text-center mb-8">London-based fetish and BDSM-inspired fashion for over two decades.</p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link href="/gallery/miss-void" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            MISS VOID
          </Link>
          <Link href="/gallery/void-royale" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            VOID ROYALE
          </Link>
          <Link href="/gallery/void-xxx" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            VOID XXX
          </Link>
          <Link href="/gallery/void-chic" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            VOID CHIC
          </Link>
          <Link href="/gallery/void-noire" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            VOID NOIRE
          </Link>
          <Link href="/gallery/void-boudoir" className="block p-4 bg-black text-white text-center rounded hover:bg-gray-800">
            VOID BOUDOIR
          </Link>
        </div>
      </main>
    </div>
  );
}
