import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MISS VOID Gallery",
  description: "Gallery of MISS VOID images and collections",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark">
      {children}
    </div>
  );
} 