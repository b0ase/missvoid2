import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBootsGallery() {
  const items = [
    // Thigh-High Collection
    createGalleryItem(
      '/images/void-boots/IMG_8049.JPG',
      'Noir Thigh-High Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8047.JPG',
      'Serpentine Lace-Up Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Platform Collection
    createGalleryItem(
      '/images/void-boots/IMG_8048.JPG',
      'Eclipse Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8046.JPG',
      'Shadow Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Ankle Boots
    createGalleryItem(
      '/images/void-boots/IMG_7995.JPG',
      'Midnight Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7996.JPG',
      'Void Lace-Up Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),

    // Statement Pieces
    createGalleryItem(
      '/images/void-boots/IMG_7999.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7997.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/void-boots/IMG_8003.JPG',
      'Signature Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8002.JPG',
      'Void Signature Heel',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Architectural Design
    createGalleryItem(
      '/images/void-boots/IMG_8040.JPG',
      'Architectural Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8027.JPG',
      'Architectural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    
    // Minimalist Collection
    createGalleryItem(
      '/images/void-boots/IMG_8042.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8030.JPG',
      'Minimalist Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Sculptural Design
    createGalleryItem(
      '/images/void-boots/IMG_8045.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7988.JPG',
      'Sculptural Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    )
  ];

  return (
    <GalleryPage
      title="VOID BOOTS"
      description="Explore our signature collection of avant-garde boots. Each pair is a masterpiece of architectural design, featuring bold platforms, striking silhouettes, and premium materials. From statement thigh-highs to sculptural platforms, these boots embody the essence of MISS VOID's distinctive aesthetic."
      images={items}
      galleryName="VOID BOOTS"
    />
  );
} 