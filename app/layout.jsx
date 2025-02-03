import localFont from "next/font/local";
import { Almarai, Cairo, Comfortaa, Noto_Nastaliq_Urdu } from 'next/font/google'


import "./globals.scss";

import "./_styles/_variables.scss"

import Footer from "@/app/_components/layout/Footer/Footer";
import Header from "@/app/_components/layout/Header/Header";
import Wrapper from "./_components/layout/Wrapper/Wrapper";

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-almarai',
})

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-cairo',
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
})

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-nastaliq-urdu',
})

export const metadata = {
  title: "Mr.Mohamed Hekal",
  description: "منصة تعليمية للغة الإنجليزية",
};

//todo: solve Header problem
//todo: make a loader when using routing
//todo: fix the damn red error with unknown call stack
//todo: add meta data to every page


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} ${cairo.variable} ${comfortaa.variable} ${notoNastaliqUrdu.variable}`}>
        <Header></Header>
        <Wrapper>
          {children}
        </Wrapper>
        <Footer></Footer>
      </body>
    </html>
  );
}