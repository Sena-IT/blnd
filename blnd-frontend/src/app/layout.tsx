import type { Metadata } from "next";
import {
  Inter_Tight,
  League_Spartan,
  Merriweather,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/header";
import CommonSpacingLayout from "@/components/layouts/CommonSpacingLayout";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Footer from "@/site-ui/sections/footer";
import { ProductsProvider } from "@/context/ProductsProvider";
import MobileCartIcon from "@/site-ui/cart/MobileCartIcon";
import { Toaster } from "@/components/ui/sonner";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLND Wellness",
  description: "A Functional Wellness Brand That Actually Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
  
    <link rel="icon" href="/assets/logo.jpeg" type="image/png"/>
  </head>
      <body
        className={`${inter.className} bg-[#F5F5F0] min-h-screen w-full antialiased `}
        style={{
          position: "absolute",
          borderRadius: "inherit",
          inset: 0,
          backgroundImage:
            "url('https://framerusercontent.com/images/Ru75xhJg3jjq7d6XPaseRqmg33s.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          border: "0px",
          backgroundSize: "742.4px",
        }}
      >
        <ProductsProvider>
          <ReduxProvider>
            <main className="flex flex-col">
              <MainHeader />
              <CommonSpacingLayout>
                <section className="flex-1">{children}</section>
                <Toaster />
              </CommonSpacingLayout>
              <MobileCartIcon/>
              <Footer />
            </main>
          </ReduxProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
