import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header'
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Maximiliano Cejas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <Contact/>
        {children}
        </body>
    </html>
  );
}
