const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
      .filter(file => 
        file.toLowerCase().endsWith('.jpg') || 
        file.toLowerCase().endsWith('.jpeg') || 
        file.toLowerCase().endsWith('.webp'));
    
    console.log(`Checking ${files.length} images in ${dir}...`);
    
    for (const file of files) {
      if (file === 'cover.jpg') continue; // Skip cover images
      
      const filePath = path.join(dirPath, file);
      
      try {
        // Determine if the image is black and white by checking its colorspace
        // or by checking color variance
        const output = execSync(`identify -format "%[colorspace]" "${filePath}"`).toString().trim();
        
        if (output === 'Gray' || output === 'Grayscale') {
          console.log(`Found grayscale image: ${file} in ${dir}`);
          blackAndWhiteImages.push({ sourcePath: filePath, fileName: file, sourceDir: dir });
        } else {
          // If not explicitly grayscale, check if the image is effectively black and white
          // by measuring color variance (using ImageMagick's standard deviation of colors)
          const colorVariance = execSync(`convert "${filePath}" -colorspace RGB -format "%[fx:standard_deviation.r - standard_deviation.g]" info:`).toString().trim();
          const variance = parseFloat(colorVariance);
          
          // If color channels have very similar variance, it's likely a B&W image
          if (Math.abs(variance) < 0.01) {
            console.log(`Found effective B&W image: ${file} in ${dir} (variance: ${variance})`);
            blackAndWhiteImages.push({ sourcePath: filePath, fileName: file, sourceDir: dir });
          }
        }
      } catch (error) {
        console.error(`Error analyzing ${filePath}:`, error.message);
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
  
  // Return the list of found images
  return blackAndWhiteImages;
}

// Run the script
findAndMoveBlackAndWhiteImages()
  .then(images => {
    console.log(`Successfully processed ${images.length} black and white images`);
    
    // Update the void-noire gallery page to include these images
    const newImagePaths = images.map(img => 
      `/images/void-noire/bw_${img.sourceDir}_${img.fileName}`
    );
    
    console.log('New image paths:', newImagePaths);
    console.log('Add these paths to the void-noire gallery page');
  })
  .catch(error => {
    console.error('Error:', error);
  }); 