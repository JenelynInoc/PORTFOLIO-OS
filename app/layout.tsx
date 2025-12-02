import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";

// Bold Headers
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo" });
// Body Text
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
// Pixel Font (for the 'Resume' and icons)
const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Portfolio - Neo Brutalism",
  description: "Graphic Design Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${space.variable} ${pixel.variable} bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}