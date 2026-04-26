# Image Generation Log — Harkinson Investment Corporation

No AI image generation was performed for this build.

Per Zack's brief — **"Reuse all of his assets when possible"** — every image on the mockup is either (a) downloaded from the existing harkinsoninvestments.com Wix CDN, or (b) hotlinked from the same CDN at higher resolution.

## Asset Inventory

### Locally bundled (in `images/`)
| File | Source | Use |
|---|---|---|
| `hero-timelapse.mp4` | `video.wixstatic.com/video/11062b_c291d21ce5a1414d8ae0e554a5b89b5d/1080p/mp4/file.mp4` (Wix CDN) | Hero background video |
| `jeff-headshot.jpg` | `static.wixstatic.com/media/5fa5ee_7b67f2ac9a244f93b4d3a8447b793745~mv2.jpg` (Wix CDN, harkinsondewancommercial.com) | Founder portrait |
| `logo.png` | `static.wixstatic.com/media/5fa5ee_a3ec471848f94f3399d97f0fc2bfdb5b~mv2.png` (Wix CDN) | Logo source for favicon |
| `favicon.png` / `favicon-512.png` | Cropped from `logo.png` via `sips` | Browser tab + Apple touch icon |
| `og.jpg` | Composed via Python PIL — `jeff-headshot.jpg` + brand-mark + headline text | Open Graph share preview (1200×630) |

### Hotlinked from Wix CDN (in HTML, not downloaded)
Mappings verified against the source filenames in the Wix CDN URLs (e.g. `Sherman%20Junction%20Layout`, `Huntington%20Square%20Collage`, `Aerial%20Photo%20Bosque`).

- `74012b_d95f1137c18c49379305e4adcbc011ef` — Sherman Crossroads (site plan layout)
- `74012b_fcc5ed66e2b6442b843f510c3fc1b89c` — Huntington Square (storefront collage)
- `74012b_a3c2bd2108144d87ba5f004da11ce8e3` — Bosque River Centre (aerial photo)
- `74012b_75c26f3500c04ad397a290ae6e9fa666` — Parker Plaza West (east elevation rendering)
- `5fa5ee_4d4dc6a225e847dbb67184af48ee3b17` — Colony Hard 8 (The Colony aerial map)
- `5fa5ee_4692f9e7ed804fce8aff52b05bc92fb0` — Aston Junction (LOT-30 front elevation)

## Total Cost
**$0.00** — no AI generation, no QA calls, no API spend.

## Suggested image upgrades (post-delivery)
If Zack wants to elevate further:
1. **Real photography of Jeff at Blasingame Creek Ranch** — would add a powerful "human + Texas heritage" beat to the founder section. Uncle's own photos preferred over generation; if no photos exist, this is a candidate for a manual Grok Imagine prompt at delivery.
2. **Drone aerial of Sherman Crossroads** — the architectural rendering is fine but a real aerial of the 227 acres would carry more weight on the portfolio card.
3. **Updated Parker Plaza West post-facelift photos** — once the $3.6M renovation is complete, swap in current shots.
