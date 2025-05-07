"use client";

import { getImagesForCategory, type GalleryName } from '../utils/images';

// Local storage keys
const DELETED_IMAGES_KEY = 'missvoid_deleted_images';
const DELETED_GALLERIES_KEY = 'missvoid_deleted_galleries';

// Interface for deleted images storage
interface DeletedImagesStore {
  [galleryName: string]: string[]; // Gallery name -> array of image paths
}

/**
 * Get all images for a gallery, excluding deleted ones
 */
export function getGalleryImages(galleryName: GalleryName): string[] {
  const allImages = getImagesForCategory(galleryName);
  const deletedImages = getDeletedImages(galleryName);
  
  return allImages.filter(imagePath => !deletedImages.includes(imagePath));
}

/**
 * Get all deleted images for a specific gallery
 */
export function getDeletedImages(galleryName: string): string[] {
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
export function deleteImage(galleryName: string, imagePath: string): void {
  if (typeof window === 'undefined') return;
  
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
    console.error('Error deleting image:', error);
  }
}

/**
 * Get all deleted galleries
 */
export function getDeletedGalleries(): string[] {
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
export function deleteGallery(galleryName: string): void {
  if (typeof window === 'undefined') return;
  
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
    console.error('Error deleting gallery:', error);
  }
}

/**
 * Reset all deleted galleries and images (for dev purposes)
 */
export function resetDeletedItems(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(DELETED_IMAGES_KEY);
  localStorage.removeItem(DELETED_GALLERIES_KEY);
} 