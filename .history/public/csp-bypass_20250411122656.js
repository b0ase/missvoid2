// This script helps bypass CSP eval restrictions
// It's only meant for development purposes

// Ensure we're in a browser environment 
if (typeof window !== 'undefined') {
  // Create a new meta tag to override existing CSP
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  // Include unsafe-eval in the script-src directive
  meta.content = "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' ws: wss:; worker-src 'self' blob:;";
  
  // Add it to the document head
  // This will override any server-provided CSP
  document.head.appendChild(meta);
  
  console.log('CSP bypassed for development');
} 