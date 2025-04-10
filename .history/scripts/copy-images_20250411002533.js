const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceRoot = path.join(__dirname, '../..');
const destRoot = path.join(__dirname, '../public/images');

// Map folder names to URL-friendly paths
const folderMap = {
  'MISS VOID': 'miss-void',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID CHIC': 'void-chic',
  'VOID FOOTWEAR': 'void-footwear',
  'VOID INDUSTRY': 'void-industry',
  'VOID INK': 'void-ink',
  'VOID MUSCLES': 'void-muscles',
  'VOID XXX': 'void-xxx'
};

// Ensure destination directories exist
Object.values(folderMap).forEach(folder => {
  const destDir = path.join(destRoot, folder);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }
});

// Copy images from each source folder to its destination
Object.entries(folderMap).forEach(([srcFolderName, destFolderName]) => {
  const srcDir = path.join(sourceRoot, srcFolderName);
  const destDir = path.join(destRoot, destFolderName);
  
  // Check if source directory exists
  if (!fs.existsSync(srcDir)) {
    console.warn(`Source directory not found: ${srcDir}`);
    return;
  }
  
  // Get list of files in source directory
  const files = fs.readdirSync(srcDir);
  
  // Image file extensions to copy
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  
  // Copy each image file to destination
  let copiedCount = 0;
  
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      
      // Copy file
      fs.copyFileSync(srcFile, destFile);
      copiedCount++;
      
      // If this is the first image, also create a cover.jpg
      if (copiedCount === 1) {
        const coverFile = path.join(destDir, 'cover.jpg');
        fs.copyFileSync(srcFile, coverFile);
        console.log(`Created cover image: ${coverFile}`);
      }
    }
  });
  
  console.log(`Copied ${copiedCount} images from ${srcFolderName} to ${destDir}`);
});

console.log('Image copying complete!'); 