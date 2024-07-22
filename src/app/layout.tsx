import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header'
import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title: "Maximiliano Cejas | Frontend Developer UI",
  description: "Maximiliano Cejas desarrollador frontend especializado en UI, creación de paginas interfaces intuitivas y amigables visualmente",
  keywords: 'frontend, desarrollador frontend, pagina web, obtener pagina web, comprar pagina web, desarrollador, programador, maximiliano cejas, maxi cejas, diseñador web, ux/ui, ui, diseñador ui, react, animaciones web, aplicaciones web, aplicación web, seo, accebilidad, diseño, pagina de aterrizaje, landing page, pagina institucional, venta de paginas web',
 authors: [
  {
    name: 'Maximiliano Cejas',
    url: 'https://www.linkedin.com/in/maximiliano-cejas/'
  }
 ]
}
;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/profile.svg" type="image/x-icon" />
        <link rel="preload" as="image" href="/images/proyects/magic-market.webp" />
        <meta property="og:title" content="Maximiliano Cejas | Frontend Develoepr UI"/>
        <meta property="og:image" content="/images/profile.svg"/>
        <meta property="og:description" content="Web and App Frontend Developer UI"/>
        <meta property="og:creator" content="Maximiliano Cejas"/>
      </head>
      <body>
      <Header/>
      <Contact/>
        {children}
        </body>
    </html>
  );
}
