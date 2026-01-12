import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Base URL for the site
const siteUrl = 'https://www.thealternativeeye.com'

export const metadata: Metadata = {
  title: {
    default: 'Alternative Eye: Beyond the File | Crime Meets Code',
    template: '%s | Alternative Eye'
  },
  
  description: 'Decoding the systems of silence behind the world\'s most complex cases. A true crime podcast featuring forensic profiling, cold case investigation, cipher decoding, and expert analysis with hosts Melissa Phelan and Dr. Wendy Watson.',
  
  keywords: [
    // Primary keywords
    'true crime podcast',
    'best true crime podcasts',
    'top true crime podcasts',
    'cold case investigation',
    'forensic profiling',
    'crime analysis',
    'cipher decoding',
    
    // Topic-specific keywords
    'BTK killer',
    'Dennis Rader',
    'Charles Ray Vines',
    'serial killer analysis',
    'criminal psychology',
    
    // Service keywords
    'violent crime analysis',
    'digital forensics',
    'victim advocacy',
    'crime documentary',
    'investigative journalism',
    
    // Host-related keywords
    'Melissa Phelan',
    'amazing co-hosts',
    'forensic profiler',
    'remote viewing',
    
    // Brand keywords
    'Alternative Eye',
    'Beyond the File',
    'crime meets code'
  ],

// ============================================
  // META BASE URL
  // ============================================
  
  metadataBase: new URL(siteUrl),

  // ============================================
  // CANONICAL & ALTERNATE URLs
  // ============================================
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  
  // ============================================
  // AUTHORS & CREATOR
  // ============================================
  
  authors: [
    { name: 'Melissa Phelan', url: 'https://www.linkedin.com/in/melissa-phelan-alternative-eye/' },
  ],
  creator: 'Alternative Eye',
  publisher: 'Alternative Eye',
  
  // ============================================
  // ROBOTS / INDEXING
  // ============================================
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Alternative Eye: Beyond the File',
    title: 'Alternative Eye: Beyond the File | Crime Meets Code',
    description: 'Decoding the systems of silence behind the world\'s most complex cases. A true crime podcast featuring forensic profiling, cold case investigation, and expert analysis.',
    images: [
      {
        url: '/assets/logo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Alternative Eye: Beyond the File - Where Crime Meets Code',
        type: 'image/jpeg'
      },
      {
        url: '/assets/alternative-eye.png',
        width: 96,
        height: 96,
        alt: 'Alternative Eye Logo',
        type: 'image/png'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Alternative Eye: Beyond the File | Crime Meets Code',
    description: 'Decoding the systems of silence behind the world\'s most complex cases. A true crime podcast featuring forensic profiling, cold case investigation, and expert analysis.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <TopBanner />
        <Header />
        <main className="pt-[156px] sm:pt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
