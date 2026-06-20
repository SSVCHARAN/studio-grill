# How to add Studio Grill photos (from Instagram)

The site is built to **light up automatically** once image files exist in `public/images/`. You do not need to edit page code for each photo.

## Fastest way (about 15 minutes)

### 1. Pick photos on Instagram (@studio.grill.vizag)

Open their profile and save **one best photo per category** (long-press → Save image on phone, or use Instagram’s “Save post”):

| Save as this filename | What to look for |
|----------------------|------------------|
| `hero.webp` | Wide shot of venue, theater, or branding — hero vibe |
| `theaters/room.webp` | Private theater interior, screen, seating |
| `theaters/gaming.webp` | Xbox / gaming setup (if posted) |
| `sports/cricket.webp` | Box cricket turf (roof-covered if visible) |
| `sports/pickleball.webp` | Pickleball court |
| `sports/volleyball.webp` | Sand / volleyball area |
| `dining/garden.webp` | Outdoor garden seating |
| `dining/food.webp` | Kebabs, pizza, or spread of dishes |
| `packages/celebration.webp` | Birthday / décor / party setup |
| `visit/exterior.webp` | Building entrance or “Opposite D Cabanna” context |
| `instagram/01.webp` … `06.webp` | Any 6 strong posts for the home grid |

**Tip:** Prefer **square or landscape** posts; avoid tiny text-only story frames.

### 2. Put files in the project

Copy files into:

```
studio-grill/public/images/
├── hero.webp
├── theaters/
├── sports/
├── dining/
├── packages/
├── visit/
└── instagram/
```

`.jpg` and `.png` also work — same names, different extension (see `src/config/images.ts`).

### 3. Tell Cursor / re-run dev

```powershell
cd d:\CURSOR\studio-grill
npm run dev
```

Refresh the browser. Missing files still show styled placeholders; **any file you added appears immediately**.

### 4. Optional — compress before upload

Large IG exports can be 2–5 MB each. For a fast site, resize to ~1600px wide and export as WebP (Squoosh.app or Photoshop).

---

## Ways you can help us (pick any)

### A. Drop a ZIP in the project (best)

1. Create a folder on your PC with the files named as in the table above.
2. Zip it as `scg-photos.zip`.
3. Put it in `d:\CURSOR\studio-grill\` and say: *“Unzip and wire up scg-photos.zip”*.

We’ll place files and adjust alt text if needed.

### B. Paste 10–15 Instagram post links

Example: `https://www.instagram.com/p/ABC123xyz/`

We **cannot** bulk-scrape the profile (Instagram blocks bots), but you can:

- Open each link in a browser → right-click image → Save As → rename per table above, **or**
- Use a desktop tool you trust to download **only posts you have rights to use** (SCG’s own content).

Send links grouped by category (theater / food / turf / party) and we’ll map them in `images.ts`.

### C. Google Drive / OneDrive

Share a folder link with “anyone with link can view” and list what’s inside. Same naming as above = fastest.

### D. Screenshots from your phone

If saving from IG is awkward, send 8–12 clear screenshots in chat or ZIP. We’ll crop and name them (quality may be lower than originals).

---

## Rights

Use only content **Studio Grill owns or approves** for the commercial website. If a post features customers, get their OK or pick shots without identifiable faces.

---

## Check what’s still missing

```powershell
cd d:\CURSOR\studio-grill
npm run images:check
```

Lists every expected file that is not on disk yet.
