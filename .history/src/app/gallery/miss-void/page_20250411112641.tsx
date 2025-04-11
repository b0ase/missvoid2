import GalleryPage from '../../components/GalleryPage';

export default function MissVoidGallery() {
  // Featured pieces with descriptions using placeholder images
  const featuredItems = [
    {
      src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Eclipse+Bodysuit',
      title: 'Eclipse Bodysuit',
      description: 'A sleek, second-skin bodysuit crafted from premium Japanese latex. The strategic paneling creates a silhouette that accentuates natural curves while providing comfortable compression.',
      materials: 'Japanese latex, reinforced seams, custom zipper closure',
      price: 'From £1,650'
    },
    {
      src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Void+Corset',
      title: 'Void Corset',
      description: 'Our signature corset featuring a dramatic silhouette with accentuated waist reduction. Engineered for both aesthetic impact and comfortable extended wear through precise pattern cutting.',
      materials: 'Italian leather outer, cotton coutil strength layer, steel boning, satin lining',
      price: 'From £2,100'
    },
    {
      src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Ethereal+Harness',
      title: 'Ethereal Harness',
      description: 'A delicate yet structurally sound upper body harness that traces the contours of the torso. Multiple adjustment points ensure a perfect fit for various body types.',
      materials: 'French lambskin, nickel-free hardware, hand-finished edges',
      price: 'From £890'
    },
    {
      src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Phantom+Gloves',
      title: 'Phantom Gloves',
      description: 'Opera-length gloves with elongated fingers and architectural detailing at the wrists. Each pair is hand-cut and stitched to ensure perfect fit and movement.',
      materials: 'Stretch leather, silk lining, decorative hardware elements',
      price: 'From £750'
    },
    {
      src: 'https://placehold.co/600x600/000000/FFFFFF/png?text=Void+Collar',
      title: 'Void Collar',
      description: 'A statement neck piece that balances imposing presence with comfortable wearability. The layered design creates depth and visual interest from every angle.',
      materials: 'Structured leather, padded interior, custom lock system',
      price: 'From £680'
    }
  ];

  // Add additional placeholder images
  const additionalItems = Array.from({ length: 10 }, (_, i) => ({
    src: `https://placehold.co/600x600/000000/FFFFFF/png?text=MISS+VOID+${i + 6}`,
    title: `MISS VOID Item ${i + 6}`,
    description: 'A signature piece from our core collection.',
    materials: 'Premium materials, expert craftsmanship',
    price: 'Price on request'
  }));

  return (
    <GalleryPage
      title="MISS VOID"
      images={[...featuredItems, ...additionalItems]}
      description="The signature collection that embodies the core aesthetic of our brand. These pieces represent the foundation of Miss Void's design philosophy—balancing restriction and freedom, darkness and illumination. Each item is meticulously crafted to transform the wearer's silhouette and experience of their own body."
    />
  );
} 