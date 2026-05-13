import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zippy Solar | Premium Solar Solutions',
  description: 'Residential, Commercial & Industrial Solar Installations with Government Subsidy Support, Expert Installation & Long-Term Savings.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0B0B0B] text-white">
        {children}
      </body>
    </html>
  );
}
