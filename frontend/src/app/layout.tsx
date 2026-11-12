import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nool & Zari | Heirloom Silks & Haute Couture",
  description:
    "Handwoven heirloom silks, gilded zari borders, and contemporary grace from the Nool & Zari atelier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
