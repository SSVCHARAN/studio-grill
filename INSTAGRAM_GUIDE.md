# Instagram alignment for Studio Grill website

Use this checklist when handing the site to Studio Grill.

## Link in bio

Set Instagram bio link to:

```
https://<your-production-domain>/book
```

The `/book` page is the unified hub for theater, sports, events, and food WhatsApp links.

## Highlight covers (match site nav)

| Highlight name | Link target | Site page |
|----------------|-------------|-----------|
| Theaters | Best theater Reel or `/private-theaters` | `/private-theaters` |
| Sports | Turf/cricket Reel | `/sports` |
| Food | Signature dish Reels | `/dining` |
| Packages | Birthday/celebration Reels | `/packages` |
| Visit | Map or exterior shot | `/visit` |

## Repurpose Reels into the website

1. Export still frames or short loops from top Reels (client approval required).
2. Save to `public/images/instagram/` as `01.jpg` … `06.jpg`.
3. Update [`src/components/InstagramSection.astro`](src/components/InstagramSection.astro):

```astro
<img src="/images/instagram/01.jpg" alt="Private theater at Studio Grill" loading="lazy" />
```

4. Optional: use a Reel MP4 as Home hero background in `index.astro` (`<video autoplay muted loop playsinline>`).

## Story CTAs

- Sticker: **Book** → website `/book`
- New package promo → `/packages`
- Monsoon turf → `/sports`

## Cross-post rhythm

- Weekly: 1 food + 1 experience post with “Link in bio to book”
- Monthly: update `InstagramSection` tiles on Home

## Rights

Only publish photos/Reels SCG owns or has written permission to use on the commercial website.
