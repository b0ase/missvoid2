import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function VoidBootsGallery() {
  const items = [
    // Thigh-High Collection
    createGalleryItem(
      '/images/void-boots/IMG_8049.JPG',
      'Noir Thigh-High Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8047.JPG',
      'Serpentine Lace-Up Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Platform Collection
    createGalleryItem(
      '/images/void-boots/IMG_8048.JPG',
      'Eclipse Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8046.JPG',
      'Shadow Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Ankle Boots
    createGalleryItem(
      '/images/void-boots/IMG_7995.JPG',
      'Midnight Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births arcane chaos in Layers of titanium dancing with crystal dominated by layers accented with corsetry Manifest as: a pair of black leather boots with spikes and spikes.', style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7996.JPG',
      'Void Lace-Up Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),

    // Statement Pieces
    createGalleryItem(
      '/images/void-boots/IMG_7999.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7997.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/void-boots/IMG_8003.JPG',
      'Signature Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8002.JPG',
      'Void Signature Heel',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),

    // Additional items...
    createGalleryItem(
      '/images/void-boots/IMG_8005.JPG',
      'Structured Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8035.JPG',
      'Geometric Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births enigmatic chaos in Crafted from silver fused with obsidian defined by harness embracing hardware Physical form: a woman wearing black leather boots with stud detailing.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8036.JPG',
      'Avant-Garde Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8037.JPG',
      'Noir Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8041.JPG',
      'Gothic Lace-Up Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8038.JPG',
      'Structured Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8039.JPG',
      'Platform Statement Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8040.JPG',
      'Architectural Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8042.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8043.JPG',
      'Gothic Platform Heel',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8045.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8044.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8024.JPG',
      'Structured Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8026.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Continue with remaining items...
    createGalleryItem(
      '/images/void-boots/IMG_8025.JPG',
      'Minimalist Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.' s legs and heels with chains.' s legs and heels with chains.' s legs and heels with chains.' s legs and heels with chains A statement of avant-garde luxury that challenges conventional design paradigms.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8027.JPG',
      'Architectural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births post-apocalyptic chaos in A marriage of obsidian and platinum dominated by clasps accented with draping Reality observed: a woman wearing black leather boots with stud detailing.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8028.JPG',
      'Statement Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8029.JPG',
      'Gothic Thigh-High Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8030.JPG',
      'Minimalist Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8032.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births ethereal chaos in Layers of obsidian dancing with platinum featuring layers that flow into chains In essence: a woman wearing black leather boots with spikes.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8033.JPG',
      'Architectural Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8034.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8006.JPG',
      'Minimalist Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8007.JPG',
      'Structured Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8009.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8010.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8011.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births biomechanical chaos in A marriage of obsidian and crystal dominated by pleats accented with corsetry Reality observed: a woman wearing black boots with gold trims.', style: 'minimal', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8012.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8013.JPG',
      'Gothic Ankle Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.' s black high heeled boots.' s black high heeled boots.' s black high heeled boots.' s black high heeled boots A statement of avant-garde luxury that challenges conventional design paradigms.', style: 'architectural', luxuryLevel: 'premium', useCase: 'everyday' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8015.JPG',
      'Architectural Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.'s edges, this boots births sovereign chaos in Layers of metal dancing with titanium where harness intertwine with corsetry Manifest as: a woman wearing black leather boots with gold buckles.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8014.JPG',
      'Statement Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_8019.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.' s legs and legs with high heels.' s legs and legs with high heels.' s legs and legs with high heels.' s legs and legs with high heels A statement of avant-garde luxury that challenges conventional design paradigms.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7987.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7988.JPG',
      'Sculptural Thigh-High',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7990.JPG',
      'Avant-Garde Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7991.JPG',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7971.JPG',
      'Minimalist Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7973.JPG',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7974.JPG',
      'Architectural Platform',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    // WEBP format images
    createGalleryItem(
      '/images/void-boots/IMG_8008.WEBP',
      'Gothic Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/void-boots/IMG_7989.WEBP',
      'Sculptural Platform Boot',
      'boots',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+these+luxury+boots+in+detail%2C+focusing+on+height%2C+materials%2C+fastenings%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    )
  ];

  return (
    <GalleryPage
      title="VOID BOOTS"
      description="Explore our signature collection of avant-garde boots. Each pair is a masterpiece of architectural design, featuring bold platforms, striking silhouettes, and premium materials. From statement thigh-highs to sculptural platforms, these boots embody the essence of MISS VOID's distinctive aesthetic."
      images={items}
    />
  );
} 