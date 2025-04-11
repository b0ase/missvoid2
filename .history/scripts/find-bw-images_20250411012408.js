const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if an image is black and white using ImageMagick
function isBlackAndWhite(imagePath) {
  try {
    // Run ImageMagick to check if image is grayscale
    // This command gets unique colors and checks if they're all on the same channel
    const result = execSync(`identify -format "%[colorspace]" "${imagePath}"`).toString().trim();
    return result === 'Gray' || result === 'Grayscale';
  } catch (error) {
    console.error(`Error checking ${imagePath}:`, error.message);
    return false;
  }
}

// Main function to process all images
async function findAndMoveBlackAndWhiteImages() {
  const imageBasePath = path.join(process.cwd(), 'public', 'images');
  const targetDir = path.join(imageBasePath, 'void-noire');
  
  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Get all directories except void-noire
  const directories = fs.readdirSync(imageBasePath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'void-noire' && dirent.name !== 'placeholder')
    .map(dirent => dirent.name);
    
  console.log('Scanning directories:', directories);
  
  // Array to store found B&W images
  const blackAndWhiteImages = [];
  
  // Check all images in each directory
  for (const dir of directories) {
    const dirPath = path.join(imageBasePath, dir);
    const files = fs.readdirSync(dirPath)
      .filter(file => file.toLowerCase().endsWith('.jpg') || 
               file.toLowerCase().endsWith('.jpeg') || 
               file.toLowerCase().endsWith('.webp'));
    
    console.log(`Checking ${files.length} images in ${dir}...`);
    
    for (const file of files) {
      if (file === 'cover.jpg') continue; // Skip cover images
      
      const filePath = path.join(dirPath, file);
      console.log(`Analyzing ${filePath}...`);
      
      if (isBlackAndWhite(filePath)) {
        blackAndWhiteImages.push({
          sourcePath: filePath,
          fileName: file,
          sourceDir: dir
        });
        console.log(`Found B&W image: ${file} in ${dir}`);
      }
    }
  }
  
  console.log(`Found ${blackAndWhiteImages.length} black and white images`);
  
  // Copy B&W images to void-noire directory
  blackAndWhiteImages.forEach((image, index) => {
    const newFileName = `bw_${image.sourceDir}_${image.fileName}`;
    const targetPath = path.join(targetDir, newFileName);
    
    try {
      fs.copyFileSync(image.sourcePath, targetPath);
      console.log(`Copied ${image.fileName} to ${targetPath}`);
    } catch (error) {
      console.error(`Error copying ${image.fileName}:`, error.message);
    }
  });
  
  console.log('Finished moving black and white images to void-noire directory');
  
  // Return the list of moved images
  return blackAndWhiteImages;
}

// Run the function
findAndMoveBlackAndWhiteImages()
  .then(images => {
    console.log(`Successfully processed ${images.length} black and white images`);
    process.exit(0);
  })
  .catch(error => {
    console.error('Error processing images:', error);
    process.exit(1);
  }); 