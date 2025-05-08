import Link from 'next/link';
import { getAllCategories, GalleryCategory } from '../utils/images';

export default function GalleryPage() {
  const galleries = getAllCategories();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">MISS VOID PORTFOLIO</h1>
      <p className="text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
        Our portfolio showcases the MISS VOID aesthetic through carefully curated collections. 
        Each series represents a unique exploration of form, shadow, and movement within our fashion universe.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {galleries.map((gallery: GalleryCategory) => (
          <Link 
            href={gallery.path} 
            key={gallery.name}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <div className="relative w-full h-full bg-gray-200">
                  <img 
                    src={gallery.coverImage}
                    alt={`MISS VOID ${gallery.name} collection`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{gallery.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-900">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{gallery.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 