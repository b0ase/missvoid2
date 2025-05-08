import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the JSON file that stores deletion data
const dataFilePath = path.join(process.cwd(), 'src/app/data/deletedGalleries.json');

// Helper function to read the data file
function readDataFile() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or is invalid, return default structure
    return { deletedGalleries: [], deletedImages: {} };
  }
}

// Helper function to write to the data file
function writeDataFile(data: any) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// GET handler to retrieve all deleted galleries and images
export async function GET() {
  try {
    const data = readDataFile();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve data' },
      { status: 500 }
    );
  }
}

// POST handler to delete a gallery
export async function POST(request: Request) {
  try {
    const { action, galleryName, imagePath } = await request.json();
    const data = readDataFile();

    if (action === 'deleteGallery' && galleryName) {
      // Add gallery to deleted list if not already there
      if (!data.deletedGalleries.includes(galleryName)) {
        data.deletedGalleries.push(galleryName);
        writeDataFile(data);
      }
      return NextResponse.json({ success: true, message: 'Gallery deleted' });
    } 
    else if (action === 'deleteImage' && galleryName && imagePath) {
      // Initialize array for gallery if it doesn't exist
      if (!data.deletedImages[galleryName]) {
        data.deletedImages[galleryName] = [];
      }
      
      // Add image to deleted list if not already there
      if (!data.deletedImages[galleryName].includes(imagePath)) {
        data.deletedImages[galleryName].push(imagePath);
        writeDataFile(data);
      }
      return NextResponse.json({ success: true, message: 'Image deleted' });
    }
    else if (action === 'resetAll') {
      // Reset all deletions (for dev purposes)
      writeDataFile({ deletedGalleries: [], deletedImages: {} });
      return NextResponse.json({ success: true, message: 'All deletions reset' });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error handling delete request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 