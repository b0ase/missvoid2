import { getStudioGalleries } from '../utils/images';
import Link from 'next/link';

export default function StudioPage() {
  const galleries = getStudioGalleries();

  return (
    <div className="container mx-auto px-4 pt-3 pb-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-8 text-center">MISS VOID STUDIO CONCEPT</h1>
      <p className="text-base sm:text-lg text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
        Our photography studio showcases the MISS VOID aesthetic through digital artistry and creative visualization. 
        Each collection represents a unique exploration of form, shadow, and movement in our fashion universe.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {galleries.map((gallery) => (
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
                    alt={`${gallery.name} gallery concept`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{gallery.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{gallery.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 