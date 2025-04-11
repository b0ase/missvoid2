import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Featured pieces with descriptions using existing image files
  const featuredItems = [
    {
      src: '/images/miss-void/cover.jpg',
      title: 'Eclipse Bodysuit',
      description: 'A sleek, second-skin bodysuit crafted from premium Japanese latex. The strategic paneling creates a silhouette that accentuates natural curves while providing comfortable compression.',
      materials: 'Japanese latex, reinforced seams, custom zipper closure',
      price: 'From £1,650'
    },
    {
      src: '/images/miss-void/IMG_7832.JPG',
      title: 'Void Corset',
      description: 'Our signature corset featuring a dramatic silhouette with accentuated waist reduction. Engineered for both aesthetic impact and comfortable extended wear through precise pattern cutting.',
      materials: 'Italian leather outer, cotton coutil strength layer, steel boning, satin lining',
      price: 'From £2,100'
    },
    {
      src: '/images/miss-void/IMG_7830.JPG',
      title: 'Ethereal Harness',
      description: 'A delicate yet structurally sound upper body harness that traces the contours of the torso. Multiple adjustment points ensure a perfect fit for various body types.',
      materials: 'French lambskin, nickel-free hardware, hand-finished edges',
      price: 'From £890'
    },
    {
      src: '/images/miss-void/IMG_7820.JPG',
      title: 'Phantom Gloves',
      description: 'Opera-length gloves with elongated fingers and architectural detailing at the wrists. Each pair is hand-cut and stitched to ensure perfect fit and movement.',
      materials: 'Stretch leather, silk lining, decorative hardware elements',
      price: 'From £750'
    },
    {
      src: '/images/miss-void/IMG_7840.JPG',
      title: 'Void Collar',
      description: 'A statement neck piece that balances imposing presence with comfortable wearability. The layered design creates depth and visual interest from every angle.',
      materials: 'Structured leather, padded interior, custom lock system',
      price: 'From £680'
    }
  ];

  // Add additional images from the existing files
  const additionalItems = [
    {
      src: '/images/miss-void/IMG_7841.JPG',
      title: 'MISS VOID Item 6',
      description: 'A signature piece from our core collection.',
      materials: 'Premium materials, expert craftsmanship',
      price: 'Price on request'
    },
    {
      src: '/images/miss-void/IMG_7842.JPG',
      title: 'MISS VOID Item 7',
      description: 'A signature piece from our core collection.',
      materials: 'Premium materials, expert craftsmanship',
      price: 'Price on request'
    },
    {
      src: '/images/miss-void/IMG_7834.JPG',
      title: 'MISS VOID Item 8',
      description: 'A signature piece from our core collection.',
      materials: 'Premium materials, expert craftsmanship',
      price: 'Price on request'
    },
    {
      src: '/images/miss-void/IMG_7835.JPG',
      title: 'MISS VOID Item 9',
      description: 'A signature piece from our core collection.',
      materials: 'Premium materials, expert craftsmanship',
      price: 'Price on request'
    },
    {
      src: '/images/miss-void/IMG_7836.JPG',
      title: 'MISS VOID Item 10',
      description: 'A signature piece from our core collection.',
      materials: 'Premium materials, expert craftsmanship',
      price: 'Price on request'
    }
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={[...featuredItems, ...additionalItems]}
      description="The signature collection that embodies the core aesthetic of our brand. These pieces represent the foundation of Miss Void's design philosophy—balancing restriction and freedom, darkness and illumination. Each item is meticulously crafted to transform the wearer's silhouette and experience of their own body."
    />
  );
} 