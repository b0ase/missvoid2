import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidNoireGallery() {
  const items = [
    // Miss Void Portraits
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7803.WEBP',
      'Elegance in Monochrome',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7827.JPG',
      'Timeless Portrait',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7814.JPG',
      'Classic Beauty',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Void Muscles Series
    createGalleryItem(
      '/images/void-noire/bw_void-muscles_IMG_8282.JPG',
      'Strength & Grace',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-muscles_IMG_8270.JPG',
      'Power in Motion',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-muscles_IMG_8247.JPG',
      'Dynamic Form',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Void Industry Series
    createGalleryItem(
      '/images/void-noire/bw_void-industry_IMG_8455.JPG',
      'Industrial Elegance',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-industry_IMG_8443.JPG',
      'Urban Grace',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-industry_IMG_8442.JPG',
      'Metropolitan Style',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Void Chic Series
    createGalleryItem(
      '/images/void-noire/bw_void-chic_IMG_8346.JPG',
      'Fashion Forward',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-chic_IMG_8302.JPG',
      'Contemporary Chic',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Void Boudoir Series
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8171.JPG',
      'Intimate Elegance',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_void-boudoir_IMG_8170.JPG',
      'Delicate Moments',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Additional Miss Void Portraits
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7812.JPG',
      'Artistic Vision',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7811.JPG',
      'Modern Sophistication',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Continue with remaining images...
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7809.JPG',
      'Timeless Beauty',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7807.JPG',
      'Classic Portrait',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7806.JPG',
      'Elegant Composition',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7805.JPG',
      'Refined Style',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7804.JPG',
      'Modern Classic',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7800.JPG',
      'Artistic Expression',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7799.JPG',
      'Contemporary Portrait',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7798.JPG',
      'Timeless Moment',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7795.JPG',
      'Elegant Portrait',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7793.JPG',
      'Modern Elegance',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7790.JPG',
      'Classic Composition',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7789.JPG',
      'Refined Portrait',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7747.JPG',
      'Artistic Beauty',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7746.JPG',
      'Contemporary Style',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7018.JPG',
      'Timeless Style',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_7011.JPG',
      'Modern Portrait',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-noire/bw_miss-void_IMG_6615.JPG',
      'Classic Beauty',
      'bodysuit',
      { style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    )
  ];

  // Filter out deleted images
  const deletedImages = [
    "/images/void-noire/bw_miss-void_IMG_7803.WEBP", 
    "/images/void-noire/bw_void-boudoir_IMG_8171.JPG", 
    "/images/void-noire/bw_miss-void_IMG_7018.JPG", 
    "/images/void-noire/bw_miss-void_IMG_7811.JPG", 
    "/images/void-noire/bw_miss-void_IMG_7812.JPG", 
    "/images/void-noire/bw_void-chic_IMG_8346.JPG", 
    "/images/void-noire/bw_void-industry_IMG_8455.JPG", 
    "/images/void-noire/bw_void-muscles_IMG_8270.JPG", 
    "/images/void-noire/bw_void-industry_IMG_8442.JPG", 
    "/images/void-noire/bw_miss-void_IMG_7805.JPG", 
    "/images/void-noire/bw_miss-void_IMG_7011.JPG"
  ];
  const filteredItems = items.filter(item => !deletedImages.includes(item.src));

  return (
    <GalleryPage
      title="VOID NOIRE"
      description="Welcome to VOID NOIRE, a showcase of Void Studio Photography's masterful black and white portraiture. Each image captures the essence of elegance and artistry through the lens of our resident photographer. From fashion editorials to intimate portraits, this collection demonstrates our studio's commitment to creating timeless, sophisticated imagery. For inquiries about booking Void Studios for your own elegant black and white photography session, please contact us."
      images={filteredItems}
      galleryName="VOID NOIRE"
    />
  );
} 