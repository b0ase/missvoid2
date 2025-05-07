"use client";

import React, { useState, useRef } from 'react';
import { uploadImage } from '../services/galleryService';
import { createGalleryItem, type ItemCategory } from '../utils/galleryDescriptions';

interface ImageUploaderProps {
  galleryName: string;
  onUploadComplete: (newItem: any) => void;
}

export default function ImageUploader({ galleryName, onUploadComplete }: ImageUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<ItemCategory>('other' as ItemCategory);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Set default title from filename (without extension)
      const fileName = file.name.split('.')[0].replace(/_/g, ' ');
      setTitle(fileName);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) return;
    
    setIsUploading(true);
    
    // Create metadata
    const metadata = {
      title: title || selectedFile.name,
      type: type,
      style: 'minimal',
      luxuryLevel: 'premium',
      useCase: 'special occasion'
    };
    
    // Upload image
    const imagePath = uploadImage(galleryName, selectedFile, metadata);
    
    // Create a gallery item
    const newItem = createGalleryItem(
      imagePath,
      metadata.title,
      metadata.type,
      { 
        style: metadata.style, 
        luxuryLevel: metadata.luxuryLevel, 
        useCase: metadata.useCase 
      }
    );
    
    // Notify parent
    onUploadComplete(newItem);
    
    // Reset form
    setSelectedFile(null);
    setPreviewUrl(null);
    setTitle('');
    setType('other' as ItemCategory);
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setTitle('');
    setType('other' as ItemCategory);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const typeOptions: ItemCategory[] = [
    'bodysuit', 'corset', 'harness', 'gown', 'dress', 
    'boots', 'mask', 'collar', 'gloves', 'top', 
    'skirt', 'leggings', 'portrait', 'accessory'
  ];
  
  return (
    <div className="bg-zinc-900 p-4 rounded-lg mb-6">
      <h3 className="text-xl font-bold mb-4">Upload New Image</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">
            Select Image:
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded-md"
              disabled={isUploading}
            />
          </label>
        </div>
        
        {previewUrl && (
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-h-60 max-w-full object-contain"
              />
            </div>
          </div>
        )}
        
        <div>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded-md"
              disabled={isUploading}
              required
            />
          </label>
        </div>
        
        <div>
          <label className="block mb-2">
            Type:
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ItemCategory)}
              className="mt-1 block w-full px-3 py-2 border border-gray-600 bg-zinc-800 rounded-md"
              disabled={isUploading}
              required
            >
              <option value="">Select Type</option>
              {typeOptions.map(option => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </button>
          
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 bg-transparent border border-white text-white rounded hover:bg-zinc-700 transition"
            disabled={isUploading}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
} 