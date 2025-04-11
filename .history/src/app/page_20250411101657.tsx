import Gallery from './components/Gallery';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Link href="/gallery/void-chic" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8365.JPG"
            alt="VOID CHIC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID CHIC</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-boudoir" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8364.JPG"
            alt="VOID BOUDOIR"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID BOUDOIR</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-ink" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8363.JPG"
            alt="VOID INK"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID INK</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-muscles" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8362.JPG"
            alt="VOID MUSCLES"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID MUSCLES</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-industry" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8361.JPG"
            alt="VOID INDUSTRY"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID INDUSTRY</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-footwear" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8360.JPG"
            alt="VOID FOOTWEAR"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID FOOTWEAR</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-noire" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8359.WEBP"
            alt="VOID NOIRE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID NOIRE</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-xxx" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8358.JPG"
            alt="VOID XXX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID XXX</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/void-royale" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8357.WEBP"
            alt="VOID ROYALE"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">VOID ROYALE</h2>
          </div>
        </div>
      </Link>

      <Link href="/gallery/miss-void" className="group">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/void-chic/IMG_8356.JPG"
            alt="MISS VOID"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">MISS VOID</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
