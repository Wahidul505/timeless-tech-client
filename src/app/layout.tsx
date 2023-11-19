import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Timeless Tech",
  description: "Timeless Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen max-w-7xl mx-auto pt-28 px-3 md:px-8 lg:px-12">
          <Providers>{children}</Providers>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
