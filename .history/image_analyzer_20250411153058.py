import os
import json
import requests
from PIL import Image
from pathlib import Path

API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
headers = {"Authorization": "Bearer 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"}

def analyze_image(image_path):
    with open(image_path, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

def process_gallery(gallery_name):
    gallery_path = Path(f"public/images/{gallery_name}")
    descriptions = {}
    
    for image_file in gallery_path.glob("*.{jpg,JPG,webp,WEBP}"):
        if image_file.name == ".DS_Store":
            continue
            
        print(f"Processing {image_file.name}...")
        try:
            result = analyze_image(str(image_file))
            descriptions[image_file.stem] = {
                "filename": image_file.name,
                "generated_description": result[0]["generated_text"] if isinstance(result, list) else str(result),
                "title": "",  # To be filled manually if needed
                "category": "",  # To be filled manually if needed
                "materials": [],  # To be filled manually if needed
                "style": "",  # To be filled manually if needed
                "luxuryLevel": "premium"  # Default value
            }
        except Exception as e:
            print(f"Error processing {image_file.name}: {str(e)}")
            
    # Save descriptions to JSON file
    output_file = f"{gallery_name}_descriptions.json"
    with open(output_file, "w") as f:
        json.dump(descriptions, f, indent=2)
    
    print(f"\nDescriptions saved to {output_file}")

if __name__ == "__main__":
    # Process both galleries
    process_gallery("void-boudoir")
    process_gallery("void-chic") 