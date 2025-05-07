import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidInkGallery() {
  // Create 16 featured pieces with detailed descriptions
  const items = [
    createGalleryItem(
      '/images/void-ink/IMG_8474.JPG',
      'Ink Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.'s edges, this bodysuit births mystical chaos in A marriage of crystal and glass featuring harness that flow into spikes At its core: a woman with tattoos and leathers on her back.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8475.JPG',
      'Ink Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8476.JPG',
      'Ink Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8477.JPG',
      'Ink Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8478.JPG',
      'Ink Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.'s edges, this gloves births enigmatic chaos in Layers of latex dancing with steel dominated by layers accented with panels At its core: a woman in a gas mask and leather gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8479.JPG',
      'Ink Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8480.JPG',
      'Ink Cuffs',
      'cuffs',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8481.JPG',
      'Ink Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
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
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8484.JPG',
      'Ink Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8485.JPG',
      'Ink Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8486.JPG',
      'Ink Bralette',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8487.JPG',
      'Ink Boots',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8488.JPG',
      'Ink Heels',
      'heels',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-ink/IMG_8489.JPG',
      'Ink Leggings',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
  ];
  
  return (
    <GalleryPage
      title="VOID INK"
      images={items}
      description="The Ink collection is inspired by the fluidity and permanence of ink. Each piece is designed to flow with the body, creating dynamic silhouettes that capture the essence of movement and expression. Perfect for performance, these designs offer a bold aesthetic with a focus on form and function."
    />
  );
} 