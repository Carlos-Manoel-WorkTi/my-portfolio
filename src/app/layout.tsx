  import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./home.css"
import "../components/bg/bg.css"
import Contacts from "../components/contacts/Contacts";
import 'aos/dist/aos.css';
import FieldContact from "@/components/fieldContact/FieldContact";
import {Theme }from "@/themes/themes-provide";
import Bg from "@/components/bg/bg";




export const metadata: Metadata = {
  title: 'CRL Portfolio',
  description: 'Portfolio do carlos',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png'], 
},
  manifest:'/site.webmanifest'
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
            <Contacts/>
        
            {children}
            <FieldContact/>
            <Footer/>
        </Theme>
        </body>
    </html>
  );
}
