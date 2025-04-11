import os
import json
import base64
import requests
from PIL import Image
from pathlib import Path
import time

API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
headers = {"Authorization": f"Bearer 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"}

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')

def analyze_image(image_path):
    print(f"\nAnalyzing {image_path}...")
    
    # Convert image to base64
    image_data = encode_image(image_path)
    
    # Prepare the payload
    payload = {
        "inputs": {
            "image": image_data
        }
    }
    
    # Make the request with retry logic
    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = requests.post(API_URL, headers=headers, json=payload)
            response.raise_for_status()  # Raise an error for bad status codes
            
            if response.status_code == 503:
                print("Model is loading, waiting...")
                time.sleep(20)  # Wait for model to load
                continue
                
            result = response.json()
            print(f"Success! Generated description: {result}")
            return result
            
        except requests.exceptions.RequestException as e:
            if attempt == max_retries - 1:  # Last attempt
                raise e
            print(f"Attempt {attempt + 1} failed, retrying...")
            time.sleep(5)  # Wait before retry

def process_gallery(gallery_name):
    current_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    gallery_path = current_dir / "public" / "images" / gallery_name
    
    print(f"\nProcessing gallery: {gallery_name}")
    print(f"Gallery path: {gallery_path}")
    
    if not gallery_path.exists():
        print(f"Error: Gallery path does not exist: {gallery_path}")
        return
        
    descriptions = {}
    
    # List all image files in the directory
    image_files = []
    for ext in ['.jpg', '.JPG', '.webp', '.WEBP']:
        image_files.extend(gallery_path.glob(f"*{ext}"))
                 
    print(f"Found {len(image_files)} images")
    
    for image_file in sorted(image_files):
        if image_file.name == ".DS_Store":
            continue
            
        print(f"\nProcessing {image_file.name}...")
        try:
            result = analyze_image(str(image_file))
            
            if isinstance(result, list):
                description = result[0]["generated_text"]
            elif isinstance(result, dict):
                description = result.get('generated_text', str(result))
            else:
                description = str(result)
                
            descriptions[image_file.stem] = {
                "filename": image_file.name,
                "generated_description": description,
                "category": gallery_name.replace("void-", "").replace("boots", "boot"),
                "style": "minimal" if "minimal" in description.lower() else "architectural",
                "luxuryLevel": "premium",
                "useCase": "special occasion" if "special" in description.lower() else "evening"
            }
            print(f"Description generated: {description}")
            
            # Add a small delay between requests to avoid rate limiting
            time.sleep(2)
            
        except Exception as e:
            print(f"Error processing {image_file.name}: {str(e)}")
            print(f"Full error: {repr(e)}")
            
    # Save descriptions to JSON file
    output_file = current_dir / f"{gallery_name}_descriptions.json"
    with open(output_file, "w") as f:
        json.dump(descriptions, f, indent=2)
    
    print(f"\nDescriptions saved to {output_file}")

if __name__ == "__main__":
    # Process all galleries
    galleries = ["void-boots", "void-boudoir", "void-chic", "void-noire"]
    for gallery in galleries:
        process_gallery(gallery)
        print(f"\nCompleted processing {gallery}")
        time.sleep(5)  # Wait between galleries 