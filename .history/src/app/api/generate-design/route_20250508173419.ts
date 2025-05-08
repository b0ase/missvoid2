import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Stability AI API endpoint
const STABILITY_API_ENDPOINT = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

// Get the API key from environment variables
const STABILITY_API_KEY = process.env.STABILITY_AI_API_KEY;

// Ensure the uploads directory exists
const UPLOADS_DIR = path.join(process.cwd(), 'public/images/generated-designs');
// Try to create directory, but don't throw if it fails (for Vercel deployments)
try {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
} catch (error) {
  console.warn("Could not create uploads directory:", error);
  // Continue anyway, as we'll handle saving differently in production
}

export async function POST(request: Request) {
  try {
    // Check if API key is available
    if (!STABILITY_API_KEY) {
      console.error("Missing Stability AI API key");
      return NextResponse.json(
        { error: "Stability AI API key is not configured" },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { prompt, productType } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Default configuration for Stability AI
    const requestBody = {
      text_prompts: [
        {
          text: prompt,
          weight: 1
        },
        {
          text: "low quality, blurry, distorted, deformed, disfigured, bad anatomy, watermark, signature, colorful, bright colors, casual clothing, out of frame",
          weight: -1
        }
      ],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      samples: 1,
      steps: 50,
      style_preset: "photographic"
    };

    console.log("Sending request to Stability AI with prompt:", prompt);

    // Make the API call to Stability
    const response = await fetch(STABILITY_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${STABILITY_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Stability API error:", errorData);
      return NextResponse.json(
        { error: `Stability AI API error: ${JSON.stringify(errorData)}` },
        { status: response.status }
      );
    }

    // Parse and process the response
    const responseData = await response.json();
    
    // Extract the base64 image from the response
    const generatedImage = responseData.artifacts?.[0]?.base64;
    
    if (!generatedImage) {
      return NextResponse.json(
        { error: "Failed to generate image" },
        { status: 500 }
      );
    }

    // Generate file info
    const timestamp = Date.now();
    const typePrefix = productType || 'design';
    const filename = `${typePrefix}_${timestamp}.png`;
    
    // In production (Vercel), we can't write to the filesystem
    const isProduction = process.env.NODE_ENV === 'production';
    let imageUrl;
    
    if (isProduction) {
      // For production, return the base64 image directly
      // Client-side can display it, but we won't persist it to disk
      return NextResponse.json({
        success: true,
        imageUrl: `data:image/png;base64,${generatedImage}`,
        message: "Design generated successfully"
      });
    } else {
      // For development, save the image to disk
      try {
        const imagePath = path.join(UPLOADS_DIR, filename);
        // Convert base64 to buffer and save
        const imageBuffer = Buffer.from(generatedImage, 'base64');
        fs.writeFileSync(imagePath, imageBuffer);
        imageUrl = `/images/generated-designs/${filename}`;
      } catch (fsError) {
        console.error("Failed to save image to disk:", fsError);
        // Fallback to base64 if file saving fails
        imageUrl = `data:image/png;base64,${generatedImage}`;
      }
    }
    
    return NextResponse.json({
      success: true,
      imageUrl,
      message: "Design generated successfully"
    });
    
  } catch (error) {
    console.error("Error generating design:", error);
    
    return NextResponse.json(
      { error: "Failed to generate design. Please try again." },
      { status: 500 }
    );
  }
} 