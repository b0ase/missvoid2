import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidInkGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-ink/IMG_8474.JPG',
      'Ink Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8475.JPG',
      'Ink Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8476.JPG',
      'Ink Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8477.JPG',
      'Ink Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8478.JPG',
      'Ink Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8479.JPG',
      'Ink Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8480.JPG',
      'Ink Cuffs',
      'cuffs',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8481.JPG',
      'Ink Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8482.JPG',
      'Ink Sleeves',
      'sleeves',
      { style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8483.JPG',
      'Ink Hood',
      'hood',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8484.JPG',
      'Ink Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8485.JPG',
      'Ink Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8486.JPG',
      'Ink Bralette',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8487.JPG',
      'Ink Boots',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8488.JPG',
      'Ink Heels',
      'heels',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8489.JPG',
      'Ink Leggings',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
  ];
  
  // Filter out deleted images
  const deletedImages = [
    "/images/void-ink/IMG_8489.JPG",
    "/images/void-ink/IMG_8488.JPG",
    "/images/void-ink/IMG_8487.JPG",
  ];
  const filteredItems = items.filter(item => !deletedImages.includes(item.src));
  
  return (
    <GalleryPage
      title="VOID INK"
      images={filteredItems}
      description="The Ink collection is inspired by the fluidity and permanence of ink. Each piece is designed to flow with the body, creating dynamic silhouettes that capture the essence of movement and expression. Perfect for performance, these designs offer a bold aesthetic with a focus on form and function."
      galleryName="VOID INK"
    />
  );
} 