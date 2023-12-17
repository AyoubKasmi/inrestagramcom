import { Inter } from 'next/font/google'
import './globals.css'
import { Flowbite, ThemeModeScript } from 'flowbite-react';
import NavbarComponent from './sections/navbar';
import FooterComponent from './sections/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://xinstagramx.com'),
  title: {
    default:'Xinstagram',
    template: `%s | Xinstagram`
  },
  description: 'Explore Xinstagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
  keywords: ["Instagram tools", "Reels downloader", "Thumbnails scrapper", "Comments picker", "Instagram insights", "Content creator details", "Reel creation time","likes full number", "views full number", "followers full number","Instagram download", "Instagram scrapping", "instagram exact numbers"],
  authors: ['Xinstagram'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Xinstagram | Empowering Your Instagram Journey, One Click at a Time.',
    description: 'Explore Xinstagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
    url: 'https://xinstagramx.com',
    siteName: 'Xinstagramx.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xinstagram | Empowering Your Instagram Journey, One Click at a Time.',
    description: 'Explore Xinstagram, your ultimate destination for elevating your Instagram experience. Download Instagram Reels, scrape thumbnails, pick engaging comments, and gain insights into creation time, likes, and views. Discover powerful tools providing a comprehensive understanding of your favorite content and creators.',
    creator: '@xinstagramx',
  }
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
      </body>
    </html>
  )
}
