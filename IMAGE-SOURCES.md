# Image sources

## The studio's own photographs

The home cover, the services, the portfolio, the "Follow along" fallback grid and the photo frames on the inner pages are Blooms of Santa Barbara's own work, supplied by the owner as `wedding_floral_01.png` to `wedding_floral_11.png` (number 02, a collage of nine small tiles, is not used). They were converted to WebP at their original size with `sharp`; none were upscaled, so the home cover is served at its native 1236 px width.

| File | Source photo | Subject |
|---|---|---|
| public/images/bouquets-bridal-party.webp | wedding_floral_01.png (1236x802, trimmed to 1176x760 to remove the Instagram carousel controls) | Bride and bridesmaids with colorful garden bouquets. Home cover (wide screens), reviews hero, bouquets page, Open Graph image. |
| public/images/bouquet-bride-ribbon.webp | wedding_floral_03.png (796x1048) | Bride with a white and burgundy bouquet and silk ribbon. Bouquets tile, about and contact frames. |
| public/images/ceremony-church-aisle.webp | wedding_floral_04.png (790x1064) | Lavender, white and pink aisle arrangements in a stone church. Services hero, ceremony page. |
| public/images/ceremony-beach-arch.webp | wedding_floral_05.png (764x922) | Circular arch of pink, peach and blue flowers above the beach. Home cover (phones), ceremony tile, portfolio hero. |
| public/images/ceremony-beach-urns.webp | wedding_floral_06.png (800x922) | White urns of peach, pink and lavender flowers beside ceremony chairs on the sand. Wedding florals tile. |
| public/images/reception-centerpiece.webp | wedding_floral_07.png (814x986) | Burgundy, blush and pink centerpiece with taper candles. Reception tile, about and services frames. |
| public/images/bride-veil-door.webp | wedding_floral_08.png (1046x768) | Bride lifting her veil at a carved wooden door. About hero, home designer frame, wedding florals page. |
| public/images/installation-courtyard.webp | wedding_floral_09.png (566x740) | Meadow-style arrangement with lanterns in a white courtyard. Private events tile. |
| public/images/installation-blossoms.webp | wedding_floral_10.png (798x928) | Ground installations with blossoming branches at a white Spanish building. Corporate tile, FAQ hero. |
| public/images/couple-library-bouquet.webp | wedding_floral_11.png (858x1098) | Couple in a library with a colorful bouquet. Home intro frame, thank-you page. |
| public/og.jpg | wedding_floral_01.png (cropped to 1200x630) | Open Graph / social share image. |

Higher-resolution exports of the same photographs (2000 px on the long edge is ideal) would sharpen the home cover and the heroes on large screens; drop them in a folder and run `node scripts/import-images.mjs <folder>` to convert them, then give the files the names above.

## Placeholder scenery (not the studio's work)

The location pages show scenery of each area rather than flowers, so these remain free-license Pexels photographs (https://www.pexels.com/license/: free for commercial use, no attribution required). They are the only stock images left on the site.

| File | Size | Pexels photo |
|---|---|---|
| public/images/hero-locations.webp | 1800x1012 | https://www.pexels.com/photo/39502080/ |
| public/images/loc-santa-barbara.webp | 1067x1600 | https://www.pexels.com/photo/31049333/ |
| public/images/loc-montecito.webp | 1200x1600 | https://www.pexels.com/photo/29904641/ |
| public/images/loc-goleta.webp | 900x1600 | https://www.pexels.com/photo/16781569/ |
| public/images/loc-carpinteria.webp | 1600x900 | https://www.pexels.com/photo/9343596/ |
| public/images/loc-santa-ynez.webp | 1143x1600 | https://www.pexels.com/photo/29237406/ |
| public/images/loc-ojai.webp | 1067x1600 | https://www.pexels.com/photo/27783881/ |
