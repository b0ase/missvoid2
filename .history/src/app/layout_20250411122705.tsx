import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MISS VOID Gallery",
  description: "Gallery of MISS VOID images and collections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add CSP bypass for development */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' ws: wss:; worker-src 'self' blob:;"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script src="/csp-bypass.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
