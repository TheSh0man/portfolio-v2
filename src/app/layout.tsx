import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelrahman Shoman | AI Engineer",
  description:
    "AI Engineer specializing in Machine Learning, Computer Vision, and Data-Driven Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-black text-white font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
