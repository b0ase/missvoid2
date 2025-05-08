"use client";

import { getImagesForCategory, type GalleryName } from '../utils/images';

// Local storage keys
const DELETED_IMAGES_KEY = 'missvoid_deleted_images';
const DELETED_GALLERIES_KEY = 'missvoid_deleted_galleries';
const UPLOADED_IMAGES_KEY = 'missvoid_uploaded_images';

// Interface for deleted images storage
interface DeletedImagesStore {
  [galleryName: string]: string[]; // Gallery name -> array of image paths
}

// Server data cache to avoid unnecessary API calls
let serverDataCache: {
  deletedGalleries: string[],
  deletedImages: {[galleryName: string]: string[]}
} | null = null;

// Cache update timestamp
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch deleted items from server API
 */
async function fetchServerData(force = false) {
  // Use cache if available and not expired
  const now = Date.now();
  if (serverDataCache && (now - cacheTimestamp < CACHE_DURATION) && !force) {
    return serverDataCache;
  }
  
  try {
    const response = await fetch('/api/galleries');
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    serverDataCache = data;
    cacheTimestamp = now;
    return data;
  } catch (error) {
    console.error('Error fetching deleted items from server:', error);
    // Return empty data if API fails
    return { deletedGalleries: [], deletedImages: {} };
  }
}

/**
 * Get all images for a gallery, excluding deleted ones
 */
export async function getGalleryImages(galleryName: GalleryName): Promise<string[]> {
  const allImages = getImagesForCategory(galleryName);
  const deletedImages = await getDeletedImages(galleryName);
  
  return allImages.filter(imagePath => !deletedImages.includes(imagePath));
}

/**
 * Get all deleted images for a specific gallery
 */
export async function getDeletedImages(galleryName: string): Promise<string[]> {
  // Get server-side deleted images
  const serverData = await fetchServerData();
  const serverDeletedImages = serverData.deletedImages[galleryName] || [];

  // Get client-side deleted images
  const clientDeletedImages = getClientDeletedImages(galleryName);
  
  // Combine both sources
  return [...new Set([...serverDeletedImages, ...clientDeletedImages])];
}

/**
 * Get client-side only deleted images
 */
function getClientDeletedImages(galleryName: string): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const deletedImagesJson = localStorage.getItem(DELETED_IMAGES_KEY);
    if (!deletedImagesJson) return [];
    
    const deletedImagesStore = JSON.parse(deletedImagesJson) as DeletedImagesStore;
    return deletedImagesStore[galleryName] || [];
  } catch (error) {
    console.error('Error loading deleted images:', error);
    return [];
  }
}

/**
 * Delete an image from a gallery
 */
export async function deleteImage(galleryName: string, imagePath: string): Promise<void> {
  // First update localStorage for immediate UI effect
  if (typeof window !== 'undefined') {
    try {
      const deletedImagesJson = localStorage.getItem(DELETED_IMAGES_KEY);
      const deletedImagesStore: DeletedImagesStore = deletedImagesJson 
        ? JSON.parse(deletedImagesJson) 
        : {};
      
      const galleryDeletedImages = deletedImagesStore[galleryName] || [];
      
      // Only add if not already deleted
      if (!galleryDeletedImages.includes(imagePath)) {
        deletedImagesStore[galleryName] = [...galleryDeletedImages, imagePath];
        localStorage.setItem(DELETED_IMAGES_KEY, JSON.stringify(deletedImagesStore));
      }
    } catch (error) {
      console.error('Error updating local storage for deleted image:', error);
    }
  }
  
  // Then update server through API
  try {
    const response = await fetch('/api/galleries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteImage',
        galleryName,
        imagePath
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Update cache with new server data
    const data = await response.json();
    if (data.success) {
      // Force update the cache
      await fetchServerData(true);
    }
  } catch (error) {
    console.error('Error deleting image on server:', error);
  }
}

/**
 * Get all deleted galleries
 */
export async function getDeletedGalleries(): Promise<string[]> {
  // Get server-side deleted galleries
  const serverData = await fetchServerData();
  const serverDeletedGalleries = serverData.deletedGalleries || [];

  // Get client-side deleted galleries
  const clientDeletedGalleries = getClientDeletedGalleries();
  
  // Combine both sources
  return [...new Set([...serverDeletedGalleries, ...clientDeletedGalleries])];
}

/**
 * Get client-side only deleted galleries
 */
function getClientDeletedGalleries(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const deletedGalleriesJson = localStorage.getItem(DELETED_GALLERIES_KEY);
    return deletedGalleriesJson ? JSON.parse(deletedGalleriesJson) : [];
  } catch (error) {
    console.error('Error loading deleted galleries:', error);
    return [];
  }
}

