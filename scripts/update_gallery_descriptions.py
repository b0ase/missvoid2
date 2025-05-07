#!/usr/bin/env python3

import os
import re
import json

def update_gallery_file(file_path: str, ai_descriptions: dict):
    """Update a gallery's page.tsx file with AI-generated descriptions."""
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Find all createGalleryItem blocks
        pattern = r'(createGalleryItem\(\s*' + \
                 r'["\']([^"\']+)["\'],\s*' + \
                 r'["\']([^"\']+)["\'],\s*' + \
                 r'["\']([^"\']+)["\'],\s*' + \
                 r'[{\s]*([^}]+)[}\s]*' + \
                 r'\))'
        
        def replace_description(match):
            full_match, src, title, category, options = match.groups()
            image_path = os.path.join('public', src.lstrip('/'))
            
            if image_path in ai_descriptions:
                # Create new description object
                new_options = options.strip()
                if 'description:' not in new_options:
                    new_options = f"description: '{ai_descriptions[image_path]}', {new_options}"
                else:
                    new_options = re.sub(
                        r"description:\s*['\"]([^'\"]+)['\"]",
                        f"description: '{ai_descriptions[image_path]}'",
                        new_options
                    )
                
                # Reconstruct the createGalleryItem call
                return f'createGalleryItem(\n      \'{src}\',\n      \'{title}\',\n      \'{category}\',\n      {{ {new_options} }}\n    )'
            
            return full_match
        
        # Update the content
        updated_content = re.sub(pattern, replace_description, content)
        
        # Write back to file
        with open(file_path, 'w') as f:
            f.write(updated_content)
            
        print(f"Updated descriptions in {file_path}")
        
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")

def main():
    # Load existing AI descriptions
    try:
        with open('ai_descriptions.json', 'r') as f:
            ai_descriptions = json.load(f)
    except Exception as e:
        print(f"Error loading AI descriptions: {str(e)}")
        return
    
    # Update each gallery file
    gallery_dir = 'src/app/gallery'
    for gallery in os.listdir(gallery_dir):
        if gallery.startswith('void-') or gallery == 'miss-void':
            page_file = os.path.join(gallery_dir, gallery, 'page.tsx')
            if os.path.exists(page_file):
                update_gallery_file(page_file, ai_descriptions)

if __name__ == '__main__':
    main() 