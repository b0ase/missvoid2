const fs = require('fs');
const path = require('path');

// Base URL of the site
const BASE_URL = 'https://missvoid.com';

// Main pages with their priorities and change frequencies
const MAIN_PAGES = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/studio', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'monthly', priority: '0.8' },
  { url: '/custom', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
];

// Gallery pages
const GALLERY_PAGES = [
  // Fashion Collection Galleries
  { url: '/gallery/miss-void', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-boots', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-boudoir', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-royale', changefreq: 'monthly', priority: '0.7' },
  
  // Photography Galleries
  { url: '/gallery/void-noire', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-xxx', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-chic', changefreq: 'monthly', priority: '0.7' },
  { url: '/gallery/void-ink', changefreq: 'monthly', priority: '0.7' },
];

// Combine all pages
const ALL_PAGES = [...MAIN_PAGES, ...GALLERY_PAGES];

// Generate sitemap XML content
function generateSitemapXml() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add entries for all pages
  ALL_PAGES.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemapContent = generateSitemapXml();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemapContent);
  console.log(`Sitemap generated at ${outputPath}`);
}

// Execute the script
writeSitemap(); 