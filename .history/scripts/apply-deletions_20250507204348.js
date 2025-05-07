// This script helps generate code to permanently apply deletions from localStorage

// Paste the deleted images data from your console here
const deletedImagesData = {
  "MISS VOID": [
    "/images/miss-void/IMG_6556.JPG",
    "/images/miss-void/IMG_7831.JPG", 
    "/images/miss-void/IMG_6954.JPG", 
    "/images/miss-void/IMG_6589.JPG", 
    "/images/miss-void/IMG_6574.JPG"
  ],
  "VOID CHIC": [
    "/images/void-chic/IMG_8363.JPG", 
    "/images/void-chic/IMG_8360.JPG", 
    "/images/void-chic/IMG_8359.WEBP", 
    "/images/void-chic/IMG_8355.JPG", 
    "/images/void-chic/IMG_8357.WEBP", 
    "/images/void-chic/IMG_8358.JPG", 
    "/images/void-chic/IMG_8356.JPG", 
    "/images/void-chic/IMG_8353.JPG", 
    "/images/void-chic/IMG_8349.JPG", 
    "/images/void-chic/IMG_8342.JPG", 
    "/images/void-chic/IMG_8345.JPG", 
    "/images/void-chic/IMG_8337.WEBP", 
    "/images/void-chic/IMG_8330.JPG", 
    "/images/void-chic/IMG_8327.JPG", 
    "/images/void-chic/IMG_8324.JPG", 
    "/images/void-chic/IMG_8315.JPG", 
    "/images/void-chic/IMG_8312.JPG", 
    "/images/void-chic/IMG_8311.JPG", 
    "/images/void-chic/IMG_8310.JPG", 
    "/images/void-chic/IMG_8319.JPG", 
    "/images/void-chic/IMG_8317.JPG", 
    "/images/void-chic/IMG_8305.JPG", 
    "/images/void-chic/cover.JPG"
  ],
  "VOID INK": [
    "/images/void-ink/IMG_8489.JPG", 
    "/images/void-ink/IMG_8488.JPG", 
    "/images/void-ink/IMG_8487.JPG"
  ],
  "VOID NOIRE": [
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
  ],
  "undefined": [
    "/images/void-chic/IMG_8357.WEBP", 
    "/images/void-chic/IMG_8356.JPG", 
    "/images/void-chic/IMG_8355.JPG", 
    "/images/void-chic/IMG_8358.JPG", 
    "/images/void-boudoir/IMG_8127.JPG", 
    "/images/void-boudoir/IMG_8187.WEBP", 
    "/images/void-boudoir/IMG_8186.WEBP", 
    "/images/void-boudoir/IMG_8185.WEBP", 
    "/images/void-boudoir/IMG_8184.JPG", 
    "/images/void-boudoir/IMG_8183.JPG", 
    "/images/void-boudoir/IMG_8180.JPG", 
    "/images/void-boudoir/IMG_8179.JPG", 
    "/images/void-boudoir/IMG_8166.JPG", 
    "/images/void-boudoir/IMG_8163.JPG", 
    "/images/void-boudoir/IMG_8159.JPG", 
    "/images/void-boudoir/IMG_8131.JPG", 
    "/images/void-boudoir/IMG_8146.JPG"
  ]
};

// Generate a map of file paths to deleted images
const filePathMap = {
  'miss-void': [...deletedImagesData["MISS VOID"]],
  'void-chic': [...deletedImagesData["VOID CHIC"], 
                ...deletedImagesData["undefined"].filter(path => path.includes('void-chic'))],
  'void-ink': [...deletedImagesData["VOID INK"]],
  'void-noire': [...deletedImagesData["VOID NOIRE"]],
  'void-boudoir': [...deletedImagesData["undefined"].filter(path => path.includes('void-boudoir'))]
};

// Function to generate the filter code for each gallery
function generateFilterCode(gallerySlug) {
  const deletedImages = filePathMap[gallerySlug] || [];
  
  if (deletedImages.length === 0) {
    console.log(`No deletions found for ${gallerySlug}`);
    return;
  }
  
  console.log(`\n----- Code for src/app/gallery/${gallerySlug}/page.tsx -----\n`);
  console.log(`// Add this before the return statement:`);
  console.log(`  // Filter out deleted images`);
  console.log(`  const deletedImages = [`);
  
  deletedImages.forEach(path => {
    console.log(`    "${path}",`);
  });
  
  console.log(`  ];`);
  console.log(`  const filteredItems = items.filter(item => !deletedImages.includes(item.src));`);
  console.log(`\n// Then update the GalleryPage component to use filteredItems:`);
  console.log(`  return (`);
  console.log(`    <GalleryPage`);
  console.log(`      title="${gallerySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}"`);
  console.log(`      images={filteredItems}`);
  console.log(`      description="..."`);
  console.log(`      galleryName="${gallerySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}"`);
  console.log(`    />`);
  console.log(`  );`);
}

// Generate code for each gallery
console.log("Run this script with 'node scripts/apply-deletions.js' and copy the generated code into your gallery files.");
console.log("===== GENERATED CODE FOR EACH GALLERY =====");

Object.keys(filePathMap).forEach(gallerySlug => {
  generateFilterCode(gallerySlug);
});

// Clean up localStorage after applying deletions
console.log("\n===== AFTER APPLYING ALL CHANGES =====");
console.log("// Run this in the browser console to clear deletion data after all changes are applied:");
console.log("localStorage.removeItem('missvoid_deleted_images');");
console.log("localStorage.removeItem('missvoid_deleted_galleries');");
console.log("\nDONE! Your deletions will now be permanent across all devices!"); 