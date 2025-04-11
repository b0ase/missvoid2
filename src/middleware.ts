// Temporarily disabling middleware to avoid CSP conflicts
/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Define the Content Security Policy
  const cspHeader = "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' ws: wss:; worker-src 'self' blob:;";
  
  // Get the response
  const response = NextResponse.next();
  
  // Add the CSP header to the response
  response.headers.set('Content-Security-Policy', cspHeader);
  
  return response;
}

// Match all request paths
export const config = {
  matcher: '/(.*)',
};
*/ 

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Export a dummy middleware function that does nothing
// This avoids errors while still not interfering with our CSP setup
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Match only specific paths to minimize impact
export const config = {
  matcher: '/_dummy_path_that_doesnt_exist',
}; 