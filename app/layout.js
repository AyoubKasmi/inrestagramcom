import { Inter } from 'next/font/google'
import './globals.css'
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import NavbarComponent from './sections/navbar';
import FooterComponent from './sections/footer';
import { GoogleTagManager } from '@next/third-parties/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(`https://www.inrestagram.com`),
  title: {
    default:'inRestagram',
    template: `%s | inRestagram`
  },
  description: 'Explore inRestagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
  keywords: ["Instagram tools", "Reels downloader", "Thumbnails scrapper", "Comments picker", "full", "view count", "play count", "likes count", "comments count", "followers count", "Instagram insights", "Content creator details", "Reel creation time","likes full number", "views full number", "followers full number","Instagram download", "Instagram scrapping", "instagram exact numbers"],
  authors: ['inRestagram'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'inRestagram | Empowering Your Instagram Journey, One Click at a Time.',
    description: 'Explore inRestagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
    url: `${process.env.URL}`,
    siteName: 'inRestagram.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'inRestagram | Empowering Your Instagram Journey, One Click at a Time.',
    description: 'Explore inRestagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
    creator: '@inRestagram',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-adsense-account": 'ca-pub-3317381044472792',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Flowbite>
          <NavbarComponent/>
        
          {children}
          
          <FooterComponent/>
        </Flowbite>
        <GoogleTagManager gtmId="GTM-T7KW56F8" />
      </body>
    </html>
  )
}