/**
 * Delete a gallery
 */
export async function deleteGallery(galleryName: string): Promise<void> {
  // First update localStorage for immediate UI effect
  if (typeof window !== 'undefined') {
    try {
      const deletedGalleriesJson = localStorage.getItem(DELETED_GALLERIES_KEY);
      const deletedGalleries: string[] = deletedGalleriesJson 
        ? JSON.parse(deletedGalleriesJson) 
        : [];
      
      // Only add if not already deleted
      if (!deletedGalleries.includes(galleryName)) {
        const updatedDeletedGalleries = [...deletedGalleries, galleryName];
        localStorage.setItem(DELETED_GALLERIES_KEY, JSON.stringify(updatedDeletedGalleries));
      }
    } catch (error) {
      console.error('Error updating local storage for deleted gallery:', error);
    }
  }
  
  // Then update server through API
  try {
    const response = await fetch('/api/galleries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteGallery',
        galleryName
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Update cache with new server data
    const data = await response.json();
    if (data.success) {
      // Force update the cache
      await fetchServerData(true);
    }
  } catch (error) {
    console.error('Error deleting gallery on server:', error);
  }
}

/**
 * Reset all deleted galleries and images (for dev purposes)
 */
export async function resetDeletedItems(): Promise<void> {
  // Clear localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem(DELETED_IMAGES_KEY);
    localStorage.removeItem(DELETED_GALLERIES_KEY);
  }
  
  // Reset server data through API
  try {
    const response = await fetch('/api/galleries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'resetAll'
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Force update the cache
    await fetchServerData(true);
  } catch (error) {
    console.error('Error resetting deletions on server:', error);
  }
}

/**
 * Store an uploaded image
 */
export function uploadImage(galleryName: string, file: File, metadata: any = {}): string {
  // Create a unique ID for the image
  const imageId = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
  
  // In a real app, you would upload to a server here
  // For now, we'll store in localStorage

  // Convert file to data URL to mock storage
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target?.result as string;
    
    // Get existing uploaded images
    const uploadedImagesStr = localStorage.getItem(UPLOADED_IMAGES_KEY) || '{}';
    const uploadedImages = JSON.parse(uploadedImagesStr);
    
    // Initialize gallery array if it doesn't exist
    if (!uploadedImages[galleryName]) {
      uploadedImages[galleryName] = [];
    }
    
    // Add the new image with metadata
    uploadedImages[galleryName].push({
      id: imageId,
      src: dataUrl,
      name: file.name,
      title: metadata.title || file.name,
      type: metadata.type || 'other',
      metadata: metadata,
      uploadDate: new Date().toISOString()
    });
    
    // Save back to localStorage
    localStorage.setItem(UPLOADED_IMAGES_KEY, JSON.stringify(uploadedImages));
  };
  
  reader.readAsDataURL(file);
  
  // Return the generated path that will be used to reference this image
  return `/images/uploads/${galleryName}/${imageId}`;
}

/**
 * Get all uploaded images for a gallery
 */
export function getUploadedImages(galleryName: string): any[] {
  if (typeof window === 'undefined') return [];
  
  const uploadedImagesStr = localStorage.getItem(UPLOADED_IMAGES_KEY) || '{}';
  const uploadedImages = JSON.parse(uploadedImagesStr);
  
  return uploadedImages[galleryName] || [];
}

/**
 * Delete an uploaded image
 */
export function deleteUploadedImage(galleryName: string, imageId: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const uploadedImagesStr = localStorage.getItem(UPLOADED_IMAGES_KEY) || '{}';
  const uploadedImages = JSON.parse(uploadedImagesStr);
  
  if (!uploadedImages[galleryName]) {
    return false;
  }
  
  const imageIndex = uploadedImages[galleryName].findIndex((img: any) => img.id === imageId);
  
  if (imageIndex === -1) {
    return false;
  }
  
  uploadedImages[galleryName].splice(imageIndex, 1);
  localStorage.setItem(UPLOADED_IMAGES_KEY, JSON.stringify(uploadedImages));
  
  return true;
} 