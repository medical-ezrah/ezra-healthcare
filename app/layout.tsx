import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezrahealth.org"),
  title: {
    default: "Ezra Healthcare Management",
    template: "%s | Ezra Healthcare Management"
  },
  description:
    "The parent organization for Ezra Health primary care, Ezra Wound Consulting in Arizona, and Ezra Academics Foundation.",
  openGraph: {
    title: "Ezra Healthcare Management",
    description:
      "Purpose-driven healthcare, education, and community impact.",
    url: "https://ezrahealth.org",
    siteName: "Ezra Healthcare Management",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
