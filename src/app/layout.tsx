import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wave - Modern Digital Solutions",
  description: "Transform your vision into reality with our innovative digital solutions. We create exceptional experiences that drive success.",
  keywords: ["web development", "mobile apps", "digital design", "UI/UX", "digital strategy"],
  authors: [{ name: "Wave Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon-512x512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
