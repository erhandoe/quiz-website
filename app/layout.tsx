import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
        pt-2 min-h-screen text-white
        inset-0
        bg-gradient-to-r from-[#000000] via-[#1f0036] to-[#0a0a0a]
        bg-[length:400%_400%] animate-gradient opacity-80 bg-size-400 font-chakra
      "
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
