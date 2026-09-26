import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — Официальный сайт Лаки Бир Казино онлайн',
  description:
    'Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино. Игровые автоматы, бонусы, зеркало и быстрый вход. Luckybear Casino — играйте на официальном сайте.',
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino зеркало',
    'luckybear casino официальный',
    'luckybear casino официальный сайт',
    'lucky bear казино',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
  ],
  authors: [{ name: 'Lucky Bear Casino' }],
  creator: 'Lucky Bear Casino',
  publisher: 'Lucky Bear Casino',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://luckybear.casino',
    siteName: 'Lucky Bear Casino',
    title: 'Lucky Bear Casino — Официальный сайт Лаки Бир Казино',
    description:
      'Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино. Бонусы, зеркало, быстрый вход.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — Официальный сайт',
    description: 'Лаки Бир Казино — играйте онлайн на официальном сайте.',
  },
  alternates: {
    canonical: 'https://luckybear.casino',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lucky Bear Casino',
  alternateName: ['Лаки Бир Казино', 'Luckybear Casino'],
  url: 'https://luckybear.casino',
  logo: 'https://luckybear.casino/icon.svg',
  description:
    'Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино с игровыми автоматами, бонусами и быстрым входом.',
  sameAs: ['https://luckybear.casino'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Lucky Bear Casino" />
        <meta name="application-name" content="Lucky Bear Casino" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="DC.title" content="Lucky Bear Casino — Официальный сайт Лаки Бир Казино" />
        <meta name="DC.description" content="Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино." />
        <meta name="DC.subject" content="lucky bear casino, luckybear casino, лаки бир казино" />
        <meta name="DC.language" content="ru" />
        <meta name="DC.publisher" content="Lucky Bear Casino" />
        <meta name="DC.identifier" content="https://luckybear.casino" />
        <meta name="DC.source" content="https://luckybear.casino" />
        <meta name="DC.relation" content="https://luckybear.casino" />
        <meta name="DC.coverage" content="Worldwide" />
        <meta name="DC.rights" content="© Lucky Bear Casino" />
        <meta name="resource-type" content="Document" />
        <meta name="doc-type" content="Web Page" />
        <meta name="doc-class" content="Published" />
        <meta name="doc-status" content="Live" />
        <meta name="audience" content="all" />
        <meta name="target" content="all" />
        <meta name="classification" content="Online Casino, Gambling, Entertainment" />
        <meta name="category" content="Online Casino" />
        <meta name="copyright" content="© Lucky Bear Casino" />
        <meta name="designer" content="Lucky Bear Casino" />
        <meta name="owner" content="Lucky Bear Casino" />
        <meta name="url" content="https://luckybear.casino" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Lucky Bear Casino — Официальный сайт" />
        <meta name="page-topic" content="Online Casino" />
        <meta name="page-type" content="Homepage" />
        <meta name="expires" content="never" />
        <meta name="cache-control" content="public" />
        <meta name="pragma" content="cache" />
        <meta name="imagetoolbar" content="no" />
        <meta name="MSSmartTagsPreventParsing" content="true" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="abstract" content="Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино с игровыми автоматами, бонусами и зеркалом для входа." />
        <meta name="topic" content="Online Casino" />
        <meta name="summary" content="Lucky Bear Casino — официальный сайт Лаки Бир Казино. Игровые автоматы, бонусы, зеркало, быстрый вход." />
        <meta name="reply-to" content="support@luckybear.casino" />
        <meta name="og:site_name" content="Lucky Bear Casino" />
        <meta name="og:locale" content="ru_RU" />
        <meta name="og:locale:alternate" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Lucky Bear Casino — Официальный сайт Лаки Бир Казино" />
        <meta name="og:description" content="Lucky Bear Casino (Лаки Бир Казино) — официальный сайт онлайн-казино. Бонусы, зеркало, быстрый вход." />
        <meta name="og:url" content="https://luckybear.casino" />
        <meta name="og:image" content="https://luckybear.casino/og-image.png" />
        <meta name="og:image:secure_url" content="https://luckybear.casino/og-image.png" />
        <meta name="og:image:type" content="image/png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:alt" content="Lucky Bear Casino — Официальный сайт Лаки Бир Казино" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luckybearcasino" />
        <meta name="twitter:creator" content="@luckybearcasino" />
        <meta name="twitter:title" content="Lucky Bear Casino — Официальный сайт" />
        <meta name="twitter:description" content="Лаки Бир Казино — играйте онлайн на официальном сайте." />
        <meta name="twitter:image" content="https://luckybear.casino/og-image.png" />
        <meta name="twitter:image:alt" content="Lucky Bear Casino" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-navbutton-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="yandex-verification" content="verification-token" />
        <meta name="google-site-verification" content="verification-token" />
        <meta name="facebook-domain-verification" content="verification-token" />
        <link rel="canonical" href="https://luckybear.casino" />
        <link rel="alternate" hrefLang="ru" href="https://luckybear.casino" />
        <link rel="alternate" hrefLang="x-default" href="https://luckybear.casino" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
