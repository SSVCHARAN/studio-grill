# Studio Grill (SCG) — Website

Multi-page marketing site for Studio Grill, Visakhapatnam: private theaters, sports arena, dining, and celebration packages.

## Quick start

```bash
cd studio-grill
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/private-theaters` | Private theaters & gaming |
| `/sports` | Sports arena |
| `/dining` | Dining & menu |
| `/packages` | Celebrations & packages |
| `/visit` | Plan your visit |
| `/book` | Contact & book hub |
| `/faq` | FAQ |
| `/privacy` | Privacy |
| `/terms` | Terms & refund |

## Configuration

All business data lives in [`src/config/site.ts`](src/config/site.ts). See [`CLIENT_ASSETS.md`](CLIENT_ASSETS.md) for what to collect from the client.

## Instagram alignment

1. **Link in bio** → `https://<your-domain>/book`
2. **Highlight covers** (match site nav): Theaters · Sports · Food · Packages · Visit
3. **Repurpose Reels** — export best clips to `public/images/instagram/` and replace placeholder tiles on Home
4. **Stories** — CTA sticker “Book on website” pointing to `/book`
5. **Rights** — only use SCG-owned or credited UGC on the site

## Deployment

- Set `site` in `astro.config.mjs` to your production URL
- Deploy `dist/` to Vercel, Netlify, or static hosting
- Submit sitemap to Google Search Console
- Align Google Business Profile NAP with `site.ts`

## Phase 3 — App ordering

When app store URLs are confirmed, set `appLinks.ios` and `appLinks.android` in `site.ts`. App badges appear automatically in header/footer/book page.
