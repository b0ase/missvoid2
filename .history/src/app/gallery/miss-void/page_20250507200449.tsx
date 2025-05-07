import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Core Collection
    createGalleryItem(
      '/images/miss-void/IMG_6556.JPG',
      'Shadow Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6565.JPG',
      'Void Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6570.JPG',
      'Eclipse Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6574.JPG',
      'Void Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6577.JPG',
      'Eclipse Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6580.JPG',
      'Void Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),

    // Extended Collection
    createGalleryItem(
      '/images/miss-void/IMG_6586.JPG',
      'Noir Dress',
      'dress',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6589.JPG',
      'Shadow Coat',
      'coat',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6594.JPG',
      'Phantom Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/miss-void/IMG_6696.JPG',
      'Phantom Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6954.JPG',
      'Void Sleeves',
      'sleeves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/miss-void/IMG_7722.JPG',
      'Eclipse Dress',
      'dress',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7735.JPG',
      'Eclipse Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/miss-void/IMG_7768.JPG',
      'Noir Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7809.JPG',
      'Void Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7831.JPG',
      'Noir Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    )
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
      galleryName="MISS VOID"
    />
  );
} 