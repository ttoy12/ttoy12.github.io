import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Thomas (Tommy) Toy — UC Santa Cruz CS graduate building web apps and working hands-on with humanoid robots. Projects, experience, and photography.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ttoy2.com"),
  title: "Thomas (Tommy) Toy · Portfolio",
  description,
  openGraph: {
    title: "Thomas (Tommy) Toy · Portfolio",
    description,
    url: "/",
    siteName: "Thomas Toy",
    images: [{ url: "/my_photo2.jpg", alt: "Thomas Toy" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thomas (Tommy) Toy · Portfolio",
    description,
    images: ["/my_photo2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
