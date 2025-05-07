import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Core Collection
    createGalleryItem(
      '/images/miss-void/IMG_6556.JPG',
      'Shadow Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6565.JPG',
      'Void Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6570.JPG',
      'Eclipse Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6571.JPG',
      'Phantom Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'elaborate', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6572.JPG',
      'Noir Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6574.JPG',
      'Void Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6576.JPG',
      'Shadow Cuffs',
      'cuffs',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6577.JPG',
      'Eclipse Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6578.JPG',
      'Phantom Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6579.JPG',
      'Noir Hood',
      'hood',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6580.JPG',
      'Void Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6581.JPG',
      'Shadow Bralette',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6582.JPG',
      'Eclipse Sleeves',
      'sleeves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6585.JPG',
      'Phantom Leggings',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Extended Collection
    createGalleryItem(
      '/images/miss-void/IMG_6586.JPG',
      'Noir Dress',
      'dress',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+avant-garde+dress+in+detail%2C+focusing+on+silhouette%2C+materials%2C+and+unique+design+features.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6588.JPG',
      'Void Accessory',
      'accessory',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6589.JPG',
      'Shadow Coat',
      'coat',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6591.JPG',
      'Eclipse Jumpsuit',
      'jumpsuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6594.JPG',
      'Phantom Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6596.JPG',
      'Noir Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6600.JPG',
      'Void Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6609.JPG',
      'Shadow Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6612.JPG',
      'Eclipse Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6613.JPG',
      'Phantom Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/miss-void/IMG_6668.JPG',
      'Noir Cuffs',
      'cuffs',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6683.JPG',
      'Void Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6685.JPG',
      'Shadow Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6687.JPG',
      'Eclipse Hood',
      'hood',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6696.JPG',
      'Phantom Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6953.JPG',
      'Noir Bralette',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6954.JPG',
      'Void Sleeves',
      'sleeves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/miss-void/IMG_7721.JPG',
      'Shadow Leggings',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7722.JPG',
      'Eclipse Dress',
      'dress',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+avant-garde+dress+in+detail%2C+focusing+on+silhouette%2C+materials%2C+and+unique+design+features.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7723.JPG',
      'Phantom Accessory',
      'accessory',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7724.WEBP',
      'Noir Coat',
      'coat',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7725.JPG',
      'Void Jumpsuit',
      'jumpsuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7726.JPG',
      'Shadow Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7735.JPG',
      'Eclipse Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7740.JPG',
      'Phantom Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7742.WEBP',
      'Noir Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7743.JPG',
      'Void Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7745.JPG',
      'Shadow Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7746.JPG',
      'Eclipse Cuffs',
      'cuffs',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/miss-void/IMG_7757.JPG',
      'Phantom Skirt',
      'skirt',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7768.JPG',
      'Noir Top',
      'top',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7772.JPG',
      'Void Hood',
      'hood',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7773.WEBP',
      'Shadow Gown',
      'gown',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7776.JPG',
      'Eclipse Bralette',
      'bralette',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7781.JPG',
      'Phantom Sleeves',
      'sleeves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7801.JPG',
      'Noir Leggings',
      'leggings',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7803.WEBP',
      'Void Dress',
      'dress',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+avant-garde+dress+in+detail%2C+focusing+on+silhouette%2C+materials%2C+and+unique+design+features.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7804.JPG',
      'Shadow Accessory',
      'accessory',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7805.JPG',
      'Eclipse Coat',
      'coat',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7806.JPG',
      'Phantom Jumpsuit',
      'jumpsuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7807.JPG',
      'Noir Harness',
      'harness',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+designer+harness+in+detail%2C+noting+the+strap+configuration%2C+hardware%2C+and+overall+design.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7809.JPG',
      'Void Corset',
      'corset',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+corset+in+detail%2C+noting+the+construction%2C+materials%2C+boning%2C+and+decorative+elements.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7815 (1).JPG',
      'Shadow Bodysuit',
      'bodysuit',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+luxury+bodysuit+in+detail%2C+focusing+on+fit%2C+materials%2C+and+distinctive+design+elements.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7823.JPG',
      'Eclipse Gloves',
      'gloves',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7827.JPG',
      'Phantom Collar',
      'collar',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7831.JPG',
      'Noir Mask',
      'mask',
      { description: 'Error: API request failed - 402 Client Error: Payment Required for url: https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base?task=image_captioning&prompt=Describe+this+high-fashion+piece+in+detail%2C+focusing+on+construction%2C+materials%2C+and+unique+design+elements.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
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