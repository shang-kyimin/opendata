import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shares/Header";
import TanStackQueryProvider from "@/providers/TanStackQueryProvider";
import { cn } from "@/lib/utils";
import Footer from "@/components/shares/Footer";

const playwriteDEGrund = localFont({
  src: "./fonts/PlaywriteDEGrund.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenData",
  description: "Delivers consistent and reliable APIs from Community-generated and Randomize data, No Bullsh*t.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("pt-2 min-h-screen", playwriteDEGrund.className)}>
        <TanStackQueryProvider>
          <Header />
          {children}
          <Footer />
        </TanStackQueryProvider>
      </body>
    </html>
  );
}


