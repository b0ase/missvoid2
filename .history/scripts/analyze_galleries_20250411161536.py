#!/usr/bin/env python3

import os
import re
from collections import defaultdict
from typing import Dict, List, Set

class GalleryAnalyzer:
    def __init__(self):
        self.galleries = defaultdict(list)
        self.styles = defaultdict(int)
        self.luxury_levels = defaultdict(int)
        self.use_cases = defaultdict(int)
        self.categories = defaultdict(int)
        self.total_items = 0
        
    def parse_gallery_file(self, file_path: str) -> None:
        """Parse a gallery's page.tsx file to extract item information."""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
                
            # Extract gallery name from path
            gallery_name = os.path.basename(os.path.dirname(file_path))
            
            # Find all createGalleryItem calls
            items = re.finditer(
                r'createGalleryItem\(\s*' +
                r"'([^']+)',\s*" +  # src
                r"'([^']+)',\s*" +  # title
                r"'([^']+)',\s*" +  # category
                r'{([^}]+)}\s*' +   # options
                r'\)',
                content
            )
            
            for item in items:
                src, title, category, options = item.groups()
                
                # Parse options
                style = re.search(r"style:\s*'([^']+)'", options)
                luxury = re.search(r"luxuryLevel:\s*'([^']+)'", options)
                use_case = re.search(r"useCase:\s*'([^']+)'", options)
                
                item_info = {
                    'src': src,
                    'title': title,
                    'category': category,
                    'style': style.group(1) if style else 'unknown',
                    'luxury_level': luxury.group(1) if luxury else 'unknown',
                    'use_case': use_case.group(1) if use_case else 'unknown'
                }
                
                self.galleries[gallery_name].append(item_info)
                self.styles[item_info['style']] += 1
                self.luxury_levels[item_info['luxury_level']] += 1
                self.use_cases[item_info['use_case']] += 1
                self.categories[category] += 1
                self.total_items += 1
                
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    def analyze_galleries(self, root_dir: str) -> None:
        """Analyze all gallery directories under the root directory."""
        for gallery_dir in os.listdir(root_dir):
            if not gallery_dir.startswith('void-') and gallery_dir != 'miss-void':
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
            for item in items:
                gallery_categories[item['category']] += 1
                gallery_styles[item['style']] += 1
            
            report.append("\nCategories:")
            for category, count in sorted(gallery_categories.items(), key=lambda x: x[1], reverse=True):
                report.append(f"- {category}: {count} items ({count/len(items)*100:.1f}%)")
            
            report.append("\nStyles:")
            for style, count in sorted(gallery_styles.items(), key=lambda x: x[1], reverse=True):
                report.append(f"- {style}: {count} items ({count/len(items)*100:.1f}%)")
            
            report.append("\nHighlight Pieces:")
            for item in items[:5]:  # Show first 5 items as highlights
                report.append(f"- {item['title']} ({item['style']}, {item['luxury_level']})")
            
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