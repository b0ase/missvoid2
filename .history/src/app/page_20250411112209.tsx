import Link from 'next/link';
import { getAllCategories } from './utils/images';
import ClientGalleryWrapper from './components/ClientGalleryWrapper';

export default function Home() {
  // Get categories from our utility
  const categories = getAllCategories();
  const featuredCategory = categories.find(category => category.isFeatured);
  const regularCategories = categories.filter(category => !category.isFeatured);

  return (
    <div>
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">MISS VOID</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link href="/custom" className="hover:text-gray-300 transition">
              Custom Orders
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </nav>
      
      <ClientGalleryWrapper 
        featuredCategory={featuredCategory} 
        regularCategories={regularCategories} 
      />
    </div>
  );
}
