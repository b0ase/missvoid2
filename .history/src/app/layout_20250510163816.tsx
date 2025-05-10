import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { DevModeProvider } from "./context/DevModeContext";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MISS VOID",
  description: "AI-First Fashion Design Studio & Franchise System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-black text-white`}>
        <AuthProvider>
          <DevModeProvider>
            <Navigation />
            <main className="pt-16 sm:pt-20">
              {children}
            </main>
          </DevModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
