#!/usr/bin/env python3

import os
import re
from collections import defaultdict
from typing import Dict, List, Set
from PIL import Image
from dotenv import load_dotenv
import torch
from transformers import CLIPProcessor, CLIPModel
import io
from pathlib import Path
import time
import json
import random

# Load environment variables
load_dotenv()

# Initialize CLIP model and processor
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Fashion-specific vocabulary for enhancing descriptions
FASHION_ADJECTIVES = [
    "avant-garde", "ethereal", "sculptural", "architectural", "otherworldly",
    "celestial", "imperial", "sovereign", "regal", "majestic",
    "enigmatic", "transcendent", "ethereal", "mystical", "arcane",
    "futuristic", "cybernetic", "biomechanical", "neo-gothic", "post-apocalyptic"
]

FASHION_MATERIALS = [
    "leather", "silk", "metal", "chrome", "obsidian",
    "velvet", "mesh", "latex", "carbon fiber", "titanium",
    "crystal", "glass", "steel", "silver", "platinum"
]

FASHION_ELEMENTS = [
    "corsetry", "harness", "buckles", "straps", "chains",
    "spikes", "panels", "layers", "pleats", "draping",
    "embellishments", "hardware", "zippers", "clasps", "grommets"
]

def generate_prompt(category: str) -> str:
    """Generate a detailed prompt based on the category."""
    prompts = {
        "boots": "These luxury boots feature unique design elements with",
        "corset": "This high-fashion corset showcases intricate construction with",
        "dress": "This avant-garde dress presents a striking silhouette with",
        "harness": "This designer harness demonstrates innovative strap configuration with",
        "bodysuit": "This luxury bodysuit exhibits distinctive design elements with",
        "default": "This high-fashion piece displays unique construction with"
    }
    return prompts.get(category.lower(), prompts["default"])

