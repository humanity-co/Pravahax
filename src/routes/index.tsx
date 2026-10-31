import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import bodyHtml from '../site/body.html?raw'

/**
 * The PRAVAHAx site, exactly as designed.
 * The markup lives in src/site/body.html, the styles in public/site.css and the
 * behaviour (hash routing #/..., menus, search, modals) in public/hark.js + public/app.js.
 * Nothing here changes the design; it only serves it through TanStack Start.
 */
export const Route = createFileRoute('/')({
  component: Site,
})

const SCRIPTS = ['/hark.js', '/app.js']

function loadScriptsInOrder(srcs: string[]) {
  return srcs.reduce<Promise<void>>(
    (chain, src) =>
      chain.then(
        () =>
          new Promise<void>((resolve, reject) => {
            if (document.querySelector(`script[data-px="${src}"]`)) return resolve()
            const s = document.createElement('script')
            s.src = src
            s.async = false
            s.dataset.px = src
            s.onload = () => resolve()
            s.onerror = () => reject(new Error(`Failed to load ${src}`))
            document.body.appendChild(s)
          }),
      ),
    Promise.resolve(),
  )
}

function Site() {
  useEffect(() => {
    loadScriptsInOrder(SCRIPTS).catch(console.error)
  }, [])

  // display: contents keeps the original layout: the markup behaves as if it sat directly in <body>.
  return <div id="px-root" style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
}
