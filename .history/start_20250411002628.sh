#!/bin/bash

# Navigate to the website directory
cd website

# Install dependencies if they don't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the image copy script if not already run
if [ ! -d "public/images/miss-void" ]; then
  echo "Copying images..."
  npm run copy-images
fi

# Start the development server
echo "Starting Next.js development server..."
npm run dev 