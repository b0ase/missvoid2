import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Create a mapping of image numbers to their correct extensions
  const imageExtensions: Record<number, string> = {
    7773: 'WEBP',
    7803: 'WEBP',
    7819: 'WEBP',
    7848: 'WEBP',
    7869: 'WEBP',
    7883: 'WEBP'
  };

  // List of image numbers that don't exist
  const missingImages = [7786, 7816];

  // Featured pieces with descriptions
  const featuredPieces = [
    {
      imgNumber: 7832,
      title: 'Eclipse Bodysuit',
      description: 'A sleek, second-skin bodysuit crafted from premium Japanese latex. The strategic paneling creates a silhouette that accentuates natural curves while providing comfortable compression.',
      materials: 'Japanese latex, reinforced seams, custom zipper closure',
      price: 'From £1,650'
    },
    {
      imgNumber: 7841,
      title: 'Void Corset',
      description: 'Our signature corset featuring a dramatic silhouette with accentuated waist reduction. Engineered for both aesthetic impact and comfortable extended wear through precise pattern cutting.',
      materials: 'Italian leather outer, cotton coutil strength layer, steel boning, satin lining',
      price: 'From £2,100'
    },
    {
      imgNumber: 7769,
      title: 'Ethereal Harness',
      description: 'A delicate yet structurally sound upper body harness that traces the contours of the torso. Multiple adjustment points ensure a perfect fit for various body types.',
      materials: 'French lambskin, nickel-free hardware, hand-finished edges',
      price: 'From £890'
    },
    {
      imgNumber: 7758,
      title: 'Phantom Gloves',
      description: 'Opera-length gloves with elongated fingers and architectural detailing at the wrists. Each pair is hand-cut and stitched to ensure perfect fit and movement.',
      materials: 'Stretch leather, silk lining, decorative hardware elements',
      price: 'From £750'
    },
    {
      imgNumber: 7787,
      title: 'Void Collar',
      description: 'A statement neck piece that balances imposing presence with comfortable wearability. The layered design creates depth and visual interest from every angle.',
      materials: 'Structured leather, padded interior, custom lock system',
      price: 'From £680'
    }
  ];

  // Map the featured pieces to their image paths with proper extensions
  const featuredItems = featuredPieces.map(piece => {
    const extension = imageExtensions[piece.imgNumber] || 'JPG';
    return {
      src: `/images/miss-void/IMG_${piece.imgNumber}.${extension}`,
      title: piece.title,
      description: piece.description,
      materials: piece.materials,
      price: piece.price
    };
  });

  // Generate the remaining image paths with appropriate extensions
  const basicImages = Array.from({ length: 207 }, (_, i) => {
    const imgNumber = 7748 + i;
    
    // Skip missing images and featured pieces (which we'll add separately)
    if (missingImages.includes(imgNumber) || featuredPieces.some(p => p.imgNumber === imgNumber)) {
      return null;
    }
    
    // Use the mapping if available, otherwise default to JPG
    const extension = imageExtensions[imgNumber] || 'JPG';
    return {
      src: `/images/miss-void/IMG_${imgNumber}.${extension}`
    };
  }).filter(Boolean);

  // Combine featured items with basic images
  const allGalleryItems = [...featuredItems, ...basicImages] as any[];
  
  return (
    <GalleryPage
      title="MISS VOID"
      images={allGalleryItems}
      description="The signature collection that embodies the core aesthetic of our brand. These pieces represent the foundation of Miss Void's design philosophy—balancing restriction and freedom, darkness and illumination. Each item is meticulously crafted to transform the wearer's silhouette and experience of their own body."
    />
  );
} 