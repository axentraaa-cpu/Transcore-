import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";

// 1. Configure Poppins (Direct Variable method)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // Isse font better load hota hai
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Transcore Dispatch",
  description: "Professional Truck Dispatch Services",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. IMPORTANT: Yahan par poppins.className add kiya hai */}
      <body
        className={`${poppins.className} bg-navy-900 text-white antialiased`}
      >
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}
