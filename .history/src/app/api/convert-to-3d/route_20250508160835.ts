import { NextResponse } from 'next/server';

// Meshy API endpoint for Image to 3D conversion
const MESHY_API_ENDPOINT = "https://api.meshy.ai/openapi/v1/image-to-3d";
const MESHY_API_KEY = process.env.MESHY_API_KEY;

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
    
    // Make API call to Meshy to initiate the conversion
    const response = await fetch(MESHY_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MESHY_API_KEY}`
      },
      body: JSON.stringify({
        image_url: imageUrl,
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