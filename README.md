# Frontend (Vercel)

Static website for Your Bags Kampala.

## Before Deploy

1. Open `js/runtime-config.js`
2. Set `window.__API_BASE__` to your Render backend URL.
   - Example: `https://your-bags-backend.onrender.com`

## Deploy to Vercel

1. Push this folder to its own GitHub repo (`your-bags-frontend`).
2. Import repo in Vercel.
3. Framework preset: `Other`.
4. Build command: leave empty.
5. Output directory: leave empty (root).
6. Deploy.

## Pages

- `/index.html`
- `/shop.html`
- `/admin.html`
- `/about.html`
- `/contact.html`

## Notes

- `shop.html` falls back to `products.json` if API has no products.
- Admin upload/delete requires backend API.
