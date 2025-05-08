import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the JSON file that stores deletion data (for development)
const dataFilePath = path.join(process.cwd(), 'src/app/data/deletedGalleries.json');

// In-memory storage for production (since Vercel has a read-only filesystem)
let memoryStorage = {
  deletedGalleries: [] as string[],
  deletedImages: {} as Record<string, string[]>
};

// Helper function to read the data
function readData() {
  // In production (Vercel), use in-memory storage
  if (process.env.VERCEL) {
    return memoryStorage;
  }
  
  // In development, use file-based storage
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or is invalid, return default structure
    return { deletedGalleries: [], deletedImages: {} };
  }
}

// Helper function to write data
function writeData(data: any) {
  // In production (Vercel), use in-memory storage
  if (process.env.VERCEL) {
    memoryStorage = data;
    return;
  }
  
  // In development, use file-based storage
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to data file:', error);
  }
}

// Initialize data from environment variables in production
if (process.env.VERCEL && process.env.DELETED_GALLERIES) {
  try {
    memoryStorage.deletedGalleries = JSON.parse(process.env.DELETED_GALLERIES);
  } catch (error) {
    console.error('Error parsing DELETED_GALLERIES env var:', error);
  }
}

if (process.env.VERCEL && process.env.DELETED_IMAGES) {
  try {
    memoryStorage.deletedImages = JSON.parse(process.env.DELETED_IMAGES);
  } catch (error) {
    console.error('Error parsing DELETED_IMAGES env var:', error);
  }
}

// GET handler to retrieve all deleted galleries and images
export async function GET() {
  try {
    const data = readData();
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
    const data = readData();

    if (action === 'deleteGallery' && galleryName) {
      // Add gallery to deleted list if not already there
      if (!data.deletedGalleries.includes(galleryName)) {
        data.deletedGalleries.push(galleryName);
        writeData(data);
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
        writeData(data);
      }
      return NextResponse.json({ success: true, message: 'Image deleted' });
    }
    else if (action === 'resetAll') {
      // Reset all deletions (for dev purposes)
      writeData({ deletedGalleries: [], deletedImages: {} });
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