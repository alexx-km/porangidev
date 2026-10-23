# porangidev.github.io

Static GitHub Pages site for **Porangi Dev** with:

- a responsive developer portfolio landing page
- a dedicated privacy policy page for Google Play publishing requirements

## Project structure

- `/index.html` - portfolio landing page
- `/privacy-policy.html` - privacy policy page
- `/assets/css/styles.css` - shared styling
- `/assets/js/main.js` - small enhancements (mobile nav toggle + dynamic footer year)

## Preview locally

Because this is a dependency-free static site, you can preview it with any simple web server.

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/index.html`
- `http://localhost:8080/privacy-policy.html`

## Deploy with GitHub Pages (main branch / root)

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Save the settings.

After GitHub Pages deploys, the site will be served from:

- `https://alexx-km.github.io/porangidev.github.io/`

## Customization notes

- Replace placeholder copy in both HTML files with your real details.
- Update the privacy policy sections to accurately reflect your app's real data handling before publishing to Google Play.