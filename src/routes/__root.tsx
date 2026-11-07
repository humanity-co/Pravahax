import type { ReactNode } from 'react'
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import jsonLd from '../site/jsonld.json'
import favicon from '../site/favicon.txt?raw'

const TITLE = 'PRAVAHAx Systems Engineering | Less chaos. More flow.'
const DESC =
  'PRAVAHAx Systems Engineering builds custom software, AI and IoT systems end to end, from Chhatrapati Sambhajinagar, India. You own all the code.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title: TITLE },
      { name: 'description', content: DESC },
      { name: 'theme-color', content: '#14213D' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://pravahax.com/' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESC },
      { property: 'og:image', content: 'https://pravahax.com/og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: 'https://pravahax.com/' },
      { rel: 'icon', type: 'image/svg+xml', href: favicon.trim() },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: '/hark.css' },
      { rel: 'stylesheet', href: '/site.css' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Same as the original page: flag JS before first paint so reveal styles apply. */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("x-js");' }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
