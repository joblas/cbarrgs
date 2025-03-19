import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBARRGS",
  description: "The official website for CBARRGS. Music, merch, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-400 text-dark min-h-screen font-mono cursor-guitar">
        {children}
      </body>
    </html>
  );
}
