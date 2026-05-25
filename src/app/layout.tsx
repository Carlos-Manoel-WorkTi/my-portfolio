  import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./home.css"
import "../components/bg/bg.css"
import Contacts from "../components/contacts/Contacts";
import 'aos/dist/aos.css';
import {Theme }from "@/themes/themes-provide";
import ContactMB from "@/components/contacts/ContactMB";


export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-carlos-five.vercel.app'),
  title: {
    default: 'Carlos Manoel | Desenvolvedor Full Stack',
    template: '%s | Carlos Manoel',
  },
  description: 'Portfolio do Carlos — desenvolvedor web e projetos criativos',
  keywords: ['Carlos Manoel', 'portfolio', 'desenvolvedor web', 'front-end', 'back-end', 'full stack'],
  authors: [{ name: 'Carlos Manoel' }],
  creator: 'Carlos Manoel',
  
  // Ícones
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',

  // SEO adicional
  alternates: {
    canonical: 'https://portfolio-carlos-five.vercel.app', // URL principal
  },
  robots: {
    index: true,   // permite indexação
    follow: true,  // permite seguir links
    nocache: false
  },
  openGraph: {
    title: 'Carlos Manoel | Desenvolvedor Full Stack',
    description: 'Portfolio do Carlos — desenvolvedor web e projetos criativos',
    url: 'https://portfolio-carlos-five.vercel.app',
    siteName: 'CRL Portfolio',
    images: [
      {
        url: '/space5.png',
        width: 1143,
        height: 792,
        alt: 'CRL Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Manoel | Desenvolvedor Full Stack',
    description: 'Portfolio do Carlos — desenvolvedor web e projetos criativos',
    images: ['/space5.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark"  style={{ colorScheme: 'dark' }}>
      
      <body className="root">
        <Theme attribute="class"
               defaultTheme="dark"
               enableSystem>
          
            <Header/>
            <div className="stars"></div>
            <ContactMB/>
            <Contacts/>
        
            {children}
      
        </Theme>
        </body>
    </html>
  );
}
