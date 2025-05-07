import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navigation from "./components/Navigation";
import { DevModeProvider } from "./context/DevModeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MISS VOID Gallery",
  description: "Gallery of MISS VOID images and collections",
  other: {
    "content-security-policy": "default-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' ws: wss:; worker-src 'self' blob:;"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <DevModeProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-black text-white py-4 text-center text-sm">
            <div className="container mx-auto px-4">
              <p>© {new Date().getFullYear()} MISS VOID. All rights reserved.</p>
            </div>
          </footer>
        </DevModeProvider>
        <Script src="/csp-bypass.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
