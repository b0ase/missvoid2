import Link from 'next/link';
import Image from 'next/image';

type GalleryCategory = {
  name: string;
  path: string;
  coverImage: string;
};

const categories: GalleryCategory[] = [
  { name: 'MISS VOID', path: '/gallery/miss-void', coverImage: '/images/miss-void/cover.jpg' },
  { name: 'VOID BOUDOIR', path: '/gallery/void-boudoir', coverImage: '/images/void-boudoir/cover.jpg' },
  { name: 'VOID CHIC', path: '/gallery/void-chic', coverImage: '/images/void-chic/cover.jpg' },
  { name: 'VOID FOOTWEAR', path: '/gallery/void-footwear', coverImage: '/images/void-footwear/cover.jpg' },
  { name: 'VOID INDUSTRY', path: '/gallery/void-industry', coverImage: '/images/void-industry/cover.jpg' },
  { name: 'VOID INK', path: '/gallery/void-ink', coverImage: '/images/void-ink/cover.jpg' },
  { name: 'VOID MUSCLES', path: '/gallery/void-muscles', coverImage: '/images/void-muscles/cover.jpg' },
  { name: 'VOID XXX', path: '/gallery/void-xxx', coverImage: '/images/void-xxx/cover.jpg' },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">MISS VOID</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            href={category.path} 
            key={category.name}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <div className="w-full h-full bg-gray-200 relative">
                  {/* Placeholder div until actual images are available */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-semibold">{category.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 