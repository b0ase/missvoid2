import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Core Collection
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { 
        style: 'minimal', 
        luxuryLevel: 'premium',
        description: 'The quintessential MISS VOID portrait, capturing the essence of our design philosophy through stark contrasts and architectural forms.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7832.JPG',
      'Void Corset',
      'corset',
      { 
        style: 'architectural', 
        luxuryLevel: 'premium',
        description: 'A masterpiece of structural design, featuring geometric panels and precision boning that sculpts the torso into living architecture.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7830.JPG',
      'Ethereal Harness',
      'harness',
      { 
        style: 'sculptural', 
        luxuryLevel: 'premium',
        description: 'Delicate straps interweave to create an ethereal cage that floats around the body, defying traditional harness design.'
      }
    ),

    // Accessories Collection
    createGalleryItem(
      '/images/miss-void/IMG_7820.JPG',
      'Phantom Gloves',
      'gloves',
      { 
        style: 'elaborate', 
        luxuryLevel: 'premium',
        description: 'Opera-length gloves with intricate lacework and geometric cutouts, creating a play of shadow and skin.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7840.JPG',
      'Void Collar',
      'collar',
      { 
        style: 'architectural', 
        luxuryLevel: 'premium',
        description: 'A striking neck piece that combines rigid geometric forms with fluid draping, framing the face in darkness.'
      }
    ),

    // Face Collection
    createGalleryItem(
      '/images/miss-void/IMG_7841.JPG',
      'Oblivion Mask',
      'mask',
      { 
        style: 'minimal', 
        luxuryLevel: 'premium',
        description: 'A minimalist face covering that transforms the wearer through strategic void spaces and sharp angles.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7842.JPG',
      'Void Cuffs',
      'cuffs',
      { 
        style: 'minimal', 
        luxuryLevel: 'premium',
        description: 'Architectural wrist pieces that create bold negative space around the arms, emphasizing gesture and movement.'
      }
    ),

    // Signature Pieces
    createGalleryItem(
      '/images/miss-void/IMG_7834.JPG',
      'Noir Skirt',
      'skirt',
      { 
        style: 'flowing', 
        luxuryLevel: 'premium',
        description: 'A cascading masterpiece of black fabric that moves like liquid shadow, creating dramatic silhouettes with every step.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7835.JPG',
      'Void Sleeves',
      'sleeves',
      { 
        style: 'architectural', 
        luxuryLevel: 'premium',
        description: 'Detachable arm sculptures that transform ordinary garments into avant-garde statements.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7836.JPG',
      'Abyss Bralette',
      'bralette',
      { 
        style: 'sculptural', 
        luxuryLevel: 'premium',
        description: 'A delicate interplay of straps and mesh that creates an illusion of floating darkness across the décolletage.'
      }
    ),

    // Headwear Collection
    createGalleryItem(
      '/images/miss-void/IMG_7837.JPG',
      'Eclipse Hood',
      'hood',
      { 
        style: 'elaborate', 
        luxuryLevel: 'bespoke',
        description: 'A dramatic head covering that frames the face in a perfect circle of darkness, inspired by solar eclipses.'
      }
    ),

    // Evening Wear
    createGalleryItem(
      '/images/miss-void/IMG_7838.JPG',
      'Void Gown',
      'gown',
      { 
        style: 'flowing', 
        luxuryLevel: 'bespoke',
        description: 'A floor-length masterpiece that combines architectural bodice with flowing skirts, creating a silhouette of liquid night.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7839.JPG',
      'Shadow Top',
      'top',
      { 
        style: 'architectural', 
        luxuryLevel: 'premium',
        description: 'A structured top with angular cutouts that create a dynamic interplay of light and shadow on the skin.'
      }
    ),

    // Performance Wear
    createGalleryItem(
      '/images/miss-void/IMG_7843.JPG',
      'Void Leggings',
      'leggings',
      { 
        style: 'minimal', 
        luxuryLevel: 'premium',
        description: 'High-performance leggings with strategic mesh panels and geometric seaming that elongate and sculpt the legs.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7844.JPG',
      'Specter Corset',
      'corset',
      { 
        style: 'elaborate', 
        luxuryLevel: 'bespoke',
        description: 'A transparent corset with ghostly boning and ethereal overlays that create a haunting silhouette.'
      }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7845.JPG',
      'Phantom Harness',
      'harness',
      { 
        style: 'architectural', 
        luxuryLevel: 'premium',
        description: 'A body-framing harness that creates bold geometric shapes across the torso, emphasizing the architecture of the human form.'
      }
    ),

    // Generate additional pieces with unique descriptions
    ...Array.from({ length: 45 }, (_, i) => {
      const styles = ['minimal', 'architectural', 'sculptural', 'flowing', 'elaborate'];
      const categories = ['bodysuit', 'dress', 'top', 'skirt', 'harness', 'corset', 'accessory', 'coat', 'jumpsuit'];
      const adjectives = ['Noir', 'Shadow', 'Void', 'Dark', 'Eclipse', 'Phantom', 'Ethereal', 'Spectral', 'Midnight'];
      const elements = ['Geometric', 'Flowing', 'Structured', 'Draped', 'Sculpted', 'Architectural', 'Minimal', 'Ethereal'];
      
      const style = styles[i % styles.length];
      const category = categories[Math.floor(i / 5) % categories.length];
      const adjective = adjectives[Math.floor(i / 4) % adjectives.length];
      const element = elements[Math.floor(i / 3) % elements.length];
      
      const title = `${adjective} ${category.charAt(0).toUpperCase() + category.slice(1)}`;
      const description = `${element} ${category} featuring signature MISS VOID elements: bold lines, strategic voids, and transformative silhouettes. ${
        style === 'minimal' ? 'Clean lines and precise cuts create a striking minimalist statement.' :
        style === 'architectural' ? 'Structural elements frame and transform the body\'s natural architecture.' :
        style === 'sculptural' ? 'Sculptural details create dynamic three-dimensional forms.' :
        style === 'flowing' ? 'Fluid fabrics cascade and drape to create ethereal movement.' :
        'Elaborate details and layered elements create a complex visual narrative.'
      }`;

      return createGalleryItem(
        `/images/miss-void/IMG_${7846 + i}.JPG`,
        title,
        category,
        { 
          style, 
          luxuryLevel: i % 7 === 0 ? 'bespoke' : 'premium',
          description
        }
      );
    })
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
    />
  );
} 