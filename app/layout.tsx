import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Luxe Kitchen Design',
  description: 'Design Your Kitchen with the Experts',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="bg-[#121212] text-white font-sans antialiased selection:bg-[#C5A059] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
