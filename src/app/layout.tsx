import "./globals.css";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const dm_Sans = DM_Sans({ weight: "400", subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "Hooptie Express",
  description:
    "Introducing Hooptie Express, your serene gateway to stress-free car buying. Explore our curated collection of top-notch vehicles and experience the convenience of seamless online shopping.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative " + dm_Sans.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
