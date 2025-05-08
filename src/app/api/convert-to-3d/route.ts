import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Meshy API endpoint for Image to 3D conversion
const MESHY_API_ENDPOINT = "https://api.meshy.ai/openapi/v1/image-to-3d";
const MESHY_API_KEY = process.env.MESHY_API_KEY;

// Helper function to convert a local image URL to base64 data URI
async function convertLocalImageToBase64(imageUrl: string): Promise<string> {
  try {
    // Get file path from URL
    const filePath = path.join(process.cwd(), 'public', imageUrl.replace(/^\//, ''));
    console.log("Reading file from path:", filePath);
    
    // Read the file
    const fileBuffer = await fs.promises.readFile(filePath);
    
    // Get MIME type from extension
    const mimeType = getMimeTypeFromExtension(path.extname(filePath));
    
    // Convert to base64
    const base64Data = fileBuffer.toString('base64');
    return `data:${mimeType};base64,${base64Data}`;
  } catch (error) {
    console.error("Error converting local image to base64:", error);
    throw error;
  }
}

// Get MIME type from file extension
function getMimeTypeFromExtension(extension: string): string {
  switch (extension.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}

export async function POST(request: Request) {
  try {
    // Check if API key is available
    if (!MESHY_API_KEY) {
      console.error("Meshy API key is not configured");
      return NextResponse.json(
        { error: "Meshy API is not configured" },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { imageUrl, productType } = body;

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Image URL is required" },
        { status: 400 }
      );
    }

    console.log("Creating 3D model task for image:", imageUrl.substring(0, 50) + "...");
    console.log("Product type:", productType);
    
    // Convert local image URL to base64 if it's a local URL
    let image_url = imageUrl;
    if (imageUrl.startsWith('/')) {
      console.log("Converting local image to base64");
      image_url = await convertLocalImageToBase64(imageUrl);
      console.log("Converted to base64 data URI");
    }
    
    // Make API call to Meshy to initiate the conversion
    const response = await fetch(MESHY_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MESHY_API_KEY}`
      },
      body: JSON.stringify({
        image_url,
        should_remesh: true,
        should_texture: true,
        enable_pbr: false,
        topology: 'triangle', // Use triangle for faster conversion
        target_polycount: 30000, // Default value
        symmetry_mode: 'auto' // Auto-detect symmetry
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Meshy API error:", errorData);
      return NextResponse.json(
        { error: `Meshy API error: ${errorData.message || response.statusText}` },
        { status: response.status }
      );
    }

    // Parse response to get task ID
    const data = await response.json();
    const taskId = data.result;

    if (!taskId) {
      return NextResponse.json(
        { error: "Failed to get task ID from Meshy API" },
        { status: 500 }
      );
    }

    console.log("Successfully created Meshy task with ID:", taskId);

    // Return the task ID
    return NextResponse.json({
      success: true,
      taskId,
      message: "3D conversion task created successfully. Task is processing."
    });
    
  } catch (error) {
    console.error("Error creating 3D model task:", error);
    
    return NextResponse.json(
      { error: "Failed to create 3D model task. Please try again." },
      { status: 500 }
    );
  }
}

// Endpoint to check task status
export async function GET(request: Request) {
  try {
    // Get the task ID from URL parameters
    const url = new URL(request.url);
    const taskId = url.searchParams.get('taskId');

    if (!taskId) {
      return NextResponse.json(
        { error: "Task ID is required" },
        { status: 400 }
      );
    }

    if (!MESHY_API_KEY) {
      console.error("Meshy API key is not configured");
      return NextResponse.json(
        { error: "Meshy API is not configured" },
        { status: 500 }
      );
    }

    // Check task status with Meshy API
    const response = await fetch(`https://api.meshy.ai/openapi/v1/image-to-3d/${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${MESHY_API_KEY}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Meshy API error:", errorData);
      return NextResponse.json(
        { error: `Meshy API error: ${errorData.message || response.statusText}` },
        { status: response.status }
      );
    }

    // Get task details
    const taskData = await response.json();
    console.log("Meshy task status:", taskData.status);
    console.log("Meshy task progress:", taskData.progress);

    // Return task status and URLs if completed
    return NextResponse.json({
      success: true,
      status: taskData.status,
      progress: taskData.progress,
      model: taskData.status === 'SUCCEEDED' ? {
        glbUrl: taskData.model_urls?.glb || null,
        objUrl: taskData.model_urls?.obj || null,
        usdzUrl: taskData.model_urls?.usdz || null,
        thumbnailUrl: taskData.thumbnail_url || null,
        textureUrls: taskData.texture_urls || []
      } : null
    });
    
  } catch (error) {
    console.error("Error checking 3D model task status:", error);
    
    return NextResponse.json(
      { error: "Failed to check 3D model task status. Please try again." },
      { status: 500 }
    );
  }
} 