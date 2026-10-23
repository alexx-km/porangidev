# porangidev

Static site for porangidev (Alexander Kamm), served by GitHub Pages from the root of `main`:
https://alexx-km.github.io/porangidev/

## Pages

- `index.html`: short home page with a note about the TLDL app
- `tldl/privacy-policy.html`: privacy policy for TLDL: Voice Message to Text (English and German), linked from the Google Play listing
- `impressum.html`: legal notice (Impressum) under § 5 DDG
- `privacy-policy.html`: redirect to `tldl/privacy-policy.html` for old links

All pages share `assets/css/styles.css`. No build step and no JavaScript.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080/.
