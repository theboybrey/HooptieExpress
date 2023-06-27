import './globals.css';
import { Inter } from 'next/font/google';
import { DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dm_Sans = DM_Sans({ weight: '400', subsets: ['latin', 'latin-ext'] });

export const metadata = {
  title: 'Hooptie Express',
  description:
    'Introducing Hooptie Express, your serene gateway to stress-free car buying. Explore our curated collection of top-notch vehicles and experience the convenience of seamless online shopping. With transparent listings, effortless navigation, and exceptional customer support, finding your perfect ride has never been easier. Discover a new level of car buying bliss with Hooptie Express today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + dm_Sans.className}>{children}</body>
    </html>
  );
}
