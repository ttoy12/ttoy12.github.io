import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { githubUrl, linkedinUrl, siteUrl } from './site'

const inter = Inter({ subsets: ['latin'] })

const description =
  'Thomas (Tommy) Toy — UC Santa Cruz CS graduate building web apps and working hands-on with humanoid robots. Projects, experience, and photography.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Thomas (Tommy) Toy · Portfolio',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Thomas (Tommy) Toy · Portfolio',
    description,
    url: '/',
    siteName: 'Thomas Toy',
    images: [{ url: '/my_photo2.jpg', alt: 'Thomas Toy' }],
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Thomas (Tommy) Toy · Portfolio',
    description,
    images: ['/my_photo2.jpg']
  }
}

// Structured data so search engines can tie this site to the right person and profiles
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thomas Toy',
  alternateName: 'Tommy Toy',
  url: siteUrl,
  image: `${siteUrl}/my_photo2.jpg`,
  sameAs: [linkedinUrl, githubUrl],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of California, Santa Cruz'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
