import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider/next-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home Page | Nextjs Blog Page",
    template: "%s | Nextjs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bg-light dark:bg-bg-dark antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
