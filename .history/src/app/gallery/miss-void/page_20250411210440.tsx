import GalleryPage from '../../components/GalleryPage';
import { createGalleryItem } from '../../utils/galleryDescriptions';

export default function MissVoidGallery() {
  const items = [
    // Cover Image
    createGalleryItem(
      '/images/miss-void/cover.jpg',
      'Void Essence',
      'portrait',
      { description: 'In the depths of design rebellion, this portrait shatters expectations with imperial audacity Forged in the union of carbon fiber and glass with corsetry cascading into zippers Through mortal eyes: a woman with black hair and gloves on her head.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Core Collection
    createGalleryItem(
      '/images/miss-void/IMG_6556.JPG',
      'Shadow Harness',
      'harness',
      { description: 'In the space between shadow and form, this harness crafts sculptural poetry velvet and silver locked in eternal dialogue through corsetry that metamorphose into spikes Reality bleeds through: a woman in a black leather outfit and boots.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6565.JPG',
      'Void Corset',
      'corset',
      { description: 'Carved from the essence of night, this corset wields sculptural power Through layers of leather embracing crystal where clasps conspire with draping The physical form whispers: a woman in a black leather outfit.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6570.JPG',
      'Eclipse Bodysuit',
      'bodysuit',
      { description: 'In the space between shadow and form, this bodysuit crafts sculptural poetry Where obsidian dissolves into velvet while hardware seduce clasps into submission The void reveals: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6571.JPG',
      'Phantom Gloves',
      'gloves',
      { description: 'From the convergence of imperial chaos and ethereal order, this gloves rises Where obsidian dissolves into carbon fiber with hardware cascading into spikes The physical form whispers: a woman in black leather clothes and gloves.', style: 'elaborate', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6572.JPG',
      'Noir Collar',
      'collar',
      { description: 'Where light fears to tread, this collar emerges with sculptural defiance mesh and platinum locked in eternal dialogue as layers dance with straps in dark harmony The void reveals: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6574.JPG',
      'Void Mask',
      'mask',
      { description: 'When darkness takes form, this mask becomes futuristic incarnate Through layers of silk embracing leather while layers seduce chains into submission The physical form whispers: a woman in a black leather outfit with a choker.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6576.JPG',
      'Shadow Cuffs',
      'cuffs',
      { description: 'In the space between shadow and form, this cuffs crafts neo-gothic poetry Forged in the union of obsidian and crystal where straps conspire with panels Through mortal eyes: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6577.JPG',
      'Eclipse Skirt',
      'skirt',
      { description: 'A whisper of enigmatic darkness, this skirt speaks in sovereign tongues chrome and glass locked in eternal dialogue where buckles conspire with straps Reality bleeds through: a woman in a black leather outfit and gloves.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6578.JPG',
      'Phantom Top',
      'top',
      { description: 'Pushing the boundaries of ethereal aesthetics, this top becomes a neo-gothic manifesto A forbidden marriage of metal to glass with panels cascading into spikes Reality bleeds through: a woman in a black leather outfit with a choker.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6579.JPG',
      'Noir Hood',
      'hood',
      { description: 'Carved from the essence of night, this hood wields otherworldly power steel and crystal locked in eternal dialogue through layers that metamorphose into panels Reality bleeds through: a woman in black leather with a choker and gloves.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6580.JPG',
      'Void Gown',
      'gown',
      { description: 'Dancing on the edge of possibility, this gown embodies enigmatic rebellion Forged in the union of steel and crystal where spikes conspire with pleats Through mortal eyes: a woman in black leather gloves and a choker.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6581.JPG',
      'Shadow Bralette',
      'bralette',
      { description: 'Where light fears to tread, this bralette emerges with ethereal defiance Where crystal dissolves into silver through harness that metamorphose into layers The void reveals: a woman in black leather with a red lipstick.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6582.JPG',
      'Eclipse Sleeves',
      'sleeves',
      { description: 'In the depths of design rebellion, this sleeves shatters expectations with post-apocalyptic audacity Forged in the union of chrome and metal where spikes conspire with hardware The void reveals: a woman in a black leather outfit.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6585.JPG',
      'Phantom Leggings',
      'leggings',
      { description: 'A whisper of architectural darkness, this leggings speaks in avant-garde tongues A forbidden marriage of silver to carbon fiber while chains seduce panels into submission The physical form whispers: a woman in a black leather outfit with a hood and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),

    // Extended Collection
    createGalleryItem(
      '/images/miss-void/IMG_6586.JPG',
      'Noir Dress',
      'dress',
      { description: 'In the depths of design rebellion, this dress shatters expectations with post-apocalyptic audacity Through layers of crystal embracing latex through buckles that metamorphose into pleats Reality bleeds through: a woman in a black leather outfit.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6588.JPG',
      'Void Accessory',
      'accessory',
      { description: 'Dancing on the edge of possibility, this accessory embodies transcendent rebellion leather and mesh locked in eternal dialogue where layers conspire with chains Through mortal eyes: a woman in a black leather outfit.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6589.JPG',
      'Shadow Coat',
      'coat',
      { description: 'Where light fears to tread, this coat emerges with transcendent defiance Forged in the union of metal and carbon fiber with embellishments cascading into buckles The void reveals: a woman in a black leather outfit.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6591.JPG',
      'Eclipse Jumpsuit',
      'jumpsuit',
      { description: 'When darkness takes form, this jumpsuit becomes sovereign incarnate A forbidden marriage of titanium to crystal while straps seduce hardware into submission Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6594.JPG',
      'Phantom Harness',
      'harness',
      { description: 'Carved from the essence of night, this harness wields futuristic power leather and mesh locked in eternal dialogue through chains that metamorphose into straps The void reveals: a woman in a black leather outfit and gloves.', style: 'elaborate', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6596.JPG',
      'Noir Corset',
      'corset',
      { description: 'When darkness takes form, this corset becomes imperial incarnate Through layers of mesh embracing crystal where grommets conspire with spikes The void reveals: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6600.JPG',
      'Void Bodysuit',
      'bodysuit',
      { description: 'Carved from the essence of night, this bodysuit wields transcendent power A forbidden marriage of glass to metal as draping dance with straps in dark harmony The void reveals: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6609.JPG',
      'Shadow Gloves',
      'gloves',
      { description: 'In the space between shadow and form, this gloves crafts ethereal poetry A forbidden marriage of glass to silver with chains cascading into spikes Reality bleeds through: a woman in a black latent suit and leather gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6612.JPG',
      'Eclipse Collar',
      'collar',
      { description: 'Through the lens of sovereign innovation, this collar defies sculptural constraints Where leather dissolves into velvet where layers conspire with zippers The physical form whispers: a woman in black latent with a black latent.', style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6613.JPG',
      'Phantom Mask',
      'mask',
      { description: 'Where light fears to tread, this mask emerges with sovereign defiance A forbidden marriage of mesh to glass through straps that metamorphose into spikes Through mortal eyes: a woman in a black leather outfit and leather gloves.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),

    // Signature Collection
    createGalleryItem(
      '/images/miss-void/IMG_6668.JPG',
      'Noir Cuffs',
      'cuffs',
      { description: 'In the depths of design rebellion, this cuffs shatters expectations with enigmatic audacity Where latex dissolves into metal with buckles cascading into chains The void reveals: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6683.JPG',
      'Void Skirt',
      'skirt',
      { description: 'From the convergence of ethereal chaos and futuristic order, this skirt rises Forged in the union of metal and mesh where pleats conspire with draping Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6685.JPG',
      'Shadow Top',
      'top',
      { description: 'Where light fears to tread, this top emerges with biomechanical defiance Where glass dissolves into velvet while chains seduce corsetry into submission The void reveals: a woman in a black leather outfit and leather gloves.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6687.JPG',
      'Eclipse Hood',
      'hood',
      { description: 'Through the lens of cybernetic innovation, this hood defies architectural constraints Forged in the union of chrome and leather through harness that metamorphose into draping Through mortal eyes: a woman in a black leather outfit.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6696.JPG',
      'Phantom Gown',
      'gown',
      { description: 'In the depths of design rebellion, this gown shatters expectations with ethereal audacity Where metal dissolves into velvet with layers cascading into chains Beneath the artistry lies truth: a woman in a black leather outfit.', style: 'elaborate', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6953.JPG',
      'Noir Bralette',
      'bralette',
      { description: 'Dancing on the edge of possibility, this bralette embodies neo-gothic rebellion A forbidden marriage of chrome to crystal with clasps cascading into straps Through mortal eyes: a woman in a black leather outfit.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_6954.JPG',
      'Void Sleeves',
      'sleeves',
      { description: 'From the convergence of transcendent chaos and sculptural order, this sleeves rises Forged in the union of carbon fiber and silver as spikes dance with harness in dark harmony The void reveals: a woman in a black latent suit.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Contemporary Collection
    createGalleryItem(
      '/images/miss-void/IMG_7721.JPG',
      'Shadow Leggings',
      'leggings',
      { description: 'When darkness takes form, this leggings becomes ethereal incarnate titanium and glass locked in eternal dialogue where zippers conspire with straps The physical form whispers: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7722.JPG',
      'Eclipse Dress',
      'dress',
      { description: 'From the convergence of mystical chaos and celestial order, this dress rises Where chrome dissolves into platinum while embellishments seduce hardware into submission The physical form whispers: a woman in a black leather outfit.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7723.JPG',
      'Phantom Accessory',
      'accessory',
      { description: 'Where light fears to tread, this accessory emerges with imperial defiance A forbidden marriage of latex to chrome while pleats seduce embellishments into submission Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7724.WEBP',
      'Noir Coat',
      'coat',
      { description: 'From the convergence of ethereal chaos and arcane order, this coat rises A forbidden marriage of silver to chrome as embellishments dance with straps in dark harmony Through mortal eyes: a woman in a black leather outfit.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7725.JPG',
      'Void Jumpsuit',
      'jumpsuit',
      { description: 'Through the lens of biomechanical innovation, this jumpsuit defies cybernetic constraints Where metal dissolves into chrome through buckles that metamorphose into harness Through mortal eyes: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7726.JPG',
      'Shadow Harness',
      'harness',
      { description: 'Pushing the boundaries of arcane aesthetics, this harness becomes a cybernetic manifesto Where leather dissolves into velvet where straps conspire with chains Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7735.JPG',
      'Eclipse Corset',
      'corset',
      { description: 'A whisper of ethereal darkness, this corset speaks in futuristic tongues Through layers of platinum embracing chrome while zippers seduce grommets into submission Beneath the artistry lies truth: a woman in black leather gloves and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7740.JPG',
      'Phantom Bodysuit',
      'bodysuit',
      { description: 'When darkness takes form, this bodysuit becomes ethereal incarnate Where mesh dissolves into platinum as pleats dance with chains in dark harmony Beneath the artistry lies truth: a woman in a black lingersuit and gloves.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7742.WEBP',
      'Noir Gloves',
      'gloves',
      { description: 'Dancing on the edge of possibility, this gloves embodies celestial rebellion Where silk dissolves into chrome while spikes seduce buckles into submission Reality bleeds through: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7743.JPG',
      'Void Collar',
      'collar',
      { description: 'When darkness takes form, this collar becomes biomechanical incarnate Where velvet dissolves into mesh with harness cascading into corsetry The physical form whispers: a woman in a black corse with a leather belt.', style: 'minimal', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7745.JPG',
      'Shadow Mask',
      'mask',
      { description: 'In the depths of design rebellion, this mask shatters expectations with post-apocalyptic audacity Where latex dissolves into mesh where hardware conspire with clasps The void reveals: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7746.JPG',
      'Eclipse Cuffs',
      'cuffs',
      { description: 'Through the lens of ethereal innovation, this cuffs defies biomechanical constraints velvet and latex locked in eternal dialogue while pleats seduce zippers into submission The physical form whispers: a woman in a black corse with gloves and gloves.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),

    // Avant-Garde Collection
    createGalleryItem(
      '/images/miss-void/IMG_7757.JPG',
      'Phantom Skirt',
      'skirt',
      { description: 'Dancing on the edge of possibility, this skirt embodies sculptural rebellion Forged in the union of steel and chrome where buckles conspire with corsetry The physical form whispers: a woman in a black corse with a black mask and gloves.'s edges, this skirt births celestial chaos in Crafted from platinum fused with mesh featuring embellishments that flow into hardware Physical form: a woman in a black corse with a black mask and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7768.JPG',
      'Noir Top',
      'top',
      { description: 'Carved from the essence of night, this top wields sculptural power leather and platinum locked in eternal dialogue where chains conspire with spikes The physical form whispers: a woman in a black corse with a red lipstick.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7772.JPG',
      'Void Hood',
      'hood',
      { description: 'A whisper of architectural darkness, this hood speaks in arcane tongues A forbidden marriage of metal to platinum through embellishments that metamorphose into harness Reality bleeds through: a woman in a black outfit and gloves.', style: 'sculptural', luxuryLevel: 'bespoke', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7773.WEBP',
      'Shadow Gown',
      'gown',
      { description: 'In the depths of design rebellion, this gown shatters expectations with sculptural audacity Through layers of metal embracing silver where straps conspire with harness The void reveals: a woman in a black corse with a leather glove and gloves.', style: 'flowing', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7776.JPG',
      'Eclipse Bralette',
      'bralette',
      { description: 'When darkness takes form, this bralette becomes ethereal incarnate silk and obsidian locked in eternal dialogue with panels cascading into grommets Through mortal eyes: a woman in a black corse with a leather corse.', style: 'architectural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7781.JPG',
      'Phantom Sleeves',
      'sleeves',
      { description: 'Pushing the boundaries of avant-garde aesthetics, this sleeves becomes a sculptural manifesto Through layers of steel embracing latex through embellishments that metamorphose into draping The physical form whispers: a woman in a black leather outfit.', style: 'minimal', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7801.JPG',
      'Noir Leggings',
      'leggings',
      { description: 'When darkness takes form, this leggings becomes biomechanical incarnate Through layers of titanium embracing mesh as corsetry dance with embellishments in dark harmony Beneath the artistry lies truth: a woman in a black leather outfit and gloves.'s edges, this leggings births otherworldly chaos in Forged where obsidian meets chrome dominated by embellishments accented with corsetry At its core: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7803.WEBP',
      'Void Dress',
      'dress',
      { description: 'From the convergence of arcane chaos and architectural order, this dress rises titanium and mesh locked in eternal dialogue as harness dance with chains in dark harmony Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'flowing', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7804.JPG',
      'Shadow Accessory',
      'accessory',
      { description: 'Carved from the essence of night, this accessory wields avant-garde power A forbidden marriage of steel to metal while embellishments seduce chains into submission The physical form whispers: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7805.JPG',
      'Eclipse Coat',
      'coat',
      { description: 'In the depths of design rebellion, this coat shatters expectations with post-apocalyptic audacity Forged in the union of silk and leather where chains conspire with panels Beneath the artistry lies truth: a woman in a black leather outfit and gloves.', style: 'minimal', luxuryLevel: 'bespoke', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7806.JPG',
      'Phantom Jumpsuit',
      'jumpsuit',
      { description: 'From the convergence of neo-gothic chaos and arcane order, this jumpsuit rises Forged in the union of platinum and latex with spikes cascading into corsetry Reality bleeds through: a woman in a black and white photo.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7807.JPG',
      'Noir Harness',
      'harness',
      { description: 'Through the lens of sovereign innovation, this harness defies post-apocalyptic constraints Where carbon fiber dissolves into platinum where draping conspire with grommets Reality bleeds through: a woman in a black and white outfit.', style: 'flowing', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7809.JPG',
      'Void Corset',
      'corset',
      { description: 'Through the lens of futuristic innovation, this corset defies celestial constraints A forbidden marriage of carbon fiber to obsidian through zippers that metamorphose into corsetry The void reveals: a woman in a black leather outfit and gloves.', style: 'architectural', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7815 (1).JPG',
      'Shadow Bodysuit',
      'bodysuit',
      { description: 'Through the lens of mystical innovation, this bodysuit defies ethereal constraints silk and carbon fiber locked in eternal dialogue with corsetry cascading into panels Beneath the artistry lies truth: a woman in a black corse with a leather belt.', style: 'minimal', luxuryLevel: 'premium', useCase: 'performance' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7823.JPG',
      'Eclipse Gloves',
      'gloves',
      { description: 'Pushing the boundaries of ethereal aesthetics, this gloves becomes a enigmatic manifesto Where mesh dissolves into silk while panels seduce grommets into submission Reality bleeds through: a woman in a black leather outfit and gloves.', style: 'sculptural', luxuryLevel: 'premium', useCase: 'special occasion' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7827.JPG',
      'Phantom Collar',
      'collar',
      { description: 'Through the lens of mystical innovation, this collar defies post-apocalyptic constraints Forged in the union of metal and leather while chains seduce buckles into submission Beneath the artistry lies truth: a woman in a black leather outfit and a choker.', style: 'flowing', luxuryLevel: 'premium', useCase: 'evening' }
    ),
    createGalleryItem(
      '/images/miss-void/IMG_7831.JPG',
      'Noir Mask',
      'mask',
      { description: 'Where light fears to tread, this mask emerges with sovereign defiance Forged in the union of metal and crystal as spikes dance with corsetry in dark harmony Beneath the artistry lies truth: a woman in a black leather outfit and crown.', style: 'architectural', luxuryLevel: 'bespoke', useCase: 'performance' }
    )
  ];

  return (
    <GalleryPage
      title="MISS VOID"
      images={items}
      description="The definitive MISS VOID collection, representing the pinnacle of our design philosophy. Each piece is a careful balance of light and shadow, structure and flow, restriction and freedom. From signature corsets to avant-garde accessories, this collection showcases our commitment to transforming the human silhouette through architectural fashion. Every garment is meticulously crafted to create a dialogue between the body and the void, resulting in a profound transformation of both the wearer's form and presence."
    />
  );
} 