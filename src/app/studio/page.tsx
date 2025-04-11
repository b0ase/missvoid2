import { getStudioGalleries } from '../utils/images';
import Link from 'next/link';

export default function StudioPage() {
  const galleries = getStudioGalleries();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">MISS VOID STUDIO</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Welcome to our photography studio, where we capture the essence of MISS VOID through artistic vision and technical precision. 
        Each collection represents a unique exploration of form, shadow, and movement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    alt={`${gallery.name} gallery cover`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white drop-shadow-lg">{gallery.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{gallery.name}</h2>
                <p className="text-gray-600">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 