class GalleryAnalyzer:
    def __init__(self):
        self.galleries = defaultdict(list)
        self.styles = defaultdict(int)
        self.luxury_levels = defaultdict(int)
        self.use_cases = defaultdict(int)
        self.categories = defaultdict(int)
        self.total_items = 0
        
    def enhance_description(self, base_description: str, category: str) -> str:
        """Enhance a basic description with creative fashion-specific elements."""
        # Select multiple random elements for more variety
        adj1 = random.choice(FASHION_ADJECTIVES)
        adj2 = random.choice([adj for adj in FASHION_ADJECTIVES if adj != adj1])
        material1 = random.choice(FASHION_MATERIALS)
        material2 = random.choice([mat for mat in FASHION_MATERIALS if mat != material1])
        element1 = random.choice(FASHION_ELEMENTS)
        element2 = random.choice([elem for elem in FASHION_ELEMENTS if elem != element1])
        
        # More poetic and fashion-forward opening templates
        openings = [
            f"In the depths of design rebellion, this {category} shatters expectations with {adj1} audacity",
            f"Where light fears to tread, this {category} emerges with {adj1} defiance",
            f"Pushing the boundaries of {adj1} aesthetics, this {category} becomes a {adj2} manifesto",
            f"From the convergence of {adj1} chaos and {adj2} order, this {category} rises",
            f"A whisper of {adj1} darkness, this {category} speaks in {adj2} tongues",
            f"Dancing on the edge of possibility, this {category} embodies {adj1} rebellion",
            f"In the space between shadow and form, this {category} crafts {adj1} poetry",
            f"Carved from the essence of night, this {category} wields {adj1} power",
            f"Through the lens of {adj1} innovation, this {category} defies {adj2} constraints",
            f"When darkness takes form, this {category} becomes {adj1} incarnate"
        ]
        
        # More sophisticated material descriptions
        material_desc = random.choice([
            f"Forged in the union of {material1} and {material2}",
            f"Where {material1} dissolves into {material2}",
            f"Through layers of {material1} embracing {material2}",
            f"{material1} and {material2} locked in eternal dialogue",
            f"A forbidden marriage of {material1} to {material2}"
        ])
        
        # More dynamic element descriptions
        element_desc = random.choice([
            f"with {element1} cascading into {element2}",
            f"through {element1} that metamorphose into {element2}",
            f"as {element1} dance with {element2} in dark harmony",
            f"where {element1} conspire with {element2}",
            f"while {element1} seduce {element2} into submission"
        ])
        
        # More evocative observation introductions
        closings = [
            f"Beneath the artistry lies truth: {base_description}",
            f"The physical form whispers: {base_description}",
            f"Reality bleeds through: {base_description}",
            f"The void reveals: {base_description}",
            f"Through mortal eyes: {base_description}"
        ]
        
        # Construct the full description
        parts = [
            random.choice(openings),
            material_desc,
            element_desc,
            random.choice(closings)
        ]
        
        return " ".join(parts) + "."

    def generate_image_description(self, image_path: str, category: str) -> str:
        """Generate a detailed description for an image using CLIP."""
        try:
            if not os.path.exists(image_path):
                print(f"Image file not found: {image_path}")
                return "Image file not found"

            print(f"\nProcessing image: {image_path}")
            
            # Load and preprocess image
            image = Image.open(image_path)
            
            # Generate candidate descriptions based on category
            base_prompt = generate_prompt(category)
            candidates = [
                f"{base_prompt} elegant details",
                f"{base_prompt} gothic elements",
                f"{base_prompt} modern aesthetics",
                f"{base_prompt} industrial accents",
                f"{base_prompt} minimalist design",
                f"{base_prompt} avant-garde features",
                f"{base_prompt} architectural structure",
                f"{base_prompt} cyberpunk influence",
                f"{base_prompt} dark romantic style",
                f"{base_prompt} futuristic elements"
            ]
            
            # Process image and text with CLIP
            inputs = processor(
                images=image,
                text=candidates,
                return_tensors="pt",
                padding=True
            )
            
            # Get image and text features
            image_features = model.get_image_features(**{k: v for k, v in inputs.items() if k.startswith('pixel_values')})
            text_features = model.get_text_features(**{k: v for k, v in inputs.items() if k.startswith('input_ids')})
            
            # Calculate similarity scores
            similarity = torch.nn.functional.cosine_similarity(
                image_features.unsqueeze(1),
                text_features.unsqueeze(0),
                dim=-1
            )
            
            # Get the best matching description
            best_match_idx = similarity.argmax().item()
            base_description = candidates[best_match_idx]
            
            # Enhance the base description with creative elements
            return self.enhance_description(base_description, category)
            
        except Exception as e:
            print(f"Error generating description for {image_path}: {str(e)}")
            return f"Error: {str(e)}"

    def parse_gallery_file(self, file_path: str) -> None:
        """Parse a gallery's page.tsx file to extract item information."""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
                
            # Extract gallery name from path
            gallery_name = os.path.basename(os.path.dirname(file_path))
            
            # First try to find simple image arrays
            array_match = re.search(r'Array\.from\(\{\s*length:\s*(\d+)\s*\}', content)
            if array_match:
                num_images = int(array_match.group(1))
                # Create simple items for each image
                for i in range(num_images):
                    item_info = {
                        'src': f'Image {i+1}',
                        'title': f'Item {i+1}',
                        'category': gallery_name.replace('void-', '').replace('-', ' '),
                        'style': 'architectural',  # Default style
                        'luxury_level': 'premium',  # Default luxury level
                        'use_case': 'special occasion'  # Default use case
                    }
                    self.galleries[gallery_name].append(item_info)
                    self.styles[item_info['style']] += 1
                    self.luxury_levels[item_info['luxury_level']] += 1
                    self.use_cases[item_info['use_case']] += 1
                    self.categories[item_info['category']] += 1
                    self.total_items += 1
                return
            
            # Find all createGalleryItem calls with both single and double quotes
            items = re.finditer(
                r'createGalleryItem\(\s*' +
                r'["\']([^"\']+)["\'],\s*' +  # src
                r'["\']([^"\']+)["\'],\s*' +  # title
                r'["\']([^"\']+)["\'],\s*' +  # category
                r'[{\s]*([^}]+)[}\s]*' +   # options
                r'\)',
                content
            )
            
            # Process direct createGalleryItem calls
            for item in items:
                self._process_item(item.groups(), gallery_name)
                
            # Find array generations with createGalleryItem
            array_items = re.finditer(
                r'Array\.from\({[^}]+}\s*,\s*\([^)]*\)\s*=>\s*{[^}]*return\s+createGalleryItem\(\s*' +
                r'[`"\']([^`"\']+)[`"\'],\s*' +  # src
                r'[`"\']([^`"\']+)[`"\'],\s*' +  # title
                r'[`"\']([^`"\']+)[`"\'],\s*' +  # category
                r'[{\s]*([^}]+)[}\s]*' +   # options
                r'\)',
                content
            )
            
            # Process array-generated items
            for item in array_items:
                self._process_item(item.groups(), gallery_name)
                
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    def _process_item(self, groups, gallery_name):
        """Process a single gallery item from regex groups."""
        src, title, category, options = groups
        
        # Get the full path to the image
        image_path = os.path.join('public', src.lstrip('/'))
        
        print(f"\n{'='*50}")
        print(f"Processing: {title}")
        print(f"Category: {category}")
        print(f"Image: {src}")
        
        # Generate AI description if image exists
        ai_description = ""
        if os.path.exists(image_path):
            ai_description = self.generate_image_description(image_path, category)
            print(f"\nGenerated Description:")
            print(f"{ai_description}\n")
        
        # Parse options with more flexible patterns
        style = re.search(r"style:\s*['\"]([^'\"]+)['\"]", options)
        luxury = re.search(r"luxuryLevel:\s*['\"]([^'\"]+)['\"]", options)
        use_case = re.search(r"useCase:\s*['\"]([^'\"]+)['\"]", options)
        
        item_info = {
            'src': src,
            'title': title,
            'category': category,
            'style': style.group(1) if style else 'unknown',
            'luxury_level': luxury.group(1) if luxury else 'unknown',
            'use_case': use_case.group(1) if use_case else 'unknown',
            'ai_description': ai_description
        }
        
        self.galleries[gallery_name].append(item_info)
        self.styles[item_info['style']] += 1
        self.luxury_levels[item_info['luxury_level']] += 1
        self.use_cases[item_info['use_case']] += 1
        self.categories[category] += 1
        self.total_items += 1
    
    def analyze_galleries(self, root_dir: str) -> None:
        """Analyze all gallery directories under the root directory."""
        for gallery_dir in os.listdir(root_dir):
            if gallery_dir == 'void-footwear':  # Skip the old gallery
                continue
            if not gallery_dir.startswith('void-') and gallery_dir != 'miss-void':
                continue
            if gallery_dir == 'layout.tsx':  # Skip layout file
                continue
                
            page_file = os.path.join(root_dir, gallery_dir, 'page.tsx')
            if os.path.exists(page_file):
                self.parse_gallery_file(page_file)
    
    def generate_report(self) -> str:
        """Generate a comprehensive report of the analysis."""
        report = []
        report.append("MISS VOID COLLECTIONS ANALYSIS")
        report.append("=" * 30 + "\n")
        
        report.append(f"Total Items: {self.total_items}\n")
        
        report.append("Collections Overview")
        report.append("-" * 20)
        for gallery, items in sorted(self.galleries.items()):
            report.append(f"{gallery}: {len(items)} items")
        report.append("")
        
        report.append("Categories")
        report.append("-" * 10)
        for category, count in sorted(self.categories.items(), key=lambda x: x[1], reverse=True):
            report.append(f"{category}: {count} items ({count/self.total_items*100:.1f}%)")
        report.append("")
        
        report.append("Styles")
        report.append("-" * 7)
        for style, count in sorted(self.styles.items(), key=lambda x: x[1], reverse=True):
            report.append(f"{style}: {count} items ({count/self.total_items*100:.1f}%)")
        report.append("")
        
        report.append("Luxury Levels")
        report.append("-" * 13)
        for level, count in sorted(self.luxury_levels.items(), key=lambda x: x[1], reverse=True):
            report.append(f"{level}: {count} items ({count/self.total_items*100:.1f}%)")
        report.append("")
        
        report.append("Use Cases")
        report.append("-" * 9)
        for use_case, count in sorted(self.use_cases.items(), key=lambda x: x[1], reverse=True):
            report.append(f"{use_case}: {count} items ({count/self.total_items*100:.1f}%)")
        report.append("")
        
        report.append("\nDetailed Collection Analysis")
        report.append("=" * 25)
        for gallery, items in sorted(self.galleries.items()):
            report.append(f"\n{gallery.upper()}")
            report.append("-" * len(gallery))
            
            # Analyze categories in this gallery
            gallery_categories = defaultdict(int)
            gallery_styles = defaultdict(int)
            gallery_luxury = defaultdict(int)
            for item in items:
                gallery_categories[item['category']] += 1
                gallery_styles[item['style']] += 1
                gallery_luxury[item['luxury_level']] += 1
            
            report.append(f"\nTotal Items: {len(items)}")
            
            report.append("\nCategories:")
            for category, count in sorted(gallery_categories.items(), key=lambda x: x[1], reverse=True):
                report.append(f"- {category}: {count} items ({count/len(items)*100:.1f}%)")
            
            report.append("\nStyles:")
            for style, count in sorted(gallery_styles.items(), key=lambda x: x[1], reverse=True):
                report.append(f"- {style}: {count} items ({count/len(items)*100:.1f}%)")
            
            report.append("\nLuxury Levels:")
            for level, count in sorted(gallery_luxury.items(), key=lambda x: x[1], reverse=True):
                report.append(f"- {level}: {count} items ({count/len(items)*100:.1f}%)")
            
            if any('title' in item for item in items):
                report.append("\nHighlight Pieces:")
                for item in items[:5]:
                    report.append(f"- {item['title']} ({item['style']}, {item['luxury_level']})")
                    if item.get('ai_description'):
                        report.append(f"  AI Description: {item['ai_description']}")
            
        return "\n".join(report)

def main():
    analyzer = GalleryAnalyzer()
    analyzer.analyze_galleries('src/app/gallery')
    report = analyzer.generate_report()
    
    # Save report to file
    with open('gallery_analysis.txt', 'w') as f:
        f.write(report)
    
    print("Analysis complete! Results saved to gallery_analysis.txt")

if __name__ == '__main__':
    main() 