# Treats — Brand Guidelines

A single-page brand guidelines document for **Treats** (Direction B · "Sprinkle").
Dark "Mint Coin" theme, Quicksand + Mulish type, tumbling-capsule sprinkle mark.

Covers: Logo · App icon & favicon · Color · Typography · Iconography · Components · Patterns · Assets.

## Run locally

It's a static site — no build step. Either:

- Open `index.html` directly in a browser, or
- Serve the folder: `python3 -m http.server` then visit `http://localhost:8000`

## Publish on GitHub Pages

1. Create a new repository and add these files at the root (`index.html`, `treats.css`, `treats.js`, `assets/`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick your branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
5. After a minute the site is live at `https://<username>.github.io/<repo-name>/`.

## Notes

- Fonts (Quicksand, Mulish, Space Mono, Unbounded) load from Google Fonts over the network.
  An internet connection is required for them to render correctly.
- The logo wordmark is rendered as inline HTML (a real `<span>` in Unbounded) — not an image —
  so the webfont applies. The sprinkle symbol is inline SVG.
- For a fully offline, single-file copy, use the standalone export instead.

## Files

```
index.html      Page markup + inline lockups
treats.css      Design tokens, theme and components
treats.js       Icon set + capsule/dot pattern tiles (generated SVG)
assets/         Brand SVGs (lockups, wordmarks, symbol variants)
```

© 2026 Treats · A little something, on the house.
