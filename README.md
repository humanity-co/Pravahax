# PRAVAHAx Systems Engineering website

The pravahax.com site, served with [TanStack Start](https://tanstack.com/start) (React + Vite).

The design is ported **as is**: the markup, styles, scripts and images are unchanged from the approved prototype.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/routes/__root.tsx` | `<html>` shell: title, meta/OG tags, favicon, fonts, stylesheets, JSON-LD |
| `src/routes/index.tsx` | Renders the site markup and loads the page scripts after hydration |
| `src/site/body.html` | All page markup (header, views, footer, modals), unchanged |
| `src/site/jsonld.json` | Structured data (Organization) |
| `public/site.css` | All site styles, unchanged |
| `public/hark.js`, `public/app.js` | Site behaviour: hash routing (`#/services`, `#/labs`, ...), nav, search, leadership notes, contact popup, WhatsApp button |
| `public/*` | Images (WebP + JPG fallbacks) and self-hosted fonts |

## Notes for the dev team

- Pages are still client-side **hash routes** (`/#/about`). Moving to real TanStack file routes (`src/routes/about.tsx`, ...) for SEO is the planned next step.
- Forms post through Web3Forms. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `public/app.js`; until then they fall back to `mailto:hello@pravahax.com`.
- Deploying: TanStack Start supports Vercel, Netlify, Cloudflare and Node (via Nitro). See https://tanstack.com/start/latest/docs/framework/react/guide/hosting.
