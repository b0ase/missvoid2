import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Stability AI API endpoint
const STABILITY_API_ENDPOINT = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

// Get the API key from environment variables
const STABILITY_API_KEY = process.env.STABILITY_AI_API_KEY;

// Ensure the uploads directory exists
const UPLOADS_DIR = path.join(process.cwd(), 'public/images/generated-designs');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

export async function POST(request: Request) {
  try {
    // Check if API key is available
    if (!STABILITY_API_KEY) {
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
      style_preset: "fashion-photography"
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
        { error: `Stability AI API error: ${errorData.message || response.statusText}` },
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

    // Save the image to disk
    const timestamp = Date.now();
    const typePrefix = productType || 'design';
    const filename = `${typePrefix}_${timestamp}.png`;
    const imagePath = path.join(UPLOADS_DIR, filename);
    
    // Convert base64 to buffer and save
    const imageBuffer = Buffer.from(generatedImage, 'base64');
    fs.writeFileSync(imagePath, imageBuffer);

    // Return the URL to the saved image
    const imageUrl = `/images/generated-designs/${filename}`;
    
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